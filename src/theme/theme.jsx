import { createTheme } from "@mui/material";

const theme = createTheme({
    components: {
        MuiContainer: {
            styleOverrides: {
                root: {
                    fontSize: 24,
                }
            }
        }
    }
})

export default theme;