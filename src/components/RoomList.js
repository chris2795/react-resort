import React from 'react'
//step 1
import Room from './Room'
export default function RoomList({rooms}) {
    if(rooms.length === 0){
        return(
            <div className="empty-search">
                <h3> unfrotunately no rooms matched your search
                    paramaters.
                </h3>
            </div>
        )
    }
    return (
        <section className="roomList">
            <div className="roomslist-center">
                {rooms.map(item => {
                    return <Room key={item.id} room={item} />
                })}
            </div>
        </section>
        
    )
}
