'use client'
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';
export default function Navbar(props: {signedIn: boolean}){

    const handleSignOut = () => {
      // todo  
    }

    const router = useRouter();
    return(
        <div className = 'flex w-full h-16 bg-blue-400 items-center gap-360'>
            <button onClick = {() => router.push('./homepage')} className = 'text-white text-4xl ml-4'>MusicScoreScavenger</button>
            <Button variant = 'contained'>{props.signedIn ? "Sign Out" : "Sign In"}</Button>
        </div>
    )
}