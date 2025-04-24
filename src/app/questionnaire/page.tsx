'use client'
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
export default function Questionnaire() {
    const [composers, setComposers] = useState("");
    const [instruments, setInstruments] = useState("");
    const [characteristics, setCharacteristics] = useState("");
    const router = useRouter();
    return (
        <div className='flex flex-col gap-8 items-center mt-24'>
            <input onChange = {(e) => setComposers(e.target.value)} placeholder="Preferred composers" className='w-1/4 border-black border-2 rounded-md p-4'></input>
            <input onChange = {(e) => setInstruments(e.target.value)} placeholder="Preferred instruments" className='w-1/4 border-black border-2 rounded-md p-4'></input>
            <input onChange = {(e) => setCharacteristics(e.target.value)} placeholder="Preferred characteristics of pieces" className='w-1/4 border-black border-2 rounded-md p-4'></input>
            <Button onClick={() => router.push('/recommendations')} variant='contained'>Recommend Pieces</Button>
        </div>
    )
}