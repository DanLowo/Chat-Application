import React, { useState } from 'react'

import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Accordion from "@material-ui/core/Accordion"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import StarIcon from '@material-ui/icons/Star';
import Button from "@material-ui/core/Button"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Grid from "@material-ui/core/Grid"

import Orange from "../../assets/orange.jpg"

function Details({ name }) {

    const [quantity, setQuantity] = useState(1)

    const addQuantity = () => {
        setQuantity(quantity + 1)
    }
    const minusQuantity = () => {
        if (quantity > 1) setQuantity(quantity - 1)
    }

    return (
        <div id="details">
            <div align="center">
                <Typography id="fruitTitle"> Juicy Oranges </Typography>
                <Typography id="fruitSubTitle"> Products from Jos </Typography>
            </div>
            <img src={Orange} alt="orange" />
            <div id="quantity navbar" align="center">
                <IconButton onClick={minusQuantity} id="quantity-button"> <RemoveIcon htmlColor="white" /> </IconButton>
                <span id="quantity-value"> {quantity} kg </span>
                <IconButton onClick={addQuantity} id="quantity-button"> <AddIcon htmlColor="white" /> </IconButton>
            </div>
            <div id="fruit-main">
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography id="description">Description</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography id="descriptionDetails">
                            Juicy and fresh oranges collected from our Jos Grove. The 1kg pack contains 6 large oranges.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion id="review">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography id="description">Reviews</Typography>
                        <Typography>
                            <StarIcon id="rateIcon" htmlColor="green"/>
                            4.2/5
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography id="descriptionDetails">
                            Juicy and fresh oranges collected from our Jos Grove. The 1kg pack contains 6 large oranges.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>

            <div id="addToCart">
                <Grid container>
                    <Grid item xs={3} sm={3} md={3}>
                        <span id="priceText">Price</span> <br/>
                        <span id="price"> N1,800 </span>
                    </Grid>
                    <Grid item xs={9} sm={9} md={9} align="right">
                        <span>
                            <Button id="addToCartButton" variant="contained" startIcon={<ShoppingCartIcon htmlColor="white"/>}> Add to cart</Button>
                        </span>
                    </Grid>
                </Grid>

            </div>
        </div>
    )
}

export default Details
