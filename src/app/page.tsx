'use client'
import {Button} from '@mui/material';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
export default function Home() {
  const router = useRouter();
  return (
    <div className = 'flex flex-col items-center gap-20 font-sans'>
      <Navbar></Navbar>
      <div className = 'flex gap-8 flex-row-reverse w-full mr-20'>
      </div>
      <div className = ' flex flex-col items-center gap-30 text-5xl'>
        Introducing MusicScoreScavenger
      </div>
      <div className = 'text-4xl'>
        Your Personalized Classical Music Recommender
      </div>
      <div className = 'text-4xl'>Find pieces tailored to your preferences and similar to your favorite pieces</div>
      <Button onClick = {() => router.push('/questionnaire') } variant = 'contained'>Get Started</Button>
    </div>
  );
}
