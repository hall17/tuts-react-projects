import {  responsiveFontSizes } from "@mui/material";
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
    palette: {
        primary: {
            main: '#757ce8'
        }
    },
    typography: {
        //fontFamily:
    },
    overrides: {
        MuiButton: {
            root: {
                fontSize: '1.25em'
            }
        },
        MuiTextField: {
            root: {
                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                    borderColor: '#757ce8'
                },
                "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                    borderColor: '#757ce8'
                },
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: '#757ce8',
                    border: '2px solid'
                },

            }
        },
    }

})

export default responsiveFontSizes(theme)