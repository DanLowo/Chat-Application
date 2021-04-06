import React from 'react'

// import MUI components
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button"

// import MUI Icons
import SearchIcon from "@material-ui/icons/Search";
import FilterListIcon from '@material-ui/icons/FilterList';

function search() {
    return (
        <div>
          <form>
            <TextField
              variant="filled"
              fullWidth
              id="searchField"
              margin="dense"
              size="small"
              placeholder="Search for jobs"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon id="searchIcon" />
                  </InputAdornment>
                ),
                endAdornment: (
                    <InputAdornment position="end">
                        <Button variant="contained" id="searchFilterButton">
                        <FilterListIcon />
                        </Button>
                  </InputAdornment>        
                )
              }}
            ></TextField>
          </form> 
        </div>
    )
}

export default search
