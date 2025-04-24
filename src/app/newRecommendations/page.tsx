'use client'
import { useState, useEffect } from 'react';
import ScoreItem from '@/components/scoreItem';
import Navbar from '@/components/Navbar';
export default function NewRecommendations(){
    const [scores, setScores] = useState([]);
    return(
        <div className = 'flex flex-col items-center gap-8'>
            <Navbar signedIn = {true}></Navbar>
            <div className = 'h-200 overflow-auto w-max flex flex-col items-center gap-8'>
            {scores.map(score => <h1 key = {score}></h1>)}
            </div>
        </div>
    )
}