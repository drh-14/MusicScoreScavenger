'use client'
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
export default function Questionnaire() {
    const [composers, setComposers] = useState("");
    const [instruments, setInstruments] = useState("");
    const [characteristics, setCharacteristics] = useState("");
    const [numPieces, setNumPieces] = useState("");
    const [prevPieces, setPrevPieces] = useState("");
    const router = useRouter();

    useEffect(() => localStorage.clear(), []);

    const getRecommendations = async () => {
        const res = await fetch('/api/recommendPieces', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({composers: composers, instruments: instruments, characteristics: characteristics, numPieces: numPieces, prevPieces: prevPieces})
        });
        if(res.ok){
            const results = await res.json();
            localStorage.setItem("recommended", JSON.stringify(results));
            router.push("/recommendations")
        }
    }
    return (
        <div className='flex flex-col gap-16 items-center mt-24'>
            <div className = 'flex flex-col gap-8 items-center w-full'>
            <input onChange = {(e) => setComposers(e.target.value)} placeholder="Preferred composers" className='w-1/4 border-black border-2 rounded-md p-4'></input>
            <input onChange = {(e) => setInstruments(e.target.value)} placeholder="Preferred instruments" className='w-1/4 border-black border-2 rounded-md p-4'></input>
            <input onChange = {(e) => setCharacteristics(e.target.value)} placeholder="Preferred characteristics of pieces" className='w-1/4 border-black border-2 rounded-md p-4'></input>
            <input className='w-1/4 border-black border-2 rounded-md p-4' onChange = {(e) => setPrevPieces(e.target.value)} placeholder = "Previous Pieces Played"></input>
            <input className='w-1/4 border-black border-2 rounded-md p-4' onChange = {(e) => setNumPieces(e.target.value)} placeholder = "Number of Pieces to Recommend"></input>
            </div>
            <Button onClick={getRecommendations} variant='contained'>Recommend Pieces</Button>
        </div>
    )
}