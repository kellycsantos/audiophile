'use client'
import { ChevronRight } from 'lucide-react';
import styles from './Button.module.scss';
import React from 'react';


type PropsButton = {
    text: string,
    variant?: string,
    onClick?: React.MouseEventHandler<HTMLButtonElement>;

}

export const Button = ({text, variant, onClick} : PropsButton) =>{
    return(
        <button className={`${styles.button} ${styles[variant || '']}`} onClick={onClick}>
            {text || 'Click me'} {variant === 'outline' && <ChevronRight/>}
        </button>
    )
}

export default Button;