import { Button } from '@mui/material';
import Link from 'next/link';
export default function Home() {
  return (
    <div className='flex flex-col items-center gap-40 font-sans'>
      <div className = 'inline-block w-full p-6 bg-sky-400'>
        <span className = 'text-4xl text-white'>MusicScoreScavenger</span>
        <div className ='inline float-right'>
          <div className = 'flex gap-8 w-full bg-sky-400 pr-2'>
            <Button variant = 'contained'>Log in</Button>
            <Button variant = 'contained'>Sign Up</Button>
          </div>
        </div>
      </div>
      <div className=' flex flex-col gap-24 items-center'>
        <h1 className = 'text-5xl'>Your key to finding new classical pieces.</h1>
        <div className='text-3xl'>Find new pieces tailored to your preferences.</div>
      </div>
      <Link href = '/questionnaire'><Button variant='contained' size = 'large'>Get Started</Button></Link>
    </div>
  );
}
