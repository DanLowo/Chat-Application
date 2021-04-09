import React from 'react'

import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import {Link} from "react-router-dom"

// import images for fruits
import Apple from '../assets/apple.jpg'
import Orange from '../assets/orange.jpg'
import Mango from '../assets/mango.jpg'
import Strawberry from '../assets/strawberry.jpg'

function fruitGrid() {

    const fruits = [
        {
            name: "Red Apple",
            price: '2,700',
            img: Apple
        },
        {
            name: "Orange",
            price: '1,800',
            img: Orange
        },
        {
            name: "Strawberry",
            price: '3,200',
            img: Strawberry
        },
        {
            name: "Mango",
            price: '1,250',
            img: Mango
        }
    ]
    return (
        <div className="fruitGrid">
            <Grid container spacing={1}>
                {fruits.map(fruit => (
                    <Grid key={fruit.name} item xs={6} sm={6} md={3} lg={3}>
                        <Link to="/fruits/view-fruit">
                            <Paper id="fruitGridPaper">
                                <img src={fruit.img} alt={fruit.name} />
                                <Typography component="h5" variant="h5" id="fruitGridName"> {fruit.name} </Typography>
                                <Typography id="fruitGridPrice" component="h5" variant="h6"> N{fruit.price}
                                    <span id="perKg">per kg</span>
                                </Typography>
                            </Paper>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default fruitGrid
