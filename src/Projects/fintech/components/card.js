import React from 'react'

import CardChip from "../assets/card-chip.png"
import Mastercard from "../assets/mastercard.png"

import Grid from "@material-ui/core/Grid"

function Card({name, expiryDate, number}) {

    const handleNumber = (cardNumber) => {
        if(cardNumber !== " "){
            let numberString = cardNumber.toString().split('')
            numberString.join()
            numberString.splice(4, 0, ' ')
            numberString.splice(9, 0, ' ')
            numberString.splice(14, 0, ' ')
            let newNumber = numberString.join("")
            return newNumber
        }
        return cardNumber
    }

    const handleExpiryDate = (cardExpiryDate) => {
        if(cardExpiryDate !== " "){
            let expiryDateString = cardExpiryDate.toString().split('')
            expiryDateString.join()
            expiryDateString.splice(2, 0, '/')
            let newexpiryDate = expiryDateString.join("")
            return newexpiryDate
        }
        return cardExpiryDate
    }

    return (
        <div id="card">
            <div id="cardHeader">
                <span id="cardHeaderDebit">Debit</span>
                <span id="cardHeaderBankName"> Kuda Bank </span>
            </div>
            <div id="cardNumberAndChip">
                <span id="cardNumber"> {handleNumber(number)} </span>
                <span>
                    <img alt="chip" id="cardChip" src={CardChip} />
                </span>
            </div>
            <div id="cardDetails">
                <Grid container>
                    <Grid item xs={7} sm={7} md={7}>
                        <p id="cardHolder">CARD HOLDER</p>
                        <p id="cardHolderName"> {name} </p>
                    </Grid>
                    <Grid item xs={3} sm={3} md={3}>
                        <p id="cardHolder">EXPIRY</p>
                        <p id="cardHolderName"> { handleExpiryDate(expiryDate)} </p>
                    </Grid>
                    <Grid item xs={2} sm={2} md={2} align="right">
                        <img alt="masterCard" id="masterCard" src={Mastercard} />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Card
