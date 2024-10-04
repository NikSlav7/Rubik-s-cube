'use client'
import { cn } from "@/lib/utils";
import React from "react";
import { useIntersection } from "react-use";
import '../css/animations.css'

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'


interface Props{
    className?: string;
    size: Size,
    text: string[],
    animate?: boolean,
    id? : string,
}

export const Title: React.FC<Props> = ({className, size, text, animate = true, id}) => {


    const intersectioneRef = React.useRef<any>(null)
    const intersection = useIntersection(intersectioneRef, {threshold: 0.1})

    React.useEffect(()=>{
        if (intersection?.isIntersecting  && animate){
            intersectioneRef.current?.classList.add('slide-in-right');
        }
    }, [intersection?.isIntersecting, animate]);

    let textSizeChart = {
        'xs': 'font-xs',
        'sm': 'text-sm',
        'md': 'text-md',
        'lg': "text-lg",
        'xl': 'text-xl',
        '2xl': 'text-2xl',
        '3xl': 'text-[38px]',
        '4xl': 'text-[52px]'
    }

    console.log(text)

    

    return <div id={id} className={cn("w-[100%] flex justify-center")}>
        <p ref={intersectioneRef} className={cn('text-center w-[100%] leading-3', animate ? 'opacity-0' : '' ,textSizeChart[size], className)}>{text.map((part, ind) => <span
         key={ind}>{part}<br></br></span>)}</p>
    </div>
}