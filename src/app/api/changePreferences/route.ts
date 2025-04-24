import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export default async function POST(req: NextRequest){
    const supabaseClient = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_KEY!);
    const {userID, composers, instruments, characteristics} = await req.json();
    const { error } = await supabaseClient.from("preferences").update({composers: composers, instruments: instruments, characteristics: characteristics}).eq("userID", userID);
    return NextResponse.json(error ? error.code : "success");
}