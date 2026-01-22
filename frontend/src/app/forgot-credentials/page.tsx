'use client'
import Banner from "@/components/banner";
import CustomButton from "@/components/customButton";
import { useState } from 'react';

export default function ForgotCredentials(){
    const [buttonClicked, setButtonClicked] = useState(false);
    const [email, setEmail] = useState("");
    function buttonClickHandler(){
        if(email.length > 0){
            setButtonClicked(true);
        }
    };
    return(
        <div className = 'flex flex-col gap-12 items-center'>
            <Banner loggedIn = {true}></Banner>
            
            <h1 className = 'text-3xl '>Enter your email. An email will be sent to reset your credentials.</h1>
            <input onChange = {(e) => setEmail(e.target.value) } className = 'border-2 text-lg border-black rounded-md p-4' placeholder = "Email"></input>
            <CustomButton onClick = {() => buttonClickHandler()} variant = "contained">Reset Credentials</CustomButton>
            {buttonClicked ? <h1 className = 'text-2xl text-blue-700'>An email has been sent.</h1> : null}
        </div>
    )
}