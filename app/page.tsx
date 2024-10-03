
'use client'
import { Container } from "@/components/ui/Container";
import { PictureGridElement } from "@/components/ui/PictureGridElement";
import { ImageSlide, Slideshow } from "@/components/ui/Slideshow";
import { Title } from "@/components/ui/Title";
import { request } from "http";
import Image from "next/image";
import '../css/animations.css'
import { LessonType } from "@/components/ui/LessonType";
import { Calender } from "@/components/ui/Calender";
import {ContactElement} from '@/components/ui/ContactElement'
import { useSearchParams } from "next/navigation";
import { englishDictionary, engPageLink } from "@/translations/english";
import React from "react";
import { estonianDictionary, estPageLink } from "@/translations/estonian";
import { rusPageLink, russianDictionary } from "@/translations/russian";
import { cn } from "@/lib/utils";
export default function Home() {

  interface Link{
    title: string,
    link: string
  }

  interface LessonType{
    className?: string
    imageSrc: string
    includedItems: string[]
    price: string,
    disclaimer: string,
    title: string[]
}



  const [bigScreen, setBigScreen] = React.useState(window.innerWidth >=768);
  const params = useSearchParams();
  let dictionaries = {'eng': englishDictionary, 'est': estonianDictionary, 'rus': russianDictionary}
  let lang = params.get('lang')
  let dictionary = lang ? dictionaries[lang] : englishDictionary;



  let links: Link[] = [{title: dictionary['about'], link: "#me"}, {title: dictionary['cube'], link: "#cube"},{title: dictionary['privateLessons'], link: "#lesson"}
  ,{title: dictionary['contact'], link: "#contact"}]
  let images: ImageSlide[] = [{url: require("../images/rubiks.png"), subtitle: dictionary['slide1Subtitle']},
    {url: require("../images/rubiksvideo.gif"), subtitle:dictionary['slide2Subtitle']},
    {url: require("../images/rubiksvideo2.gif"), subtitle: dictionary['slide3Subtitle']}

   ]

   let languageLinks: Link[] = [{title: 'English', link: engPageLink().toString()},
    {title: 'Eesti', link: estPageLink().toString()},
    {title: 'Русский', link: rusPageLink().toString()}]

  
  let imageUrls = [require('../images/early-cube.jpg'), require("../images/mark-photo.jpg"), require("../images/poland-cube.jpg")]

  let lessonType: LessonType[] = [
    {imageSrc: require("../images/peopleicon.png"), disclaimer:dictionary['disclaimerTeam'],
      price: "from 20$", title: dictionary['category1Title'], includedItems: [dictionary['anyDuration'],
      dictionary['inPerson'], dictionary['groupSize'], dictionary['personalFeedback'],
      dictionary['questions']]
    },
    {imageSrc: require("../images/peopleicon.png"), disclaimer:dictionary['disclaimerPersonal'],
    price: "15$", title: dictionary['category2Title'], includedItems: [dictionary['1hLesson'],
    dictionary['personOrOnline'], dictionary['24hContact'], dictionary['personalFeedback'],
    dictionary['questions']]
  }]

  React.useEffect(()=>{
    window.addEventListener("resize", function(){
      setBigScreen(this.window.innerWidth >= 768)
    })
  },[])
   

  return (
    <>
      <Container className="flex flex-col overflow-x-hidden">
        <div className="md:h-[100px] px-[42px] flex flex-col md:flex-row justify-between">
          <div className="flex flex-col justify-center md:flex-row">
            <div className="bg-green-500 px-[16px] h-[62px] rounded-b-md md:rounded-b-none flex items-end justify-center md:flex-row md:items-end md:h-auto">
              <p className="mb-2 font-thin text-lg text-white slide-in-down">Nikita Slavinski</p>
            </div>
            {<div className="md:ml-5 flex gap-8 justify-center items-end my-[15px] md:my-0 md:px-[16px] w-[100%] md:w-auto slide-in-left">
              {languageLinks.map((link, ind) => <a key={ind} className="text-black md:mb-2 text-sm lg:text-md font-thin" href={link.link}>{link.title}</a>)}
             </div>}
          </div>
          {window.innerWidth >= 768 && <div className="flex gap-8 items-end px-[8px] slide-in-left">
            {links.map((link, ind) => <a key={ind} className="text-black mb-2 text-md font-thin" href={link.link}>{link.title}</a>)}
          </div>}
        </div>
        <Slideshow images={images}/>
      </Container>
      <div className="w-[100vw] bg-gradient-to-br mt-[70px] from-black to-gray-900">
        <Container className="py-[70px]">
          <Title id="me" text={dictionary['title1']} size={bigScreen ? "4xl" : "3xl"} className="px-6 leading-[46px] md:!leading-[62px] text-white font-[600]"/>
          <Title  text={dictionary['subtitle1']} size="xl" className="text-white font-[300] mt-2"/>
          <div  className="my-[70px] px-10 min-h-[min-content] grid grid-cols-1 gap-16 grid-rows-3">
            {imageUrls.map((element, ind) => <PictureGridElement key={ind.toString()} url={element} title={dictionary['section' + (ind+1) + 'Title']}
             text={dictionary['section' + (ind+1) + 'Text']} pictureAllignment={(ind+1) % 2 === 0 ? 'right' : 'left'}/>)}
          </div>
        </Container>
        
      </div>
      <div className="bg-green-400 border-none w-[100vw]">
        <Container className="py-[70px]">
          <Title id="cube" animate={false} size={bigScreen ? "4xl" : "3xl"} className="px-6 leading-[46px] md:!leading-[62px] font-[600]" text={dictionary.title2}/>
          <Title animate={false} text={dictionary.subtitle2} size="xl" className="text-black font-[300] mt-2"/>
          <div className="mt-[50px] ] mx-[15px] md:mx-[0px] flex flex-wrap justify-center gap-10">
            {lessonType.map((element, ind) => <LessonType key={ind.toString()} imageSrc={element.imageSrc} title={element.title}
              includedItems={element.includedItems} price={element.price} disclaimer={element.disclaimer}/>)}
          </div>
        </Container>
      </div>
      <div className="bg-white">
        <Container className="py-[60px] md:py-[80px]">
            <Title id="lesson" size={bigScreen ? "4xl" : "3xl"} className={cn("px-6 leading-[46px] md:!leading-[62px] font-[600]", lang === 'rus' && 'text-[30px]')} text={dictionary['title3']}/>
            <Title text={dictionary['subtitle3']} size="xl" className="text-black pb-[22px] px-[28px] md:px-0 md:w-[30%] font-[300] mt-6"/>
            <Calender />
        </Container>
      </div>
      <div className=" bg-gradient-to-br  from-black to-gray-950">
      <Container className=" py-[70px]">
            <Title id="contact" size={bigScreen ? "4xl" : "3xl"} className="px-6 !leading-[46px] text-white font-[600]" text={dictionary['title4']}/>
            <Title text={dictionary['subtitle4']} size="xl" className="text-white px-[28px] md:px-0   md:w-[30%] font-[300] mt-6"/>
            <Image src={require('../images/rubiks.png')} alt='pic' className="mx-auto my-[45px] w-[86%] aspect-square  md:w-[360px] md:h-[360px] rounded-2xl object-cover"></Image>
            <ContactElement key={"email"} name={dictionary['email']} value="nikslav7@gmail.com" />
            <ContactElement key={"phone"} name={dictionary['phone']} value="+372 5699 6110" />
            <ContactElement key={"social"} name={dictionary['social']} icons={[{'imageSrc': require('../images/intsalogo.png'), 'redirectUrl': 'https://www.instagram.com/n_slav/'}, 
              {'imageSrc': require('../images/facebook.png'), 'redirectUrl': 'https://www.facebook.com/nik.slav.58/'},
              {'imageSrc': require('../images/youtube.png'), 'redirectUrl': 'https://www.youtube.com/@nikitaslavinski6861'}
            ]}/>
            
        </Container>
      </div>
    </>
  );
}
