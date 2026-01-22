'use client'
import CustomButton from "@/components/customButton";
import { useState } from 'react';
import Banner from '@/components/banner';

export default function Signup() {
    const [buttonClicked, setButtonClicked] = useState(false);
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [usernameError, setUsernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const buttonClickHandler = function(){
        const usernameStatus = username.length > 0;
        const emailStatus = email.length > 0;
        const passwordStatus = password.length > 0;
        if(!usernameStatus){
            setUsernameError(true);
            setButtonClicked(false);
        }
        else{
            setUsernameError(false);
        }
        if(!emailStatus){
            setEmailError(true);
            setButtonClicked(false);
        }
        else{
            setEmailError(false);
        }
        if(!passwordStatus){
            setPasswordError(true);
            setButtonClicked(false);
        }
        else{
            setPasswordError(false);
        }
        if(usernameStatus && emailStatus && passwordStatus){
            setButtonClicked(true);
        }
            
        }
    
    return (
        <div className='flex flex-col items-center gap-12'>
            <Banner loggedIn = {true}></Banner>
            <div className='flex flex-col gap-8  border-2 border-black w-1/3 rounded-md p-4 mt-24'>
            <input onChange = {(e) => setUsername(e.target.value)} className='w-3/4 p-4' placeholder="Username"></input>
            {usernameError ? <h1 className = 'text-red-600'>Please enter your username.</h1> : null}
            <input onChange = {(e) => setEmail(e.target.value)} className='w-3/4 p-4' placeholder="Email"></input>
            {emailError ? <h1 className = 'text-red-600'>Please enter your email.</h1> : null}
            <input className='w-3/4 p-4' onChange = {(e) => setPassword(e.target.value)} placeholder="Password"></input>
            {passwordError ? <h1 className = 'text-red-600'>Please enter your password.</h1> : null}
            </div>
            <CustomButton onClick = {buttonClickHandler} variant="contained">Sign Up</CustomButton>
            {buttonClicked ? <h1>A verification email has been sent.</h1> : null}
        </div>
    )
}