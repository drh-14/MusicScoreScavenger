'use client'
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';
export default function Navbar(props: {signedIn: boolean}){
    const router = useRouter();
    const supabaseClient = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_PUBLIC_KEY!);

    const handleSignIn = async () => {
        supabaseClient.auth.signInWithOAuth({provider: 'google'});
    }

    const handleSignOut = async () => {
      supabaseClient.auth.signOut();
      router.push('/');
    }

    return(
        <div className = 'flex w-full h-16 bg-blue-400 items-center gap-358'>
            <button onClick = {props.signedIn ? () => router.push('/homepage'): () => null} className = 'text-white text-4xl ml-4'>MusicScoreScavenger</button>
            <Button onClick = {props.signedIn ? handleSignOut : handleSignIn} variant = 'contained'>{props.signedIn ? "Sign Out" : "Sign In"}</Button>
        </div>
    )
}