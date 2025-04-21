'use client'
import {Button} from '@mui/material';
import { useRouter } from 'next/navigation';
export default function Home() {
  const router = useRouter();
  return (
    <div className = 'flex flex-col items-center  mt-8 gap-30'>
      <div className = 'flex gap-8 flex-row-reverse w-full mr-20'>
        <Button variant = 'contained'>Sign In</Button>
      </div>
      <div className = 'text-5xl'>
        Your Personalized Classical Score Finder
      </div>
      <Button onClick = {() => router.push('/questionnaire') } variant = 'contained'>Log In or Sign Up</Button>
      
    </div>
  );
}
