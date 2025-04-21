'use client'
import { Button } from '@mui/material';
import { useState } from 'react';
import ScoreItem from '@/components/scoreItem';
export default function Homepage(){
    const [history, setHistory] = useState<{composer:string, date: string, instrument: string, link: string, period: string}[]>([]);
    return (
        <div className="flex flex-col items-center gap-12 mt-12">
          {history.length > 0 ? (
            <div className = 'w-full'>
              <div className="text-4xl">Your history</div>
              <div className = 'flex gap-4 border-2 border-black overflow-auto p-4 w-full'>
              {history.map(score => (
                <ScoreItem composer = {score.composer} date = {score.date} instrument = {score.instrument} period = {score.period} link = {score.link}></ScoreItem>
              ))}</div>
            </div>
          ) : (
            <div className="text-5xl">No Piece History</div>
          )}
          <Button variant="contained">Recommend New Pieces</Button>
          <Button variant="contained">Modify Preferences</Button>
        </div>
      );
}