import React, {useContext} from 'react'

import {makeStyles} from "@material-ui/core/styles"

import TextField from "@material-ui/core/Input"
import IconButton from "@material-ui/core/IconButton"
import InputAdornment from "@material-ui/core/InputAdornment"

import CancelIcon from "@material-ui/icons/CancelOutlined"
import ChatContext from '../context/ChatContext'

const customStyles = makeStyles(() => ({
    root: {
        padding: 15,
    }
}))

function SearchBar() {
    const styles = customStyles()
    const context = useContext(ChatContext)

    return (
        <div className={styles.root}>
            <TextField required placeholder="Search..." fullWidth variant="filled"
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton onClick={() => context.setSearchBar()}>
                            <CancelIcon />
                        </IconButton>
                    </InputAdornment>
                }
                onChange={(e) => context.setMessengerSearch(e.target.value)}
            />
        </div>
    )
}

export default SearchBar
