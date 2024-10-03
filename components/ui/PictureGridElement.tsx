'use client'
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { Title } from "./Title";
import { useIntersection } from "react-use";
import '../../css/animations.css'



type PictureAllignment = 'right' | 'left'

interface Props{

    className? :string
    pictureAllignment: PictureAllignment,
    title: string[],
    text: Node,
    url: string,
    key: string
}

export const PictureGridElement: React.FC<Props> = ({className, pictureAllignment, title, text, url}) => {


    const intersectioneRef = React.useRef(null);
    const intersection = useIntersection(intersectioneRef, {threshold: 0.1})
    const containerRef = React.useRef(null);

    function getTextAllignment(){
        if (window.innerWidth >= 768) {
            return pictureAllignment === 'right' ? 'text-right' : 'text-left';
        }
        return pictureAllignment === 'left' ? 'text-right' : 'text-left'
    }

    React.useEffect(()=>{
        if (intersection?.isIntersecting) {
            containerRef.current?.classList.add(pictureAllignment === 'right' ? 'slide-in-right-slow' : 'slide-in-left-slow');
        }
    },[intersection?.isIntersecting])

    return <div ref={containerRef} className={cn('flex opacity-0 flex-wrap justify-center gap-[14px] md:gap-[20px]',pictureAllignment === 'right' && 'flex-row-reverse',className)}>
        <div className="relative">
            <Image ref={intersectioneRef} className={cn("md:h-[400px] relative z-40 object-cover w-[600px]",pictureAllignment === 'right' ? 
                'rounded-r-[80px]' : 'rounded-l-[80px]')
            } unoptimized={true} src={url} alt="image"></Image>
            {window.innerWidth >= 768 && <div className={cn("top-[15px] h-[400px] z-10 absolute z-5 w-[600px] border-solid border-green-400 border-[1px] rounded-2xl",
                 pictureAllignment === 'right' ? 'left-[15px] rounded-r-[80px]' : 'right-[15px] rounded-l-[80px]')}></div>}
        </div>
        <div className="w-[600px] md:pt-[40px] pt-[22px] min-h-[min-content] px-3 md:px-16">
            <Title size="3xl" text={title} className={cn("text-white font-bold leading-[1.25em]", getTextAllignment())}/>
            <p className={cn("text-white text-lg font-thin mt-2 md:mt-3", getTextAllignment())} dangerouslySetInnerHTML={{__html: text}}>
            
            </p>
        </div>
    </div>
}