'use client'
import CustomButton from "@/components/customButton";
import Link from 'next/link';

export default function Login() {
    return (
        <div className='flex flex-col items-center gap-12 mt-48'>
            <div className='flex flex-col gap-8  border-2 border-black w-1/3 rounded-md p-4'>
                <input className='w-3/4 p-4' placeholder="Username"></input>
                <input className='w-3/4 p-4' placeholder="Password"></input>
            </div>
            <CustomButton variant="contained">Login</CustomButton>
            <Link href="/forgot-credentials">Forgot username or password?</Link>
        </div>
    )
}