'use client'
import {Button} from '@mui/material';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
export default function Home() {
  const router = useRouter();
  return (
    <div className = 'flex flex-col items-center gap-30'>
      <Navbar signedIn = {false}></Navbar>
      <div className = 'flex gap-8 flex-row-reverse w-full mr-20'>
      </div>
      <div className = 'text-5xl'>
        Your Personalized Classical Music Recommender
      </div>
      <Button onClick = {() => router.push('/questionnaire') } variant = 'contained'>Get Started</Button>
      
    </div>
  );
}
