import {  Button } from "@mui/material";
import { createTheme, ThemeProvider} from "@mui/material/styles"
import { OverridableStringUnion } from "@mui/types"

export default function CustomButton(props: {children: string, variant: OverridableStringUnion<"text" | "outlined" | "contained">})
{
     const theme = createTheme({
      palette: {
        primary: {
          main: "#6100ff",
          
        },
      },
    });
    return(
        <ThemeProvider theme = {theme}><Button color = "primary" variant= {props.variant} size = 'large'>{props.children}</Button></ThemeProvider>
    )
}