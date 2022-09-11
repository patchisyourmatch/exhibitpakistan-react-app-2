import React from 'react'
import './DestinationsStyles.css'

import one from '../../assets/1.jpeg'
import two from '../../assets/2.jpeg'
import three from '../../assets/3.jpeg'
import four from '../../assets/4.jpeg'
import five from '../../assets/5.png'



function Destinations() {
    return (
        <div name='destinations' className='destinations'>
            <div className="container">
                <h1>Discover the Undiscovered</h1>
                <p>Pakistan's Top Tourist Destinations</p>
                <div className="img-container">
                    <img className='span-3 image-grid-row-2' src={one} alt="/"/>
                    <img src={two} alt="/"/>
                    <img src={three} alt="/"/>
                    <img src={four} alt="/"/>
                    <img src={five} alt="/"/>

                </div>
            </div>


        </div>
    )
}

export default Destinations