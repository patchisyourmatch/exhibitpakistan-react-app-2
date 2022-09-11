import React from 'react'
import './SelectsStyles.css'

import one from '../../assets/1.jpeg'
import two from '../../assets/2.jpeg'
import three from '../../assets/3.jpeg'
import four from '../../assets/4.jpeg'
import five from '../../assets/5.png'
import six from '../../assets/6.jpeg'


import SelectsImg from '../SelectsImg/SelectsImg'


function Selects() {
    return (
        <div name='views' className='selects'>
            <div className='container'>
                <SelectsImg bgImg={one} text='Hunza Valley' />
                <SelectsImg bgImg={two} text='Kumrat Valley' />
                <SelectsImg bgImg={three} text='Chitral Valley' />
                <SelectsImg bgImg={four} text='Azad Kashmir' />
                <SelectsImg bgImg={five} text='Passu Cones' />
                <SelectsImg bgImg={six} text='Skardu' />

            </div>

        </div>
    )
}

export default Selects