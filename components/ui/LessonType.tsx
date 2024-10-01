import Image from "next/image"
import { Title } from "./Title"


interface Props{
    className?: string
    imageSrc: string
    includedItems: string[]
    price: string,
    disclaimer: string,
    title: string[]
}

export const LessonType: React.FC<Props> = ({className, imageSrc, includedItems, price, disclaimer, title}) => {
    
    return <div className="bg-white rounded-2xl py-[44px] flex flex-col flex-nowrap items-center gap-8 w-[88vw] md:w-auto md:max-w-[400px] md:min-w-[320px]">
        <Title text={title} size="2xl" className="mt-4 font-[600] !leading-[1.6rem]"/>
        <Image src={imageSrc} alt="image" width={90} height={90}></Image>
        <p className="font-[600] text-2xl">{price}</p>
        <ul className="flex flex-col flex-nowrap gap-[8px]">
            {includedItems.map((item, ind) => <li key={ind} dangerouslySetInnerHTML={{ __html: item }} className="text-center text-md" />)}
        </ul>
        <p className="text-sm w-[140px] text-center text-gray-700">{disclaimer}</p>
    </div>
}