'use client'
import {useState, useEffect} from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@mui/material';
export default function ModifyPreferences(){
    return(
        <div className = 'flex flex-col items-center gap-8'>
            <Navbar signedIn = {true}></Navbar>
            <input placeholder = "Preferred composers" className = 'w-1/4 border-black border-2 rounded-md p-4'></input>
            <input placeholder = "Preferred instruments" className = 'w-1/4 border-black border-2 rounded-md p-4'></input>
            <input placeholder = "Preferred types of pieces" className = 'w-1/4 border-black border-2 rounded-md p-4'></input>
            <Button variant = 'contained'>Update Preferences</Button>
        </div>
    )

}