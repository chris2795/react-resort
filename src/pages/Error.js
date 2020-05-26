import React from 'react'

//Import Hero Step 1
import Hero from "../components/Hero.js";
//Import Banner Step 2
import Banner from "../components/Banner";
// Import Link
import { Link } from 'react-router-dom';
export default function Error() {
    return (
        <Hero>
            <Banner
                title="404"
                subtitle="page not found">
                <Link to='/' className='btn-primary'>
                    back to home page
                </Link>
            </Banner>
        </Hero>
    )
}
