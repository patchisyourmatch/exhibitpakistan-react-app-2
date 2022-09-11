import React from 'react'
import './SearchStyles.css'

import Gold from '../../assets/gold.png'

function Search() {
    return (
        <div name='book' className='search'>
            <div className="container">
                <div className="left">
                    <h2> LUXURY INCLUDED VACATIONS FOR 2 PEOPLE</h2>
                    <p>Pakistan is a land of many splendors.The scenery changes northwards from coastal beaches to sandy deserts, desolate plateaus, fertile plains, dissected uplands and high mountains with beautiful vales, snow covered peaks and eternal glaciers.The fascination North areas of Pakistan comprises of the area where world,s three greatest mountain ranges meet Karakorum, Himalaya and Hindukush.Journey along K.K.H Karakorum Highway, world,s highest trade route.

Pakistan,s 4000 years history is richly illustrated by archaeological sites and imposing monuments scattered the length and breadth of the country. Brick cities from the Indus civilization, which flourished around 2000 B.C, stand with Buddhist ruins.Magnificent Muslims tombs from 12th century vie with the palaces, mosques and forts of the Moughals emperors of the 16th and 17th centuries.The country,s main cities reflect the many influences, both historical and modern, that have made Pakistan what it is.</p>
                 <div className="search-col-2">
                     <div className="box">
                         <div>
                         <img src={Gold} alt="/" style={{ marginRight: '1rem' }} />
                         </div>
                         <div>
                                <h3>WORLD'S LEADING</h3>
                                <p>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                        </div>
                     </div>
                     <div className="box">
                     </div>
                     <div>
                                <h3>NO ONE INCLUDES MORE</h3>
                                <p>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                                <button>View Packages</button>
                     </div>
                 </div>
                </div>
                <div className="right">
                <div className="promo">
                        <h4 className="save">GET AN ADDITIONAL 7% OFF</h4>
                        <p className="timer">12 HOURS LEFT!</p>
                        <p className="offers">VIEW ALL CURRENT OFFERS</p>
                    </div>
                    <form>
                        <div className="input-wrap">
                            <label>Destination</label>
                            <select>
                                <option value="1">Skardu</option>
                                <option value="1">Passu Cones</option>
                                <option value="1">Azad Kashmir</option>
                                <option value="1">Swat Valley</option>
                                <option value="1">Hunza Valley</option>
                                <option value="1">Naran-Kaghan Valley</option>
                                <option value="1">Chitral Valley</option>
                                <option value="1">Neelum Valley</option>
                                <option value="1">Kumrat Valley</option>


                            </select>
                        </div>
                        <div className="date">
                            <div className="input-wrap">
                                <label>Check-In</label>
                                <input type="date" />
                            </div>
                            <div className="input-wrap">
                                <label>Check-Out</label>
                                <input type="date" />
                            </div>
                        </div>
                        <button>Rates & Availabilities </button>
                    </form>
                </div>

            </div>

        </div>

    )
}

export default Search