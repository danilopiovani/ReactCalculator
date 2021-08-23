import React from 'react'
/* Packages */
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';

/* Projects Page */
/* Responsibility: ==========================================*/
/* Responsible for render each Calculator's buttons/keyboard */
/* ==========================================================*/
const CalculatorKeybord = (props) => {
    return (
        <Link onClick={() => props.KeyBoardFunction(`${props.KeyBoardText}`)} underline="none" Style="cursor:pointer;">
            <Avatar variant="rounded" className={props.KeyBoardClass}>{props.KeyBoardText}</Avatar>
        </Link>
    );
}

export default CalculatorKeybord
