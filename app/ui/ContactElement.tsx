'use client'
import Image from "next/image"
import React from "react"
import { useIntersection } from "react-use"
import '../css/animations.css'


interface Icon{
    imageSrc: string,
    redirectUrl: string
}

interface Props{
    className?: string,
    name: string,
    value?: string,
    icons?: Icon[]
}

export const ContactElement: React.FC<Props> = ({className, name, value, icons}) => {

    const intersectionRef = React.useRef<any>(null);
    const intersection = useIntersection(intersectionRef, {threshold: 0.1})

    React.useEffect(()=>{
        if (intersection?.isIntersecting) intersectionRef.current?.classList.add('slide-in-up')
    },[intersection?.isIntersecting])

    return <div className="py-4 text-center text-xl text-white" ref={intersectionRef}>
        <p className="text-green-600">{name}</p>
        {value && <p className="font-bold">{value}</p>}
        {icons && <div className="my-5 gap-5 flex items-center justify-center">{icons.map((icon, ind) => <a key={ind} href={icon.redirectUrl}><Image width={32} height={32} src={icon.imageSrc} alt="image"></Image></a>)
        }</div>}
    </div>
}