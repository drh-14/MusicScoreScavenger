'use client'
import {Button} from '@mui/material';
import { useRouter } from 'next/navigation';
import Navbar from '../components/Navbar';
export default function Home() {
  const router = useRouter();
  return (
    <div className = 'flex flex-col items-center gap-20 font-sans'>
       <Navbar></Navbar>
      <div className = 'text-5xl'>
        Your key to finding new classical pieces.
      </div>
      <div className = 'text-2xl'>Find pieces tailored to your preferences and similar to your favorite pieces</div>
      <Button onClick = {() => router.push('/questionnaire') } variant = 'contained'>Get Started</Button>
    </div>
  );
}
