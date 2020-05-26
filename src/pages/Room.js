import React from 'react'

//Import Hero Step 1
import Hero from "../components/Hero.js";
//Import Banner Step 2
import Banner from "../components/Banner";
// Import Link
import { Link } from 'react-router-dom';
// Import Room Conainer step 4
import RoomContainer from '../components/RoomContainer'

export default function Room() {
    return (
        <>
        <Hero hero="roomsHero">
            <Banner 
            title="Our Rooms">
            <Link to='/' className="btn-primary">
                return home
            </Link>
            </Banner>
            
        </Hero>
        <RoomContainer/>
        </>
          
    )
}
