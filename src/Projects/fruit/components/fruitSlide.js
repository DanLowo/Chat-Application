import React from 'react'

import { NavLink } from 'react-router-dom'

function fruitSlide() {

    const fruits = ['All', 'Apples', 'Berries', 'Citrus', 'Avocado', 'Cherries', 'Mangoes']

    return (
        <div id="fruitSlide">
            {fruits.map(fruit => (
                <span key={fruit} id="fruitSlideItem">
                    <NavLink exact activeClassName="fruitSlideItemActive" to={"/fruit/" + fruit}>
                        {fruit}
                    </NavLink>
                </span>
            ))}
        </div>
    )
}

export default fruitSlide
