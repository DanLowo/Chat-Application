import React, { useState } from 'react'

import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button"
import CreditCardIcon from '@material-ui/icons/CreditCard';


// import images for fruits
import Apple from '../assets/apple.jpg'
import Orange from '../assets/orange.jpg'
import Mango from '../assets/mango.jpg'
import Strawberry from '../assets/strawberry.jpg'

function CartGrid() {

    const [quantity, setQuantity] = useState(1)

    const addQuantity = () => {
        setQuantity(quantity + 1)
    }
    const minusQuantity = () => {
        if (quantity > 1) setQuantity(quantity - 1)
    }


    const items = [
        {
            name: "Red Apple",
            price: '2,700',
            img: Apple,
            location: 'Jos'
        },
        {
            name: "Orange",
            price: '1,800',
            img: Orange,
            location: 'Akure'
        },
        {
            name: "Strawberry",
            price: '3,200',
            img: Strawberry,
            location: 'Ibadan'
        },
        {
            name: "Mango",
            price: '1,250',
            img: Mango,
            location: 'Jos'
        }
    ]

    return (
        <div id="cart">
            {items.map(item => (
                <div>
                    <Grid container id="cartGridItem">
                        <Grid item xs={3} md={3} sm={3}>
                            <img src={item.img} alt={item.name} />
                        </Grid>
                        <Grid item xs={9} md={9} sm={9}>
                            <div id="navbar">
                                <Typography id="name"> {item.name} </Typography>
                                <DeleteIcon htmlColor="red" fontSize="small" />
                            </div>
                            <p id="location">Products from {item.location}</p>
                            <span id="navbar">
                                <span id="kilo"> <b>{item.price}</b>/ Kilogram </span>
                                <span>
                                    <div id="" align="center">
                                        <IconButton onClick={minusQuantity} id="quantity-button1"> <RemoveIcon fontSize="small" htmlColor="white" /> </IconButton>
                                        <span id="quantity-value1"> {quantity} </span>
                                        <IconButton onClick={addQuantity} id="quantity-button1"> <AddIcon fontSize="small" htmlColor="white" /> </IconButton>
                                    </div>
                                </span>
                            </span>
                        </Grid>
                    </Grid>
                    <Divider />
                </div>
            ))}
            <div id="addToCart">
                <Grid container>
                    <Grid item xs={3} sm={3} md={3}>
                        <span id="priceText">Total</span> <br />
                        <span id="price"> N10,900 </span>
                    </Grid>
                    <Grid item xs={9} sm={9} md={9} align="right">
                        <span>
                            <Button id="addToCartButton" variant="contained" startIcon={<CreditCardIcon htmlColor="white" />}> Buy Now</Button>
                        </span>
                    </Grid>
                </Grid>

            </div>
        </div>
    )
}

export default CartGrid
