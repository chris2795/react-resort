import React, { Component } from 'react'
//Step 2  importing the data.js here
import items from './data.js';


//step 1 Context api
const RoomContext = React.createContext()
// Provider to allow to access component tree
// <RoomContext.Provider value={}


class RoomProvider extends Component {
    state = {
        rooms:[],
        sortedRooms:[],
        featuredRooms:[],
        loading: true,
         //Rooms filter
         type:'all',
         capacity: 1,
         price: 0,
         minPrice:0,
         maxPrice:0,
         minSize:0,
         maxSize:0,
         breakfast: false,
         pets: false
    }
    //getData
    componentDidMount(){
        //this.getData
        let rooms = this.formatData(items);
        let featuredRooms = rooms.filter(room => room.featured === true);
        //for filtering room to input the textfield from data
        let maxPrice = Math.max(...rooms.map(item => item.price))
        let maxSize = Math.max(...rooms.map(item => item.size))
        this.setState({
            rooms,
            featuredRooms,
            sortedRooms: rooms,
            loading: false,
            price: maxPrice,
            maxPrice,
            maxSize
           
        });
    }
    //get data from data.js calling sys id and images and looping images
    formatData(items){
        let tempItems = items.map(item =>{
            let id = item.sys.id
            let images = item.fields.images.map(image => image.fields.file.url)
            
            let room = {...item.fields,images,id}
            return room;
        })
        return tempItems;
    }
    //single room for the selected item in feature depending on the name of the slug
    getRoom = (slug) =>{
        let tempRooms = [...this.state.rooms]; 
        const room = tempRooms.find(room => room.slug === slug);
        return room;
    }
    //to handle the event on changing on room 
    handleChange = event =>{
        const target = event.target
        const value = target.type === 'checkbox' ? 
        target.checked:target.value
        const name = event.target.name
        this.setState (
            {
                [name]: value
            },
            this.filterRooms
        )
    }
    //to show the filter room
    filterRooms =() => {
        let {
            rooms, 
            type, 
            capacity, 
            price,
            minSize, 
            maxSize, 
            breakfast,
            pets

        } = this.state
    //all the rooms    
    let tempRooms = [...rooms]
    //transform value 
    capacity = parseInt(capacity)
    price= parseInt(price)

    //filter all the type
    if(type !== 'all'){
        tempRooms = tempRooms.filter(room => room.type === type)
    }
    //filter all the capacity
    if(capacity !==1){
        tempRooms = tempRooms.filter(room =>room.capacity >= capacity)
    }
    //filter by price
    tempRooms = tempRooms.filter(room => room.price <= price)
    //filter by size
    tempRooms = tempRooms.filter(room => room.size>=minSize &&
        room.size <= maxSize)
    //filter by breakfast
    if(breakfast){
        tempRooms = tempRooms.filter(room => room.breakfast
            == true)
    }
    //filter by pets
    if(pets){
        tempRooms = tempRooms.filter(room => room.pets
            == true)
    }
  
    this.setState({
        sortedRooms: tempRooms
    })

    }
    render() {
        return (
            <RoomContext.Provider 
            value={{...this.state,
            getRoom: this.getRoom,
            handleChange: this.handleChange}}>
                {this.props.children}
            </RoomContext.Provider>
              
        ) 
    }
}
//to access the information
const RoomConsumer = RoomContext.Consumer;

//high order component, it can create another function 
export function withRoomConsumer(Component) {
    return function ConsumerWrapper(props) {
        return (
            <RoomConsumer>
                { value => <Component {...props} context={value}/>}
            </RoomConsumer> 
        )
    }
}


export { RoomProvider, RoomConsumer, RoomContext}
