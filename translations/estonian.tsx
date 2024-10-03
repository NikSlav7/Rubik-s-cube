export const estonianDictionary = {
    'slide1Subtitle': 'Eesti Meistrivõistlused',
    'slide2Subtitle': 'Soome Meistrivõistlused',
    'slide3Subtitle': 'Rootsi Meistrivõistlused',
    'title1': ["Seiklus Ruubiku kuubiku", "Maailmas"],
    'subtitle1': ["Aastad praktilist kogemust"],
     'section1Title': ['Alustades varakult'],
    'section1Text': "Mina alustasin oma Rubiku kuubiku teekonda varakult ja sellest ajast peale on see olnud minu elu määrav osa. Noorelt alustamine võimaldas mul sukelduda sügavale kuubikumaailma, lihvides oma oskusi ja rajades tugeva aluse. See varajane algus mitte ainult ei õhutanud mu kirge, vaid andis mulle ka enesekindlust võistelda, õpetada ja jagada oma armastust kuubi vastu teistega.",
    'section2Title': ['Külastades', 'terve Maailma'],
    'section2Text':"Vaid kuueaastase professionaalse karjääri jooksul mul õnnestus võtta osa rohkem kui 35 võistlusest üle kogu maailma. Need meeldejäävad seiklused mitte ainult tugevdasid mu kirge Ruubiku kuubiku vastu, vaid andsid mulle võimaluse tutvuda paljude huvitavate inimestega ning külastada erinevaid põnevaid kohti"
,
    'section3Title': ['Kohtudes uusi inimesi'],
    'section3Text': "Ruubiku kuubik tutvustas mind väga huvitava ja mitmekesise seltskonnaga, kus on palju suurepäraseid tarku inimesi erinevatest maailmajagudest. Nii võistlustel kui ka kohalikel kokkusaamistel suutsin ma leida mitte ainult meeldejäävaid elamusi, kuid ka inimesi, kellest on saanud mu elu parimad sõbrad",
    'title2': ['Õpi lahendada' ,"Ruubiku kuubikut"],
    'subtitle2': ["Professionaalsed Ruubiku kuubiku tunnid"],
    'category1Title': ['Gruppi tunnid', 'Ettevõtete jaoks'],
    'category2Title': ['Isiklikud', 'Tunnid'],
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
    "subtitle3": ["Broneerige 15-minutiline tasuta kõne, kus te saate küsida kõiki olulisi küsimusi ning planeerida tunniplaani ette"],
    'title4': ['Võtke ühendust','igal ajal'],
    "subtitle4": ["Te võite alati võtta minuga ühendust ja küsida kõiki küsimusi, mis teil on"],
    "email": "Email",
    "phone": "Telefoninumber",
    'social': "Sotsiaalmeedia",
    'about': "Minust",
    "cube": "Ruubiku kuubik",
    "privateLessons": "Personaalsed Tunnid",
    "contact": "Kontakt"
}
export const estPageLink = () => {
    const url = new URL(window.location.href);
    url.searchParams.set('lang', 'est');
    return url;
}