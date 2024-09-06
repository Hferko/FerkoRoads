import tour1 from './images/tour-1.jpeg';
import tour2 from './images/tour-2.jpeg';
import tour3 from './images/tour-3.jpeg';
import tour4 from './images/tour-4.jpeg';
import tour5 from './images/tour-5.jpeg';
import tour6 from './images/tour-6.jpeg';
import tour7 from './images/tour-7.jpeg';
import tour8 from './images/tour-8.jpeg';
import { FaFacebook, FaGithub,  } from "react-icons/fa";
import { SiReplit } from "react-icons/si";


function datum() {
    const honapok = 
    ["Január","Február","Március","Április","Május","Június","Július","Augusztus","Szeptember","Október","November","December"];
    let now = new Date()
    let most = now.getFullYear();
    let ho = now.getMonth() + 1;
    let nap = Math.floor(Math.random() * (28 - 1)) + 1;
    let honap, ev = 0;
    let month = '';   

    if ((12 - ho) > 1) {
        honap = Math.floor(Math.random() * (12 - ho)) + ho;
        month = honapok[honap];
        ev = most;
    }
    else {
        honap = Math.floor(Math.random() * (12 - 1)) + 1;
        month = honapok[honap];
        ev = most + 1;
    }
   
    return `${ev}. ${month} ${nap}.`
}


export const pageLinks = [
    { id: 1, href: '#home', text: 'kezdőlap' },
    { id: 2, href: '#about', text: 'rólunk' },
    { id: 3, href: '#services', text: 'szolgáltatások' },
    { id: 4, href: '#tours', text: 'túrák' },
]

export const socialLinks = [
    { id: 1, href: 'https://www.facebook.com/', icon: <FaFacebook/> },
    { id: 2, href: 'https://github.com/Hferko', icon: <FaGithub /> },
    { id: 3, href: 'https://replit.com/@FerkoHangai', icon: <SiReplit /> },
]

export const services = [
    {
        id: 1,
        icon: 'fas fa-wallet fa-fw',
        title: 'Spóroljon velünk',
        text: 'Legalacsonyabb ár garancia - Nálunk ugyanolyan szolgáltatással, árral és kedvezménnyel foglalhat, mint az utazásszervezőknél, erre akár garanciát vállalunk. A „Legalacsonyabb ár garancia“ jelzéssel rendelkező utazási csomag esetén garantáljuk, hogy ugyanannál az utazásszervezőnél, azonos feltételekkel és szolgáltatásokkal, ugyanazt az utazási csomagot nem tudja alacsonyabb áron megrendelni.'
    },
    {
        id: 2,
        icon: 'fas fa-life-ring fa-fw',
        title: 'Utasbiztosítás',
        text: 'Egy utazás rengeteg élménye mellett érdemes lehet annak esetleges kockázataira is felkészülni - számtalan bosszúságtól, idegeskedéstől, és felesleges kiadástól kímélheti így meg magát és utastársait!'
    },
    {
        id: 3,
        icon: 'fas fa-gift fa-fw',
        title: 'Ajándékutalvány',
        text: 'Ajándékozzon életre szóló élményt azoknak, akik a legfontosabbak számodra! Vásárolj FerkoRoads ajándékkártyát családtagjaidnak, barátaidnak, partnereidnek vagy üzletfeleidnek, hogy ők is részesei lehessenek egy felejthetetlen utazásnak, akár egy egzotikus nyaralásnak! Nyisd ki az ajtót az utazás világába!'
    },
    {
        id: 4,
        icon: 'fas fa-car fa-fw',
        title: 'Autóbérlés',
        text: 'Fedezze fel úticélját a saját tempójában, a saját igényei szerint, a helyszínen bérelt autóval! Miután alaposan kiélvezte a szállodája kínálta összes minőségi szolgáltatást, programlehetőséget és kényelmi funkciót, érdemes lehet a környék szépségeit is felfedezni.'
    },
    {
        id: 5,
        icon: 'fas fa-venus-mars fa-fw',
        title: 'Nászutasoknak',
        text: 'Szeretnék közös életük egyik legszebb utazását biztos kezekben tudni? Leterhelik az esküvővel kapcsolatos szervezések, és épp a jól megérdemelt pihenésre nem jut már idő? A megoldást nálunk találja! Speciális nászutas kedvezményeinkért keressen minket'
    },
    {
        id: 6,
        icon: 'fas fa-tree fa-fw',
        title: 'Végtelen túrázás',
        text: 'Válasszon magának több száz túraajánlatot, szűrővel, térképpel és appal. Felfedezheted a természetet, a kultúrát és a különlegességeket a katalógusunkban. A legjobb gyalogos és kerékpáros túrák, valamint terepfutó útvonalai egy helyen. Több száz ötlet letölthető térképpel és részletes leírással. Az ingyenes alkalmazásunk segítségével a navigáció telefonnal is gyerekjáték.'
    },
    {
        id: 7,
        icon: 'fas fa-socks fa-fw',
        title: 'Csodálatos kényelem',
        text: 'A túrázás  egyszerre sport és lazítás, miközben igazi közösséggé kovácsolódnak a túratársak, munkatársak! Örömmel járjuk a természetet és magunkkal visszük azokat, akik mindig szerettek volna, de jó társaság hiánya miatt eddig nem érdekelte őket a túra. Egy átlag városlakó ideje 87 százalékát tölti a négy fal között, holott az emberiség az elmúlt ötmillió év javát a természetben élte.'
    },
    {
        id: 8,
        icon: 'fas fa-globe fa-fw',
        title: 'Lenyűgöző élmény',
        text: 'Túráinkon valódi nomád élményben lehet része. A világ legvadregényesebb táján túrázhat, tiszta levegőt szívhat utazásai minden napjain keresztül. Mindezek közben csodálatos élményekkel gazdagodik a lenyűgöző tájaktól kezdve a különböző kultúrák megismeréséig.'
    },
    {
        id: 9,
        icon: 'fas fa-address-card fa-fw',
        title: 'Vízumügyintézés',
        text: 'Útlevelünk és kedvenc bőröndünk társaságában nekivágunk az ismeretlen felfedezésének és elmerülünk az utazás élményében... néhány országba azonban nem indulhatunk el vízum nélkül, ennek beszerzése pedig sok utánajárást igényel: ahány ország, annyiféle vízum és belépési szabályozás, idegen nyelvű igénylőlapok, követségek és konzulátusok felkeresése. Vízumügyintézésünkkel mindezt megspórolhatja, munkatársaink a világ számos országának vízumairól rendelkeznek naprakész információkkal! Intézze velünk vízumigénylését kényelmesen és gyorsan!'
    },
]

