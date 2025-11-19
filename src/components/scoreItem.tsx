import Link from 'next/link';
export default function ScoreItem(props: {title:string, composer:string, link: string}){
    return(
        <div className = 'flex flex-col gap-8 p-4 border-2 border-solid border-black w-full break-all'>
            <div className = 'flex flex-col gap-4'>
                <Link href = {props.link} color = "blue" target = "_blank"><div className = 'text-3xl'>{props.title}</div></Link>
                <div>{props.composer}</div>
            </div>
        </div>
    );
}