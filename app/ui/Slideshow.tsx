'use client'
import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";
import '../../css/animations.css'


export interface ImageSlide{
    url: string,
    subtitle: string
}

interface Props{
    className?: string
    images: ImageSlide[]
}
export const Slideshow: React.FC<Props> = ({className, images}) => {


    React.useEffect(()=>{

            const element = document.getElementById("slideshow")
            const stylesheet = document.styleSheets[0];
            let offset = element?.offsetWidth;
            console.log(offset ? 1536 - offset : 0 )

            const keyframes = `
                @keyframes spinning {
                    49% {
                        transform: translateX(-${offset ? offset - 1536 : 0 }px);
                    }
                    51% {
                        transform: translateX(-${offset ? offset - 1536 : 0 }px);
                    }
                    100% {
                        transform: translateX(0);
                    }
                }
             `;
    
            stylesheet.insertRule(keyframes, 0)
    },[])
    

    return <div className="overflow-hidden ">
        <div id="slideshow" className={cn(className, "px-3 md:px-0 h-[500px] md:h-[650px] w-[max-content] md:my-5 flex gap-[20px] overflow-x-hidden md:overflow-visible slideshow-animation")}>
            {images.map((image, ind) => <div key={ind} className="flex flex-col">
                <div><Image unoptimized={true} alt={image.subtitle}  className="object-contain h-[450px] md:h-[600px] w-auto" src={image.url}></Image></div>
                <p className="mt-3 text-sm md:text-md font-bold text-gray-600">{image.subtitle}</p>
            </div>)}
            
        </div>
    </div>
}