export const tours = [
    {
        id: 1,
        image: tour1,
        date: datum(),
        title: 'Tibet Adventure',
        info: 'Tibet a világ teteje, számos utazó álma. A hosszú évekig elzárt régió őrzi ezredéves hagyományait, titokzatos vallási szokásait és érintetlen, tiszta természeti szépségeit. Fedezze fel Tibet csodáit!',
        location: 'Kína',
        duration: '6 nap',
        cost: 2400
    },
    {
        id: 2,
        image: tour2,
        date: datum(),
        title: 'Az indonéziai Jáva-sziget',
        info: 'Az aktív vulkánoktól és a lenyűgöző krátertavaktól kezdve a kulturális központokon át a teaültetvényekig sok mindent kínál Jáva szigete. Tehát akár a természet, akár a kultúra, akár a történelem érdekel, vagy egyszerűen csak szórakozni szeretnél, a Jáva-szigeten mindenki számára van valami. Készülj fel egy felejthetetlen kalandra!',
        location: 'Indonézia',
        duration: '11 nap',
        cost: 1900
    },
    {
        id: 3,
        image: tour3,
        date: datum(),
        title: 'fedezze fel Hongkongot',
        info: 'Egy sziget végtelen külvárossal, ahol megszámlálhatatlan mennyiségű hatalmas felhőkarcolót találunk. A megőrzött tradíciók és a modern fejlődő világ keveredik ezen a helyen. Annak ellenére, hogy Hongkong a világ egyik legsűrűbben lakott országa, meglepetésünkre találunk itt erdőket, hegyeket és a Kínai határon az Új-vidéknek nevezett mezőgazdaségi térséget.',
        location: 'hong kong',
        duration: '8 nap',
        cost: 4000
    },
    {
        id: 4,
        image: tour4,
        date: datum(),
        title: 'Kenya nevezetességei',
        info: 'Fedezze fel az afrikai szavannák világát! Állatok szabad vonulása természetes körülmények között. Ebben a fantasztikus országban mindent megtalál. Homokos korallzátony által védett tengerpartot, érintetlen természetet, Kelet-Afrika jellegzetes vadállatait eredeti környezetükben, szabadon.',
        location: 'Kenya',
        duration: '20 nap',
        cost: 3300
    },
    {
        id: 5,
        image: tour5,
        date: datum(),
        title: 'Maros-menti ékszerdoboz',
        info: 'Ahányan vagyunk, annyiféleképp értelmezzük a tökéletes nyaralást, de a fürdőzés, a városnézés és az élménykeresés azért minden idillben helyet kapnak. Ezért olyan zseniális úti cél Makó: nem csak jeleskedik mindhárom téren, de még ár-érték arányban is telitalálat. Már egy hétvégi kiruccanás is elég arra, hogy a város menthetetlenül befészkelje magát a szívébe.',
        location: 'Magyarország',
        duration: '6 nap',
        cost: 720
    },
    {
        id: 6,
        image: tour6,
        date: datum(),
        title: 'India - Agra',
        info: 'Látogasson el a világhírű, hatalmas Taj Mahalhoz az örök, múlhatatlan szerelem jelképéhez. Kontinensnyi ország, tengernyi látnivalóval. Ha valaki eljut Indiába és ráérez az ízére, megkedveli az országot, biztosan visszatér. Aki nem tér vissza, annak is életre szóló élmény marad. Az indiai kultúra olyan hatással volt a világra az élet számtalan területén, hogy egy - egy utazás alkalmával csak épp betekintést tudunk tenni. ',
        location: 'India',
        duration: '4 nap',
        cost: 2500
    },
    {
        id: 7,
        image: tour7,
        date: datum(),
        title: 'Bekai-halom',
        info: 'Magyarcsanád-Bökény határában fekszik a Bekai-halom, amely a Körös–Maros Nemzeti Park tájképi és történelmi szempontból kitüntetett pontja. A titokzatos halom löszgyepe botanikai ritkaságok, és a közelében lévő Maros árvízvédelmi töltésének a halom közelében lévő szakasza egy fokozottan védett állatfaj otthona.',
        location: 'Magyarország',
        duration: '3 nap',
        cost: 200
    },
    {
        id: 8,
        image: tour8,
        date: datum(),
        title: 'A napfény városa: Szeged',
        info: 'Szeged az egyik legszebb magyarországi város. De nem csak gyönyörű, hanem képes arra is, hogy időről időre megújuljon, és ilyenkor valami mást mutasson magából, mint amit addig megszoktunk. Tobzódik a látnivalókban és a programokban - utóbbira bizonyíték az is, hogy az Artisjus adatai szerint Budapesten kívül a legtöbb koncert Szegeden van.',
        location: 'Magyarország',
        duration: '4 nap',
        cost: 800
    },
]