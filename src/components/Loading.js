import React from 'react'
//step1 import loading gif
import LoadingGif from '../images/gif/loading-arrow.gif'
export default function Loading() {
    return (
        <div className="loading">
            <h4>rooms data loading...</h4>
            <img src={LoadingGif} alt="" />
        </div>
    )
}
