'use client'
import { Button } from '@mui/material';
import { useState } from 'react';
import ScoreItem from '@/components/scoreItem';
import Navbar from '@/components/Navbar';
import { useRouter } from 'next/navigation';
export default function Homepage(){
    const router = useRouter();
    const [history, setHistory] = useState<{composer:string, date: string, instrument: string, link: string, period: string}[]>([]);
    return (
        <div className = 'flex flex-col gap-8'>
          <Navbar signedIn = {true}></Navbar>
          <div  className="flex flex-col items-center gap-12">
          {history.length > 0 ?
            <div className = 'w-full'>
              <div className="text-4xl">Your history</div>
              <div className = 'flex gap-4 border-2 border-black overflow-auto p-4 w-full'>
              {history.map(score => (
                <ScoreItem addButton = {false} composer = {score.composer} date = {score.date} instrument = {score.instrument} period = {score.period} link = {score.link}></ScoreItem>
              ))}</div>
            </div>: 
            <div className="text-5xl">No Piece History</div>}
          <Button onClick = {() => router.push('/newRecommendations')} variant="contained">Recommend New Pieces</Button>
          <Button onClick = {() => router.push('/modifyPreferences')} variant="contained">Modify Preferences</Button>
          </div>
        </div>
      );
}