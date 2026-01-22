'use client'
import {  Button } from "@mui/material";
import { createTheme, ThemeProvider} from "@mui/material/styles"
import { OverridableStringUnion } from "@mui/types"
import { MouseEventHandler } from "react";

export default function CustomButton(props: {children?: string, variant: OverridableStringUnion<"text" | "outlined" | "contained">, onClick? : MouseEventHandler<HTMLButtonElement>})
{
     const theme = createTheme({
      palette: {
        primary: {
          main: "#6100ff",
          
        },
      },
    });
    return(
        <ThemeProvider theme = {theme}><Button onClick = {props.onClick} color = "primary" variant= {props.variant} size = 'large'>{props.children}</Button></ThemeProvider>
    )
}