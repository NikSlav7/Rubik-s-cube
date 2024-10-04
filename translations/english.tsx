
export interface Dictionary {
    slide1Subtitle: string;
    slide2Subtitle: string;
    slide3Subtitle: string;
    title1: string[];
    subtitle1: string[];
    section1Title: string[];
    section1Text: string;
    section2Title: string[];
    section2Text: string;
    section3Title: string[];
    section3Text: string;
    title2: string[];
    subtitle2: string[];
    category1Title: string[];
    category2Title: string[];
    '1hLesson': string;
    anyDuration: string;
    personOrOnline: string;
    inPerson: string;
    '24hContact': string;
    personalFeedback: string;
    questions: string;
    teamBuilding: string;
    groupSize: string;
    disclaimerPersonal: string;
    disclaimerTeam: string;
    title3: string[];
    subtitle3: string[];
    title4: string[];
    subtitle4: string[];
    email: string;
    phone: string;
    social: string;
    about: string;
    cube: string;
    privateLessons: string;
    contact: string;
  };
  
export const englishDictionary:Dictionary= {
    'slide1Subtitle': 'Estonian Championship',
    'slide2Subtitle': 'Finnish Championship',
    'slide3Subtitle': 'Swedish Championship',
    'title1': ["Through the world of", "Rubik's cube"],
    'subtitle1': ["Years of hands-on experience"],
     'section1Title': ['Starting Early'],
    'section1Text': "I began my Rubik's Cube journey early, and it’s been a defining part of my life ever since. Starting young allowed me to dive deep into the world of cubing, sharpening my skills and building a solid foundation. This early start not only fueled my passion but also gave me the confidence to compete, teach, and share my love for the cube with others.",
    'section2Title': ['Visiting the', 'whole World'],
    'section2Text':"In just 6 years of my professional Rubik's Cube career, I’ve had the privilege of attending over 35 competitions across the globe. These events have taken me to incredible places, where I’ve met amazing people and deepened my love for the puzzle."
,
    'section3Title': ['Meeting new People'],
    'section3Text': "The Rubik's Cube has introduced me to a diverse community of amazing people from all walks of life. Whether at competitions or local meetups, I've built friendships and connections that span different cultures and backgrounds.",
    'title2': ['Learn how to solve a' ,"Rubik's cube"],
    'subtitle2': ["Professionally guided lessions"],
    'category1Title': ['Group lessons', 'for Companies'],
    'category2Title': ['Personal', 'Lessons'],
    '1hLesson': "Lesson duration: <strong>1h</strong>",
    'anyDuration': "Lesson duration: <strong>1-3h</strong>",
    "personOrOnline": "<strong>In-Person</strong> or <strong>Online</strong>",
    'inPerson': "<strong>In-Person</strong>",
    '24hContact': "Get in touch <strong>24/7</strong>",
    "personalFeedback": "Personal <strong>feedback</strong>",
    "questions": "Individual <strong>support</strong>",
    'teamBuilding': "Team <strong>Building</strong>",
    'groupSize': "<strong>2-10</strong> people in a group",
    'disclaimerPersonal': "Number of lessons depends on the cube",
    'disclaimerTeam': "Number of lessons depends on the cube and group size",
    'title3': ["Book a lesson with", "Professional"],
    "subtitle3": ["Book a 15 minute free trial lesson where we will discuss the learning process and you would be able to ask all needed questions"],
    'title4': ['Get in touch','Anytime'],
    "subtitle4": ["You’re welcome to contact me if you’d like to schedule a lesson or have any questions"],
    "email": "Email",
    "phone": "Phone Number",
    'social': "Social Media",
    'about': "About",
    "cube": "Rubik's cube",
    "privateLessons": "Private Lessons",
    "contact": "Contact"
}
export const engPageLink = () => {
    const url = new URL(window.location.href);
    url.searchParams.set('lang', 'eng');
    return url;
}