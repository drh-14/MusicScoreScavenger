import Link from 'next/link';
export default function ScoreItem(props: {composer:string, date: string, instrument: string, link: string, period: string}){
    return(
        <div className = 'flex flex-col gap-8 p-4 border-2 border-solid border-black w-1/4 break-all'>
            <div className = 'flex flex-col gap-4'>
                <div>Composer: {props.composer}</div>
                <div>Date: {props.date}</div>
                <div>Time Period: {props.period}</div>
                <div>Instrument: {props.instrument}</div>
                <Link href = {props.link} color = "blue" target = "_blank">Link to Piece</Link>
            </div>
        </div>
    );
}