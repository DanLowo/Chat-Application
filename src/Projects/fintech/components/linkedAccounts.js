import React from 'react'

import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Paper from "@material-ui/core/Paper"
import Button from "@material-ui/core/Button"

import KudaBank from "../assets/kuda.png"
import AccessBank from "../assets/access-bank.png"
import ZenithBank from "../assets/zenith.png"

function linkedAccounts() {

    const banks = [
        {
            name: 'Kuda',
            number: '1245879865',
            img: KudaBank
        },
        {
            name: 'Access',
            number: '7521357864',
            img: AccessBank
        },
        {
            name: 'Zenith',
            number: '1260382165',
            img: ZenithBank
        }
    ]

    return (
        <div id="linkedAccounts">
            {banks.map(bank => (
                <div id="linkedAccountSpacing">
                    <Grid container>
                        <Grid item xs={6} sm={6} md={6}>
                            <Paper id="paper">
                                <Grid container>
                                    <Grid item>
                                        <img alt={bank.name} src={bank.img} />
                                    </Grid>
                                    <Grid item>
                                        <Typography id="name"> {bank.name} Bank </Typography>
                                        <Typography id="number"> {bank.number} </Typography>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                        <Grid item xs={6} sm={6} md={6} align="right">
                            <Button variant="text" className="linkedAccountText" id="noSubscriptionsButton">Link Account</Button>
                        </Grid>
                    </Grid>
                </div>
            ))}
        </div>
    )
}

export default linkedAccounts
