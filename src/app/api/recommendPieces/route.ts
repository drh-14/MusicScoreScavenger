import { NextRequest, NextResponse } from 'next/server';
import { Pinecone } from '@pinecone-database/pinecone'

export default async function POST(req: NextRequest){
    const pc = new Pinecone({apiKey: process.env.PINECONE_KEY!});
    const index = pc.index("semanticSearch").namespace("pieces");
    const {composers, instruments, characteristics} = await req.json();
    const query = `Pieces with composers: ${composers}, instruments: ${instruments}, characteristics: ${characteristics}`;
    // search and rerank, todo
    const results = await index.searchRecords({
        query: {
          topK: 10,
          inputs: { text: query },
        },
      });      
}