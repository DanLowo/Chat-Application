import React from 'react'

import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import IconButton from "@material-ui/core/IconButton"
import TextField from "@material-ui/core/Input"
import InputAdornment from "@material-ui/core/InputAdornment"

import SendIcon from "@material-ui/icons/Send"
import AddImage from "@material-ui/icons/ImageOutlined"

const customStyles = makeStyles(() => ({
    root: {
        bottom: 0,
        zIndex: 999,
        position: 'fixed',
        width: '100vw !important'
    },
    button: {
        backgroudColor: 'red'
    },
    input: {
        paddingRight: 14,
        paddingTop: 3
    },
    fileInput: {
        display: 'none'
    }
}))


function InputField() {
    const styles = customStyles()
    return (
        <div className={styles.root}>
            <Paper>
                <Grid container className="inputField">
                    <Grid item xs={2} sm={2} md={2}>
                        <div>
                            <IconButton className={styles.button}>
                                <label htmlFor="file">
                                    <AddImage fontSize="large"/>
                                </label>
                                <input id="file" type="file" accept="image/*" className={styles.fileInput} />
                            </IconButton>
                        </div>
                    </Grid>
                    <Grid item xs={10} sm={10} md={10} className={styles.input}>
                        <TextField placeholder="Type a message" fullWidth variant="filled"
                            endAdornment={
                                <InputAdornment position="end">
                                    <SendIcon htmlColor="blue"/>
                                </InputAdornment>
                            }
                        />
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}

export default InputField
