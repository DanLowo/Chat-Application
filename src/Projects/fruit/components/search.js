import React from 'react'

// import MUI components
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
// import Button from "@material-ui/core/Button"
import IconButton from '@material-ui/core/IconButton';

// import MUI Icons
import SearchIcon from "@material-ui/icons/Search";
import FilterListIcon from '@material-ui/icons/FilterList';

function search() {
    return (
        <div id="search">
          <form>
            <TextField
              variant="filled"
              id="searchField"
              margin="dense"
              size="small"
              placeholder="Search for fruits"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon id="searchIcon" />
                  </InputAdornment>
                )
              }}
            ></TextField>
            <IconButton id="searchFilter">
                <FilterListIcon htmlColor="white"/>
            </IconButton>
          </form>   
        </div>
    )
}

export default search
