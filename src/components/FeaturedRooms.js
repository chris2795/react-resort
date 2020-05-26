//rcc 
import React, { Component } from 'react'
//step 1
import {RoomContext} from '../context.js';
//step 2
import Loading from './Loading';
//step 3 component room
import Room from './Room'
//Step 4 Title
import Title from './Title';
export default class featuredRooms extends Component {
    static contextType = RoomContext;
    render() {
        //to get the featured rooms
        let {loading, featuredRooms : rooms } = this.context
        rooms = rooms.map(room =>{
            return <Room key={room.id} room={room}/>
        })
        // to display the rooms 
        return (
            <section className="featured-rooms">
                <Title title="featured rooms"/>
                <div className="featured-rooms-center">
                  {loading? <Loading/> : rooms}  
                </div>
             
            </section >
        )
    }
}
