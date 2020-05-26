import React from 'react'

//Import Hero Step 1
import Hero from "../components/Hero.js";
//Import Banner Step 2
import Banner from "../components/Banner";
// Import Link Step 3
import { Link } from 'react-router-dom';
// Import Services Step 4
import Services from '../components/Services';
// Import FeaturedRooms Step 5
import FeaturedRooms from '../components/FeaturedRooms';


export default function Home() {
   
    return (
        <>
        {/* This will be the starting page */}
            <Hero>
                <Banner 
                title="luxurious rooms"
                subtitle="deluxe rooms starting at $299">
                <Link to='/rooms' classNa
                me="btn-primary">
                our rooms  
                </Link>
                </Banner>
            </Hero>
            <Services/>
            <FeaturedRooms/>
            
        </>
    )
}

