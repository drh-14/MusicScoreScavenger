import Link from 'next/link';
import {Button} from '@mui/material';
import { useState } from 'react';
export default function ScoreItem(props: {title:string, composer:string, link: string, addButton: boolean}){
    const [disabledButton, setDisabledButton] = useState(false);
    return(
        <div className = 'flex flex-col gap-8 p-4 border-2 border-solid border-black w-1/4 break-all'>
            <div className = 'flex flex-col gap-4'>
                <div className = 'text-3xl'>{props.title}</div>
                <div>Composer: {props.composer}</div>
                <Link href = {props.link} color = "blue" target = "_blank">Link to Piece</Link>
            </div>
            {props.addButton ? <Button disabled = {disabledButton} onClick = {() => setDisabledButton(true)} variant = 'contained'>Add piece</Button>: null}
        </div>
    );
}