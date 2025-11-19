import { NextRequest, NextResponse } from 'next/server';
import { Pinecone } from '@pinecone-database/pinecone'

export async function POST(req: NextRequest){
    const pc = new Pinecone({apiKey: process.env.PINECONE_API_KEY!});
    const namespace = pc.index("music-semantic-search", "https://music-semantic-search-v3ofc6l.svc.aped-4627-b74a.pinecone.io").namespace("pieces");
    const {composers, instruments, characteristics, numPieces, prevPieces} = await req.json();
    const query = `Pieces with composers: ${composers}, instruments: ${instruments}, characteristics: ${characteristics}, similar to ${prevPieces}`;
    const results = await namespace.searchRecords({
        query: {
          topK: Number(numPieces),
          inputs: { text: query },
        },
        rerank: {
          model: 'bge-reranker-v2-m3',
          topN: Number(numPieces),
          rankFields: ['chunk-text']},
        fields: ['title', 'composer', 'link']
      });
      return NextResponse.json(results.result.hits.map(elem => elem.fields)); 
}