'use client'
import {useState, useEffect} from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@mui/material';
import { createClient } from '@supabase/supabase-js';
export default function ModifyPreferences(){
    const [composers, setComposers] = useState("");
    const [instruments, setInstruments] = useState("");
    const [characteristics, setCharacterics] = useState("");
    const supabaseClient = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_PUBLIC_KEY!);

    useEffect(() => {
        // todo

    }, []);

    return(
        <div className = 'flex flex-col items-center gap-8'>
            <Navbar signedIn = {true}></Navbar>
            <input placeholder = "Preferred composers" className = 'w-1/4 border-black border-2 rounded-md p-4'></input>
            <input placeholder = "Preferred instruments" className = 'w-1/4 border-black border-2 rounded-md p-4'></input>
            <input placeholder = "Preferred characteristics of pieces" className = 'w-1/4 border-black border-2 rounded-md p-4'></input>
            <Button variant = 'contained'>Update Preferences</Button>
        </div>
    )
}