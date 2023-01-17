import { createTheme } from "@mui/material";

const theme = createTheme({
    components: {
        MuiContainer: {
            styleOverrides: {
                root: {
                    fontSize: 24,
                    fontFamily: "'Mukta Vaani', sans-serif",
                }
            }
        }
    }
})

export default theme;