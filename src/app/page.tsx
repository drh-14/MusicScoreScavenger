'use client'
import {Button} from '@mui/material';
import { useRouter } from 'next/navigation';
export default function Home() {
  const router = useRouter();
  return (
    <div className = 'flex flex-col items-center gap-20 font-sans'>
      <div className = 'flex gap-8 flex-row-reverse w-full mr-20'>
      </div>
      <div className = ' flex flex-col items-center gap-30 text-4xl'>
        Introducing MusicScoreScavenger
      </div>
      <div className = 'text-3xl'>
        Your Personalized Classical Music Recommender
      </div>
      <div className = 'text-2xl'>Find pieces tailored to your preferences and similar to your favorite pieces</div>
      <Button onClick = {() => router.push('/questionnaire') } variant = 'contained'>Get Started</Button>
    </div>
  );
}
