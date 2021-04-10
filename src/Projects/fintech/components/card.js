import React from 'react'

import CardChip from "../assets/card-chip.png"
import Mastercard from "../assets/mastercard.png"

import Grid from "@material-ui/core/Grid"

function card() {
    return (
        <div id="card">
            <div id="cardHeader">
                <span id="cardHeaderDebit">Debit</span>
                <span id="cardHeaderBankName"> Kuda Bank </span>
            </div>
            <div id="cardNumberAndChip">
                <span id="cardNumber">5696 **** **** **69</span>
                <span>
                    <img alt="chip" id="cardChip" src={CardChip} />
                </span>
            </div>
            <div id="cardDetails">
                <Grid container>
                    <Grid item xs={7} sm={7} md={7}>
                        <p id="cardHolder">CARD HOLDER</p>
                        <p id="cardHolderName">Damilola Francis</p>
                    </Grid>
                    <Grid item xs={3} sm={3} md={3}>
                        <p id="cardHolder">EXPIRY</p>
                        <p id="cardHolderName">02/24</p>
                    </Grid>
                    <Grid item xs={2} sm={2} md={2} align="right">
                        <img alt="masterCard" id="masterCard" src={Mastercard} />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default card
