'use client'
import { useState, useEffect } from 'react'; 
import { Button} from '@mui/material';
import ScoreItem from '@/components/scoreItem';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';

export default function Recommendations(){
    const router = useRouter();

    const [pieces, setPieces] = useState<{title: string, composer:string, link: string}[]>([]);

    useEffect(() => {
        const recommendedPieces = localStorage.getItem("recommended");
        if(recommendedPieces){
            setPieces(JSON.parse(recommendedPieces));
        }
    }, []);

    return(
        <div className = ' flex flex-col gap-8 items-center mb-8'>
            <Navbar></Navbar>
            <div className = 'flex flex-col items-center gap-4 w-fit pr-8 h-180 overflow-auto'>
                {pieces.map(piece => <ScoreItem key = {piece.link} title = {piece.title} composer = {piece.composer} link = {piece.link}></ScoreItem> )}
            </div>
            <Button onClick = {() => router.push('/questionnaire')} variant = 'contained'>Recommend More Pieces</Button>
        </div>
    );
}