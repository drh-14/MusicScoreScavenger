'use client'
import CustomButton from "@/components/customButton";

export default function Signup() {
    return (
        <div className='flex flex-col items-center gap-12 mt-48'>
            <div className='flex flex-col gap-8  border-2 border-black w-1/3 rounded-md p-4'>
            <input className='w-3/4 p-4' placeholder="Username"></input>
                <input className='w-3/4 p-4' placeholder="Email"></input>
                <input className='w-3/4 p-4' placeholder="Password"></input>
            </div>
            <CustomButton variant="contained">Sign Up</CustomButton>
        </div>
    )
}