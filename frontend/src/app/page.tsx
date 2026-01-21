'use client'
import Banner from '@/components/banner';
import CustomButton from '@/components/customButton';

import Link from 'next/link';
export default function Home() {
 
  return (
    <div className='flex flex-col items-center gap-40 font-sans'>
      <Banner loggedIn = {false}></Banner>
      <div className=' flex flex-col gap-24 items-center'>
        <h1 className = 'text-5xl'>Your key to finding new classical pieces. </h1>
        <div className='text-3xl'>Find new pieces tailored to your preferences.</div>
      </div>
      <Link href = '/questionnaire'><CustomButton variant = "outlined">Get Started</CustomButton></Link>
    </div>
  );
}
