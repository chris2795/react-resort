import React from 'react'
//step 1
import RoomFilter from './RoomFilter'
//step 2
import RoomList from './RoomList'
//Step 3 import Room Consumer to access context
import {withRoomConsumer} from '../context'
//import Loading
import Loading from './Loading'

function RoomContainer({context}){
const {loading, sortedRooms, rooms} = context;
if (loading) {
    return <Loading/>
    }
    return (
        <>
            <RoomFilter rooms={rooms}/>
            <RoomList rooms={sortedRooms}/> 
        </>
    )
}
export default withRoomConsumer(RoomContainer)


// import React from 'react'
// //step 1
// import RoomFilter from './RoomFilter'
// //step 2
// import RoomList from './RoomList'
// //Step 3 import Room Consumer to access context
// import {RoomConsumer} from '../context'
// //import Loading
// import Loading from './Loading'

// export default function RoomCOntainer() {
//     return (
//         //render prop
//         <RoomConsumer>
//             {
//                 (value) => {
//                     const {loading, sortedRooms, rooms} = value
//                     if (loading) {
//                         return <Loading/>
//                     }
//                     return (
//                         <div>
//                             Hello from room container
//                             <RoomFilter rooms={rooms}/>
//                             <RoomList rooms={sortedRooms}/> 
//                         </div>
//                     )
//                 }
//             }
//         </RoomConsumer>
//     )
// }
