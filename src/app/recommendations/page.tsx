'use client'
import { useState, useEffect } from 'react'; 
import { Button} from '@mui/material';
import ScoreItem from '@/components/scoreItem';
export default function Recommendations(){
    const [pieces, setPieces] = useState<{composer:string, date: string, instrument: string, link: string, period: string}[]>([{composer : "Chopin", date: "1796", instrument: "piano", link: "google.com", period: "classical"}]);

    return(
        <div className = 'mt-24 flex flex-col gap-8 items-center'>
            <div className = 'text-5xl'>Your Recommended Pieces</div>
            <div className = 'flex flex-col items-center gap-4 w-full'>
                {pieces.map(piece => <ScoreItem addButton = {false} key = {piece.link} composer = {piece.composer} date = {piece.date} instrument = {piece.instrument} link = {piece.link} period = {piece.period}></ScoreItem> )}
            </div>
            <Button variant = 'contained'>Create An Account</Button>
        </div>
    );
}