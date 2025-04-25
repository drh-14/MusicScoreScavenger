'use client'
import { useRouter } from 'next/navigation';
export default function Navbar(){
    const router = useRouter();
    return(
        <div className = 'flex w-full h-16 bg-blue-400 items-center gap-358'>
            <button className = 'text-white text-3xl ml-2' onClick = {() => router.push('/')}>MusicScoreScavenger</button>
        </div>
    )
}