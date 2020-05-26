import React, { Component } from 'react'
import Title from './Title'
//import icons step 2
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:"Free CockTails",
                info: "Lorem ispim dolor sit amet consectetur adisiping elit. Magni, corporis!"
            },
            {
                icon:<FaHiking/>,
                title:"Endless Hiking",
                info: "Lorem ispim dolor sit amet consectetur adisiping elit. Magni, corporis!"
            },
            {
                icon:<FaShuttleVan/>,
                title:"Free Shuttle Van",
                info: "Lorem ispim dolor sit amet consectetur adisiping elit. Magni, corporis!"
            },
            {
                icon:<FaBeer/>,
                title:"Strongest Beer",
                info: "Lorem ispim dolor sit amet consectetur adisiping elit. Magni, corporis!"
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title='services'/>
                <div className="services-center">
                    {this.state.services.map((item,index) => 
                        {
                           return <article key={index}  
                           className="service">
                               <span>
                                   {item.icon}
                               </span>
                               <h6>
                                   {item.title}
                               </h6>
                               <p>
                                   {item.info}
                               </p>
                           </article>  
                        })}
                </div>
            </section>
        )
    }
}
