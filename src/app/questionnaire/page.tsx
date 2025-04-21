'use client'
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import ScoreItem from '@/components/scoreItem';
export default function Questionnaire(){
    const router = useRouter();
    return(
        <div className = 'flex flex-col gap-8 items-center mt-24'>
            <input placeholder = "Preferred composer" className = 'w-1/4 border-black border-2 rounded-md p-4'></input>
            <input placeholder = "Preferred music period" className = 'w-1/4 border-black border-2 rounded-md p-4'></input>
            <input placeholder = "Preferred instrument" className = 'w-1/4 border-black border-2 rounded-md p-4'></input>
            <input placeholder = "What types of pieces do you like?" className = 'w-1/4 border-black border-2 rounded-md p-4'></input>
            <Button onClick = {() => router.push('/recommendations')} variant = 'contained'>Recommend Pieces</Button>
        </div>
    )
}