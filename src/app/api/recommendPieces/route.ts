import { NextRequest, NextResponse } from 'next/server';
import { Pinecone } from '@pinecone-database/pinecone'

export default async function POST(req: NextRequest){
    const pc = new Pinecone({apiKey: process.env.PINECONE_KEY!});
    const namespace = pc.index("music-semantic-search", "https://music-semantic-search-v3ofc6l.svc.aped-4627-b74a.pinecone.io").namespace("pieces");
    const {composers, instruments, characteristics} = await req.json();
    const query = `Pieces with composers: ${composers}, instruments: ${instruments}, characteristics: ${characteristics}`;
    const results = await namespace.searchRecords({
        query: {
          topK: 10,
          inputs: { text: query },
        },
        fields: ['title', 'composer', 'link']
      });
      return NextResponse.json(results.result.hits.map(elem => elem.fields)); 
}