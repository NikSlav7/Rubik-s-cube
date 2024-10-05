import { Dictionary } from "./english";

export const estonianDictionary: Dictionary = {
    'slide1Subtitle': 'Eesti Meistrivõistlused',
    'slide2Subtitle': 'Soome Meistrivõistlused',
    'slide3Subtitle': 'Rootsi Meistrivõistlused',
    'title1': ["Seiklus Ruubiku kuubiku", "Maailmas"],
    'subtitle1': ["Aastad praktilist kogemust"],
     'section1Title': ['Alustades varakult'],
    'section1Text': "Mina alustasin oma Rubiku kuubiku teekonda varakult ja sellest ajast peale on see olnud minu elu väga oluline osa. Noorelt alustamine võimaldas mul sukelduda sügavale kuubikumaailma, lihvides oma oskusi ja rajades tugeva aluse. See varajane algus mitte ainult ei hajutanud mu kirge, vaid andis mulle ka enesekindlust võistelda, õpetada ja jagada oma armastust kuubi vastu teistega.",
    'section2Title': ['Külastades', 'terve Maailma'],
    'section2Text':"Vaid kuueaastase professionaalse karjääri jooksul osalesin ma rohkem kui 35 võistlusel üle kogu maailma. Need meeldejäävad seiklused mitte ainult tugevdasid mu kirge Ruubiku kuubiku vastu, vaid andsid mulle võimaluse tutvuda paljude huvitavate inimestega ning külastada erinevaid põnevaid kohti"
,
    'section3Title': ['Kohtudes uusi inimesi'],
    'section3Text': "Ruubiku kuubik tutvustas mind väga huvitava ja mitmekesise seltskonnaga, kus on palju suurepäraseid tarku inimesi erinevatest maailmajagudest. Nii võistlustel kui ka kohalikel kokkusaamistel suutsin ma leida mitte ainult meeldejäävaid elamusi, kuid ka inimesi, kellest on saanud mu elu parimad sõbrad",
    'title2': ['Õpige lahendama' ,"Ruubiku kuubikut"],
    'subtitle2': ["Professionaalsed Ruubiku kuubiku tunnid"],
    'category1Title': ['Gruppi tunnid', 'Ettevõtete jaoks'],
    'category2Title': ['Individuaalsed', 'Tunnid'],
    '1hLesson': "Tunni kestvus: <strong>1t</strong>",
    'anyDuration': "Tunni kestvus: <strong>1-3t</strong>",
    "personOrOnline": "<strong>Personaalselt</strong> või <strong>Online</strong>",
    'inPerson': "<strong>Individuaalselt</strong>",
    '24hContact': "Võtke ühendust <strong>24/7</strong>",
    "personalFeedback": "Personaalne <strong>tagasiside</strong>",
    "questions": "Personaalne <strong>toetus</strong>",
    'teamBuilding': "Team <strong>Building</strong>",
    'groupSize': "<strong>2-10</strong> inimest gruppis",
    'disclaimerPersonal': "Tundide arv sõltub Ruubiku kuubikust",
    'disclaimerTeam': "Tundide arv sõltub Ruubiku kuubikust ja gruppi suurusest",
    'title3': ["Broneeri tundi", "Professionaaliga"],
    "subtitle3": ["Broneerige 15-minutilist tasuta kõnet, kus te saate küsida kõiki olulisi küsimusi ning planeerida tunniplaani ette"],
    'title4': ['Võtke ühendust','igal ajal'],
    "subtitle4": ["Saate alati vabalt võtta minuga ühendust ning küsida kõiki teid huvitavaid küsimusi"],
    "email": "Email",
    "phone": "Telefoninumber",
    'social': "Sotsiaalmeedia",
    'about': "Minust",
    "cube": "Ruubiku kuubik",
    "privateLessons": "Individuaalsed tunnid",
    "contact": "Kontakt"
}
export const estPageLink = () => {
    const url = new URL(window.location.href);
    url.searchParams.set('lang', 'est');
    return url;
}