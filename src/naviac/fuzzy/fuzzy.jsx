import { vyhody } from "../vyhody/vyhody";


export const apartmany = [
  // BRATISLAVA
  // Bratislavský kraj - Bratislava
    { autor:"A",
      id: "1BB", krajina: "Slovensko", kraj: "Bratislavský", location: "Bratislava", name: "Apartmán Slnečný", hodnotenie: "4,96", cena: 120,
    fotky: ["/1.webp", "/2.webp","/3.webp","/5.webp","/1.webp", "/2.webp","/3.webp","/5.webp"],typ: "3-izbový byt",
    filter: "mesto",ideal:"predvoch",
 
 
  priestor:"Tento nádherný, rozľahlý a svetlý byt je rozdelený na spoločné priestory (kuchyňa s kompletným vybavením, obývacou časťou s možnosťou prístelky, WC a terasou) a spálňou s prístupom do kúpeľne. Terasa je prepojená aj so spálňou s možnosťou posedenia a s očarujúcimi výhľadmi na Bratislavu a blízky park.",

  poloha:"Oblasť obklopujúca rezidenciu zostáva výnimočne tichá a ponúka pokojnú atmosféru. Štvrť je tichá, ale zároveň živá a ponúka fantastický výber reštaurácií s rôznorodými kuchyňami, ako aj rušné bary. Pešia vzdialenosť od hlavných atrakcií v Prahe.",
  
  upratovanie:"Moja profesionálna upratovacia služba zabezpečí, aby bol byt pred vaším príchodom a po odchode dôkladne uprataný, takže sa pri odchode nebudete musieť nič obávať upratovania.Pri pobytoch na viac ako päť nocí ponúkam bezplatnú upratovaciu službu spolu s výmenou posteľnej bielizne a uterákov každých 5 nocí. Požiadajte o túto službu aspoň 24 hodín vopred.Ak potrebujete dodatočné upratovanie alebo výmenu posteľnej bielizne a uterákov, môžete to zariadiť za príplatok.",

  pravidla:"Pravidlá zákazu fajčenia  Fajčenie vnútri je zakázané. Ak dôjde k fajčeniu vnútri apartmánu, bude sa účtovať poplatok 200 € na pokrytie profesionálneho čistenia ozónu.",

prehosti:"Prístup pre hostí",



 
// hodnota:{
//   cistota:"4.9",
//   vystiznost:"4.5",
//   prichod:"4.1",
//   komunikacia:"4.2",
//   poloha:"4.3",
//   adekvatnost:"4.1",

// },


 vybavenie: [
      "parkovanie",
      "kuchyna",
      "WiFi",
      "klimatizacia",
      "televizia",
      "mikrovlnna_rura",
      "chladnicka",
      "pracka",
      "tepla_voda",
      "hostitel",
      "bezplatne_parkovanie_na_ulici",
      "pobyt",
      "vesiak",
      "vankus",
      "priestor"
    ],


    

// idecka:["3BB", "5BB", "7BB", "10BB","2BB","3BS"],

veduci:
  {meno:"Leo",
    priezvisko: "Fudaly",
   lokalita:"Bratislava, Slovensko",
   fotka:"/zena1.jpg",
   popisek:"Aktívny hostiteľ už 5 rokov.",
   skola:"Ekonomická univerzita v Bratislave",
   praca:"Študent / SUPKK",
   typ:"superhostiteľ",
   podrobnost1:"Miera odozvy: 100 %",
   podrobnost2:"Odpovedá do hodiny",

   zeco:"Superhostitelia sú skúsení, vysoko hodnotení hostitelia, ktorí chcú svojim hosťom čo najviac spríjemniť pobyt.",

   
   texticek:"Som ambiciózny človek, ktorý rád pracuje na nových nápadoch a posúva sa dopredu. Zaujímam sa o podnikanie, moderné technológie a neustále sa učím nové veci. Mám rád výzvy, pretože ma posúvajú bližšie k mojim cieľom. Verím, že tvrdá práca a jasná vízia sú základom úspechu."
  },

  

  hodnotenie2:[
     {
    id: "1",
    klientMeno: "Erik",
    klientPriezvisko: "Elinucni",
    klientMesto: "Luterbach, Švajčiarsko",
    klientDatum: "5.10 2025",
    klientAkoDlho: "Pobyt trval jednu noc",
    klientFotky: "/muz9.avif",
    klientHodnotenieVlaste: "4.54",
    klientHodnotenie:
      "Bývanie bolo asi v najlepšej lokalite akú sme si len mohli vybrať. Komunikácia hostiteľa bola veľmi rýchla. Určite tento byt odporúčam a veľmi rád sa presne vrátim aj na najbližšej návšteve Budapešti.",
  },
  {
    id: "2",
    klientMeno: "Kamil",
    klientPriezvisko: "Elinucni",
    klientMesto: "Bahía Blanca, Argentína",
    klientDatum: "3.9 2025",
    klientAkoDlho: "Pobyt trval jednu noc",
    klientFotky: "/muz8.avif",
    klientHodnotenieVlaste: "4.21",
    klientHodnotenie:
      "Apartmán bol veľmi čistý a pohodlný, lokalita skvelá na prechádzky po centre Paríža.",
  },
  {
    id: "3",
    klientMeno: "Anna",
    klientPriezvisko: "Novakova",
    klientMesto: "Bratislava, Slovensko",
    klientDatum: "23.4 2012",
    klientAkoDlho: "Pobyt trval tri dni",
    klientFotky: "/zena9.avif",
    klientHodnotenieVlaste: "4.80",
    klientHodnotenie:
      "Úžasná hostiteľka, všetko vysvetlila a odporučila miestne reštaurácie.",
  },
  {
    id: "4",
    klientMeno: "Peter",
    klientPriezvisko: "Kovac",
    klientMesto: "Praha, Česká republika",
    klientDatum: "23.5 2012",
    klientAkoDlho: "Pobyt trval päť nocí",
    klientFotky: "/muz5.jpg",
    klientHodnotenieVlaste: "4.52",
    klientHodnotenie:
      "Pekný výhľad na more, pokojná ulica a všetko po ruke.",
  },
  {
    id: "5",
    klientMeno: "Lucia",
    klientPriezvisko: "Horvathova",
    klientMesto: "Viedeň, Rakúsko",
    klientDatum:"29.2 2020",
    klientAkoDlho: "Pobyt trval dva dni",
    klientFotky: "/zena1.jpg",
    klientHodnotenieVlaste: "4.90",
    klientHodnotenie:
      "Byt mal všetko, čo sme potrebovali  kuchyňu, klimatizáciu a rýchly internet.",
  },
  {
    id: "6",
    klientMeno: "Martin",
    klientPriezvisko: "Siska",
    klientMesto: "Kodaň, Dánsko",
    klientDatum: "13.2 2023",
    klientAkoDlho: "Pobyt trval štyri dni",
       klientFotky: "/muz9.avif",
    klientHodnotenieVlaste: "4.70",
    klientHodnotenie:
      "Bývanie bolo blízko stanice metra, ideálne na výlety po Ríme.",
  },
  {
    id: "7",
    klientMeno: "Petra",
    klientPriezvisko: "Mlynarova",
    klientMesto: "Londýn, UK",
    klientDatum: "09.11 2024",
    klientAkoDlho: "Pobyt trval sedem nocí",
       klientFotky: "/muz9.avif",
    klientHodnotenieVlaste: "5.00",
    klientHodnotenie:
      "Veľmi príjemná komunikácia, hostiteľ ochotný a flexibilný s check-inom.",
  },
  {
    id: "8",
    klientMeno: "Filip",
    klientPriezvisko: "Novotny",
    klientMesto: "Paríž, Francúzsko",
    klientDatum: "12.10 2025",
    klientAkoDlho: "Pobyt trval tri dni",
    klientFotky: "/muz9.avif",
    klientHodnotenieVlaste: "4.60",
    klientHodnotenie:
      "Izba mala moderný dizajn a pohodlnú posteľ, presne ako na fotkách.",
  },
  ]


     },
    //  

  { autor:"A",
    
    id: "2BB", krajina: "Slovensko", kraj: "Bratislavský", location: "Bratislava", name: "Apartmán Modrý", hodnotenie: "4,82", cena: 95,
     fotky: ["/2.webp", "/2.webp","/2.webp","/2.webp"],typ: "2-izbový byt",    filter: "mesto", premia: "ano",

     popisek: "Užite si relax na tomto pokojnom mieste v tesnej blízkosti malebného lesoparku, s výbornou dostupnosťou do centra mesta. Byt sa nachádza na 3. poschodí modernej novostavby s výťahom a bezplatným parkovaním v garáži, čo zaručuje pohodlie pre vás aj vaše vozidlo. Interiér je kompletne zariadený a vybavený všetkým potrebným pre komfortný pobyt. Vonkajšie žalúzie umožňujú regulovať svetlo a súkromie, klimatizácia zase príjemnú teplotu počas horúcich dní. Z priestrannej terasy sa otvára nádherný výhľad na park a panorámu Bratislavy ideálne miesto na rannú kávu alebo večerný oddych. Do centra sa dostanete pohodlne: len 7 minút pešo k autobusovej zastávke alebo 5 minút taxíkom. V byte sa budete cítiť ako doma  pohodlne, bezpečne a úplne uvoľnene.",

    priestor:"Tento priestranný a svetlý byt je rozdelený na spoločné priestory  kuchyňu s kompletným vybavením, obývaciu časť s možnosťou prístelky, WC a terasu  a samostatnú spálňu s prístupom do kúpeľne. Terasa je prepojená aj so spálňou, ponúka príjemné posedenie a očarujúce výhľady na Bratislavu a blízky park.",

    poloha:"Okolie rezidencie je výnimočne pokojné a tiché, no zároveň živé, s množstvom reštaurácií rôznych kuchýň a rušnejších barov. Hlavné atrakcie mesta sú dostupné pešo.",
  
    upratovanie:"Profesionálna upratovacia služba zabezpečí, že byt bude pred vaším príchodom a po odchode dôkladne uprataný. Pri pobytoch nad 5 nocí je zahrnutá bezplatná výmena posteľnej bielizne a uterákov každých 5 nocí (požiadajte aspoň 24 hodín vopred). Dodatočné upratovanie alebo výmena je možná za príplatok.",

    pravidla:"Fajčenie v byte nie je povolené. V prípade porušenia sa účtuje poplatok 200 € za profesionálne čistenie ozónom.",

    prehosti:"Prístup pre hostí",

    hodnota:{
  cistota:"5.0",
  vystiznost:"4.7",
  prichod:"4.5",
  komunikacia:"4.6",
  poloha:"4.8",
  adekvatnost:"4.4",
},

vybavenie: [
      "parkovanie",
      "kuchyna",
      "WiFi",
      "klimatizacia",
      "televizia",
      "mikrovlnna_rura",
      "chladnicka",
      "pracka",
      "tepla_voda",
      "hostitel",
      "bezplatne_parkovanie_na_ulici",
      "pobyt",
      "vesiak",
      "vankus",
      "priestor"
],
 
info: { 
    hostia: "5 hostí",
    spalne: "3 spálne",
    lozka: "4 lôžka",
    kupelna: "2 kúpeľne",
    reference: 72,
    hodnotenie: "4.97",
    lokalita: "Byt v lokalite Bratislava",
    krajina: "Slovensko"
},

idecka:["1AA", "4CC", "6DD", "8EE", "9FF", "12GG"]
   
   },

  { autor:"B",
    id: "3BB", krajina: "Slovensko", kraj: "Bratislavský", location: "Bratislava", name: "Apartmán Horský", hodnotenie: "4,73", cena: 110,
     fotky: ["/3.webp", "/3.webp","/3.webp","/3.webp"],typ: "1-izbový byt",ideal:"predvoch",
   },


  { autor:"B",
    id: "4BB", krajina: "Slovensko", kraj: "Bratislavský", location: "Bratislava", name: "Apartmán City View", hodnotenie: "4,65", cena: 130,
     fotky: ["/4.webp", "/4.webp","/4.webp","/4.webp"],typ: "3-izbový byt",    filter: "mesto",
   },


  { autor:"C",
    id: "5BB", krajina: "Slovensko", kraj: "Bratislavský", location: "Bratislava", name: "Ubytovanie Záhrada", hodnotenie: "4,90", cena: 105,
     fotky: ["/5.webp", "/5.webp","/5.webp","/5.webp"],typ: "4-izbový byt",    filter: "mesto",
   },


  { autor:"C",
    id: "6BB", krajina: "Slovensko", kraj: "Bratislavský", location: "Bratislava", name: "Apartmán Panorama", hodnotenie: "4,78", cena: 125,
     fotky: ["/6.webp", "/6.webp","/6.webp","/6.webp"],typ: "2-izbový byt"
  },
  { autor:"A",

    id: "7BB", krajina: "Slovensko", kraj: "Bratislavský", location: "Bratislava", name: "Apartmán Panorama", hodnotenie: "4,78", cena: 125,
     fotky: ["/6.webp", "/6.webp","/6.webp","/6.webp"],typ: "3-izbový byt",ideal:"predvoch",
  },
  {autor:"C",
     id: "8BB", krajina: "Slovensko", kraj: "Bratislavský", location: "Bratislava", name: "Apartmán Panorama", hodnotenie: "4,78", cena: 125,
     fotky: ["/6.webp", "/6.webp","/6.webp","/6.webp"],typ: "2-izbový byt",    filter: "mesto",
  },
  {autor:"G",
     id: "9BB", krajina: "Slovensko", kraj: "Bratislavský", location: "Bratislava", name: "Apartmán Panorama", hodnotenie: "4,78", cena: 125,
     fotky: ["/6.webp", "/6.webp","/6.webp","/6.webp"],typ: "2-izbový byt"
  },
  { id: "10BB", krajina: "Slovensko", kraj: "Bratislavský", location: "Bratislava", name: "Apartmán Panorama", hodnotenie: "4,78", cena: 125,
     fotky: ["/6.webp", "/6.webp","/6.webp","/6.webp"],typ: "3-izbový byt",    filter: "mesto", premia: "ano",autor:"I"
  },

      // Bratislavský kraj - Pezinok
      {autor:"C",
         id: "1BP", krajina: "Slovensko", kraj: "Bratislavský", location: "Pezinok", name: "Apartmán Lesný", hodnotenie: "4,85", cena: 100,
        fotky: ["/8.webp", "/8.webp","/8.webp","/8.webp"]
       },
  { id: "2BP", krajina: "Slovensko", kraj: "Bratislavský", location: "Pezinok", name: "Apartmán Slnečný", hodnotenie: "4,92", cena: 115 ,
    fotky: ["/8.webp", "/8.webp","/8.webp","/8.webp"],autor:"I"
  },
  { id: "3BP", krajina: "Slovensko", kraj: "Bratislavský", location: "Pezinok", name: "Izba Modrý", hodnotenie: "4,78", cena: 90,
    fotky: ["/9.webp", "/9.webp","/9.webp","/9.webp"],autor:"I"
   },
  { id: "4BP", krajina: "Slovensko", kraj: "Bratislavský", location: "Pezinok", name: "Apartmán Panorama", hodnotenie: "4,88", cena: 125,
    fotky: ["/10.webp", "/10.webp","/10.webp","/10.webp"],premia: "ano",autor:"I"
   },
  { id: "5BP", krajina: "Slovensko", kraj: "Bratislavský", location: "Pezinok", name: "Ubytovanie City View", hodnotenie: "4,81", cena: 110 ,
    fotky: ["/11.webp", "/11.webp","/11.webp","/11.webp"],autor:"I"
  },
  { id: "6BP", krajina: "Slovensko", kraj: "Bratislavský", location: "Pezinok", name: "Apartmán Záhrada", hodnotenie: "4,79", cena: 95,
    fotky: ["/12.webp", "/12.webp","/12.webp","/12.webp"],autor:"I"
   },

      // Bratislavský kraj - Senec
  { id: "1BS", krajina: "Slovensko", kraj: "Bratislavský", location: "Senec", name: "Ubytovanie Jazero", hodnotenie: "4,87", cena: 105,
    fotky: ["/13.webp", "/13.webp","/13.webp","/13.webp"],ideal:"predvoch",premia: "ano",autor:"G"
   },
  { id: "2BS", krajina: "Slovensko", kraj: "Bratislavský", location: "Senec", name: "Apartmán Slnečný", hodnotenie: "4,80", cena: 95,
    fotky: ["/12.webp", "/12.webp","/12.webp","/12.webp"],autor:"G"
   },
  { id: "3BS", krajina: "Slovensko", kraj: "Bratislavský", location: "Senec", name: "Apartmán Modrý", hodnotenie: "4,92", cena: 120,
    fotky: ["/15.webp", "/15.webp","/15.webp","/15.webp"],autor:"G"
   },
  { id: "4BS", krajina: "Slovensko", kraj: "Bratislavský", location: "Senec", name: "Ubytovanie Panorama", hodnotenie: "4,75", cena: 110,
    fotky: ["/16.webp", "/16.webp","/16.webp","/16.webp"],autor:"G"
   },
  { id: "5BS", krajina: "Slovensko", kraj: "Bratislavský", location: "Senec", name: "Apartmán Záhrada", hodnotenie: "4,83", cena: 100,
      fotky: ["/17.webp", "/17.webp","/17.webp","/17.webp"],ideal:"predvoch",autor:"G"
   },
  { id: "6BS", krajina: "Slovensko", kraj: "Bratislavský", location: "Senec", name: "Izba City View", hodnotenie: "4,89", cena: 115,
      fotky: ["/18.webp", "/18.webp","/18.webp","/18.webp"],autor:"G"
   },

      
      // Malacky
  { id: "1BM", krajina: "Slovensko", kraj: "Bratislavský", location: "Malacky", name: "Apartmán Lesný", hodnotenie: "4,82", cena: 100 ,
      fotky: ["/19.webp", "/19.webp","/19.webp","/19.webp"],autor:"L"
  },
  { id: "2BM", krajina: "Slovensko", kraj: "Bratislavský", location: "Malacky", name: "Apartmán Slnečný", hodnotenie: "4,88", cena: 110 ,
     fotky: ["/20.webp", "/20.webp","/20.webp","/20.webp"],ideal:"predvoch",autor:"L"
  },
  { id: "3BM", krajina: "Slovensko", kraj: "Bratislavský", location: "Malacky", name: "Apartmán Modrý", hodnotenie: "4,76", cena: 95,
         fotky: ["/21.webp", "/21.webp","/21.webp","/21.webp"],premia: "ano",autor:"L"
   },
  { id: "4BM", krajina: "Slovensko", kraj: "Bratislavský", location: "Malacky", name: "Apartmán Panorama", hodnotenie: "4,91", cena: 120,
     fotky: ["/22.webp", "/22.webp","/22.webp","/22.webp"],autor:"L"
   },
  { id: "5BM", krajina: "Slovensko", kraj: "Bratislavský", location: "Malacky", name: "Apartmán Záhrada", hodnotenie: "4,79", cena: 105,
    fotky: ["/23.webp", "/23.webp","/23.webp","/23.webp"],autor:"L"
   },
  { id: "6BM", krajina: "Slovensko", kraj: "Bratislavský", location: "Malacky", name: "Apartmán City View", hodnotenie: "4,85", cena: 115,
    fotky: ["/25.webp", "/25.webp","/25.webp","/25.webp"],autor:"L"
   },

  // Stupava
  { id: "1ST", krajina: "Slovensko", kraj: "Bratislavský", location: "Stupava", name: "Apartmán Jazero", hodnotenie: "4,87", cena: 110,
    fotky: ["/26.webp", "/26.webp","/26.webp","/26.webp"],ideal:"predvoch",autor:"A"
   },
  { id: "2ST", krajina: "Slovensko", kraj: "Bratislavský", location: "Stupava", name: "Apartmán Slnečný", hodnotenie: "4,83", cena: 100 ,
    fotky: ["/27.webp", "/27.webp","/27.webp","/27.webp"],    filter: "mesto",autor:"A"
  },
  { id: "3ST", krajina: "Slovensko", kraj: "Bratislavský", location: "Stupava", name: "Apartmán Modrý", hodnotenie: "4,90", cena: 115 ,
       fotky: ["/22.webp", "/22.webp","/22.webp","/22.webp"],autor:"A"
  },
  { id: "4ST", krajina: "Slovensko", kraj: "Bratislavský", location: "Stupava", name: "Apartmán Panorama", hodnotenie: "4,78", cena: 105,
        fotky: ["/6.webp", "/6.webp","/6.webp","/6.webp"],autor:"A"
  }
  ,
  { id: "5ST", krajina: "Slovensko", kraj: "Bratislavský", location: "Stupava", name: "Apartmán Záhrada", hodnotenie: "4,81", cena: 95, 
     fotky: ["/16.webp", "/16.webp","/16.webp","/16.webp"],autor:"A"

  },
  { id: "6ST", krajina: "Slovensko", kraj: "Bratislavský", location: "Stupava", name: "Apartmán City View", hodnotenie: "4,86", cena: 120,
        fotky: ["/8.webp", "/8.webp","/8.webp","/8.webp"],premia: "ano",autor:"A"
   },

      // Bratislavský kraj - Bernolákovo
     { id: "1BE", krajina: "Slovensko", kraj: "Bratislavský", location: "Bernolákovo", name: "Apartmán Lesný", hodnotenie: "4,84", cena: 105,
        fotky: ["/20.webp", "/20.webp","/20.webp","/20.webp"],autor:"A"
      },

  { id: "2BE", krajina: "Slovensko", kraj: "Bratislavský", location: "Bernolákovo", name: "Apartmán Slnečný", hodnotenie: "4,90", cena: 110 ,
      fotky: ["/15.webp", "/15.webp","/15.webp","/15.webp"],autor:"C"
  }
  ,

  { id: "3BE", krajina: "Slovensko", kraj: "Bratislavský", location: "Bernolákovo", name: "Apartmán Modrý", hodnotenie: "4,77", cena: 95,
        fotky: ["/8.webp", "/8.webp","/8.webp","/8.webp"] ,ideal:"predvoch",autor:"C"
  },

  { id: "4BE", krajina: "Slovensko", kraj: "Bratislavský", location: "Bernolákovo", name: "Apartmán Panorama", hodnotenie: "4,88", cena: 120,
       fotky: ["/4.webp", "/4.webp","/4.webp","/4.webp"],ideal:"predvoch",autor:"C"
   },

  { id: "5BE", krajina: "Slovensko", kraj: "Bratislavský", location: "Bernolákovo", name: "Apartmán Záhrada", hodnotenie: "4,81", cena: 100, 
fotky: ["/20.webp", "/20.webp","/20.webp","/20.webp"],autor:"C"
  },

  { id: "6BE", krajina: "Slovensko", kraj: "Bratislavský", location: "Bernolákovo", name: "Apartmán City View", hodnotenie: "4,85", cena: 115, 
  fotky: ["/22.webp", "/22.webp","/22.webp","/22.webp"],premia: "ano",autor:"C"
  },

  // Šamorín
  { id: "1SA", krajina: "Slovensko", kraj: "Bratislavský", location: "Šamorín", name: "Apartmán Jazero", hodnotenie: "4,87", cena: 110, 
 fotky: ["/27.webp", "/27.webp","/27.webp","/27.webp"],autor:"C"
  },

  { id: "2SA", krajina: "Slovensko", kraj: "Bratislavský", location: "Šamorín", name: "Apartmán Slnečný", hodnotenie: "4,83", cena: 100, 
 fotky: ["/17.webp", "/17.webp","/17.webp","/17.webp"],autor:"C"
  },

  { id: "3SA", krajina: "Slovensko", kraj: "Bratislavský", location: "Šamorín", name: "Apartmán Modrý", hodnotenie: "4,90", cena: 115,
   fotky: ["/4.webp", "/4.webp","/4.webp","/4.webp"],premia: "ano",autor:"C"
   },

  { id: "4SA", krajina: "Slovensko", kraj: "Bratislavský", location: "Šamorín", name: "Apartmán Panorama", hodnotenie: "4,78", cena: 105, 
fotky: ["/25.webp", "/25.webp","/25.webp","/25.webp"],ideal:"predvoch",autor:"C"
  },

  { id: "5SA", krajina: "Slovensko", kraj: "Bratislavský", location: "Šamorín", name: "Apartmán Záhrada", hodnotenie: "4,81", cena: 95 ,
fotky: ["/20.webp", "/20.webp","/20.webp","/20.webp"],autor:"A"
  },

  { id: "6SA", krajina: "Slovensko", kraj: "Bratislavský", location: "Šamorín", name: "Apartmán City View", hodnotenie: "4,86", cena: 120,
   fotky: ["/4.webp", "/4.webp","/4.webp","/4.webp"],autor:"A"
   },

  // Svätý Jur
  { id: "1SJ", krajina: "Slovensko", kraj: "Bratislavský", location: "Svätý Jur", name: "Apartmán Lesný", hodnotenie: "4,82", cena: 100,
fotky: ["/4.webp", "/4.webp","/4.webp","/4.webp"],ideal:"predvoch",autor:"A"
   },
  { id: "2SJ", krajina: "Slovensko", kraj: "Bratislavský", location: "Svätý Jur", name: "Apartmán Slnečný", hodnotenie: "4,88", cena: 110,
    fotky: ["/3.webp", "/3.webp","/3.webp","/3.webp"],premia: "ano",autor:"A"
   },
  { id: "3SJ", krajina: "Slovensko", kraj: "Bratislavský", location: "Svätý Jur", name: "Apartmán Modrý", hodnotenie: "4,76", cena: 95,
    fotky: ["/1.webp", "/1.webp","/1.webp","/1.webp"],bazen:"ano",autor:"A"
  },
  { id: "4SJ", krajina: "Slovensko", kraj: "Bratislavský", location: "Svätý Jur", name: "Apartmán Panorama", hodnotenie: "4,91", cena: 120,
  fotky: ["/5.webp", "/5.webp","/5.webp","/5.webp"],ideal:"predvoch",autor:"A"
   },
  { id: "5SJ", krajina: "Slovensko", kraj: "Bratislavský", location: "Svätý Jur", name: "Apartmán Záhrada", hodnotenie: "4,79", cena: 105,
   fotky: ["/10.webp", "/10.webp","/10.webp","/10.webp"],autor:"A"
   },
  { id: "6SJ", krajina: "Slovensko", kraj: "Bratislavský", location: "Svätý Jur", name: "Apartmán City View", hodnotenie: "4,85", cena: 115,
fotky: ["/11.webp", "/11.webp","/11.webp","/11.webp"],premia: "ano",autor:"A"
   },
   // BRATISLAVA
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
  //  KOSICE
      // Košický kraj
     { id: "1KK", krajina: "Slovensko", kraj: "Košický", location: "Košice", name: "Apartmán City View", hodnotenie: "4,88", cena: 120,
 fotky: ["/27.webp", "/27.webp","/27.webp","/27.webp"],filter: "mesto",ideal:"predvoch",autor:"A"
      },
  { id: "2KK", krajina: "Slovensko", kraj: "Košický", location: "Košice", name: "Apartmán Slnečný", hodnotenie: "4,81", cena: 110,
fotky: ["/25.webp", "/25.webp","/25.webp","/25.webp"],filter: "mesto",premia: "ano",bazen:"ano",autor:"A"
  },
  { id: "3KK", krajina: "Slovensko", kraj: "Košický", location: "Košice", name: "Apartmán Panorama", hodnotenie: "4,90", cena: 125,
   fotky: ["/15.webp", "/15.webp","/15.webp","/15.webp"],filter: "mesto",autor:"D"
   },
  { id: "4KK", krajina: "Slovensko", kraj: "Košický", location: "Košice", name: "Apartmán Modrý", hodnotenie: "4,77", cena: 115,
  fotky: ["/8.webp", "/8.webp","/8.webp","/8.webp"],filter: "mesto",ideal:"predvoch",autor:"A"
   },
  { id: "5KK", krajina: "Slovensko", kraj: "Košický", location: "Košice", name: "Apartmán Lesný", hodnotenie: "4,84", cena: 105,
  fotky: ["/3.webp", "/3.webp","/3.webp","/3.webp"],filter: "mesto",premia: "ano",autor:"A"
   },
  { id: "6KK", krajina: "Slovensko", kraj: "Košický", location: "Košice", name: "Apartmán Záhrada", hodnotenie: "4,85", cena: 110,
fotky: ["/11.webp", "/11.webp","/11.webp","/11.webp"],filter: "mesto",premia: "ano",autor:"A"
   },

   // kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
  //  KOSICE
  // Michalovce
  { id: "1KM", krajina: "Slovensko", kraj: "Košický", location: "Michalovce", name: "Apartmán Jazero", hodnotenie: "4,86", cena: 100,
fotky: ["/25.webp", "/25.webp","/25.webp","/25.webp"],ideal:"predvoch",bazen:"ano",autor:"D"
   },
  { id: "2KM", krajina: "Slovensko", kraj: "Košický", location: "Michalovce", name: "Apartmán Slnečný", hodnotenie: "4,89", cena: 105,
  fotky: ["/15.webp", "/15.webp","/15.webp","/15.webp"],premia: "ano",autor:"D"
   },
  { id: "3KM", krajina: "Slovensko", kraj: "Košický", location: "Michalovce", name: "Apartmán Modrý", hodnotenie: "4,82", cena: 95,
fotky: ["/2.webp", "/2.webp","/2.webp","/2.webp"],ideal:"predvoch",autor:"D"
   },
  { id: "4KM", krajina: "Slovensko", kraj: "Košický", location: "Michalovce", name: "Apartmán Panorama", hodnotenie: "4,91", cena: 110,
  fotky: ["/4.webp", "/4.webp","/4.webp","/4.webp"],autor:"D"
   },
  { id: "5KM", krajina: "Slovensko", kraj: "Košický", location: "Michalovce", name: "Apartmán Záhrada", hodnotenie: "4,80", cena: 100,
  fotky: ["/5.webp", "/5.webp","/5.webp","/5.webp"],autor:"D"
  },
  { id: "6KM", krajina: "Slovensko", kraj: "Košický", location: "Michalovce", name: "Apartmán City View", hodnotenie: "4,85", cena: 115,
fotky: ["/15.webp", "/15.webp","/15.webp","/15.webp"],premia: "ano",autor:"D"
   },
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
  //  KOSICE
  // Trebišov
  { id: "1KT", krajina: "Slovensko", kraj: "Košický", location: "Trebišov", name: "Apartmán Lesný", hodnotenie: "4,87", cena: 105,
  fotky: ["/8.webp", "/8.webp","/8.webp","/8.webp"],ideal:"predvoch",bazen:"ano",autor:"M"
   },
  { id: "2KT", krajina: "Slovensko", kraj: "Košický", location: "Trebišov", name: "Apartmán Slnečný", hodnotenie: "4,82", cena: 100,
   fotky: ["/15.webp", "/15.webp","/15.webp","/15.webp"],autor:"M"
   },
  { id: "3KT", krajina: "Slovensko", kraj: "Košický", location: "Trebišov", name: "Apartmán Modrý", hodnotenie: "4,89", cena: 110,
    fotky: ["/15.webp", "/15.webp","/15.webp","/15.webp"],premia: "ano",autor:"M"
   },
  { id: "4KT", krajina: "Slovensko", kraj: "Košický", location: "Trebišov", name: "Apartmán Panorama", hodnotenie: "4,78", cena: 95,
  fotky: ["/15.webp", "/15.webp","/15.webp","/15.webp"],autor:"M"
   },
  { id: "5KT", krajina: "Slovensko", kraj: "Košický", location: "Trebišov", name: "Apartmán Záhrada", hodnotenie: "4,84", cena: 105,
fotky: ["/25.webp", "/25.webp","/25.webp","/25.webp"],premia: "ano",autor:"M"
   },
  { id: "6KT", krajina: "Slovensko", kraj: "Košický", location: "Trebišov", name: "Apartmán City View", hodnotenie: "4,85", cena: 115,
  fotky: ["/5.webp", "/5.webp","/5.webp","/5.webp"],ideal:"predvoch",autor:"M"
   },
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
  //  KOSICE
  // Spišská Nová Ves
  { id: "1KSN", krajina: "Slovensko", kraj: "Košický", location: "Spišská Nová Ves", name: "Apartmán Jazero", hodnotenie: "4,86", cena: 110,
  fotky: ["/4.webp", "/4.webp","/4.webp","/4.webp"],bazen:"ano",autor:"A"
   },
  { id: "2KSN", krajina: "Slovensko", kraj: "Košický", location: "Spišská Nová Ves", name: "Apartmán Slnečný", hodnotenie: "4,88", cena: 105,
 fotky: ["/27.webp", "/27.webp","/27.webp","/27.webp"],autor:"A"
   },
  { id: "3KSN", krajina: "Slovensko", kraj: "Košický", location: "Spišská Nová Ves", name: "Apartmán Modrý", hodnotenie: "4,90", cena: 115,
  fotky: ["/3.webp", "/3.webp","/3.webp","/3.webp"],autor:"A"
   },
  { id: "4KSN", krajina: "Slovensko", kraj: "Košický", location: "Spišská Nová Ves", name: "Apartmán Panorama", hodnotenie: "4,79", cena: 100,
fotky: ["/5.webp", "/5.webp","/5.webp","/5.webp"],autor:"A"
   },
  { id: "5KSN", krajina: "Slovensko", kraj: "Košický", location: "Spišská Nová Ves", name: "Apartmán Záhrada", hodnotenie: "4,83", cena: 105,
   fotky: ["/10.webp", "/10.webp","/10.webp","/10.webp"],premia: "ano",autor:"A"
   },
  { id: "6KSN", krajina: "Slovensko", kraj: "Košický", location: "Spišská Nová Ves", name: "Apartmán City View", hodnotenie: "4,85", cena: 120,
 fotky: ["/8.webp", "/8.webp","/8.webp","/8.webp"],ideal:"predvoch",autor:"A"
   },
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
  //  KOSICE
  // Gelnica
  { id: "1KG", krajina: "Slovensko", kraj: "Košický", location: "Gelnica", name: "Apartmán Lesný", hodnotenie: "4,84", cena: 100,
fotky: ["/25.webp", "/25.webp","/25.webp","/25.webp"],premia: "ano",autor:"A"
   },
  { id: "2KG", krajina: "Slovensko", kraj: "Košický", location: "Gelnica", name: "Apartmán Slnečný", hodnotenie: "4,87", cena: 105,
  fotky: ["/3.webp", "/3.webp","/3.webp","/3.webp"],ideal:"predvoch",autor:"A"
   },
  { id: "3KG", krajina: "Slovensko", kraj: "Košický", location: "Gelnica", name: "Apartmán Modrý", hodnotenie: "4,80", cena: 95,
   fotky: ["/15.webp", "/15.webp","/15.webp","/15.webp"],bazen:"ano",autor:"A"
   },
  { id: "4KG", krajina: "Slovensko", kraj: "Košický", location: "Gelnica", name: "Apartmán Panorama", hodnotenie: "4,89", cena: 110,
  fotky: ["/5.webp", "/5.webp","/5.webp","/5.webp"],premia: "ano",autor:"A"
   },
  { id: "5KG", krajina: "Slovensko", kraj: "Košický", location: "Gelnica", name: "Apartmán Záhrada", hodnotenie: "4,82", cena: 100,
  fotky: ["/4.webp", "/4.webp","/4.webp","/4.webp"],autor:"A"
   },
  { id: "6KG", krajina: "Slovensko", kraj: "Košický", location: "Gelnica", name: "Apartmán City View", hodnotenie: "4,85", cena: 115,
    fotky: ["/27.webp", "/27.webp","/27.webp","/27.webp"],autor:"A"
   },
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
  //  KOSICE
  // Rožňava
  { id: "1KR", krajina: "Slovensko", kraj: "Košický", location: "Rožňava", name: "Apartmán Jazero", hodnotenie: "4,86", cena: 110,
 fotky: ["/27.webp", "/27.webp","/27.webp","/27.webp"],premia: "ano",autor:"C"
   },
  { id: "2KR", krajina: "Slovensko", kraj: "Košický", location: "Rožňava", name: "Apartmán Slnečný", hodnotenie: "4,88", cena: 105,
   fotky: ["/15.webp", "/15.webp","/15.webp","/15.webp"],autor:"C"
   },
  { id: "3KR", krajina: "Slovensko", kraj: "Košický", location: "Rožňava", name: "Apartmán Modrý", hodnotenie: "4,90", cena: 115,
  fotky: ["/15.webp", "/15.webp","/15.webp","/15.webp"],autor:"C"
   },
  { id: "4KR", krajina: "Slovensko", kraj: "Košický", location: "Rožňava", name: "Apartmán Panorama", hodnotenie: "4,79", cena: 100,
fotky: ["/2.webp", "/2.webp","/2.webp","/2.webp"],autor:"C"
   },
  { id: "5KR", krajina: "Slovensko", kraj: "Košický", location: "Rožňava", name: "Apartmán Záhrada", hodnotenie: "4,83", cena: 105,
     fotky: ["/5.webp", "/5.webp","/5.webp","/5.webp"],bazen:"ano",autor:"C"
   },
  { id: "6KR", krajina: "Slovensko", kraj: "Košický", location: "Rožňava", name: "Apartmán City View", hodnotenie: "4,85", cena: 120,
 fotky: ["/8.webp", "/8.webp","/8.webp","/8.webp"],premia: "ano",autor:"C"
   },
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
  //  KOSICE
  // Moldava nad Bodvou
  { id: "1KMB", krajina: "Slovensko", kraj: "Košický", location: "Moldava nad Bodvou", name: "Apartmán Lesný", hodnotenie: "4,84", cena: 100,
fotky: ["/20.webp", "/20.webp","/20.webp","/20.webp"],autor:"C"
   },
  { id: "2KMB", krajina: "Slovensko", kraj: "Košický", location: "Moldava nad Bodvou", name: "Apartmán Slnečný", hodnotenie: "4,87", cena: 105,
  fotky: ["/15.webp", "/15.webp","/15.webp","/15.webp"],premia: "ano",autor:"C"
   },
  { id: "3KMB", krajina: "Slovensko", kraj: "Košický", location: "Moldava nad Bodvou", name: "Apartmán Modrý", hodnotenie: "4,80", cena: 95,
fotky: ["/5.webp", "/5.webp","/5.webp","/5.webp"],autor:"C"
   },
  { id: "4KMB", krajina: "Slovensko", kraj: "Košický", location: "Moldava nad Bodvou", name: "Apartmán Panorama", hodnotenie: "4,89", cena: 110,autor:"C",
 fotky: ["/13.webp", "/13.webp","/13.webp","/13.webp"],ideal:"predvoch",autor:"C"
   },
  { id: "5KMB", krajina: "Slovensko", kraj: "Košický", location: "Moldava nad Bodvou", name: "Apartmán Záhrada", hodnotenie: "4,82", cena: 100,autor:"C",
  fotky: ["/5.webp", "/5.webp","/5.webp","/5.webp"],premia: "ano",autor:"C"
   },
  { id: "6KMB", krajina: "Slovensko", kraj: "Košický", location: "Moldava nad Bodvou", name: "Apartmán City View", hodnotenie: "4,85", cena: 116,
fotky: ["/20.webp", "/20.webp","/20.webp","/20.webp"],premia: "ano",autor:"C"
   },
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
  //  KOSICE
// TRNAVSKY
      // Trnava
  { id: "1TT", krajina: "Slovensko", kraj: "Trnavský", location: "Trnava", name: "Apartmán City View", hodnotenie: "4,88", cena: 120,
  fotky: ["/15.webp", "/15.webp","/15.webp","/15.webp"],filter: "mesto",bazen:"ano",autor:"D"
   },
  { id: "2TT", krajina: "Slovensko", kraj: "Trnavský", location: "Trnava", name: "Apartmán Slnečný", hodnotenie: "4,81", cena: 110,
fotky: ["/20.webp", "/20.webp","/20.webp","/20.webp"],filter: "mesto",autor:"D"
   },
  { id: "3TT", krajina: "Slovensko", kraj: "Trnavský", location: "Trnava", name: "Apartmán Panorama", hodnotenie: "4,90", cena: 125,
 fotky: ["/19.webp", "/19.webp","/19.webp","/19.webp"],filter: "mesto",autor:"D"
   },
  { id: "4TT", krajina: "Slovensko", kraj: "Trnavský", location: "Trnava", name: "Apartmán Modrý", hodnotenie: "4,77", cena: 115,
fotky: ["/25.webp", "/25.webp","/25.webp","/25.webp"],filter: "mesto",autor:"D"
   },
  { id: "5TT", krajina: "Slovensko", kraj: "Trnavský", location: "Trnava", name: "Apartmán Lesný", hodnotenie: "4,84", cena: 105,
fotky: ["/11.webp", "/11.webp","/11.webp","/11.webp"],filter: "mesto",autor:"D"
   },
  { id: "6TT", krajina: "Slovensko", kraj: "Trnavský", location: "Trnava", name: "Apartmán Záhrada", hodnotenie: "4,85", cena: 110,
  fotky: ["/15.webp", "/15.webp","/15.webp","/15.webp"],filter: "mesto",autor:"D"
   },
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
  //  KOSICE
  // Piešťany
  { id: "1TP", krajina: "Slovensko", kraj: "Trnavský", location: "Piešťany", name: "Apartmán Jazero", hodnotenie: "4,86", cena: 100,
    fotky: ["/27.webp", "/27.webp","/27.webp","/27.webp"],ideal:"predvoch",autor:"A"
   },
  { id: "2TP", krajina: "Slovensko", kraj: "Trnavský", location: "Piešťany", name: "Apartmán Slnečný", hodnotenie: "4,89", cena: 105,
fotky: ["/15.webp", "/15.webp","/15.webp","/15.webp"],autor:"A"
   },
  { id: "3TP", krajina: "Slovensko", kraj: "Trnavský", location: "Piešťany", name: "Apartmán Modrý", hodnotenie: "4,82", cena: 95,
 fotky: ["/27.webp", "/27.webp","/27.webp","/27.webp"],autor:"A"
   },
  { id: "4TP", krajina: "Slovensko", kraj: "Trnavský", location: "Piešťany", name: "Apartmán Panorama", hodnotenie: "4,91", cena: 110,
  fotky: ["/5.webp", "/5.webp","/5.webp","/5.webp"],autor:"A"
   },
  { id: "5TP", krajina: "Slovensko", kraj: "Trnavský", location: "Piešťany", name: "Apartmán Záhrada", hodnotenie: "4,80", cena: 100,
 fotky: ["/7.webp", "/7.webp","/7.webp","/7.webp"],autor:"A"
   },
  { id: "6TP", krajina: "Slovensko", kraj: "Trnavský", location: "Piešťany", name: "Apartmán City View", hodnotenie: "4,85", cena: 115,
fotky: ["/20.webp", "/20.webp","/20.webp","/20.webp"],autor:"A"
   },
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
  //  KOSICE
  // Hlohovec
  { id: "1TH", krajina: "Slovensko", kraj: "Trnavský", location: "Hlohovec", name: "Apartmán Lesný", hodnotenie: "4,87", cena: 105,
fotky: ["/25.webp", "/25.webp","/25.webp","/25.webp"],bazen:"ano",autor:"B"
   },
  { id: "2TH", krajina: "Slovensko", kraj: "Trnavský", location: "Hlohovec", name: "Apartmán Slnečný", hodnotenie: "4,82", cena: 100,
fotky: ["/5.webp", "/5.webp","/5.webp","/5.webp"],autor:"B"
   },
  { id: "3TH", krajina: "Slovensko", kraj: "Trnavský", location: "Hlohovec", name: "Apartmán Modrý", hodnotenie: "4,89", cena: 110,
   fotky: ["/15.webp", "/15.webp","/15.webp","/15.webp"],autor:"B"
   },
  { id: "4TH", krajina: "Slovensko", kraj: "Trnavský", location: "Hlohovec", name: "Apartmán Panorama", hodnotenie: "4,78", cena: 95,
  fotky: ["/5.webp", "/5.webp","/5.webp","/5.webp"],autor:"B"
   },
  { id: "5TH", krajina: "Slovensko", kraj: "Trnavský", location: "Hlohovec", name: "Apartmán Záhrada", hodnotenie: "4,84", cena: 105,
  fotky: ["/5.webp", "/5.webp","/5.webp","/5.webp"],autor:"B"
   },
  { id: "6TH", krajina: "Slovensko", kraj: "Trnavský", location: "Hlohovec", name: "Apartmán City View", hodnotenie: "4,85", cena: 115,
fotky: ["/20.webp", "/20.webp","/20.webp","/20.webp"],autor:"B"
   },
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
  //  KOSICE
  // Senica
  { id: "1TS", krajina: "Slovensko", kraj: "Trnavský", location: "Senica", name: "Apartmán Jazero", hodnotenie: "4,86", cena: 110,
    fotky: ["/27.webp", "/27.webp","/27.webp","/27.webp"],ideal:"predvoch",autor:"E"
   },
  { id: "2TS", krajina: "Slovensko", kraj: "Trnavský", location: "Senica", name: "Apartmán Slnečný", hodnotenie: "4,88", cena: 105
,autor:"E",  fotky: ["/27.webp", "/27.webp","/27.webp","/27.webp"]
   },
  { id: "3TS", krajina: "Slovensko", kraj: "Trnavský", location: "Senica", name: "Apartmán Modrý", hodnotenie: "4,90", cena: 115,
  fotky: ["/5.webp", "/5.webp","/5.webp","/5.webp"],bazen:"ano",autor:"E"
   },
  { id: "4TS", krajina: "Slovensko", kraj: "Trnavský", location: "Senica", name: "Apartmán Panorama", hodnotenie: "4,79", cena: 100,
 fotky: ["/7.webp", "/7.webp","/7.webp","/7.webp"],autor:"E"
   },
  { id: "5TS", krajina: "Slovensko", kraj: "Trnavský", location: "Senica", name: "Apartmán Záhrada", hodnotenie: "4,83", cena: 105,
fotky: ["/20.webp", "/20.webp","/20.webp","/20.webp"],autor:"E"
   },
  { id: "6TS", krajina: "Slovensko", kraj: "Trnavský", location: "Senica", name: "Apartmán City View", hodnotenie: "4,85", cena: 120,
fotky: ["/15.webp", "/15.webp","/15.webp","/15.webp"],ideal:"predvoch",autor:"E"
   },
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
  //  KOSICE
  // Dunajská Streda
  { id: "1TD", krajina: "Slovensko", kraj: "Trnavský", location: "Dunajská Streda", name: "Apartmán Lesný", hodnotenie: "4,84", cena: 100,
  fotky: ["/4.webp", "/4.webp","/4.webp","/4.webp"],autor:"K"
   },
  { id: "2TD", krajina: "Slovensko", kraj: "Trnavský", location: "Dunajská Streda", name: "Apartmán Slnečný", hodnotenie: "4,87", cena: 105,
fotky: ["/20.webp", "/20.webp","/20.webp","/20.webp"],autor:"K"
   },
  { id: "3TD", krajina: "Slovensko", kraj: "Trnavský", location: "Dunajská Streda", name: "Apartmán Modrý", hodnotenie: "4,80", cena: 95,
  fotky: ["/5.webp", "/5.webp","/5.webp","/5.webp"],autor:"K"
   },
  { id: "4TD", krajina: "Slovensko", kraj: "Trnavský", location: "Dunajská Streda", name: "Apartmán Panorama", hodnotenie: "4,89", cena: 110,
fotky: ["/25.webp", "/25.webp","/25.webp","/25.webp"],autor:"K"
   },
  { id: "5TD", krajina: "Slovensko", kraj: "Trnavský", location: "Dunajská Streda", name: "Apartmán Záhrada", hodnotenie: "4,82", cena: 100,
fotky: ["/25.webp", "/25.webp","/25.webp","/25.webp"],autor:"K"
   },
  { id: "6TD", krajina: "Slovensko", kraj: "Trnavský", location: "Dunajská Streda", name: "Apartmán City View", hodnotenie: "4,85", cena: 115,
 fotky: ["/27.webp", "/27.webp","/27.webp","/27.webp"],autor:"K"
   },
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
  //  KOSICE
  // Galanta
  { id: "1TG", krajina: "Slovensko", kraj: "Trnavský", location: "Galanta", name: "Apartmán Jazero", hodnotenie: "4,86", cena: 110,
fotky: ["/20.webp", "/20.webp","/20.webp","/20.webp"],autor:"G",
   },
  { id: "2TG", krajina: "Slovensko", kraj: "Trnavský", location: "Galanta", name: "Apartmán Slnečný", hodnotenie: "4,88", cena: 105,
fotky: ["/15.webp", "/15.webp","/15.webp","/15.webp"],autor:"G",
   },
  { id: "3TG", krajina: "Slovensko", kraj: "Trnavský", location: "Galanta", name: "Apartmán Modrý", hodnotenie: "4,90", cena: 115,
  fotky: ["/5.webp", "/5.webp","/5.webp","/5.webp"],autor:"G",
   },
  { id: "4TG", krajina: "Slovensko", kraj: "Trnavský", location: "Galanta", name: "Apartmán Panorama", hodnotenie: "4,79", cena: 100,
 fotky: ["/8.webp", "/8.webp","/8.webp","/8.webp"],bazen:"ano",autor:"G",
   },
  { id: "5TG", krajina: "Slovensko", kraj: "Trnavský", location: "Galanta", name: "Apartmán Záhrada", hodnotenie: "4,83", cena: 105,
fotky: ["/5.webp", "/5.webp","/5.webp","/5.webp"],autor:"G",
   },
  { id: "6TG", krajina: "Slovensko", kraj: "Trnavský", location: "Galanta", name: "Apartmán City View", hodnotenie: "4,85", cena: 120,
    fotky: ["/27.webp", "/27.webp","/27.webp","/27.webp"],autor:"G",
   },
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
  //  KOSICE
      // Skalica
     { id: "1TSC", krajina: "Slovensko", kraj: "Trnavský", location: "Skalica", name: "Apartmán Lesný", hodnotenie: "4,84", cena: 100,
fotky: ["/25.webp", "/25.webp","/25.webp","/25.webp"],autor:"G",
      },
  { id: "2TSC", krajina: "Slovensko", kraj: "Trnavský", location: "Skalica", name: "Apartmán Slnečný", hodnotenie: "4,87", cena: 105,
  fotky: ["/8.webp", "/8.webp","/8.webp","/8.webp"],autor:"G",
   },
  { id: "3TSC", krajina: "Slovensko", kraj: "Trnavský", location: "Skalica", name: "Apartmán Modrý", hodnotenie: "4,80", cena: 95,
 fotky: ["/27.webp", "/27.webp","/27.webp","/27.webp"],autor:"G",
   },
  { id: "4TSC", krajina: "Slovensko", kraj: "Trnavský", location: "Skalica", name: "Apartmán Panorama", hodnotenie: "4,89", cena: 110,
  fotky: ["/5.webp", "/5.webp","/5.webp","/5.webp"],autor:"G",
   },
  { id: "5TSC", krajina: "Slovensko", kraj: "Trnavský", location: "Skalica", name: "Apartmán Záhrada", hodnotenie: "4,82", cena: 100,
    fotky: ["/20.webp", "/20.webp","/20.webp","/20.webp"],autor:"G",
   },
  { id: "6TSC", krajina: "Slovensko", kraj: "Trnavský", location: "Skalica", name: "Apartmán City View", hodnotenie: "4,85", cena: 115,
    fotky: ["/27.webp", "/27.webp","/27.webp","/27.webp"],autor:"A",
   },
  // TRNAVSKY
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
  //  KOSICE
  
// NITRA
      // Nitra
      { id: "1NN", krajina: "Slovensko", kraj: "Nitriansky", location: "Nitra", name: "Apartmán City View", hodnotenie: "4,85", cena: 110,
     fotky: ["/5.webp", "/5.webp","/5.webp","/5.webp"],filter: "mesto",bazen:"ano",autor:"C",
       },
  { id: "2NN", krajina: "Slovensko", kraj: "Nitriansky", location: "Nitra", name: "Apartmán Slnečný", hodnotenie: "4,82", cena: 105,
fotky: ["/20.webp", "/20.webp","/20.webp","/20.webp"],filter: "mesto",autor:"C",
   },
  { id: "3NN", krajina: "Slovensko", kraj: "Nitriansky", location: "Nitra", name: "Apartmán Panorama", hodnotenie: "4,88", cena: 120,
  fotky: ["/8.webp", "/8.webp","/8.webp","/8.webp"],filter: "mesto",autor:"C",
   },
  { id: "4NN", krajina: "Slovensko", kraj: "Nitriansky", location: "Nitra", name: "Apartmán Modrý", hodnotenie: "4,80", cena: 100,
  fotky: ["/5.webp", "/5.webp","/5.webp","/5.webp"],filter: "mesto",autor:"C",
   },
  { id: "5NN", krajina: "Slovensko", kraj: "Nitriansky", location: "Nitra", name: "Apartmán Záhrada", hodnotenie: "4,84", cena: 115,
fotky: ["/25.webp", "/25.webp","/25.webp","/25.webp"],filter: "mesto",autor:"C",
   },
  { id: "6NN", krajina: "Slovensko", kraj: "Nitriansky", location: "Nitra", name: "Apartmán Lesný", hodnotenie: "4,86", cena: 110,
fotky: ["/20.webp", "/20.webp","/20.webp","/20.webp"],filter: "mesto",autor:"C",
   },
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
  //  KOSICE
  // Levice
  { id: "1NL", krajina: "Slovensko", kraj: "Nitriansky", location: "Levice", name: "Apartmán Slnečný", hodnotenie: "4,83", cena: 100,
  fotky: ["/4.webp", "/4.webp","/4.webp","/4.webp"],autor:"B",
   },
  { id: "2NL", krajina: "Slovensko", kraj: "Nitriansky", location: "Levice", name: "Apartmán City View", hodnotenie: "4,85", cena: 105,
 fotky: ["/27.webp", "/27.webp","/27.webp","/27.webp"],autor:"B",
   },
  { autor:"A",
    id: "3NL", krajina: "Slovensko", kraj: "Nitriansky", location: "Levice", name: "Apartmán Panorama", hodnotenie: "4,88", cena: 110,
     fotky: ["/27.webp", "/27.webp","/27.webp","/27.webp"],autor:"B",
   },
  { id: "4NL", krajina: "Slovensko", kraj: "Nitriansky", location: "Levice", name: "Apartmán Modrý", hodnotenie: "4,80", cena: 95,
  fotky: ["/8.webp", "/8.webp","/8.webp","/8.webp"],autor:"B",
   },
  { id: "5NL", krajina: "Slovensko", kraj: "Nitriansky", location: "Levice", name: "Apartmán Záhrada", hodnotenie: "4,84", cena: 105,
   fotky: ["/10.webp", "/10.webp","/10.webp","/10.webp"],autor:"B",
   },
  { id: "6NL", krajina: "Slovensko", kraj: "Nitriansky", location: "Levice", name: "Apartmán Lesný", hodnotenie: "4,86", cena: 110,
fotky: ["/20.webp", "/20.webp","/20.webp","/20.webp"],autor:"B",
   },
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
  //  KOSICE
  // Nové Zámky
  { id: "1NZ", krajina: "Slovensko", kraj: "Nitriansky", location: "Nové Zámky", name: "Apartmán City View", hodnotenie: "4,82", cena: 105,
  fotky: ["/8.webp", "/8.webp","/8.webp","/8.webp"],autor:"K",
   },
  { id: "2NZ", krajina: "Slovensko", kraj: "Nitriansky", location: "Nové Zámky", name: "Apartmán Slnečný", hodnotenie: "4,85", cena: 110,
fotky: ["/20.webp", "/20.webp","/20.webp","/20.webp"],ideal:"predvoch",autor:"K",
   },
  { id: "3NZ", krajina: "Slovensko", kraj: "Nitriansky", location: "Nové Zámky", name: "Apartmán Modrý", hodnotenie: "4,80", cena: 95,
  fotky: ["/5.webp", "/5.webp","/5.webp","/5.webp"],autor:"K",
   },
  { id: "4NZ", krajina: "Slovensko", kraj: "Nitriansky", location: "Nové Zámky", name: "Apartmán Panorama", hodnotenie: "4,88", cena: 115,
fotky: ["/15.webp", "/15.webp","/15.webp","/15.webp"],autor:"K",
   },
  { id: "5NZ", krajina: "Slovensko", kraj: "Nitriansky", location: "Nové Zámky", name: "Apartmán Záhrada", hodnotenie: "4,84", cena: 100,
fotky: ["/20.webp", "/20.webp","/20.webp","/20.webp"],bazen:"ano",autor:"K",
   },
  { id: "6NZ", krajina: "Slovensko", kraj: "Nitriansky", location: "Nové Zámky", name: "Apartmán Lesný", hodnotenie: "4,86", cena: 110,
     fotky: ["/2.webp", "/2.webp","/2.webp","/2.webp"],autor:"G",
   },

   // kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
  // Komárno
  { id: "1NK", krajina: "Slovensko", kraj: "Nitriansky", location: "Komárno", name: "Apartmán Slnečný", hodnotenie: "4,83", cena: 95,
    fotky: ["/20.webp", "/20.webp","/20.webp","/20.webp"],autor:"G",

   },
  { id: "2NK", krajina: "Slovensko", kraj: "Nitriansky", location: "Komárno", name: "Apartmán City View", hodnotenie: "4,85", cena: 100,
 fotky: ["/1.webp", "/1.webp","/1.webp","/1.webp"],autor:"G",
   
   },
  { id: "3NK", krajina: "Slovensko", kraj: "Nitriansky", location: "Komárno", name: "Apartmán Panorama", hodnotenie: "4,88", cena: 105,
 fotky: ["/27.webp", "/27.webp","/27.webp","/27.webp"],ideal:"predvoch",autor:"G",
   },
  { id: "4NK", krajina: "Slovensko", kraj: "Nitriansky", location: "Komárno", name: "Apartmán Modrý", hodnotenie: "4,80", cena: 90,
  fotky: ["/8.webp", "/8.webp","/8.webp","/8.webp"],autor:"G",
   },
  { id: "5NK", krajina: "Slovensko", kraj: "Nitriansky", location: "Komárno", name: "Apartmán Záhrada", hodnotenie: "4,84", cena: 100,
    fotky: ["/27.webp", "/27.webp","/27.webp","/27.webp"],autor:"G",
   },
  { id: "6NK", krajina: "Slovensko", kraj: "Nitriansky", location: "Komárno", name: "Apartmán Lesný", hodnotenie: "4,86", cena: 105,
     fotky: ["/2.webp", "/2.webp","/2.webp","/2.webp"],autor:"G",
   },

   // kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
  // Šaľa
  { id: "1NSA", krajina: "Slovensko", kraj: "Nitriansky", location: "Šaľa", name: "Apartmán City View", hodnotenie: "4,82", cena: 100,
    fotky: ["/20.webp", "/20.webp","/20.webp","/20.webp"],autor:"X",

   },
  { id: "2NSA", krajina: "Slovensko", kraj: "Nitriansky", location: "Šaľa", name: "Apartmán Slnečný", hodnotenie: "4,85", cena: 105,
  fotky: ["/8.webp", "/8.webp","/8.webp","/8.webp"],bazen:"ano",autor:"X",
   },
  { id: "3NSA", krajina: "Slovensko", kraj: "Nitriansky", location: "Šaľa", name: "Apartmán Modrý", hodnotenie: "4,80", cena: 95,
fotky: ["/20.webp", "/20.webp","/20.webp","/20.webp"],autor:"X",
   },
  { id: "4NSA", krajina: "Slovensko", kraj: "Nitriansky", location: "Šaľa", name: "Apartmán Panorama", hodnotenie: "4,88", cena: 110,
fotky: ["/15.webp", "/15.webp","/15.webp","/15.webp"],autor:"X",
   },
  { id: "5NSA", krajina: "Slovensko", kraj: "Nitriansky", location: "Šaľa", name: "Apartmán Záhrada", hodnotenie: "4,84", cena: 100,
fotky: ["/1.webp", "/1.webp","/1.webp","/1.webp"],ideal:"predvoch",autor:"X",
   },
  { id: "6NSA", krajina: "Slovensko", kraj: "Nitriansky", location: "Šaľa", name: "Apartmán Lesný", hodnotenie: "4,86", cena: 10,
     fotky: ["/2.webp", "/2.webp","/2.webp","/2.webp"],autor:"X",
  },
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
      // Zlaté Moravce
   { id: "1NZM", krajina: "Slovensko", kraj: "Nitriansky", location: "Zlaté Moravce", name: "Apartmán City View", hodnotenie: "4,85", cena: 110,
  fotky: ["/8.webp", "/8.webp","/8.webp","/8.webp"],autor:"J",
    },
  { id: "2NZM", krajina: "Slovensko", kraj: "Nitriansky", location: "Zlaté Moravce", name: "Apartmán Slnečný", hodnotenie: "4,82", cena: 105,
  fotky: ["/5.webp", "/5.webp","/5.webp","/5.webp"],autor:"J",
   },
  { id: "3NZM", krajina: "Slovensko", kraj: "Nitriansky", location: "Zlaté Moravce", name: "Apartmán Panorama", hodnotenie: "4,88", cena: 115,
    fotky: ["/11.webp", "/11.webp","/11.webp","/11.webp"],autor:"J",
   },
  { id: "4NZM", krajina: "Slovensko", kraj: "Nitriansky", location: "Zlaté Moravce", name: "Apartmán Modrý", hodnotenie: "4,80", cena: 100,
     fotky: ["/27.webp", "/27.webp","/27.webp","/27.webp"],ideal:"predvoch",autor:"J",
   },
  { id: "5NZM", krajina: "Slovensko", kraj: "Nitriansky", location: "Zlaté Moravce", name: "Apartmán Záhrada", hodnotenie: "4,84", cena: 105,
fotky: ["/25.webp", "/25.webp","/25.webp","/25.webp"],autor:"J",
   },
  { id: "6NZM", krajina: "Slovensko", kraj: "Nitriansky", location: "Zlaté Moravce", name: "Apartmán Lesný", hodnotenie: "4,86", cena: 110,
     fotky: ["/5.webp", "/5.webp","/5.webp","/5.webp"],autor:"J",
   },
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok


    // ZILINA

        // Žilina
         { id: "1ZZ", krajina: "Slovensko", kraj: "Žilinský", location: "Žilina", name: "Apartmán City View", hodnotenie: "4,85", cena: 110,
fotky: ["/1.webp", "/1.webp","/1.webp","/1.webp"],autor:"I",
          },
  { id: "2ZZ", krajina: "Slovensko", kraj: "Žilinský", location: "Žilina", name: "Apartmán Slnečný", hodnotenie: "4,82", cena: 105,
     fotky: ["/2.webp", "/2.webp","/2.webp","/2.webp"],autor:"I",
   },
  { id: "3ZZ", krajina: "Slovensko", kraj: "Žilinský", location: "Žilina", name: "Apartmán Panorama", hodnotenie: "4,88", cena: 115,
fotky: ["/4.webp", "/4.webp","/4.webp","/4.webp"],autor:"I",
   },
  { id: "4ZZ", krajina: "Slovensko", kraj: "Žilinský", location: "Žilina", name: "Apartmán Modrý", hodnotenie: "4,80", cena: 100,
fotky: ["/5.webp", "/5.webp","/5.webp","/5.webp"],autor:"I",
   },
  { id: "5ZZ", krajina: "Slovensko", kraj: "Žilinský", location: "Žilina", name: "Apartmán Záhrada", hodnotenie: "4,84", cena: 105,
 fotky: ["/20.webp", "/20.webp","/20.webp","/20.webp"],autor:"I",
   },
  { id: "6ZZ", krajina: "Slovensko", kraj: "Žilinský", location: "Žilina", name: "Apartmán Lesný", hodnotenie: "4,86", cena: 110,
fotky: ["/20.webp", "/20.webp","/20.webp","/20.webp"],bazen:"ano",autor:"I",
   },
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
  // Martin
  { id: "1ZM", krajina: "Slovensko", kraj: "Žilinský", location: "Martin", name: "Apartmán City View", hodnotenie: "4,82", cena: 105,
  fotky: ["/4.webp", "/4.webp","/4.webp","/4.webp"],autor:"J",
   },
  { id: "2ZM", krajina: "Slovensko", kraj: "Žilinský", location: "Martin", name: "Apartmán Slnečný", hodnotenie: "4,85", cena: 110,
 fotky: ["/27.webp", "/27.webp","/27.webp","/27.webp"],autor:"J",
   },
  { id: "3ZM", krajina: "Slovensko", kraj: "Žilinský", location: "Martin", name: "Apartmán Modrý", hodnotenie: "4,80", cena: 100,
fotky: ["/20.webp", "/20.webp","/20.webp","/20.webp"],autor:"J",
   },
  { id: "4ZM", krajina: "Slovensko", kraj: "Žilinský", location: "Martin", name: "Apartmán Panorama", hodnotenie: "4,88", cena: 115,
fotky: ["/20.webp", "/20.webp","/20.webp","/20.webp"],ideal:"predvoch",autor:"J",
   },
  { id: "5ZM", krajina: "Slovensko", kraj: "Žilinský", location: "Martin", name: "Apartmán Záhrada", hodnotenie: "4,84", cena: 105,
fotky: ["/25.webp", "/25.webp","/25.webp","/25.webp"],autor:"J",
   },
  { id: "6ZM", krajina: "Slovensko", kraj: "Žilinský", location: "Martin", name: "Apartmán Lesný", hodnotenie: "4,86", cena: 110,
fotky: ["/20.webp", "/20.webp","/20.webp","/20.webp"],autor:"J",
   },
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
  // Ružomberok
  { id: "1ZR", krajina: "Slovensko", kraj: "Žilinský", location: "Ružomberok", name: "Apartmán City View", hodnotenie: "4,85", cena: 110,
fotky: ["/25.webp", "/25.webp","/25.webp","/25.webp"],autor:"K",
   },
  { id: "2ZR", krajina: "Slovensko", kraj: "Žilinský", location: "Ružomberok", name: "Apartmán Slnečný", hodnotenie: "4,82", cena: 105,
fotky: ["/20.webp", "/20.webp","/20.webp","/20.webp"],autor:"K",
   },
  { id: "3ZR", krajina: "Slovensko", kraj: "Žilinský", location: "Ružomberok", name: "Apartmán Panorama", hodnotenie: "4,88", cena: 115,
  fotky: ["/5.webp", "/5.webp","/5.webp","/5.webp"],autor:"K",
   },
  { id: "4ZR", krajina: "Slovensko", kraj: "Žilinský", location: "Ružomberok", name: "Apartmán Modrý", hodnotenie: "4,80", cena: 100,
fotky: ["/15.webp", "/15.webp","/15.webp","/15.webp"],autor:"K",
   },
  { id: "5ZR", krajina: "Slovensko", kraj: "Žilinský", location: "Ružomberok", name: "Apartmán Záhrada", hodnotenie: "4,84", cena: 105,
  fotky: ["/15.webp", "/15.webp","/15.webp","/15.webp"],autor:"K",
   },
  { id: "6ZR", krajina: "Slovensko", kraj: "Žilinský", location: "Ružomberok", name: "Apartmán Lesný", hodnotenie: "4,86", cena: 110,
  fotky: ["/15.webp", "/15.webp","/15.webp","/15.webp"],autor:"K",
   },
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
  // Dolný Kubín
  { id: "1ZDK", krajina: "Slovensko", kraj: "Žilinský", location: "Dolný Kubín", name: "Apartmán City View", hodnotenie: "4,85", cena: 110,
fotky: ["/1.webp", "/1.webp","/1.webp","/1.webp"],ideal:"predvoch",autor:"I",
   },
  { id: "2ZDK", krajina: "Slovensko", kraj: "Žilinský", location: "Dolný Kubín", name: "Apartmán Slnečný", hodnotenie: "4,82", cena: 105,
  fotky: ["/15.webp", "/15.webp","/15.webp","/15.webp"],bazen:"ano",autor:"I",
   },
  { id: "3ZDK", krajina: "Slovensko", kraj: "Žilinský", location: "Dolný Kubín", name: "Apartmán Panorama", hodnotenie: "4,88", cena: 115,
 fotky: ["/27.webp", "/27.webp","/27.webp","/27.webp"],autor:"I",
   },
  { id: "4ZDK", krajina: "Slovensko", kraj: "Žilinský", location: "Dolný Kubín", name: "Apartmán Modrý", hodnotenie: "4,80", cena: 100,
fotky: ["/25.webp", "/25.webp","/25.webp","/25.webp"],autor:"I",
   },
  { id: "5ZDK", krajina: "Slovensko", kraj: "Žilinský", location: "Dolný Kubín", name: "Apartmán Záhrada", hodnotenie: "4,84", cena: 105,
fotky: ["/5.webp", "/5.webp","/5.webp","/5.webp"],autor:"I",
   },
  { id: "6ZDK", krajina: "Slovensko", kraj: "Žilinský", location: "Dolný Kubín", name: "Apartmán Lesný", hodnotenie: "4,86", cena: 110,
    fotky: ["/27.webp", "/27.webp","/27.webp","/27.webp"],autor:"I",
   },
   // kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
        // Liptovský Mikuláš
       { id: "1ZLM", krajina: "Slovensko", kraj: "Žilinský", location: "Liptovský Mikuláš", name: "Apartmán City View", hodnotenie: "4,85", cena: 120,
fotky: ["/25.webp", "/25.webp","/25.webp","/25.webp"],autor:"C",
        },
  { id: "2ZLM", krajina: "Slovensko", kraj: "Žilinský", location: "Liptovský Mikuláš", name: "Apartmán Slnečný", hodnotenie: "4,82", cena: 115,
  fotky: ["/15.webp", "/15.webp","/15.webp","/15.webp"],autor:"C",
   },
  { id: "3ZLM", krajina: "Slovensko", kraj: "Žilinský", location: "Liptovský Mikuláš", name: "Apartmán Panorama", hodnotenie: "4,88", cena: 125,
  fotky: ["/15.webp", "/15.webp","/15.webp","/15.webp"],ideal:"predvoch",autor:"C",
   },
  { id: "4ZLM", krajina: "Slovensko", kraj: "Žilinský", location: "Liptovský Mikuláš", name: "Apartmán Modrý", hodnotenie: "4,80", cena: 110,
 fotky: ["/20.webp", "/20.webp","/20.webp","/20.webp"],autor:"C",
   },
  { id: "5ZLM", krajina: "Slovensko", kraj: "Žilinský", location: "Liptovský Mikuláš", name: "Apartmán Záhrada", hodnotenie: "4,84", cena: 115,
fotky: ["/25.webp", "/25.webp","/25.webp","/25.webp"],autor:"C",
   },
  { id: "6ZLM", krajina: "Slovensko", kraj: "Žilinský", location: "Liptovský Mikuláš", name: "Apartmán Lesný", hodnotenie: "4,86", cena: 120,
  fotky: ["/5.webp", "/5.webp","/5.webp","/5.webp"],autor:"C",
   },
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
  // Čadca
  { id: "1ZC", krajina: "Slovensko", kraj: "Žilinský", location: "Čadca", name: "Apartmán City View", hodnotenie: "4,85", cena: 110,
     fotky: ["/5.webp", "/5.webp","/5.webp","/5.webp"],bazen:"ano",autor:"B",
   },
  { id: "2ZC", krajina: "Slovensko", kraj: "Žilinský", location: "Čadca", name: "Apartmán Slnečný", hodnotenie: "4,82", cena: 105,
 fotky: ["/6.webp", "/6.webp","/6.webp","/6.webp"],ideal:"predvoch",autor:"B",
   },
  { id: "3ZC", krajina: "Slovensko", kraj: "Žilinský", location: "Čadca", name: "Apartmán Panorama", hodnotenie: "4,88", cena: 115,
fotky: ["/1.webp", "/1.webp","/1.webp","/1.webp"],autor:"B",
   },
  { id: "4ZC", krajina: "Slovensko", kraj: "Žilinský", location: "Čadca", name: "Apartmán Modrý", hodnotenie: "4,80", cena: 100,
    fotky: ["/5.webp", "/5.webp","/5.webp","/5.webp"],autor:"B",
   },
  { id: "5ZC", krajina: "Slovensko", kraj: "Žilinský", location: "Čadca", name: "Apartmán Záhrada", hodnotenie: "4,84", cena: 105,
fotky: ["/11.webp", "/11.webp","/11.webp","/11.webp"],autor:"B",
   },
  { id: "6ZC", krajina: "Slovensko", kraj: "Žilinský", location: "Čadca", name: "Apartmán Lesný", hodnotenie: "4,86", cena: 110,
 fotky: ["/6.webp", "/6.webp","/6.webp","/6.webp"],autor:"D",
   },
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
  // Kysucké Nové Mesto
  { id: "1ZKNM", krajina: "Slovensko", kraj: "Žilinský", location: "Kysucké Nové Mesto", name: "Apartmán City View", hodnotenie: "4,85", cena: 115,
 fotky: ["/6.webp", "/6.webp","/6.webp","/6.webp"],autor:"B",
   },
  { id: "2ZKNM", krajina: "Slovensko", kraj: "Žilinský", location: "Kysucké Nové Mesto", name: "Apartmán Slnečný", hodnotenie: "4,82", cena: 110,
fotky: ["/11.webp", "/11.webp","/11.webp","/11.webp"],autor:"B",
   },
  { id: "3ZKNM", krajina: "Slovensko", kraj: "Žilinský", location: "Kysucké Nové Mesto", name: "Apartmán Panorama", hodnotenie: "4,88", cena: 120,
fotky: ["/25.webp", "/25.webp","/25.webp","/25.webp"],autor:"B",
   },
  { id: "4ZKNM", krajina: "Slovensko", kraj: "Žilinský", location: "Kysucké Nové Mesto", name: "Apartmán Modrý", hodnotenie: "4,80", cena: 105,
fotky: ["/11.webp", "/11.webp","/11.webp","/11.webp"],autor:"B",
   },
  { id: "5ZKNM", krajina: "Slovensko", kraj: "Žilinský", location: "Kysucké Nové Mesto", name: "Apartmán Záhrada", hodnotenie: "4,84", cena: 110,
fotky: ["/1.webp", "/1.webp","/1.webp","/1.webp"],autor:"B",
   },
  { id: "6ZKNM", krajina: "Slovensko", kraj: "Žilinský", location: "Kysucké Nové Mesto", name: "Apartmán Lesný", hodnotenie: "4,86", cena: 115,autor:"B",
fotky: ["/11.webp", "/11.webp","/11.webp","/11.webp"]
   },
// BANSKA BYSTIRCA
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
         // Banská Bystrica
        { id: "1BBY", krajina: "Slovensko", kraj: "Banskobystrický", location: "Banská Bystrica", name: "Apartmán City View", hodnotenie: "4,87", cena: 100,autor:"L",
fotky: ["/25.webp", "/25.webp","/25.webp","/25.webp"],premia: "ano"
         },
  { id: "2BBY", krajina: "Slovensko", kraj: "Banskobystrický", location: "Banská Bystrica", name: "Apartmán Slnečný", hodnotenie: "4,82", cena: 95,autor:"L",
fotky: ["/25.webp", "/25.webp","/25.webp","/25.webp"]
   },
  { id: "3BBY", krajina: "Slovensko", kraj: "Banskobystrický", location: "Banská Bystrica", name: "Apartmán Panorama", hodnotenie: "4,89", cena: 105,
  fotky: ["/5.webp", "/5.webp","/5.webp","/5.webp"],premia: "ano",autor:"L",
   },
  { id: "4BBY", krajina: "Slovensko", kraj: "Banskobystrický", location: "Banská Bystrica", name: "Apartmán Modrý", hodnotenie: "4,80", cena: 90,
 fotky: ["/20.webp", "/20.webp","/20.webp","/20.webp"],autor:"L",
   },
  { id: "5BBY", krajina: "Slovensko", kraj: "Banskobystrický", location: "Banská Bystrica", name: "Apartmán Záhrada", hodnotenie: "4,84", cena: 95,
fotky: ["/4.webp", "/4.webp","/4.webp","/4.webp"],premia: "ano",autor:"L",
   },
  { id: "6BBY", krajina: "Slovensko", kraj: "Banskobystrický", location: "Banská Bystrica", name: "Apartmán Lesný", hodnotenie: "4,86", cena: 100,autor:"A",
fotky: ["/25.webp", "/25.webp","/25.webp","/25.webp"],premia: "ano",autor:"L",
   },
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
  // Zvolen
  { id: "1BZV", krajina: "Slovensko", kraj: "Banskobystrický", location: "Zvolen", name: "Apartmán City View", hodnotenie: "4,85", cena: 95,
     fotky: ["/6.webp", "/6.webp","/6.webp","/6.webp"],autor:"O",
   },
  { id: "2BZV", krajina: "Slovensko", kraj: "Banskobystrický", location: "Zvolen", name: "Apartmán Slnečný", hodnotenie: "4,82", cena: 90,
fotky: ["/20.webp", "/20.webp","/20.webp","/20.webp"],premia: "ano",autor:"O",
   },
  { id: "3BZV", krajina: "Slovensko", kraj: "Banskobystrický", location: "Zvolen", name: "Apartmán Panorama", hodnotenie: "4,88", cena: 100,
fotky: ["/4.webp", "/4.webp","/4.webp","/4.webp"],bazen:"ano",autor:"O",
   },
  { id: "4BZV", krajina: "Slovensko", kraj: "Banskobystrický", location: "Zvolen", name: "Apartmán Modrý", hodnotenie: "4,80", cena: 85,
fotky: ["/1.webp", "/1.webp","/1.webp","/1.webp"],autor:"O",
   },
  { id: "5BZV", krajina: "Slovensko", kraj: "Banskobystrický", location: "Zvolen", name: "Apartmán Záhrada", hodnotenie: "4,84", cena: 90,
 fotky: ["/20.webp", "/20.webp","/20.webp","/20.webp"],autor:"O",
   },
  { id: "6BZV", krajina: "Slovensko", kraj: "Banskobystrický", location: "Zvolen", name: "Apartmán Lesný", hodnotenie: "4,86", cena: 95 ,
fotky: ["/15.webp", "/15.webp","/15.webp","/15.webp"],premia: "ano",autor:"O",
  },
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
  // Žiar nad Hronom
  { id: "1BZH", krajina: "Slovensko", kraj: "Banskobystrický", location: "Žiar nad Hronom", name: "Apartmán City View", hodnotenie: "4,83", cena: 90,autor:"L",
  fotky: ["/4.webp", "/4.webp","/4.webp","/4.webp"],premia: "ano"
   },
  { id: "2BZH", krajina: "Slovensko", kraj: "Banskobystrický", location: "Žiar nad Hronom", name: "Apartmán Slnečný", hodnotenie: "4,81", cena: 85,autor:"L",
fotky: ["/19.webp", "/19.webp","/19.webp","/19.webp"],bazen:"ano"
   },
  { id: "3BZH", krajina: "Slovensko", kraj: "Banskobystrický", location: "Žiar nad Hronom", name: "Apartmán Panorama", hodnotenie: "4,87", cena: 95,autor:"L",
fotky: ["/25.webp", "/25.webp","/25.webp","/25.webp"]
   },
  { id: "4BZH", krajina: "Slovensko", kraj: "Banskobystrický", location: "Žiar nad Hronom", name: "Apartmán Modrý", hodnotenie: "4,79", cena: 80,autor:"L",
  fotky: ["/5.webp", "/5.webp","/5.webp","/5.webp"]
   },
  { id: "5BZH", krajina: "Slovensko", kraj: "Banskobystrický", location: "Žiar nad Hronom", name: "Apartmán Záhrada", hodnotenie: "4,82", cena: 85,autor:"L",
fotky: ["/15.webp", "/15.webp","/15.webp","/15.webp"]
   },
  { id: "6BZH", krajina: "Slovensko", kraj: "Banskobystrický", location: "Žiar nad Hronom", name: "Apartmán Lesný", hodnotenie: "4,85", cena: 90,autor:"L",
fotky: ["/1.webp", "/1.webp","/1.webp","/1.webp"]
   },
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
  // Lučenec
  { autor:"L",id: "1BLU", krajina: "Slovensko", kraj: "Banskobystrický", location: "Lučenec", name: "Apartmán City View", hodnotenie: "4,80", cena: 85,
fotky: ["/25.webp", "/25.webp","/25.webp","/25.webp"],premia: "ano"
   },
  { autor:"L",id: "2BLU", krajina: "Slovensko", kraj: "Banskobystrický", location: "Lučenec", name: "Apartmán Slnečný", hodnotenie: "4,78", cena: 80,
fotky: ["/25.webp", "/25.webp","/25.webp","/25.webp"]
   },
  {autor:"L",id: "3BLU", krajina: "Slovensko", kraj: "Banskobystrický", location: "Lučenec", name: "Apartmán Panorama", hodnotenie: "4,83", cena: 90,
fotky: ["/16.webp", "/16.webp","/16.webp","/16.webp"]
   },
  {autor:"L", id: "4BLU", krajina: "Slovensko", kraj: "Banskobystrický", location: "Lučenec", name: "Apartmán Modrý", hodnotenie: "4,75", cena: 75,
fotky: ["/4.webp", "/4.webp","/4.webp","/4.webp"]
   },
  {autor:"L", id: "5BLU", krajina: "Slovensko", kraj: "Banskobystrický", location: "Lučenec", name: "Apartmán Záhrada", hodnotenie: "4,79", cena: 80,
 fotky: ["/11.webp", "/11.webp","/11.webp","/11.webp"],premia: "ano"
   },
  {autor:"L", id: "6BLU", krajina: "Slovensko", kraj: "Banskobystrický", location: "Lučenec", name: "Apartmán Lesný", hodnotenie: "4,81", cena: 85,
 fotky: ["/11.webp", "/11.webp","/11.webp","/11.webp"]
   },
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
  // Detva
  {autor:"C",id: "1BDT", krajina: "Slovensko", kraj: "Banskobystrický", location: "Detva", name: "Apartmán City View", hodnotenie: "4,82", cena: 80,
    fotky: ["/11.webp", "/11.webp","/11.webp","/11.webp"],ideal:"predvoch",
   },
  {autor:"C", id: "2BDT", krajina: "Slovensko", kraj: "Banskobystrický", location: "Detva", name: "Apartmán Slnečný", hodnotenie: "4,79", cena: 75,
fotky: ["/4.webp", "/4.webp","/4.webp","/4.webp"],premia: "ano"
   },
  { autor:"C",id: "3BDT", krajina: "Slovensko", kraj: "Banskobystrický", location: "Detva", name: "Apartmán Panorama", hodnotenie: "4,84", cena: 85,
fotky: ["/25.webp", "/25.webp","/25.webp","/25.webp"]
   },
  {autor:"C", id: "4BDT", krajina: "Slovensko", kraj: "Banskobystrický", location: "Detva", name: "Apartmán Modrý", hodnotenie: "4,77", cena: 70,
 fotky: ["/11.webp", "/11.webp","/11.webp","/11.webp"],bazen:"ano"
   },
  { autor:"C",id: "5BDT", krajina: "Slovensko", kraj: "Banskobystrický", location: "Detva", name: "Apartmán Záhrada", hodnotenie: "4,80", cena: 75,
  fotky: ["/8.webp", "/8.webp","/8.webp","/8.webp"]
   },
  { autor:"C",id: "6BDT", krajina: "Slovensko", kraj: "Banskobystrický", location: "Detva", name: "Apartmán Lesný", hodnotenie: "4,81", cena: 80,
 fotky: ["/11.webp", "/11.webp","/11.webp","/11.webp"],premia: "ano"
   },
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
  // Rimavská Sobota
  {autor:"C", id: "1BRS", krajina: "Slovensko", kraj: "Banskobystrický", location: "Rimavská Sobota", name: "Apartmán City View", hodnotenie: "4,79", cena: 75,
fotky: ["/25.webp", "/25.webp","/25.webp","/25.webp"]
   },
  { autor:"C",id: "2BRS", krajina: "Slovensko", kraj: "Banskobystrický", location: "Rimavská Sobota", name: "Apartmán Slnečný", hodnotenie: "4,77", cena: 70,
  fotky: ["/5.webp", "/5.webp","/5.webp","/5.webp"],premia: "ano"
   },
  {autor:"C", id: "3BRS", krajina: "Slovensko", kraj: "Banskobystrický", location: "Rimavská Sobota", name: "Apartmán Panorama", hodnotenie: "4,81", cena: 80,
 fotky: ["/11.webp", "/11.webp","/11.webp","/11.webp"]
   },
  { autor:"C",id: "4BRS", krajina: "Slovensko", kraj: "Banskobystrický", location: "Rimavská Sobota", name: "Apartmán Modrý", hodnotenie: "4,75", cena: 65,
 fotky: ["/20.webp", "/20.webp","/20.webp","/20.webp"]
   },
  {autor:"C", id: "5BRS", krajina: "Slovensko", kraj: "Banskobystrický", location: "Rimavská Sobota", name: "Apartmán Záhrada", hodnotenie: "4,78", cena: 70,
 fotky: ["/11.webp", "/11.webp","/11.webp","/11.webp"]
   },
  {autor:"C", id: "6BRS", krajina: "Slovensko", kraj: "Banskobystrický", location: "Rimavská Sobota", name: "Apartmán Lesný", hodnotenie: "4,80", cena: 75,
  fotky: ["/8.webp", "/8.webp","/8.webp","/8.webp"],ideal:"predvoch",
   },
// BANSKA BYSTIRCA
// PRESOV
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
              // Prešov
        // Prešov
  { autor:"G",id: "1PS", krajina: "Slovensko", kraj: "Prešovský", location: "Prešov", name: "Apartmán City View", hodnotenie: "4,85", cena: 90,
fotky: ["/20.webp", "/20.webp","/20.webp","/20.webp"],filter: "mesto",
   },
  { autor:"G",id: "2PS", krajina: "Slovensko", kraj: "Prešovský", location: "Prešov", name: "Apartmán Slnečný", hodnotenie: "4,82", cena: 85,
  fotky: ["/15.webp", "/15.webp","/15.webp","/15.webp"],filter: "mesto",
   },
  { autor:"G",id: "3PS", krajina: "Slovensko", kraj: "Prešovský", location: "Prešov", name: "Apartmán Panorama", hodnotenie: "4,88", cena: 95,
  fotky: ["/8.webp", "/8.webp","/8.webp","/8.webp"],filter: "mesto",bazen:"ano"
   },
  { autor:"G",id: "4PS", krajina: "Slovensko", kraj: "Prešovský", location: "Prešov", name: "Apartmán Modrý", hodnotenie: "4,80", cena: 80,
  fotky: ["/5.webp", "/5.webp","/5.webp","/5.webp"],filter: "mesto",
   },
  { autor:"G",id: "5PS", krajina: "Slovensko", kraj: "Prešovský", location: "Prešov", name: "Apartmán Záhrada", hodnotenie: "4,84", cena: 85,
fotky: ["/25.webp", "/25.webp","/25.webp","/25.webp"],filter: "mesto",
   },
  { autor:"G", id: "6PS", krajina: "Slovensko", kraj: "Prešovský", location: "Prešov", name: "Apartmán Lesný", hodnotenie: "4,86", cena: 90,
 fotky: ["/15.webp", "/15.webp","/15.webp","/15.webp"],filter: "mesto",
   },
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
  // Poprad
  {  autor:"F",id: "1PPD", krajina: "Slovensko", kraj: "Prešovský", location: "Poprad", name: "Apartmán City View", hodnotenie: "4,83", cena: 95,
fotky: ["/18.webp", "/18.webp","/18.webp","/18.webp"],filter: "mesto",
   },
  {  autor:"F",id: "2PPD", krajina: "Slovensko", kraj: "Prešovský", location: "Poprad", name: "Apartmán Slnečný", hodnotenie: "4,80", cena: 90,
fotky: ["/20.webp", "/20.webp","/20.webp","/20.webp"],filter: "mesto",
   },
  {  autor:"F",id: "3PPD", krajina: "Slovensko", kraj: "Prešovský", location: "Poprad", name: "Apartmán Panorama", hodnotenie: "4,85", cena: 100,
fotky: ["/23.webp", "/23.webp","/23.webp","/23.webp"],filter: "mesto",
   },
  {  autor:"F",id: "4PPD", krajina: "Slovensko", kraj: "Prešovský", location: "Poprad", name: "Apartmán Modrý", hodnotenie: "4,78", cena: 85,
fotky: ["/16.webp", "/16.webp","/16.webp","/16.webp"],filter: "mesto",
   },
  {  autor:"F",id: "5PPD", krajina: "Slovensko", kraj: "Prešovský", location: "Poprad", name: "Apartmán Záhrada", hodnotenie: "4,82", cena: 90,
  fotky: ["/15.webp", "/15.webp","/15.webp","/15.webp"],filter: "mesto",
   },
  { autor:"F",id: "6PPD", krajina: "Slovensko", kraj: "Prešovský", location: "Poprad", name: "Apartmán Lesný", hodnotenie: "4,84", cena: 95,
 fotky: ["/11.webp", "/11.webp","/11.webp","/11.webp"],filter: "mesto",
   },
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
  // Humenné
  { autor:"C",id: "1PHM", krajina: "Slovensko", kraj: "Prešovský", location: "Humenné", name: "Apartmán City View", hodnotenie: "4,81", cena: 85,
    fotky: ["/17.webp", "/17.webp","/17.webp","/17.webp"]
   },
  { autor:"C",id: "2PHM", krajina: "Slovensko", kraj: "Prešovský", location: "Humenné", name: "Apartmán Slnečný", hodnotenie: "4,78", cena: 80,
 fotky: ["/10.webp", "/15.webp","/15.webp","/15.webp"]
   },
  { autor:"C",id: "3PHM", krajina: "Slovensko", kraj: "Prešovský", location: "Humenné", name: "Apartmán Panorama", hodnotenie: "4,83", cena: 90,
   fotky: ["/10.webp", "/10.webp","/10.webp","/10.webp"]
   },
  {autor:"C", id: "4PHM", krajina: "Slovensko", kraj: "Prešovský", location: "Humenné", name: "Apartmán Modrý", hodnotenie: "4,75", cena: 75,
fotky: ["/20.webp", "/20.webp","/20.webp","/20.webp"]
   },
  { autor:"C",id: "5PHM", krajina: "Slovensko", kraj: "Prešovský", location: "Humenné", name: "Apartmán Záhrada", hodnotenie: "4,79", cena: 80,
fotky: ["/25.webp", "/25.webp","/25.webp","/25.webp"]
   },
  {autor:"C", id: "6PHM", krajina: "Slovensko", kraj: "Prešovský", location: "Humenné", name: "Apartmán Lesný", hodnotenie: "4,81", cena: 85,
fotky: ["/11.webp", "/11.webp","/11.webp","/11.webp"],bazen:"ano"
   },
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
  // Stará Ľubovňa
  { autor:"C",id: "1PSL", krajina: "Slovensko", kraj: "Prešovský", location: "Stará Ľubovňa", name: "Apartmán City View", hodnotenie: "4,82", cena: 80,
    fotky: ["/11.webp", "/11.webp","/11.webp","/11.webp"]
   },
  { autor:"C",id: "2PSL", krajina: "Slovensko", kraj: "Prešovský", location: "Stará Ľubovňa", name: "Apartmán Slnečný", hodnotenie: "4,79", cena: 75,
  fotky: ["/8.webp", "/8.webp","/8.webp","/8.webp"]
   },
  { autor:"C",id: "3PSL", krajina: "Slovensko", kraj: "Prešovský", location: "Stará Ľubovňa", name: "Apartmán Panorama", hodnotenie: "4,84", cena: 85,
  fotky: ["/5.webp", "/5.webp","/5.webp","/5.webp"]
   },
  { autor:"C" ,id: "4PSL", krajina: "Slovensko", kraj: "Prešovský", location: "Stará Ľubovňa", name: "Apartmán Modrý", hodnotenie: "4,77", cena: 70,
fotky: ["/20.webp", "/20.webp","/20.webp","/20.webp"]
   },
  { autor:"C",id: "5PSL", krajina: "Slovensko", kraj: "Prešovský", location: "Stará Ľubovňa", name: "Apartmán Záhrada", hodnotenie: "4,80", cena: 75,
fotky: ["/20.webp", "/20.webp","/20.webp","/20.webp"],bazen:"ano"
   },
  { id: "6PSL", krajina: "Slovensko", kraj: "Prešovský", location: "Stará Ľubovňa", name: "Apartmán Lesný", hodnotenie: "4,81", cena: 80,
autor:"K",
   },
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
  // Kežmarok
  {  autor:"H",id: "1PKM", krajina: "Slovensko", kraj: "Prešovský", location: "Kežmarok", name: "Apartmán City View", hodnotenie: "4,84", cena: 85,
 fotky: ["/6.webp", "/6.webp","/6.webp","/6.webp"]
   },
  {  autor:"H",id: "2PKM", krajina: "Slovensko", kraj: "Prešovský", location: "Kežmarok", name: "Apartmán Slnečný", hodnotenie: "4,81", cena: 80,
 fotky: ["/10.webp", "/10.webp","/10.webp","/10.webp"]
   },
  {  autor:"H",id: "3PKM", krajina: "Slovensko", kraj: "Prešovský", location: "Kežmarok", name: "Apartmán Panorama", hodnotenie: "4,86", cena: 90,
fotky: ["/5.webp", "/5.webp","/5.webp","/5.webp"]
   },
  {  autor:"H",id: "4PKM", krajina: "Slovensko", kraj: "Prešovský", location: "Kežmarok", name: "Apartmán Modrý", hodnotenie: "4,79", cena: 75,
fotky: ["/20.webp", "/20.webp","/20.webp","/20.webp"]
   },
  {autor:"H", id: "5PKM", krajina: "Slovensko", kraj: "Prešovský", location: "Kežmarok", name: "Apartmán Záhrada", hodnotenie: "4,82", cena: 80,
fotky: ["/12.webp", "/12.webp","/12.webp","/12.webp"]
  },
  {autor:"H", id: "6PKM", krajina: "Slovensko", kraj: "Prešovský", location: "Kežmarok", name: "Apartmán Lesný", hodnotenie: "4,83", cena: 85,
fotky: ["/26.webp", "/26.webp","/26.webp","/26.webp"]
   },
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
  // Bardejov
  { autor:"G",id: "1PBD", krajina: "Slovensko", kraj: "Prešovský", location: "Bardejov", name: "Apartmán City View", hodnotenie: "4,80", cena: 80,
  fotky: ["/5.webp", "/5.webp","/5.webp","/5.webp"]
  },
  {autor:"G", id: "2PBD", krajina: "Slovensko", kraj: "Prešovský", location: "Bardejov", name: "Apartmán Slnečný", hodnotenie: "4,78", cena: 75,
    fotky: ["/11.webp", "/11.webp","/11.webp","/11.webp"]
   },
  { autor:"G",id: "3PBD", krajina: "Slovensko", kraj: "Prešovský", location: "Bardejov", name: "Apartmán Panorama", hodnotenie: "4,82", cena: 85,
  fotky: ["/15.webp", "/15.webp","/15.webp","/15.webp"]
   },
  { autor:"G",id: "4PBD", krajina: "Slovensko", kraj: "Prešovský", location: "Bardejov", name: "Apartmán Modrý", hodnotenie: "4,76", cena: 70,
 fotky: ["/6.webp", "/6.webp","/6.webp","/6.webp"]
   },
  {autor:"G", id: "5PBD", krajina: "Slovensko", kraj: "Prešovský", location: "Bardejov", name: "Apartmán Záhrada", hodnotenie: "4,79", cena: 75,
     fotky: ["/6.webp", "/6.webp","/6.webp","/6.webp"]
   },
  {autor:"G",
     id: "6PBD", krajina: "Slovensko", kraj: "Prešovský", location: "Bardejov", name: "Apartmán Lesný", hodnotenie: "4,81", cena: 80,
     fotky: ["/8.webp", "/8.webp","/8.webp","/8.webp"]
   },
// PRESOV
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
//TRENCIN
      // Trenčín
      { autor:"N",
        id: "1TTN", krajina: "Slovensko", kraj: "Trenčiansky", location: "Trenčín", name: "Apartmán City View", hodnotenie: "4,85", cena: 95,
 fotky: ["/6.webp", "/6.webp","/6.webp","/6.webp"],ideal:"predvoch",
       },
  {autor:"N",
    id: "2TTN", krajina: "Slovensko", kraj: "Trenčiansky", location: "Trenčín", name: "Apartmán Slnečný", hodnotenie: "4,82", cena: 90,
  fotky: ["/4.webp", "/4.webp","/4.webp","/4.webp"]
   },
  { autor:"N",
    id: "3TTN", krajina: "Slovensko", kraj: "Trenčiansky", location: "Trenčín", name: "Apartmán Panorama", hodnotenie: "4,88", cena: 100,
    fotky: ["/11.webp", "/11.webp","/11.webp","/11.webp"]
   },
  { autor:"N",
    id: "4TTN", krajina: "Slovensko", kraj: "Trenčiansky", location: "Trenčín", name: "Apartmán Modrý", hodnotenie: "4,80", cena: 85,
 fotky: ["/6.webp", "/6.webp","/6.webp","/6.webp"]
   },
  { autor:"N",
    id: "5TTN", krajina: "Slovensko", kraj: "Trenčiansky", location: "Trenčín", name: "Apartmán Záhrada", hodnotenie: "4,84", cena: 90 ,
     fotky: ["/6.webp", "/6.webp","/6.webp","/6.webp"]
  },
  { autor:"N",
    autor:"B",id: "6TTN", krajina: "Slovensko", kraj: "Trenčiansky", location: "Trenčín", name: "Apartmán Lesný", hodnotenie: "4,86", cena: 95, 
     fotky: ["/6.webp", "/6.webp","/6.webp","/6.webp"]
  },
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
  // Prievidza
  { autor:"A",id: "1TPD", krajina: "Slovensko", kraj: "Trenčiansky", location: "Prievidza", name: "Apartmán City View", hodnotenie: "4,83", cena: 90,
 fotky: ["/6.webp", "/6.webp","/6.webp","/6.webp"]
   },
  { autor:"A",id: "2TPD", krajina: "Slovensko", kraj: "Trenčiansky", location: "Prievidza", name: "Apartmán Slnečný", hodnotenie: "4,80", cena: 85,
fotky: ["/17.webp", "/17.webp","/17.webp","/17.webp"]
   },
  {autor:"A", id: "3TPD", krajina: "Slovensko", kraj: "Trenčiansky", location: "Prievidza", name: "Apartmán Panorama", hodnotenie: "4,85", cena: 95,
fotky: ["/20.webp", "/20.webp","/20.webp","/20.webp"]
   },
  { autor:"A",id: "4TPD", krajina: "Slovensko", kraj: "Trenčiansky", location: "Prievidza", name: "Apartmán Modrý", hodnotenie: "4,78", cena: 80,
fotky: ["/5.webp", "/5.webp","/5.webp","/5.webp"]
   },
  { autor:"A",id: "5TPD", krajina: "Slovensko", kraj: "Trenčiansky", location: "Prievidza", name: "Apartmán Záhrada", hodnotenie: "4,82", cena: 85,
    fotky: ["/11.webp", "/11.webp","/11.webp","/11.webp"]
   },
  { autor:"A",id: "6TPD", krajina: "Slovensko", kraj: "Trenčiansky", location: "Prievidza", name: "Apartmán Lesný", hodnotenie: "4,84", cena: 90,
 fotky: ["/8.webp", "/8.webp","/8.webp","/8.webp"]
   },
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
  // Považská Bystrica
  { autor:"H",id: "1TPB", krajina: "Slovensko", kraj: "Trenčiansky", location: "Považská Bystrica", name: "Apartmán City View", hodnotenie: "4,81", cena: 85,
 fotky: ["/6.webp", "/6.webp","/6.webp","/6.webp"]
   },
  { autor:"H",id: "2TPB", krajina: "Slovensko", kraj: "Trenčiansky", location: "Považská Bystrica", name: "Apartmán Slnečný", hodnotenie: "4,78", cena: 80,
fotky: ["/25.webp", "/25.webp","/25.webp","/25.webp"]
   },
  { autor:"H",id: "3TPB", krajina: "Slovensko", kraj: "Trenčiansky", location: "Považská Bystrica", name: "Apartmán Panorama", hodnotenie: "4,83", cena: 90,
    fotky: ["/11.webp", "/11.webp","/11.webp","/11.webp"]
   },
  { autor:"H",id: "4TPB", krajina: "Slovensko", kraj: "Trenčiansky", location: "Považská Bystrica", name: "Apartmán Modrý", hodnotenie: "4,75", cena: 75,
  fotky: ["/15.webp", "/15.webp","/15.webp","/15.webp"]
   },
  { autor:"H",id: "5TPB", krajina: "Slovensko", kraj: "Trenčiansky", location: "Považská Bystrica", name: "Apartmán Záhrada", hodnotenie: "4,79", cena: 80,
 fotky: ["/6.webp", "/6.webp","/6.webp","/6.webp"]
   },
  { autor:"H",id: "6TPB", krajina: "Slovensko", kraj: "Trenčiansky", location: "Považská Bystrica", name: "Apartmán Lesný", hodnotenie: "4,81", cena: 85,
    fotky: ["/11.webp", "/11.webp","/11.webp","/11.webp"]
  },
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
  // Nové Mesto nad Váhom
  { autor:"L",id: "1TNM", krajina: "Slovensko", kraj: "Trenčiansky", location: "Nové Mesto nad Váhom", name: "Apartmán City View", hodnotenie: "4,82", cena: 80,
     fotky: ["/6.webp", "/6.webp","/6.webp","/6.webp"]
   },
  { autor:"L",id: "2TNM", krajina: "Slovensko", kraj: "Trenčiansky", location: "Nové Mesto nad Váhom", name: "Apartmán Slnečný", hodnotenie: "4,79", cena: 75 ,
  fotky: ["/5.webp", "/5.webp","/5.webp","/5.webp"]
  },
  { autor:"L",id: "3TNM", krajina: "Slovensko", kraj: "Trenčiansky", location: "Nové Mesto nad Váhom", name: "Apartmán Panorama", hodnotenie: "4,84", cena: 85,
    fotky: ["/11.webp", "/11.webp","/11.webp","/11.webp"]
   },
  { autor:"L",id: "4TNM", krajina: "Slovensko", kraj: "Trenčiansky", location: "Nové Mesto nad Váhom", name: "Apartmán Modrý", hodnotenie: "4,77", cena: 70,
  fotky: ["/8.webp", "/8.webp","/8.webp","/8.webp"]
   },
  { autor:"L",id: "5TNM", krajina: "Slovensko", kraj: "Trenčiansky", location: "Nové Mesto nad Váhom", name: "Apartmán Záhrada", hodnotenie: "4,80", cena: 75,
 fotky: ["/6.webp", "/6.webp","/6.webp","/6.webp"]
   },
  { autor:"L",id: "6TNM", krajina: "Slovensko", kraj: "Trenčiansky", location: "Nové Mesto nad Váhom", name: "Apartmán Lesný", hodnotenie: "4,81", cena: 80,
  fotky: ["/15.webp", "/15.webp","/15.webp","/15.webp"]
  },
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
  // Myjava
  { autor:"I",id: "1TMY", krajina: "Slovensko", kraj: "Trenčiansky", location: "Myjava", name: "Apartmán City View", hodnotenie: "4,80", cena: 80,
     fotky: ["/6.webp", "/6.webp","/6.webp","/6.webp"]
   },
  { autor:"I",id: "2TMY", krajina: "Slovensko", kraj: "Trenčiansky", location: "Myjava", name: "Apartmán Slnečný", hodnotenie: "4,78", cena: 75,
   fotky: ["/10.webp", "/10.webp","/10.webp","/10.webp"]
   },
  { autor:"I",id: "3TMY", krajina: "Slovensko", kraj: "Trenčiansky", location: "Myjava", name: "Apartmán Panorama", hodnotenie: "4,82", cena: 85,
  fotky: ["/8.webp", "/8.webp","/8.webp","/8.webp"]
   },
  { autor:"I",id: "4TMY", krajina: "Slovensko", kraj: "Trenčiansky", location: "Myjava", name: "Apartmán Modrý", hodnotenie: "4,76", cena: 70,
fotky: ["/10.webp", "/10.webp","/10.webp","/10.webp"]
   },
  { autor:"I",id: "5TMY", krajina: "Slovensko", kraj: "Trenčiansky", location: "Myjava", name: "Apartmán Záhrada", hodnotenie: "4,79", cena: 75,
    fotky: ["/11.webp", "/11.webp","/11.webp","/11.webp"]
   },
  { autor:"I",
    id: "6TMY", krajina: "Slovensko", kraj: "Trenčiansky", location: "Myjava", name: "Apartmán Lesný", hodnotenie: "4,81", cena: 80,
     fotky: ["/6.webp", "/6.webp","/6.webp","/6.webp"]
   },
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
// kokokokokokokokok
  // Bánovce nad Bebravou
  { autor:"G",
    id: "1TBB", krajina: "Slovensko", kraj: "Trenčiansky", location: "Bánovce nad Bebravou", name: "Apartmán City View", hodnotenie: "4,81", cena: 80,
fotky: ["/5.webp", "/5.webp","/5.webp","/5.webp"]
   },
  { autor:"G",
    id: "2TBB", krajina: "Slovensko", kraj: "Trenčiansky", location: "Bánovce nad Bebravou", name: "Apartmán Slnečný", hodnotenie: "4,78", cena: 75,
  fotky: ["/5.webp", "/5.webp","/5.webp","/5.webp"]
   },
  { autor:"G",
    id: "3TBB", krajina: "Slovensko", kraj: "Trenčiansky", location: "Bánovce nad Bebravou", name: "Apartmán Panorama", hodnotenie: "4,83", cena: 85,
    fotky: ["/11.webp", "/11.webp","/11.webp","/11.webp"]
   },
  { autor:"G",
    id: "4TBB", krajina: "Slovensko", kraj: "Trenčiansky", location: "Bánovce nad Bebravou", name: "Apartmán Modrý", hodnotenie: "4,75", cena: 70,
   fotky: ["/10.webp", "/10.webp","/10.webp","/10.webp"]
   },
  {autor:"G",
     id: "5TBB", krajina: "Slovensko", kraj: "Trenčiansky", location: "Bánovce nad Bebravou", name: "Apartmán Záhrada", hodnotenie: "4,79", cena: 75,
  fotky: ["/4.webp", "/4.webp","/4.webp","/4.webp"],bazen:"ano"
   },
  {autor:"G",
     id: "6TBB", krajina: "Slovensko", kraj: "Trenčiansky", location: "Bánovce nad Bebravou", name: "Apartmán Lesný", hodnotenie: "4,81", cena: 80,
fotky: ["/5.webp", "/5.webp","/5.webp","/5.webp"],bazen:"ano"
   },
  //TRENCIN

// vidiekt zapad
{ autor:"L",
  id: "1zapad", krajina: "Slovensko", name: "Apartmán Háj", kraj: "BratislavskýVIDIEK", location: "Smolenice", hodnotenie: "4,88", cena: 82, fotky: ["/11.webp", "/11.webp","/11.webp","/11.webp"] },

{ autor:"L",
   id: "2zapad", krajina: "Slovensko", name: "Vidiecka Perla", kraj: "BratislavskýVIDIEK", location: "Častá", hodnotenie: "4,91", cena: 79, fotky: ["/12.webp", "/12.webp","/12.webp","/12.webp"] },

{ autor:"L",
  id: "3zapad", krajina: "Slovensko", name: "Lesný Záliv", kraj: "BratislavskýVIDIEK", location: "Dolná Krupá", hodnotenie: "4,84", cena: 76, fotky: ["/8.webp", "/8.webp","/8.webp","/8.webp"] },

{autor:"L",
   id: "4zapad", krajina: "Slovensko", name: "Horský Pokoj", kraj: "BratislavskýVIDIEK", location: "Budmerice", hodnotenie: "4,89", cena: 81, fotky: ["/6.webp", "/6.webp","/6.webp","/6.webp"] },

{ autor:"L",
  id: "5zapad", krajina: "Slovensko", name: "Drevený Dvor", kraj: "BratislavskýVIDIEK", location: "Majcichov", hodnotenie: "4,80", cena: 75, fotky: ["/10.webp", "/10.webp","/10.webp","/10.webp"] },

{ autor:"L",
  id: "6zapad", krajina: "Slovensko", name: "Lúčne Útočisko", kraj: "BratislavskýVIDIEK", location: "Boleráz", hodnotenie: "4,85", cena: 78, fotky: ["/5.webp", "/5.webp","/5.webp","/5.webp"] },

{ autor:"G",
  id: "7zapad", krajina: "Slovensko", name: "Tiché Senohrady", kraj: "BratislavskýVIDIEK", location: "Marianka", hodnotenie: "4,92", cena: 88, fotky: ["/10.webp", "/10.webp","/10.webp","/10.webp"] },

{ autor:"J",
  id: "8zapad", krajina: "Slovensko", name: "Borovicový Domček", kraj: "BratislavskýVIDIEK", location: "Vysoká pri Morave", hodnotenie: "4,87", cena: 77, fotky: ["/22.webp", "/22.webp","/22.webp","/22.webp"] },

{ autor:"L",
  id: "9zapad", krajina: "Slovensko", name: "Riečny Kút", kraj: "BratislavskýVIDIEK", location: "Zálesie", hodnotenie: "4,93", cena: 85, fotky: ["/3.webp", "/3.webp","/3.webp","/3.webp"] },

{ autor:"K",
  id: "10zapad", krajina: "Slovensko", name: "Vidiecka Chalúpka", kraj: "BratislavskýVIDIEK", location: "Ivanka pri Dunaji", hodnotenie: "4,86", cena: 84, fotky: ["/17.webp", "/17.webp","/17.webp","/17.webp"] },

{ autor:"D",
  id: "11zapad", krajina: "Slovensko", name: "Zelený Mlyn", kraj: "BratislavskýVIDIEK", location: "Most pri Bratislave", hodnotenie: "4,89", cena: 82, fotky: ["/19.webp", "/19.webp","/19.webp","/19.webp"] },

{ autor:"L",
  id: "12zapad", krajina: "Slovensko", name: "Krajinné Hniezdo", kraj: "BratislavskýVIDIEK", location: "Rovinka", hodnotenie: "4,88", cena: 83, fotky: ["/20.webp", "/20.webp","/20.webp","/20.webp"] },


{ autor:"D",
  id: "13zapad", krajina: "Slovensko", name: "Podhorský Apartmán", kraj: "BratislavskýVIDIEK", location: "Topoľčianky", hodnotenie: "4,90", cena: 79, fotky: ["/2.webp", "/2.webp","/2.webp","/2.webp"] },

{ autor:"D",
  id: "14zapad", krajina: "Slovensko", name: "Slnečná Samota", kraj: "BratislavskýVIDIEK", location: "Zlaté Moravce", hodnotenie: "4,91", cena: 85, fotky: ["/16.webp", "/16.webp","/16.webp","/16.webp"] },

{ autor:"D",
  id: "15zapad", krajina: "Slovensko", name: "Javorový Priehon", kraj: "BratislavskýVIDIEK", location: "Bojná", hodnotenie: "4,87", cena: 74, fotky: ["/18.webp", "/18.webp","/18.webp","/18.webp"] },

{ autor:"D",
  id: "16zapad", krajina: "Slovensko", name: "Laznický Domov", kraj: "BratislavskýVIDIEK", location: "Jacovce", hodnotenie: "4,83", cena: 73, fotky: ["/25.webp", "/25.webp","/25.webp","/25.webp"] },



// vidiekt stred
{ autor:"D",
   krajina:"Slovensko",
  id: "1stred", kraj: "BanskobystrickýVIDIEK", location: "Hriňová", name: "Lesný Pokoj", hodnotenie:"4,90", cena:78, fotky: ["/2.webp", "/2.webp","/2.webp","/2.webp"] },

{ autor:"I",
   krajina:"Slovensko",
  id: "2stred", kraj: "BanskobystrickýVIDIEK", location: "Kokava nad Rimavicou", name: "Vidiecka Perla", hodnotenie:"4,88", cena:75,  fotky: ["/11.webp", "/11.webp","/11.webp","/11.webp"]},

{autor:"E",
   krajina:"Slovensko",
   id: "3stred", kraj: "BanskobystrickýVIDIEK", location: "Cinobaňa", name: "Horský Dvor", hodnotenie:"4,83", cena:72, fotky: ["/12.webp", "/12.webp","/12.webp","/12.webp"] },

{ autor:"D", krajina:"Slovensko",

  id: "4stred", kraj: "BanskobystrickýVIDIEK", location: "Mýto pod Ďumbierom", name: "Lúčne Útočisko", hodnotenie:"4,93", cena:89,fotky: ["/13.webp", "/13.webp","/13.webp","/13.webp"] },

{ autor:"K",
   krajina:"Slovensko",
  id: "5stred", kraj: "BanskobystrickýVIDIEK", location: "Šumiac", name: "Podhorská Chalúpka", hodnotenie:"4,85", cena:77, fotky: ["/20.webp", "/20.webp","/20.webp","/20.webp"] },

{ autor:"L",
   krajina:"Slovensko",
  id: "6stred", kraj: "BanskobystrickýVIDIEK", location: "Brusno", name: "Tiché Senohrady", hodnotenie:"4,87", cena:80, fotky: ["/13.webp", "/13.webp","/13.webp","/13.webp"] },

{ autor:"J",
   krajina:"Slovensko",
  id: "7stred", kraj: "BanskobystrickýVIDIEK", location: "Terchová", name: "Borovicový Domček", hodnotenie:"4,95", cena:88, fotky: ["/22.webp", "/22.webp","/22.webp","/22.webp"] },

{ autor:"H",
   krajina:"Slovensko",
  id: "8stred", kraj: "BanskobystrickýVIDIEK", location: "Liptovská Osada", name: "Riečny Kút", hodnotenie:"4,86", cena:76, fotky: ["/9.webp", "/9.webp","/9.webp","/9.webp"] },

{ autor:"I",
   krajina:"Slovensko",
  id: "9stred", kraj: "BanskobystrickýVIDIEK", location: "Oravská Lesná", name: "Vidiecka Chalúpka", hodnotenie:"4,92", cena:85, fotky: ["/10.webp", "/10.webp","/10.webp","/10.webp"] },

{ autor:"G",
   krajina:"Slovensko",
  id: "10stred", kraj: "BanskobystrickýVIDIEK", location: "Zázrivá", name: "Zelený Mlyn", hodnotenie:"4,90", cena:82,fotky: ["/19.webp", "/19.webp","/19.webp","/19.webp"] },

{ autor:"D",
   krajina:"Slovensko",
  id: "11stred", kraj: "BanskobystrickýVIDIEK", location: "Liptovský Ján", name: "Krajinné Hniezdo", hodnotenie:"4,94", cena:91, fotky: ["/12.webp", "/12.webp","/12.webp","/12.webp"] },

{ autor:"L",
   krajina:"Slovensko",
  id: "12stred", kraj: "BanskobystrickýVIDIEK", location: "Kraľovany", name: "Podhorský Apartmán", hodnotenie:"4,83", cena:72,fotky: ["/19.webp", "/19.webp","/19.webp","/19.webp"] },


{ autor:"D",
   krajina:"Slovensko",
  id: "13stred", kraj: "BanskobystrickýVIDIEK", location: "Valaská Belá", name: "Slnečná Samota", hodnotenie:"4,82", cena:70, fotky: ["/12.webp", "/12.webp","/12.webp","/12.webp"]},

{ autor:"B",
   krajina:"Slovensko",
  id: "14stred", kraj: "BanskobystrickýVIDIEK", location: "Čičmany", name: "Javorový Priehon", hodnotenie:"4,97", cena:92, fotky: ["/25.webp", "/25.webp","/25.webp","/25.webp"] },

{ autor:"D",
   krajina:"Slovensko",
  id: "15stred", kraj: "BanskobystrickýVIDIEK", location: "Zliechov", name: "Laznický Domov", hodnotenie:"4,85", cena:80, fotky:["/11.webp", "/11.webp","/11.webp","/11.webp"] },

{ autor:"D",
   krajina:"Slovensko",
  id: "16stred", kraj: "BanskobystrickýVIDIEK", location: "Omšenie", name: "Lúčna Rezidencia", hodnotenie:"4,86", cena:79, fotky:["/8.webp", "/8.webp","/8.webp","/8.webp"]},


// vidiekt vychod 
{ autor:"B",
  krajina:"Slovensko",
  id: "1vychod", kraj: "Prešovský", location: "Stará Ľubovňa", name: "Lesný Pokoj", hodnotenie:"4,90", cena:80, fotky: ["/11.webp", "/11.webp","/11.webp","/11.webp"] },

{autor:"B",
   krajina:"Slovensko",
   id: "2vychod", kraj: "PrešovskýVIDIEKT", location: "Hniezdne", name: "Vidiecka Perla", hodnotenie:"4,87", cena:76, fotky: ["/16.webp", "/16.webp","/16.webp","/16.webp"]},

{ autor:"C",
   krajina:"Slovensko",
  id: "3vychod", kraj: "PrešovskýVIDIEKT", location: "Jakubany", name: "Horský Dvor", hodnotenie:"4,86", cena:78, fotky: ["/19.webp", "/19.webp","/19.webp","/19.webp"] },

{ autor:"A",
   krajina:"Slovensko",
   id: "4vychod", kraj: "PrešovskýVIDIEKT", location: "Plavnica", name: "Lúčne Útočisko", hodnotenie:"4,84", cena:74,  fotky: ["/10.webp", "/10.webp","/10.webp","/10.webp"] },

{ autor:"K",
   krajina:"Slovensko",
  id: "5vychod", kraj: "PrešovskýVIDIEKT", location: "Torysa", name: "Podhorská Chalúpka", hodnotenie:"4,88", cena:82, fotky: ["/13.webp", "/13.webp","/13.webp","/13.webp"]},

{ autor:"L",
   krajina:"Slovensko",
  id: "6vychod", kraj: "PrešovskýVIDIEKT", location: "Nižná Polianka", name: "Tiché Senohrady", hodnotenie:"4,82", cena:71, fotky: ["/8.webp", "/8.webp","/8.webp","/8.webp"] },

{ autor:"B",
   krajina:"Slovensko",
  id: "7vychod", kraj: "PrešovskýVIDIEKT", location: "Krásnohorské Podhradie", name: "Borovicový Domček", hodnotenie:"4,91", cena:81, fotky: ["/9.webp", "/9.webp","/9.webp","/9.webp"] },

{ autor:"E",
   krajina:"Slovensko",
  id: "8vychod", kraj: "PrešovskýVIDIEKT", location: "Betliar", name: "Riečny Kút", hodnotenie:"4,95", cena:88, fotky: ["/12.webp", "/12.webp","/12.webp","/12.webp"] },

{ autor:"F",
   krajina:"Slovensko",
  id: "9vychod", kraj: "PrešovskýVIDIEKT", location: "Jasov", name: "Vidiecka Chalúpka", hodnotenie:"4,90", cena:83, fotky: ["/16.webp", "/16.webp","/16.webp","/16.webp"] },

{ autor:"B",
   krajina:"Slovensko",
  id: "10vychod", kraj: "PrešovskýVIDIEKT", location: "Slavec", name: "Zelený Mlyn", hodnotenie:"4,83", cena:76, fotky: ["/15.webp", "/15.webp","/15.webp","/15.webp"] },

{ autor:"H",
   krajina:"Slovensko",
  id: "11vychod", kraj: "PrešovskýVIDIEKT", location: "Medzev", name: "Krajinné Hniezdo", hodnotenie:"4,86", cena:80, fotky: ["/23.webp", "/23.webp","/23.webp","/23.webp"] },

{ autor:"B",
   krajina:"Slovensko",
  id: "12vychod", kraj: "PrešovskýVIDIEKT", location: "Háj", name: "Podhorský Apartmán", hodnotenie:"4,88", cena:82, fotky: ["/19.webp", "/19.webp","/19.webp","/19.webp"] },

{ autor:"B",
   krajina:"Slovensko",
  id: "13vychod", kraj: "PrešovskýVIDIEKT", location: "Ždiar", name: "Slnečná Samota", hodnotenie:"4,96", cena:95, fotky: ["/15.webp", "/15.webp","/15.webp","/15.webp"] },

{ autor:"B",
   krajina:"Slovensko",
  id: "14vychod", kraj: "PrešovskýVIDIEKT", location: "Lendak", name: "Javorový Priehon", hodnotenie:"4,89", cena:79, fotky: ["/20.webp", "/20.webp","/20.webp","/20.webp"] },

{ autor:"B",
   krajina:"Slovensko",
  id: "15vychod", kraj: "PrešovskýVIDIEKT", location: "Vernár", name: "Laznický Domov", hodnotenie:"4,85", cena:77, fotky: ["/11.webp", "/11.webp","/11.webp","/11.webp"] },


{ autor:"C",
  info: { 
    // hostia: "4 hostia",
    // spalne: "2 spálne",
    // lozka: "3 lôžka",
    // kupelna: "1 kúpeľňa",
    // reference: 54,
    // hodnotenie: "4.93",
    lokalita: "Byt v lokalite Bratislava",
    krajina: "Slovensko"
  },
  id: "16vychod", kraj: "PrešovskýVIDIEKT", location: "Reľov", name: "Lúčna Rezidencia", hodnotenie:"4,84", cena:73, fotky: ["/25.webp", "/25.webp","/25.webp","/25.webp"] },



];


export const ludia = [
  {
    id:"A",
    ide:"1",
    meno:"Mikulas",
    pocetrecenzie:34,
    pocethodnoteteni:"4,95",
     fotka:"/muz9.avif",
     email:"milkas@gamil.com",
    priezvisko:"Fudaly",

   
  uroven: "Superhostitel",
  telefon: "+421 912 345 678",
  datum: "12.3.1998",
  vyhoda: "Vždy som ochotný pomôcť",
  omne: "Mám rád cestovanie a nové zážitky. Milujem dobré jedlo, hudbu a stretávanie nových ľudí. Vo voľnom čase rád čítam knihy a skúšam nové hobby.",



    kdebyva:"Košice",
    aktivny:"Aktívny používateľ už 5 rokov.",
    recenzie: ["D","B","C","G"],
        koment:"Bývanie bolo asi v najlepšej lokalite akú sme si len mohli vybrať. Komunikácia hostiteľa bola veľmi rýchla. Určite tento byt odporúčam a veľmi rád sa presne vrátim aj na najbližšej návšteve Budapešti.",

 vlastne :[
  {takasi: "Vsetko bolo super, nemozem sa stazovat.", ohodnotenie: 4.4,kdetobolo:"1BB"},
  {takasi: "Skvelé služby, určite odporúčam.", ohodnotenie: 4.2,kdetobolo:"2BB"},
  {takasi: "Ubytovanie čisté a útulné, úplná pohoda.", ohodnotenie: 4.7,kdetobolo:"3BB"},
  {takasi: "Majiteľ veľmi milý, všetko v poriadku.", ohodnotenie: 4.1,kdetobolo:"4BB"},
  {takasi: "Lokalita fajn, ale internet bol slabší.", ohodnotenie: 3.2,kdetobolo:"5BB"},
  {takasi: "Celkom dobré, ale check-in trval príliš dlho.", ohodnotenie: 3.3,kdetobolo:"1BM"},


],
        majitel:[
    "samoobsluha",
    "flexibilny",
    "cistota",
    "storno",
    "komfort",
    "parkovanie",
    "vchod",

  ],
 byvanie: ["1KK","2KK","3KK","4KK","5KK","6KK"],
    hodnotim:3,
    cislo:"3,5",
    lokalita:"Slovensko",

    info: { 
    hostia: "4 hostia",
    spalne: "2 spálne",
    lozka: "3 lôžka",
    kupelna: "2 kúpeľňa",
  },
  kamosi:[
    "B","C","E","F","G"
  ],
    popisek: "Zrelaxujte na tomto jedinečnom a pokojnom mieste, ktoré sa nachádza v tesnej blízkosti malebného lesoparku, pričom ponúka výbornú dostupnosť do centra mesta. Byt sa nachádza na treťom poschodí moderného bytového domu  novostavby vybavenej výťahom a s bezplatným parkovaním v garáži, čo zabezpečuje maximálny komfort pre vás i vaše vozidlo.Interiér bytu je kompletne zariadený a vybavený všetkým, čo potrebujete pre pohodlný pobyt. K dispozícii sú vonkajšie žalúzie, ktoré umožňujú regulovať svetlo a súkromie, ako aj klimatizačná jednotka pre príjemnú teplotu počas horúcich dní. Z priestrannej terasy sa vám naskytne nádherný výhľad na okolitý park a panorámu Bratislavy, čo robí miesto ideálnym pre rannú kávu alebo večerný relax.Dostupnosť do centra mesta je veľmi dobrá  iba 7 minút pešo k autobusovej zastávke, odkiaľ premáva viacero spojov, alebo len 5 minút taxíkom. V tomto byte sa budete cítiť ako doma  pohodlne, bezpečne a úplne uvoľnene.",
   konverzacia: [
  { on: "Ahoj! Vitaj u nás 🙂. Dúfam, že cesta prebehla bez problémov. Chcel som ti dať vedieť viac o apartmáne, aby si sa cítil komfortne počas pobytu." },
  { ja: "Ahoj, ďakujem! Cesta bola celkom fajn, hoci bolo dosť premávky. Rád by som vedel viac o vybavení a okolí." },
  { on: "Samozrejme! Apartmán má plne vybavenú kuchyňu, pohodlnú obývačku s TV a Wi-Fi, klimatizáciu vo všetkých izbách a pravidelne udržiavané kúpeľne. Každý detail sme sa snažili udržať čistý a pohodlný." },
  { ja: "To znie skvele. A čo parkovanie? Prídem autom." },
  { on: "Neboj, máme podzemnú garáž, parkovanie je zahrnuté v cene. Stačí mi dať vedieť tvoje registračné číslo." },
  { ja: "Super! A ako je to s check-in a check-out?" },
  { on: "Check-in je od 14:00, check-out do 11:00. Ak prídeš skôr alebo odchádzaš neskôr, môžeme sa dohodnúť podľa dostupnosti." },
  { ja: "Výborne. A dá sa v okolí niekde dobre raňajkovať?" },
  { on: "Áno, len 2 minúty pešo je malá kaviareň s čerstvými croissantami a kávou. Ak chceš, pošlem ti aj zoznam ďalších odporúčaných miest." },
  { ja: "To by bolo super, rád by som vyskúšal niekoľko miest." },
  { on: "Okrem toho je tu krásny park, kde sa dá ísť na prechádzku alebo bežať, a neďaleko sú múzeá a historické pamiatky. Ak máš rád turistiku, môžem odporučiť aj výlety mimo mesta." },
  { ja: "Skvelé, plánujem si spraviť pár dní, tak to určite využijem. A ešte – je v apartmáne rýchlovarná kanvica a mikrovlnka?" },
  { on: "Áno, všetko je pripravené. Dokonca aj základné korenie, olej a čaj, takže môžeš rovno variť." },
  { ja: "Perfektné, už sa teším na pobyt!" },
  { on: "Teším sa, že si vybral náš apartmán. Ak budeš čokoľvek potrebovať, napíš mi kedykoľvek, som tu na pomoc." },
],

    odpovede:[
  { kluc: "Cau mam sa fajn" },
  { kluc: "Ty ako" },
  { kluc: "Pohoda to das" },
  { kluc: "Nie" },
  { kluc: "Snad to pojde" },
  { kluc: "Uvidime" },
  { kluc: "Pojdeme zajtra " },
  { kluc: "Teraz mozno to pojde" },
  
],

byvanieotazky:[
  {
   otazka1: "Koľko úložného priestoru ponúka byt?",
odpoved1: "Byt má dostatok políc a skríň pre všetky vaše veci.",

otazka2: "Aké sú priemerné mesačné náklady?",
odpoved2: "Mesačné náklady sa pohybujú okolo 150–170 €.",

otazka3: "Je v okolí dostupná občianska vybavenosť?",
odpoved3: "V blízkosti nájdete obchody, kaviareň a lekáreň do 10 minút pešo.",

otazka4: "Môžem si priviesť domáce zvieratá?",
odpoved4: "Áno, domáce zvieratá sú vítané po predchádzajúcej dohode.",

otazka5: "Je k dispozícii parkovanie?",
odpoved5: "Parkovanie je možné na verejných miestach pred budovou."
  }

]
    
  },

  {

    uroven: "TopHost",
  telefon: "+421 949 876 321",
  datum: "23.8.2000",
  vyhoda: "Ochotný a flexibilný",
  omne: "Rád športujem a trávim čas vonku. Mám rád filmy, hudbu a dobrú kávu. Snažím sa spoznávať nové miesta a kultúry a stretávať zaujímavých ľudí.",

    id:"B",
    meno:"Lea",
     fotka:"/zena9.avif",
     aktivny:"Aktívny používateľ už 7 rokov.",
    priezvisko:"Marketova",
    pocetrecenzie:31,
    pocethodnoteteni:"3,85",
    email:"lealea@gamil.com",
     lokalita:"Slovensko",
     kdebyva:"Levice",
        recenzie: ["D","A","C","G"],
     koment: "Apartmán bol pohodlný, lokalita skvelá na prechádzky.",
       majitel:[
    "wifi",
    "parkovanie",
    "lokalita",
    "storno",
    "wifi",
    "parkovanie",
    "storno",

  ],  hodnotim:4,
  byvanie: ["1NL","2NL","3NL","4NL","5NL","6NL"],
   cislo:"4,2",
     kamosi:[
    "G","E","N","G"
  ],
 vlastne : [
  {takasi: "Všetko super, určite by som sa vrátil.", ohodnotenie: 4.5,kdetobolo:"1NN"},
  {takasi: "Ubytovanie skvelé, čisté a pohodlné.", ohodnotenie: 4.5,kdetobolo:"1BB"},
  {takasi: "Majiteľ veľmi ochotný, služby na jednotku.", ohodnotenie: 4.3,kdetobolo:"2NN"},
  {takasi: "Celkom dobré, ale apartmán bol trochu menší, než som očakával.", ohodnotenie: 4.1,kdetobolo:"1BB"},
  {takasi: "Výhľad krásny, ale hluk z ulice mi prekážal.", ohodnotenie: 3.2,kdetobolo:"1BB"},
  {takasi: "Internet často padal, inak spokojnosť.", ohodnotenie: 3.2,kdetobolo:"1TT"},
  {takasi: "Posteľ pohodlná, kúpeľňa však nebola úplne čistá.", ohodnotenie: 3.6,kdetobolo:"4TT"},
  {takasi: "Super lokalita, všetko po ruke, ale check-in trochu komplikovaný.", ohodnotenie: 4.2,kdetobolo:"3TT"},
  {takasi: "Celkom fajn, ale kuchyňa by mohla byť lepšie vybavená.", ohodnotenie: 3.1,kdetobolo:"4NN"},
  {takasi: "Celková spokojnosť, menšie nedostatky, ale nič zásadné.", ohodnotenie: 4.3,kdetobolo:"2TT"}
],


    info: { 
    hostia: "3 hostia",
    spalne: "3 spálne",
    lozka: "2 lôžka",
    kupelna: "1 kúpeľňa",
  },

   popisek: "Oddýchnite si v tomto priestrannom byte, ktorý sa nachádza v pokojnej a zelenej časti mesta. Byt je na druhom poschodí moderného domu s výťahom a parkovaním, interiér je plne zariadený – klimatizácia, pohodlný nábytok, plne vybavená kuchyňa a terasa s výhľadom na park. Je ideálny pre tých, ktorí chcú uniknúť ruchu mesta, no zároveň mať všetko potrebné na dosah ruky – MHD, obchody a centrum sú len pár minút vzdialené.",


     odpovede: [
  { kluc: "Ahoj 🙂 vitaj, dúfam že cesta prebehla v poriadku." },
  { kluc: "Apartmán je pripravený, Wi-Fi je silná a všade je teplo." },
  { kluc: "Parkovanie je v podzemnej garáži, stačí mi EČV auta." },
  { kluc: "Check-in je od 14:00, ak prídeš skôr, vieme sa dohodnúť." },
  { kluc: "Check-out je do 11:00, neskorší odchod vieme riešiť." },
  { kluc: "V okolí je park, kaviareň a pár reštaurácií." },
  { kluc: "Telocvičňa je 10 min pešo alebo beh v parku." },
  { kluc: "Kuchyňa je plne vybavená, môžeš hneď variť." }
],
    konverzacia: [
  { on: "Ahoj, vitaj! Cesta prebehla bez problémov?" },
  { ja: "Ahoj, hej, v pohode, trochu zápcha, ale dorazil som." },
  { on: "Super, všetko je pripravené. Apartmán je pohodlný, Wi-Fi silná, všade teplo." },
  { ja: "To je fajn. A parkovanie? Chcem sa vyhnúť hľadaniu miesta." },
  { on: "Neboj, máme garáž pod domom. Stačí mi dať vedieť číslo auta." },
  { ja: "Perfektné. A check-in ako funguje?" },
  { on: "Od 14:00, ale ak prídeš skôr, môžem ti dať kľúče, ak bude voľno." },
  { ja: "A check-out?" },
  { on: "Do 11:00. Ak potrebuješ neskôr, stačí napísať a dáme to dohromady." },
  { ja: "Fajn, a okolie? Dá sa niečo robiť alebo niekam ísť?" },
  { on: "Áno, je tu park na beh, kaviareň na raňajky a pár reštaurácií do 5 minút pešo. Plus múzeá a street art." },
  { ja: "Znie dobre. A šport alebo posilňovanie?" },
  { on: "Telocvičňa 10 min pešo, alebo beh v parku, úplne ideálne." },
  { ja: "Výborne. Kuchyňa je vybavená?" },
  { on: "Áno, mikrovlnka, rýchlovarná kanvica, riad, základné veci na varenie, soľ a korenie." },
  { ja: "Super, už sa teším." },
  { on: "Teším sa aj ja. Ak niečo potrebuješ, napíš kedykoľvek." },
  { ja: "Ďakujem, určite." },
  { on: "Ak budeš chcieť tipy na výlety, daj vedieť, pripravím zoznam miest, ktoré stoja za to." },
  { ja: "To by bolo super, rád sa pozriem po okolí." },
  { on: "Ok, a ak máš nejaké otázky ohľadom apartmánu alebo pravidiel, pokojne sa spýtaj." },
  { ja: "Momentálne všetko jasné, ale určite sa ozvem, ak niečo vyskúmam." },
  { on: "Dohodnuté. Uži si pobyt, a ak budeš čokoľvek potrebovať, som tu." },
],
byvanieotazky: [
  {
    otazka1: "Má byt dostatok prirodzeného svetla?",
    odpoved1: "Veľké okná zabezpečujú svetlo počas celého dňa.",

    otazka2: "Aké sú náklady na internet a energie?",
    odpoved2: "Mesačne sa počíta okolo 120 € za všetky služby.",

    otazka3: "Je v blízkosti verejná doprava?",
    odpoved3: "Zastávka autobusu je priamo pred domom a vlak je 10 minút pešo.",

    otazka4: "Môžem si upraviť interiér podľa seba?",
    odpoved4: "Áno, drobné úpravy sú povolené po dohode s majiteľom.",

    otazka5: "Existujú spoločné priestory?",
    odpoved5: "K dispozícii je terasa a malá záhradka pre obyvateľov."
  }
]

  },

  {
     uroven: "MasterHost",
  telefon: "+421 918 234 567",
  datum: "19.7.1990",
  vyhoda: "Rýchle odpovede a spoľahlivosť",
  omne: "Rád trávim čas s priateľmi a rodinou. Zbožňujem hudbu a často chodím na koncerty. Vo voľnom čase rád behám a objavujem nové miesta vo svojom meste.",

    uroven: "EliteHost",
  telefon: "+421 907 654 321",
  datum: "5.12.1992",
  vyhoda: "Skvelá komunikácia a flexibilita",
  omne: "Som vášnivý cestovateľ a milovník prírody. Rád varím a skúšam nové recepty. Večer si rád zahrám stolové hry alebo si pozriem dobrý film. Teším sa na nové zážitky a stretávanie priateľských ľudí.",
    byvanie: ["1NN","2NN","3NN","4NN","5NN","6NN","7NN"],
    id:"C",
    meno:"Marek",
     fotka:"/muz3.webp",
      lokalita:"Slovensko",
     aktivny:"Aktívny používateľ už 8 rokov.",
    priezvisko:"Novak",
    pocetrecenzie:74,
     kdebyva:"Nitra",
    pocethodnoteteni:"4,45",
    email:"novak@gamil.com",
    koment: "Apartmán bol veľmi čistý a pohodlný, lokalita skvelá na prechádzky.",
       recenzie: ["D","B","L","I","G","F"],
           majitel:[
    "overeny",
    "cistota",
    "wifi",
    "storno",
    "wifi",
    "parkovanie",
    "storno",

  ],  hodnotim:5,
   cislo:"5,0",
  kamosi:[
    "G","E","B","A"
  ],
   vlastne : [
  {takasi: "Pohodlné ubytovanie, všetko fungovalo bez problémov.", ohodnotenie: 4.5,kdetobolo:"4BE"},
  {takasi: "Čisté, útulné a dobre vybavené, odporúčam.", ohodnotenie: 4.5,kdetobolo:"1NN"},
  {takasi: "Skvelá lokalita, blízko všetkého, veľmi spokojný.", ohodnotenie: 4.5,kdetobolo:"4NN"},
  {takasi: "Apartmán fajn, ale občas hlučné okolie.", ohodnotenie: 4.5,kdetobolo:"3NN"},
  {takasi: "Kuchyňa pekná, ale chýbalo viac riadu.", ohodnotenie: 3.6,kdetobolo:"2BE"},
  {takasi: "Check-in trochu zložitý, inak v pohode.", ohodnotenie: 3.4,kdetobolo:"3BE"},
  {takasi: "Posteľ tvrdšia, než som čakal, ale dalo sa spať.", ohodnotenie: 3.9,kdetobolo:"5BE"},
  {takasi: "Výhľad super, ale miestnosť trochu tmavá.", ohodnotenie: 4.3,kdetobolo:"1NN"},
  {takasi: "Majiteľ milý, komunikácia rýchla, ubytovanie fajn.", ohodnotenie: 4.2,kdetobolo:"4BE"},
  {takasi: "Celková spokojnosť, menšie chyby, ale nevadí.", ohodnotenie: 4.4,kdetobolo:"2BE"}
],
 

    info: { 
    hostia: "4 hostia",
    spalne: "4 spálne",
    lozka: "3 lôžka",
    kupelna: "1 kúpeľňa",
  },

     koment:"Super článok, veľmi poučné informácie.",
      popisek: "Vychutnajte si pobyt v tomto štýlovom byte, ktorý ponúka kombináciu moderného dizajnu a maximálneho komfortu. Byt sa nachádza v novostavbe s výťahom a súkromným parkovaním a jeho interiér je kompletne vybavený – od klimatizácie a pohodlných postelí po modernú kuchyňu a priestrannú terasu. Z terasy sa vám naskytne nádherný výhľad na panorámu mesta a okolité parky, čo vytvára ideálne miesto na rannú kávu alebo večerný relax. Lokalita ponúka pokojné prostredie a zároveň rýchly prístup do centra mesta pešo alebo MHD.",

       odpovede: [
  { kluc: "Ahoj, vitaj! Dúfam, že cesta bola bez stresu." },
  { kluc: "Apartmán je pripravený, posteľ čistá, Wi-Fi funguje dobre." },
  { kluc: "Parkovanie je hneď pri dome, stačí mi EČV auta." },
  { kluc: "Check-in je od 15:00, ak potrebuješ skôr, dá sa dohodnúť." },
  { kluc: "Check-out je do 10:00, ak chceš neskôr, napíš mi." },
  { kluc: "V okolí sú pekné prechádzky, kaviarne a niekoľko reštaurácií." },
  { kluc: "Na šport je blízko park, alebo malá telocvičňa." },
  { kluc: "Kuchyňa je plne vybavená, môžeš variť hneď po príchode." }
],

konverzacia: [
  { on: "Čau, práve som dorazil." },
  { ja: "Super, cesta prebehla bez problémov?" },
  { on: "Áno, všetko OK, trocha kolón, ale dorazil som." },
  { ja: "Výborne. Apartmán je pripravený, posteľ čistá, Wi-Fi funguje dobre." },
  { on: "Fajn, a parkovanie?" },
  { ja: "Máme parkovanie pri dome, len mi daj EČV auta." },
  { on: "A kedy je check-in a check-out?" },
  { ja: "Check-in od 15:00, skôr vieme dohodnúť. Check-out do 10:00, neskorší odchod je možný." },
  { on: "Ok, a čo okolie? Niečo robiť?" },
  { ja: "Sú tu prechádzky v parku, kaviarne a pár reštaurácií. Plus niekoľko turistických miest." },
  { on: "Dobré, a šport alebo fitness?" },
  { ja: "Malá telocvičňa blízko alebo beh v parku." },
  { on: "A kuchyňa?" },
  { ja: "Plne vybavená, mikrovlnka, kanvica, riad a základné korenie." },
  { on: "Perfektné, teším sa." },
  { ja: "Aj ja. Ak budeš niečo potrebovať, napíš." },
  { on: "Dík, určite." },
  { ja: "Ak chceš tipy na výlety, rád poradím." },
  { on: "Super, budem sa pozerať po okolí." },
  { ja: "V pohode, ozvi sa, ak budeš niečo potrebovať." }
],
byvanieotazky: [
  {
    otazka1: "Aká je dostupnosť obchodov a služieb?",
    odpoved1: "V okolí nájdete kaviareň, supermarket a lekáreň všetko do 5 minút.",

    otazka2: "Ako bezpečná je lokalita?",
    odpoved2: "Susedstvo je pokojné a pravidelne monitorované kamerovým systémom.",

    otazka3: "Je byt vhodný pre študentov alebo mladé rodiny?",
    odpoved3: "Áno, prostredie je tiché a blízko sú školy a športoviská.",

    otazka4: "Ako rýchlo sa dá dostať do centra mesta?",
    odpoved4: "Autom sa do centra dostanete približne za 10 minút, MHD 15 minút.",

    otazka5: "Je možnosť úpravy výbavy bytu?",
    odpoved5: "Malé úpravy interiéru sú povolené po dohode s majiteľom."
  }
]
},

{
  uroven: "FriendlyHost",
  telefon: "+421 922 111 333",
  datum: "8.4.1996",
  vyhoda: "Ochotný pomôcť kedykoľvek",
  omne: "Mám rád srandu, dobré jedlo a dlhé prechádzky so psom. Zbožňujem cestovanie a spoznávanie nových ľudí. Každý deň sa snažím naučiť niečo nové.",
    id:"D",
    byvanie: ["1TT","2TT","3TT","4TT","5TT","6TT"],
    pocetrecenzie:82,
    pocethodnoteteni:"5,0",
     kdebyva:"Trnava",
     vlastne : [
 {takasi: "Skutočne pohodlné, cítil som sa ako doma.", ohodnotenie: 4.5,kdetobolo:"1KG"},
  {takasi: "Útulné miesto, všetko čisté a pripravené na pobyt.", ohodnotenie: 4.5,kdetobolo:"2KG"},
  {takasi: "Lokalita výborná, blízko centra, spokojnosť.", ohodnotenie: 4.5,kdetobolo:"4KG"},
  {takasi: "Apartmán v poriadku, ale trochu hlučné susedstvo.", ohodnotenie: 4.5,kdetobolo:"5KG"},
  {takasi: "Chýbalo pár základných vecí v kuchyni, ale dalo sa zvládnuť.", ohodnotenie: 3.5,kdetobolo:"2BE"},
  {takasi: "Príchod bol komplikovanejší, ale personál pomohol.", ohodnotenie: 3.2,kdetobolo:"4BE"},
  {takasi: "Posteľ mohla byť pohodlnejšia, inak v pohode.", ohodnotenie: 4.5,kdetobolo:"3BE"},
  {takasi: "Výhľad parádny, no miestnosť by mohla byť svetlejšia.", ohodnotenie: 4.5,kdetobolo:"1BE"},
  {takasi: "Majiteľ komunikoval promptne, služby fajn.", ohodnotenie: 4.5,kdetobolo:"4BE"},
  {takasi: "Celkovo spokojnosť, drobné nedostatky, ale nič hrozné.", ohodnotenie: 4.5,kdetobolo:"2BE"}
],
    recenzie: ["A","H","I","G","F"],
     fotka:"/zena1.jpg",
      kamosi:[
    "G","C","B","A"
  ],
   odpovede: [
  { kluc: "Dobrý deň, vitajte! Dúfam, že cesta bola bez problémov." },
  { kluc: "Všetko je pripravené – apartmán čistý a pohodlný." },
  { kluc: "Parkovanie je zabezpečené hneď pri budove." },
  { kluc: "Check-in je flexibilný od 15:00, môžeme sa dohodnúť aj skôr." },
  { kluc: "Check-out je do 10:00, neskorší odchod je možný po dohode." },
  { kluc: "V okolí sú pekné prechádzky, kaviareň a niekoľko reštaurácií." },
  { kluc: "Ak chceš športovať, je tu telocvičňa a park vhodný na beh." },
  { kluc: "Kuchyňa je kompletne vybavená, môžeš variť hneď po príchode." }
],

konverzacia: [
  { on: "Dobrý deň, práve som dorazil." },
  { ja: "Dobrý deň, všetko prebehlo v poriadku?" },
  { on: "Áno, cesta bola hladká, trochu zápcha, ale dorazil som bez problémov." },
  { ja: "Skvelé. Apartmán je pripravený, všetko čisté a pohodlné." },
  { on: "Výborne. Parkovanie je k dispozícii?" },
  { ja: "Áno, parkovanie je hneď pri budove. Stačí mi číslo auta." },
  { on: "Check-in a check-out?" },
  { ja: "Check-in od 15:00, môžeme sa dohodnúť aj skôr. Check-out do 10:00, neskorší odchod je možný." },
  { on: "A okolie? Dá sa niečo robiť?" },
  { ja: "V okolí sú prechádzky, kaviareň, reštaurácie a niekoľko turistických miest." },
  { on: "Super, športovanie?" },
  { ja: "Telocvičňa 10 min pešo alebo beh v parku." },
  { on: "Kuchyňa vybavená?" },
  { ja: "Áno, mikrovlnka, rýchlovarná kanvica, riad a základné korenie." },
  { on: "Perfektné, teším sa." },
  { ja: "Rovnako. Ak budeš niečo potrebovať, stačí napísať." },
  { on: "Dík, určite." },
  { ja: "Ak chceš tipy na výlety alebo reštaurácie, daj vedieť." },
  { on: "To by bolo fajn, rád sa pozriem po okolí." },
  { ja: "Dohodnuté, ozvi sa, ak budeš niečo potrebovať." }
],
    meno:"Sofia",
        email:"sofka@gamil.com",
         lokalita:"Slovensko",
        koment: "Nemam slov vsetko bolo tip top.Hned ako som prisla vedela som ze toto je to miesto.Nemam slov vsetko bolo tip top.Hned ako som prisla vedela som ze toto je to miesto.som prisla vedela som ze toto je to miesto.som prisla vedela som ze toto je to miesto.som prisla vedela som ze toto je to miesto.",
    aktivny:"Aktívny používateľ už 5 rokov.",
    priezvisko:"Kovacova",
    // recenzie: ["B","E","C","F"],
          majitel:[
    "parkovanie",
    "komfort",
    "wifi",
    "storno",
    "wifi",
    "parkovanie",
    "storno",

  ],
    hodnotim:5,

    info: { 
    hostia: "3 hostia",
    spalne: "2 spálne",
    lozka: "1 lôžka",
    kupelna: "2 kúpeľňa",
  },
  byvanieotazky: [
  {
    otazka1: "Aký typ podláh je v byte?",
    odpoved1: "V byte sú moderné laminátové podlahy a dlažba v kúpeľni.",

    otazka2: "Je v byte klimatizácia alebo kúrenie?",
    odpoved2: "Byt má vlastné plynové kúrenie a pripojenie na klimatizáciu.",

    otazka3: "Je byt vhodný pre prácu z domu?",
    odpoved3: "Áno, k dispozícii je tiché miesto vhodné na pracovný kútik.",

    otazka4: "Aké vybavenie kuchyne je k dispozícii?",
    odpoved4: "Kuchyňa je plne vybavená modernými spotrebičmi vrátane umývačky.",

    otazka5: "Je možné si uskladniť bicykle alebo športové vybavenie?",
    odpoved5: "Áno, k dispozícii je uzamykateľná komora pre bicykle a športové potreby."
  }
],

     cislo:"4,9",
      popisek: "Užite si pobyt v tomto moderne zariadenom byte, ktorý sa nachádza v tichej lokalite obklopenej zeleňou. Byt je situovaný na druhom poschodí novostavby s výťahom a súkromným parkovaním. Interiér je plne vybavený – pohodlné postele, klimatizácia, kompletne zariadená kuchyňa a terasu s výhľadom na okolitý park a panorámu mesta. Toto miesto ponúka ideálne prostredie na relax, rannú kávu na terase alebo večerný oddych po dni strávenom v meste. Lokalita je praktická – centrum mesta je len pár minút pešo a MHD zaručuje jednoduché spojenie so všetkými dôležitými miestami.",
},

{
   uroven: "ProHost",
  telefon: "+421 930 555 777",
  datum: "30.9.1993",
  vyhoda: "Spoľahlivý a priateľský",
  omne: "Rád skúšam nové hobby, ako je maľovanie alebo pečenie. Milujem prírodu a bicyklovanie, a keď je čas, rád si pozriem dobrý seriál alebo film.",
    id:"E",
byvanie: ["1TS","2TS","3TS","4TS","5TS","6TS"],
    info: { 
    hostia: "4 hostia",
     kdebyva:"Senica",
    spalne: "2 spálne",
     lokalita:"Slovensko",
    lozka: "5 lôžka",
    kupelna: "3 kúpeľňa",
  },
      kamosi:[
    "B","C","E","F"
  ],
    vlastne : [
  {takasi: "Ubytovanie super, pohodlné a tiché.",ohodnotenie: 4.2,kdetobolo:"1KG"},
  {takasi: "Všetko čisté, dobre zariadené, spokojnosť.", ohodnotenie: 4.5,kdetobolo:"2KSN"},
  {takasi: "Skvelá lokalita, blízko obchody a kaviareň.", ohodnotenie: 4.5,kdetobolo:"1KG"},
  {takasi: "Apartmán fajn, ale občas hlučný výťah.", ohodnotenie: 4.5,kdetobolo:"1KSN"},
  {takasi: "Kuchyňa slušná, ale chýbalo pár základných riadov.", ohodnotenie: 4.2,kdetobolo:"1KG"},
  {takasi: "Check-in trochu pomalý, inak všetko ok.", ohodnotenie: 4.5,kdetobolo:"4KG"},
  {takasi: "Posteľ tvrdšia, než som očakával, ale dalo sa spať.", ohodnotenie: 4.1,kdetobolo:"3KSN"},
  {takasi: "Výhľad na mesto úžasný, ale miestnosť tmavá.", ohodnotenie: 4.2,kdetobolo:"4KSN"},
  {takasi: "Majiteľ milý, komunikácia rýchla, ubytovanie fajn.", ohodnotenie: 3.5,kdetobolo:"1KG"},
  {takasi: "Celkovo spokojnosť, menšie nedostatky, nič vážne.", ohodnotenie: 3.5,kdetobolo:"5KSN"}
],

     fotka:"/muz8.avif",
     aktivny:"Aktívny používateľ už 1 rok.",
    meno:"Tomas",
    koment: "Super vseetko urcite sa vratime aj s celou rodinou",
      email:"tomaskohruby@gamil.com",
    recenzie: ["A","D","H","I","F"],
    pocetrecenzie:83,
    pocethodnoteteni:"3,5",
    priezvisko:"Hruby",
       majitel:[
    "samoobsluha",
    "komfort",
    "wifi",
    "parkovanie",
    "wifi",
    "parkovanie",
    "storno",

  ],
   odpovede: [
  { kluc: "Dobrý deň, apartmán je pripravený a čaká na vás." },
  { kluc: "Všetko je čisté a pohodlné, môžete sa ubytovať hneď po príchode." },
  { kluc: "Máme zabezpečené parkovanie priamo pri budove." },
  { kluc: "Check-in začína o 16:00, ale môžeme sa dohodnúť aj skôr." },
  { kluc: "Check-out je do 12:00, neskorší odchod je možné zariadiť po dohode." },
  { kluc: "V blízkom okolí sú pekné chodníky, parky a kaviarne." },
  { kluc: "Pre šport je tu malá telocvičňa a možnosť behu v parku." },
  { kluc: "Kuchyňa je plne vybavená – riad, spotrebiče a základné korenie." }
],

konverzacia: [
  { on: "Dobrý deň, práve som dorazil." },
  { ja: "Dobrý deň, všetko prebehlo hladko?" },
  { on: "Áno, dorazil som bez problémov, cesta bola pokojná." },
  { ja: "Skvele. Apartmán je pripravený a všetko je čisté." },
  { on: "Ako je to s parkovaním?" },
  { ja: "Parkovanie je zabezpečené priamo pri budove, stačí mi číslo auta." },
  { on: "Kedy je check-in a check-out?" },
  { ja: "Check-in od 16:00, skôr podľa dohody. Check-out do 12:00, neskorší odchod vieme zariadiť." },
  { on: "Čo sa dá robiť v okolí?" },
  { ja: "V okolí sú pekné chodníky, parky, kaviarne a niekoľko reštaurácií." },
  { on: "A športovanie?" },
  { ja: "Telocvičňa v pešej vzdialenosti alebo beh v parku." },
  { on: "Kuchyňa je vybavená?" },
  { ja: "Áno, všetko potrebné – riad, mikrovlnka, kanvica a korenie." },
  { on: "Výborne, ďakujem." },
  { ja: "Rovnako. Ak budete niečo potrebovať, napíšte mi." },
  { on: "Určite, ďakujem." },
  { ja: "Ak chcete tipy na výlety alebo dobré jedlo, pokojne sa spýtajte." },
  { on: "To by bolo super, rád sa pozriem po okolí." },
  { ja: "Dohodnuté, ozvite sa, ak budete niečo potrebovať." }
]
,
byvanieotazky: [
  {
    otazka1: "Aké sú možnosti zábavy v okolí?",
    odpoved1: "V blízkosti sú kiná, parky a športové centrá pre voľný čas.",

    otazka2: "Má byt dobré svetelné podmienky?",
    odpoved2: "Byt má veľké francúzske okná, takže je presvetlený celý deň.",

    otazka3: "Ako je to s dopravnou dostupnosťou?",
    odpoved3: "Do centra sa dostanete MHD za 10 minút, autom 5 minút.",

    otazka4: "Je byt vhodný pre domácich miláčikov?",
    odpoved4: "Áno, sú vítaní menší psi a mačky po dohode s majiteľom.",

    otazka5: "Sú v okolí miesta na relax?",
    odpoved5: "Áno, pár metrov od domu je malé jazero a lavičky na oddych."
  }
],

    hodnotim:4,
     cislo:"4,1",
      popisek: "Tento byt kombinuje pohodlie, moderný dizajn a praktickosť. Nachádza sa v novostavbe s výťahom a súkromným parkovaním a ponúka kompletný interiér vybavený všetkým potrebným pre komfortný pobyt – od klimatizácie a pohodlného nábytku až po plne zariadenú kuchyňu a priestrannú terasu s výhľadom na zeleň. Byt je ideálny pre tých, ktorí chcú byť blízko centra mesta a zároveň si užívať pokojné prostredie. Ranná prechádzka do centra alebo krátka cesta MHD vám umožní spoznať mesto bez stresu a v úplnom pohodlí.",
},

{
    id:"F",
    uroven: "SuperHost",
  telefon: "+421 945 222 888",
  datum: "14.2.1997",
  vyhoda: "Ochotný a flexibilný",
  omne: "Rád skúmam nové miesta a ochutnávam rôzne kuchyne. Milujem športy ako futbal a plávanie, a vo voľnom čase rád čítam knihy alebo počúvam hudbu.",
         kdebyva:"Poprad",
     fotka:"/zena4.webp",
     byvanie: ["1PPD","2PPD","3PPD","4PPD","5PPD","6PPD"],
     aktivny:"Aktívny používateľ už 3 roky.",
    meno:"Nina",
     lokalita:"Slovensko",
    koment: "Apartmán bol veľmi čistý a pohodlný, lokalita skvelá na prechádzky po centre Paríža.",
    email:"ninamikualsko@gamil.com",
       recenzie: ["A","B","H","I","E"],
       pocetrecenzie:91,
    pocethodnoteteni:"4,95",
    priezvisko:"Mikulasova",
     majitel:[
    "vchod",
    "storno",
    "wifi",
    "parkovanie",
    "wifi",
    "parkovanie",
    "storno",

  ],
    kamosi:[
    "A","B","E","N"
  ],
      vlastne : [
 {takasi: "Nádherné ubytovanie, úplne bez problémov.", ohodnotenie: 4.2,kdetobolo:"6KT"},
  {takasi: "Čisté a priestranné, cítili sme sa komfortne.",ohodnotenie: 4.2,kdetobolo:"1KT"},
  {takasi: "Perfektná lokalita, všetko po ruke.",ohodnotenie: 4.2,kdetobolo:"1KG"},
  {takasi: "Apartmán fajn, no občas počuť susedov.",ohodnotenie: 4.2,kdetobolo:"2KT"},
  {takasi: "Chýbalo trochu svetla v obývačke.",ohodnotenie: 4.2,kdetobolo:"1KT"},
  {takasi: "Personál ochotný, ale check-in sa trošku natiahol.",ohodnotenie: 4.2,kdetobolo:"2KM"},
  {takasi: "Posteľ tvrdá, ale dalo sa spať.",ohodnotenie: 4.2,kdetobolo:"3KM"},
  {takasi: "Výhľad krásny, ale miestnosť malá.",ohodnotenie: 4.2,kdetobolo:"2KG"},
  {takasi: "Majiteľ reagoval promptne, služby celkovo v pohode.",ohodnotenie: 4.2,kdetobolo:"4KM"},
  {takasi: "Celkovo spokojnosť, drobné chyby sa našli, ale nič hrozné.",ohodnotenie: 4.2,kdetobolo:"5KM"}
],
    hodnotim:2,
     cislo:"2,5",

    info: { 
    hostia: "4 hostia",
    spalne: "2 spálne",
    lozka: "3 lôžka",
    kupelna: "2 kúpeľňa",
  },
   popisek: "Užite si pobyt v tomto moderne zariadenom byte, ktorý sa nachádza v tichej lokalite obklopenej zeleňou. Byt je situovaný na druhom poschodí novostavby s výťahom a súkromným parkovaním. Interiér je plne vybavený – pohodlné postele, klimatizácia, kompletne zariadená kuchyňa a terasu s výhľadom na okolitý park a panorámu mesta. Toto miesto ponúka ideálne prostredie na relax, rannú kávu na terase alebo večerný oddych po dni strávenom v meste. Lokalita je praktická – centrum mesta je len pár minút pešo a MHD zaručuje jednoduché spojenie so všetkými dôležitými miestami.",
     odpovede: [
  { kluc: "Vitajte, všetko pripravené na váš pobyt." },
  { kluc: "Apartmán je čistý, pohodlný a pripravený na ubytovanie." },
  { kluc: "Parkovanie je zabezpečené pred budovou." },
  { kluc: "Check-in je od 16:00, v prípade potreby skôr sa dá dohodnúť." },
  { kluc: "Check-out je do 12:00, neskorší odchod po dohode možný." },
  { kluc: "V okolí sú obchody, kaviarne a príjemné miesta na prechádzky." },
  { kluc: "Na športovanie je blízka telocvičňa a park vhodný na beh." },
  { kluc: "Kuchyňa je plne vybavená, pripravená na varenie alebo prípravu rýchlych jedál." }
],

konverzacia: [
  { on: "Dobrý deň, dorazil som práve." },
  { ja: "Vitajte, cesta prebehla hladko?" },
  { on: "Áno, dorazil som bez problémov, trocha zápcha na ceste." },
  { ja: "Skvelé. Apartmán je pripravený, čistý a pohodlný." },
  { on: "Ako je to s parkovaním?" },
  { ja: "Parkovanie je zabezpečené pred budovou, stačí mi číslo auta." },
  { on: "Check-in a check-out?" },
  { ja: "Check-in od 16:00, skôr podľa dostupnosti. Check-out do 12:00, neskorší odchod vieme dohodnúť." },
  { on: "Čo sa dá robiť v okolí?" },
  { ja: "V okolí sú obchody, kaviarne a príjemné miesta na prechádzky." },
  { on: "A športovanie?" },
  { ja: "Blízka telocvičňa alebo beh v parku, ideálne na ráno či večer." },
  { on: "A kuchyňa?" },
  { ja: "Plne vybavená – mikrovlnka, kanvica, riad a základné korenie." },
  { on: "Výborne, ďakujem." },
  { ja: "Rovnako. Ak budeš potrebovať čokoľvek, stačí napísať." },
  { on: "Super, určite." },
  { ja: "Ak chceš tipy na výlety alebo reštaurácie, pokojne sa spýtaj." },
  { on: "To bude fajn, rád sa pozriem po okolí." },
  { ja: "Dohodnuté, ozvi sa, ak budeš niečo potrebovať." }
]
,
byvanieotazky: [
  {
    otazka1: "Je v byte dostatok prirodzeného svetla?",
    odpoved1: "Byt má veľké okná orientované na juh, takže je svetlý celý deň.",

    otazka2: "Aké sú možnosti relaxu v okolí?",
    odpoved2: "V blízkosti je park, cyklotrasy a malé ihrisko pre deti.",

    otazka3: "Je oblasť vhodná pre športové aktivity?",
    odpoved3: "Áno, behové trasy a fitness centrá sú v dostupnej vzdialenosti.",

    otazka4: "Je byt vhodný pre tichú prácu alebo štúdium?",
    odpoved4: "Byt je umiestnený v pokojnej časti, vhodný na home office alebo štúdium.",

    otazka5: "Sú v okolí obchody a služby?",
    odpoved5: "Áno, potraviny, kaviareň a lekáreň sú do 5 minút pešo."
  }
]

},

{
   uroven: "TopHost",
  telefon: "+421 909 333 444",
  datum: "7.6.1994",
  vyhoda: "Rýchla a príjemná komunikácia",
  omne: "Milujem mačky, dobrú kávu a dlhé prechádzky po meste. Rád skúšam nové veci a vždy sa snažím vidieť svet z pozitívnej stránky.",
    id:"G",
      kdebyva:"Presov",
    byvanie: ["1PS","2PS","3PS","4PS","5PS"],
     fotka:"/muz5.jpg",
      lokalita:"Slovensko",
     aktivny:"Aktívny používateľ už 2 roky.",
    meno:"Filip",
    koment:   "Výborná poloha, čisté ubytovanie a bezproblémová komunikácia. Odporúčam",
    email:"filijackovic@gamil.com",
        recenzie: ["A","B","H","I"],
        pocetrecenzie:54,
    pocethodnoteteni:"3,54",
    priezvisko:"Sedlak",
     majitel:[
    "overeny",
    "lokalita",
    "wifi",
    "parkovanie",
    "wifi",
    "parkovanie",
    "storno",

  ],
   kamosi:[
    "A","G","F","C"
  ],
   vlastne : [
  {takasi: "Ubytovanie skvelé, útulné a čisté.",ohodnotenie: 4.7,kdetobolo:"4TTN"},
  {takasi: "Všetko pripravené perfektne, cítili sme sa pohodlne.", ohodnotenie: 4.6,kdetobolo:"2TTN"},
  {takasi: "Lokalita super, blízko reštaurácie aj obchody.", ohodnotenie: 4.2,kdetobolo:"1TH"},
  {takasi: "Apartmán fajn, ale sem-tam bolo počuť ulice.", ohodnotenie: 4.1,kdetobolo:"6KT"},
  {takasi: "Chýbalo niekoľko kuchynských potrieb.", ohodnotenie: 4.7,kdetobolo:"4TH"},
  {takasi: "Check-in trošku zdĺhavý, ale riešiteľné.", ohodnotenie: 4.5,kdetobolo:"6KT"},
  {takasi: "Posteľ trochu tvrdá, ale dalo sa spať.", ohodnotenie: 4.4,kdetobolo:"2TH"},
  {takasi: "Výhľad krásny, miestnosť však menšia, než som čakal.", ohodnotenie: 4.2,kdetobolo:"6KT"},
  {takasi: "Majiteľ veľmi milý a ochotný, služby fajn.", ohodnotenie: 3.2,kdetobolo:"6KT"},
  {takasi: "Celkovo spokojnosť, drobnosti sa našli, ale nič vážne.", ohodnotenie: 3.2,kdetobolo:"3TH"}
],
    hodnotim:3,

    info: { 
    hostia: "2 hostia",
    spalne: "1 spálne",
    lozka: "2 lôžka",
    kupelna: "4 kúpeľňa",
  },
   popisek: "Vychutnajte si komfort a štýl v tomto moderne zariadenom byte, ktorý sa nachádza v pokojnej a prestížnej lokalite mesta. Byt sa nachádza na druhom poschodí s výťahom a súkromným parkovaním a ponúka interiér plne vybavený pre pohodlný pobyt – od klimatizácie, kompletnej kuchyne až po priestrannú terasu s výhľadom na park a panorámu mesta. Ideálne miesto na rannú kávu, večerný oddych alebo prácu z domu. Lokalita je výborne dostupná – do centra mesta sa dostanete pešo za pár minút, MHD je prakticky za rohom a zároveň si môžete vychutnať pokoj a súkromie, ktoré tento byt poskytuje",

   konverzacia: [
  { on: "Ahoj! Dúfam, že si mal pokojný deň. Chcel som ti dať info o apartmáne pred tvojím príchodom." },
  { ja: "Ahoj, ďakujem za správu. Mám však problém, nemôžem prísť v plánovaný termín." },
  { on: "Rozumiem. Môžeme sa dohodnúť na inom termíne alebo zrušiť rezerváciu podľa potreby." },
  { ja: "Radšej by som presunul pobyt o pár dní, je to možné?" },
  { on: "Samozrejme, pošlem ti dostupné dátumy a vyberieme nový termín." },
  { ja: "Výborne, ďakujem za flexibilitu." },
  { on: "Nemáš za čo, chcem, aby bol pobyt pohodlný. Keď si vyberieš nový dátum, upravíme rezerváciu." },
  { ja: "Dohodnuté, pozerám sa na nové termíny a hneď ti napíšem." },
  { on: "Skvelé, budem čakať. Ak by bol problém s dátumami, určite sa dohodneme." },
  { ja: "Super, teším sa, že sa to dá vybaviť bez stresu." },
  { on: "Presne tak, všetko sa dá upraviť. Ak budeš potrebovať akúkoľvek pomoc, daj vedieť." }
],

   odpovede: [
  { kluc:  "Ahoj, chcel som ti dať vedieť viac o apartmáne pred tvojím príchodom." },
  { kluc:  "Rozumiem, nemôžeš prísť v pôvodnom termíne." },
  { kluc:  "Môžeme rezerváciu presunúť na iný termín alebo zrušiť." },
  { kluc:  "Pošlem ti dostupné nové dátumy, aby si si vybral." },
  { kluc:  "Keď si vyberieš nový termín, upravíme rezerváciu." },
  { kluc:  "Nemáš sa čoho obávať, všetko sa dá flexibilne zariadiť." },
  { kluc:  "Ak budeš mať akýkoľvek problém, napíš mi hneď." },
  { kluc:  "Teším sa, že sa všetko dá vybaviť bez stresu." }
],
byvanieotazky: [
  {
    otazka1: "Aké sú možnosti uskladnenia vecí?",
    odpoved1: "Byt obsahuje niekoľko praktických skríň a odkladacích priestorov.",

    otazka2: "Ako je to s mesačnými nákladmi?",
    odpoved2: "Mesačne sa platí približne 140 €, vrátane energií a služieb.",

    otazka3: "Je v okolí dostupná verejná doprava?",
    odpoved3: "Autobusová zastávka je pár metrov od domu a vlaková stanica je 15 min pešo.",

    otazka4: "Môžem si do bytu priniesť domáce zvieratá?",
    odpoved4: "Menšie domáce zvieratá sú povolené, po dohode s majiteľom.",

    otazka5: "Sú v okolí športoviská alebo voľnočasové aktivity?",
    odpoved5: "V okolí nájdete ihrisko, fitness centrum a cyklotrasy."
  }
]
},


{
    id:"H",
     uroven: "EliteHost",
  telefon: "+421 927 111 222",
  datum: "21.1.1991",
  vyhoda: "Ochotný a spoľahlivý",
  omne: "Som fanúšik dobrodružstiev a cestovania. Rád spoznávam nových ľudí a objavujem skryté ",
    byvanie: ["1PKM","2PKM","3PKM","4PKM","5PKM","6PKM"],
     fotka:"/zena3.jpg",
        kdebyva:"Kezmarok",
      lokalita:"Slovensko",
     koment: "Skvelá lokalita rýchla komunikácia s hostiteľom a príjemný pobyt. Určite odporúčam a rád sa vrátim",
     aktivny:"Aktívny používateľ už 5 rokov.",
    meno:"Laura",
      recenzie: ["L","K","J","I"],
      pocetrecenzie:59,
    pocethodnoteteni:"3,5",
    priezvisko:"Vesela",
    majitel:[
    "lokalita",
    "parkovanie",
    "wifi",
    "cistota",
    "wifi",
    "parkovanie",
    "storno",

  ],
   kamosi:[
    "B","C","D","C"
  ],
   vlastne : [
  {takasi: "Pobyt bol skvelý, všetko čisté a pohodlné.",ohodnotenie: 4.7,kdetobolo:"1BE"},
  {takasi: "Ubytovanie presne podľa popisu, spokojnosť na 100%.",ohodnotenie: 4.7,kdetobolo:"4TTN"},
  {takasi: "Výborná lokalita, všetko po ruke, odporúčam.",ohodnotenie: 4.7,kdetobolo:"2BE"},
  {takasi: "Apartmán fajn, občas trochu hluku od susedov.",ohodnotenie: 4.7,kdetobolo:"4TTN"},

],
konverzacia: [
  { on: "Ahoj! Vitaj u nás 😊 Dúfam, že si dorazil v poriadku." },
  { ja: "Ahoj, áno, cesta bola fajn. Môžeš mi povedať viac o apartmáne?" },
  { on: "Samozrejme. Apartmán má plne vybavenú kuchyňu, Wi-Fi, TV a klimatizáciu." },
  { ja: "Super. Je v cene aj parkovanie?" },
  { on: "Áno, parkovanie v garáži máš zahrnuté." },
  { ja: "A ako funguje check-in?" },
  { on: "Check-in je od 14:00, check-out do 11:00. Ak treba, vieme sa dohodnúť." },
  { ja: "Ďakujem, to mi vyhovuje." },
  { on: "Keby si čokoľvek potreboval, pokojne sa ozvi 🙂" },
],

odpovede: [
  { kluc: "parkovanie_info" },
  { kluc: "checkin_checkout" },
  { kluc: "vybavenie_apartmanu" },
  { kluc: "tipy_okolie" },
  { kluc: "kontakt_hostitel" },
],
  email:"laurasa@gamil.com",
    hodnotim:4,
     cislo:"3,9",
      info: { 
    hostia: "3 hostia",
    spalne: "2 spálne",
    lozka: "2 lôžka",
    kupelna: "1 kúpeľňa",
  },
  byvanieotazky: [
  {
    otazka1: "Aké sú možnosti varenia v byte?",
    odpoved1: "Kuchyňa je vybavená indukčnou varnou doskou a modernou rúrou.",

    otazka2: "Ako rýchlo sa dostanem do centra mesta?",
    odpoved2: "Autom sa do centra dostanete za 8 minút, MHD približne 12 minút.",

    otazka3: "Je byt vhodný pre spoločné bývanie?",
    odpoved3: "Áno, byt má viac samostatných izieb ideálnych pre spolubývajúcich.",

    otazka4: "Je k dispozícii vonkajší priestor?",
    odpoved4: "Byt má balkón a prístup do malého spoločného dvora.",

    otazka5: "Sú v okolí reštaurácie alebo kaviarne?",
    odpoved5: "Áno, niekoľko reštaurácií a kaviarní je do 5 minút chôdze."
  }
],
   popisek: "Tento byt je ideálny pre rodiny alebo páry, ktoré hľadajú kombináciu komfortu a pokojného prostredia. Nachádza sa v novostavbe s výťahom a parkovaním a ponúka moderný, kompletne vybavený interiér. Klimatizácia, plne zariadená kuchyňa, pohodlné postele a dostatok úložného priestoru zabezpečia príjemný pobyt. Z terasy sa naskytá nádherný výhľad na okolitú zeleň a mesto, ideálny na rannú kávu alebo večerný relax. Lokalita je tichá, bezpečná a napriek tomu len pár minút od centra mesta, čo zaručuje pohodlie a praktickosť pre každodenný život aj návštevy mesta.",

},

{
    id:"I",
    uroven: "ProHost",
  telefon: "+421 934 555 999",
  datum: "3.10.1995",
  vyhoda: "Spoľahlivý a priateľský",
  omne: "Rád varím a skúšam nové recepty. Milujem hudbu a dlhé prechádzky v prírode. Vo voľnom čase rád čítam alebo hrávam stolové hry s priateľmi.",
    byvanie: ["1ZZ","2ZZ","3ZZ","4ZZ","5ZZ",],
    meno:"Peter",
    kdebyva:"Zilina",
     lokalita:"Slovensko",
       email:"piiitr@gamil.com",
       koment: "Ubytovanie splnilo očakávania, hostiteľ bol veľmi ochotný.",
    aktivny:"Aktívny používateľ už 3 rokov.",
     fotka:"/muz9.avif",
    priezvisko:"Cerny",
    pocetrecenzie:57,
    pocethodnoteteni:"4,95",
      recenzie: ["B","G","A","F"],
     majitel:[
    "lokalita",
    "parkovanie",
    "wifi",
    "cistota",
    "wifi",
    "parkovanie",
    "storno",

  ],
   kamosi:[
    "B","D","H","I"
  ],
    vlastne : [
  {takasi: "Ubytovanie úplne podľa očakávaní, pohodlie na jednotku.",ohodnotenie: 4.4,kdetobolo:"1BE"},
  {takasi: "Všetko čisté, priestranné a útulné.",ohodnotenie: 4.2,kdetobolo:"5BE"},
  {takasi: "Lokalita výborná, blízko obchodov a kaviarní.",ohodnotenie: 4.1,kdetobolo:"2BE"},

],
    hodnotim:5,
     cislo:"4,9",
      info: { 
    hostia: "3 hostia",
    spalne: "1 spálne",
    lozka: "1 lôžka",
    kupelna: "4 kúpeľňa",
  },
   popisek: "Oddýchnite si v tomto útulnom a moderne zariadenom byte, ktorý ponúka pokoj a súkromie v tesnej blízkosti zelene a prírody. Byt sa nachádza na druhom poschodí novostavby s výťahom a parkovaním a je plne vybavený pre pohodlný pobyt. Interiér je svetlý a priestranný, s klimatizáciou, pohodlným nábytkom a terasou, z ktorej sa naskytá výhľad na park a panorámu mesta. Ideálne miesto na relax, čítanie knihy alebo večerný oddych. Lokalita je veľmi dobre dostupná – centrum mesta je len pár minút pešo alebo krátkou jazdou MHD, pričom v okolí nájdete príjemné miesta na prechádzky a kávu.",
   konverzacia: [
  { on: "Ahoj! Chcel som ti dať vedieť, že apartmán je pripravený na tvoj príchod." },
  { ja: "Ahoj, ďakujem za info. Bohužiaľ, uviazol som na ceste a asi prídem neskôr." },
  { on: "Rozumiem, môžeš mi povedať približný čas príchodu?" },
  { ja: "Myslím, že dorazím asi o dve hodiny neskôr, než bolo pôvodne plánované." },
  { on: "V poriadku, udržíme ti apartmán a kľúče budú pripravené." },
  { ja: "Super, ďakujem za flexibilitu." },
  { on: "Nemáš za čo, dôležité je, aby si dorazil v pohode." },
  { ja: "Dohodnuté, hneď ako vyrazím, dám ti vedieť presný čas." },
  { on: "Skvelé, budem čakať a pripravíme všetko na tvoj príchod." },
  { ja: "Ďakujem, veľmi si to cením." },
  { on: "Rovnako, ak sa čokoľvek zmení alebo bude problém, napíš mi hneď." }
],

odpovede: [
  { kluc: "Ahoj, apartmán je pripravený a čaká na tvoj príchod." },
  { kluc: "Rozumiem, že dorazíš neskôr ako plánované." },
  { kluc: "Stačí mi vedieť približný čas príchodu." },
  { kluc: "Udržíme ti apartmán a kľúče budú pripravené." },
  { kluc: "Nemáš sa čoho obávať, všetko zariadime." },
  { kluc: "Dôležité je, aby si dorazil v pohode." },
  { kluc: "Keď vyrazíš, daj mi vedieť presný čas príchodu." },
  { kluc: "Ak sa čokoľvek zmení alebo bude problém, napíš hneď." }
],

byvanieotazky: [
  {
    otazka1: "Je byt pripravený na okamžité nasťahovanie?",
    odpoved1: "Áno, byt je kompletne zariadený a pripravený na bývanie.",

    otazka2: "Aké sú možnosti športového vyžitia v okolí?",
    odpoved2: "V okolí sú bežecké trasy, park a malé futbalové ihrisko.",

    otazka3: "Je v blízkosti škola alebo škôlka?",
    odpoved3: "Do 10 minút pešo sú materská škôlka a základná škola.",

    otazka4: "Je možné si upraviť nábytok podľa svojich potrieb?",
    odpoved4: "Áno, menšie presuny nábytku sú povolené bez nutnosti dohody.",

    otazka5: "Sú v okolí možnosti pre nákupy?",
    odpoved5: "Supermarkety, menšie obchody a trhovisko sú do 5 minút pešo."
  }
]
},

{
    id:"J",
     uroven: "MegaHost",
  telefon: "+421 919 777 888",
  datum: "12.12.1992",
  vyhoda: "Rýchla a priateľská komunikácia",
  omne: "Rád sa učím nové veci a objavujem nepoznané miesta. Milujem kávu, dobré filmy a chvíle s priateľmi. Vo voľnom čase si rád zacvičím alebo zahrám šach.",
     lokalita:"Slovensko",
     byvanie: ["1ZM","2ZM","3ZM","4ZM","5ZM","6ZM",],
    meno:"Ema",
     kdebyva:"Martin",
       email:"emkaooo@gamil.com",
     fotka:"/zena2.webp",
     pocetrecenzie:59,
    pocethodnoteteni:"4,82",
     koment: "Byt mal všetko, čo sme potrebovali  kuchyňu, klimatizáciu a rýchly internet.",
     aktivny:"Aktívny používateľ už 9 rokov.",
    priezvisko:"Horvathova",
     recenzie: ["A","F","E"],
     majitel:[
    "lokalita",
    "parkovanie",
    "wifi",
    "cistota",
    "wifi",
    "overeny",
    "storno",

  ],
   kamosi:[
    "B","A","H","J","D"
  ],
   vlastne : [
  {takasi: "Útulné ubytovanie, všetko fungovalo bez problémov.", ohodnotenie: 4.4,kdetobolo:"2TG"},
  {takasi: "Čisté a priestranné, cítili sme sa komfortne.",ohodnotenie: 4.6,kdetobolo:"4TG"},
  {takasi: "Skvelá lokalita, blízko k obchodom a reštauráciám.", ohodnotenie: 4.1,kdetobolo:"1TG"},
  {takasi: "Apartmán fajn, ale sem-tam bolo počuť susedov.",ohodnotenie: 4.2,kdetobolo:"5TG"},
 
],
    hodnotim:3,
     cislo:"3,5",
      info: { 
    hostia: "1 hostia",
    spalne: "4 spálne",
    lozka: "5 lôžka",
    kupelna: "4 kúpeľňa",
  },
 popisek: "Tento moderný byt kombinuje komfort, praktickosť a výhodnú lokalitu. Nachádza sa v novostavbe s výťahom a parkovaním, čo poskytuje maximálne pohodlie pre vás aj vaše vozidlo. Interiér je kompletne zariadený a vybavený všetkým, čo potrebujete – od plne vybavenej kuchyne, klimatizácie až po pohodlné postele a úložné priestory. Priestranná terasa umožňuje vychutnať si výhľad na okolitú zeleň a panorámu mesta, ideálnu na relax alebo rannú kávu. Výborná dostupnosť do centra mesta a blízkosť verejnej dopravy robí tento byt ideálnym miestom pre návštevníkov, ktorí chcú byť blízko mesta, no zároveň si užívať ticho a súkromie.",
  konverzacia: [
  { on: "Ahoj! Chcel som dať vedieť, že apartmán je pripravený na tvoj príchod." },
  { ja: "Ahoj, mám problém. Možno nebudem môcť doraziť dnes večer." },
  { on: "Rozumiem. Vieš približne, kedy by si mohol prísť?" },
  { ja: "Nie som si úplne istý, možno až zajtra popoludní." },
  { on: "V poriadku, môžeme rezerváciu posunúť na zajtra a všetko pripravíme." },
  { ja: "To by bolo super, ďakujem za pochopenie." },
  { on: "Nemáš za čo, hlavné je, aby si sa dostal v pohode." },
  { ja: "Dohodnuté, keď budem mať istý čas, hneď ti napíšem." },
  { on: "Skvelé, urobíme všetko pripravené na tvoj príchod." },
  { ja: "Veľmi si to cením, ďakujem." },
  { on: "Rovnako, ak by sa situácia zmenila, napíš mi hneď." }
],

odpovede: [
  { kluc: "Ahoj, apartmán je pripravený a čaká na tvoj príchod." },
  { kluc: "Rozumiem, že dnes večer možno neprídeš." },
  { kluc: "Daj mi vedieť, kedy približne dorazíš." },
  { kluc: "Rezerváciu môžeme posunúť a pripravíme všetko." },
  { kluc: "Nemáš sa čoho obávať, všetko zariadime." },
  { kluc: "Hlavné je, aby si dorazil v pohode." },
  { kluc: "Keď budeš mať istý čas príchodu, daj mi vedieť." },
  { kluc: "Ak sa situácia zmení, napíš mi hneď." }
],
byvanieotazky: [
  {
    otazka1: "Aké moderné vybavenie má byt?",
    odpoved1: "Byt je vybavený smart osvetlením a rýchlym internetom.",

    otazka2: "Je v byte vhodné miesto na prácu z domu?",
    odpoved2: "Áno, byt má tiché miesto ideálne na pracovný kútik alebo štúdium.",

    otazka3: "Sú v okolí miesta na relaxáciu?",
    odpoved3: "Áno, kúsok od bytu je park s lavičkami a cyklotrasy.",

    otazka4: "Je k dispozícii prístup na terasu alebo balkón?",
    odpoved4: "Byt má priestranný balkón s pekným výhľadom na mesto.",

    otazka5: "Ako je to s dopravou a dostupnosťou služieb?",
    odpoved5: "Zastávka autobusu je 3 minúty od domu, obchody a kaviarne do 5 minút pešo."
  }
]
},

{
    id:"K",
     uroven: "FriendlyHost",
  telefon: "+421 935 888 111",
  datum: "5.5.1996",
  vyhoda: "Ochotný a flexibilný",
  omne: "Milujem dobrodružstvá, bicyklovanie a spoznávanie nových miest. Rád varím a občas skúšam nové recepty. Zbožňujem dobrú hudbu a večerné prechádzky.",
      byvanie: ["1ZR","3ZR","4ZR","5ZR","6ZR","2ZR"],
     fotka:"/muz7.webp",
     kdebyva:"Ruzomberok",
    meno:"Adam",
     lokalita:"Slovensko",
    koment:    "Pekný výhľad na more, pokojná ulica a všetko po ruke.",
      email:"adamkomal@gamil.com",
    aktivny:"Aktívny používateľ už 1 rok.",
    priezvisko:"Kral",
      hodnotim:5,
      pocetrecenzie:63,
    pocethodnoteteni:"3,52",
     recenzie: ["B","E","C","F","A"],
     majitel:[
    "lokalita",
    "parkovanie",
    "wifi",
    "cistota",
    "wifi",
    "vchod",
    "storno",

  ],
   kamosi:[
    "B","L","M","N","D"
  ],
  vlastne : [
  {takasi: "Ubytovanie pohodlné a útulné, všetko v poriadku.", ohodnotenie: 4.4,kdetobolo:"4TG"},
  {takasi: "Čisté a dobre vybavené, cítili sme sa komfortne.", ohodnotenie: 4.4,kdetobolo:"1TG"},
],
   info: { 
    hostia: "2 hostia",
    spalne: "4 spálne",
    lozka: "3 lôžka",
    kupelna: "1 kúpeľňa",
  },
   popisek: "Zažite komfort a pokoj v tomto moderne zariadenom byte, ktorý sa nachádza v tichej a bezpečnej časti mesta. Byt sa nachádza na druhom poschodí novostavby s výťahom a súkromným parkovaním. Interiér je plne vybavený, s pohodlným nábytkom, modernou kuchyňou a klimatizáciou, aby ste mali všetko potrebné pre pohodlný pobyt. Z priestrannej terasy sa naskytá krásny výhľad na okolitú zeleň a panorámu mesta, čo je ideálne miesto na rannú kávu alebo večerný relax po náročnom dni. Lokalita je veľmi dobre dostupná  do centra mesta sa dostanete pešo za 10 minút, alebo MHD za pár minút, pričom park a príroda sú prakticky za rohom.",

    konverzacia: [
  { on: "Ahoj! Vitaj u nás 😊 Dúfam, že si dorazil v poriadku." },
  { ja: "Ahoj, áno, cesta bola fajn. Môžeš mi povedať viac o apartmáne?" },
  { on: "Samozrejme. Apartmán má plne vybavenú kuchyňu, Wi-Fi, TV a klimatizáciu." },
  { ja: "Super. Je v cene aj parkovanie?" },
  { on: "Áno, parkovanie v garáži máš zahrnuté." },
  { ja: "A ako funguje check-in?" },
  { on: "Check-in je od 14:00, check-out do 11:00. Ak treba, vieme sa dohodnúť." },
  { ja: "Ďakujem, to mi vyhovuje." },
  { on: "Keby si čokoľvek potreboval, pokojne sa ozvi 🙂" },
],

odpovede: [
  { kluc: "parkovanie_info" },
  { kluc: "checkin_checkout" },
  { kluc: "vybavenie_apartmanu" },
  { kluc: "tipy_okolie" },
  { kluc: "kontakt_hostitel" },
],
byvanieotazky: [
  {
    otazka1: "Je v byte dostatok súkromia?",
    odpoved1: "Byt je orientovaný tak, že susedia nemajú priamy výhľad do interiéru.",

    otazka2: "Aká je atmosféra v okolí?",
    odpoved2: "Susedstvo je pokojné a bezpečné, vhodné pre rodiny aj jednotlivcov.",

    otazka3: "Je v okolí dostatok zelene?",
    odpoved3: "V blízkosti sa nachádzajú parky, záhrady a prechádzkové chodníky.",

    otazka4: "Sú k dispozícii cyklistické trasy?",
    odpoved4: "Áno, v okolí sú značené cyklistické trasy a stojany na bicykle.",

    otazka5: "Aké sú možnosti kultúrneho vyžitia?",
    odpoved5: "V okolí sú knižnica, múzeum a menšie divadlo pre voľný čas."
  }
]

},

{
    id:"L",
    uroven: "UltimateHost",
  telefon: "+421 912 666 333",
  datum: "17.3.1993",
  vyhoda: "Rýchla komunikácia a spoľahlivosť",
  omne: "Rád objavujem nové miesta, fotografujem a skúšam rôzne športy. Milujem knihy, hudbu a dobrú spoločnosť. Každý deň sa snažím niečo nové naučiť.",
      kdebyva:"Banska Bystrica",
     lokalita:"Slovensko",
     byvanie: ["1BBY","2BBY","3BBY","4BBY","5BBY","6BBY"],
     fotka:"/zena6.jpg",
     koment: "Úžasná hostiteľka, všetko vysvetlila a odporučila miestne reštaurácie.",
     aktivny:"Aktívny používateľ už 2 rokov.",
    meno:"Zuzana",
    priezvisko:"Polakova",
    pocetrecenzie:64,
    pocethodnoteteni:"4,95",
     recenzie: ["D","B","E","C","F","A"],
     hodnotim:4,
      cislo:"4,5",
     majitel:[
    "vchod",
    "storno",
    "wifi",
    "cistota",
    "wifi",
    "parkovanie",
    "storno",

  ],
   kamosi:[
    "A","L","B","C","N"
  ],
  vlastne : [
    {takasi: "Ubytovanie príjemné a čisté, všetko fungovalo bez problémov.", ohodnotenie: 4.4,kdetobolo:"5NZ"},
  {takasi: "Čisté, priestranné a pohodlné, spokojnosť na 100%.", ohodnotenie: 4.4,kdetobolo:"4TG"},
  {takasi: "Výborná lokalita, všetko po ruke, veľmi spokojný.", ohodnotenie: 4.4,kdetobolo:"4TG"},
  {takasi: "Apartmán fajn, ale sem-tam počuť susedov.", ohodnotenie: 4.4,kdetobolo:"2NZ"},
  {takasi: "Kuchyňa dobre vybavená, chýbalo pár drobností.", ohodnotenie: 4.4,kdetobolo:"1NZ"},


],
  email:"zezuna@gamil.com",
   info: { 
    hostia: "2 hostia",
    spalne: "3 spálne",
    lozka: "2 lôžka",
    kupelna: "2 kúpeľňa",
  },
   popisek: "Užite si pohodlie a pokoj v tomto moderne zariadenom byte, ktorý sa nachádza v tichej časti mesta s rýchlym prístupom k zelenej oblasti a mestským atrakciám. Byt sa nachádza na prvom poschodí novostavby s výťahom a súkromným parkovaním. Interiér je plne vybavený moderným nábytkom, kuchynskými spotrebičmi a klimatizáciou, takže budete mať všetko, čo potrebujete pre komfortný pobyt.Z terasy sa naskytá príjemný výhľad na okolitú zeleň a mesto, ideálne miesto na relax, čítanie knihy alebo rannú kávu. Lokalita je veľmi praktická  do centra mesta sa dostanete pešo za 10 minút alebo MHD za 5 minút. Tento byt je ideálny pre tých, ktorí hľadajú kombináciu pohodlia, súkromia a blízkosti prírody.",

   konverzacia: [
  { on: "Dobrý deň! Apartmán je pripravený a všetko čaká na váš príchod." },
  { ja: "Dobrý deň, mám nečakaný problém, rodinná záležitosť ma zdržala, možno dorazím neskôr." },
  { on: "Rozumiem, v poriadku. Vieš, približne kedy by si mohol byť na mieste?" },
  { ja: "Ťažko povedať, možno až večer okolo 21:00." },
  { on: "To nie je problém, apartmán bude pripravený. Kľúče budú čakajú pripravené na recepcii." },
  { ja: "Ďakujem za pochopenie, veľmi si to cením." },
  { on: "Nemáš sa čoho obávať, dôležité je, aby si dorazil v bezpečí." },
  { ja: "Dohodnuté, keď budem mať presný čas, hneď ti napíšem." },
  { on: "Skvelé, budeme čakať a pripravení všetko pripraviť na tvoj príchod." },
  { ja: "Výborne, ešte raz ďakujem za flexibilitu." },
  { on: "Rovnako, ak by sa situácia zmenila alebo sa niečo skomplikovalo, napíš mi hneď." }
],

odpovede: [
  { kluc: "Apartmán je pripravený a čaká na váš príchod." },
  { kluc: "Rozumiem, že dorazíte neskôr kvôli nečakanej situácii." },
  { kluc: "Daj mi vedieť približný čas príchodu." },
  { kluc: "Apartmán bude pripravený, kľúče čakajú na recepcii." },
  { kluc: "Nemáš sa čoho obávať, všetko zariadime." },
  { kluc: "Dôležité je, aby ste dorazili bezpečne." },
  { kluc: "Keď budete mať presný čas, dajte mi vedieť." },
  { kluc: "Ak sa situácia zmení, napíšte mi hneď." }
],
byvanieotazky: [
  {
    otazka1: "Aké technológie sú v byte k dispozícii?",
    odpoved1: "Byt je vybavený smart zásuvkami, rýchlym Wi-Fi a moderným alarmom.",

    otazka2: "Je byt vhodný pre kreatívnu prácu?",
    odpoved2: "Áno, k dispozícii je svetlý pracovný kútik a priestor na umelecké aktivity.",

    otazka3: "Aké sú možnosti vonkajšieho oddychu?",
    odpoved3: "Byt má balkón a kúsok od domu sú lavičky v parku a prechádzkové chodníky.",

    otazka4: "Sú v okolí športové aktivity?",
    odpoved4: "V okolí sú fitness centrum, ihrisko a bežecké trate pre športovcov.",

    otazka5: "Ako je to s dopravou?",
    odpoved5: "Autobusová a električková zastávka sú do 5 minút pešo, centrum dostupné za 10 min."
  }
]

},

{
    id:"M",
          kdebyva:"Trebišov",
     lokalita:"Slovensko",
     uroven: "TopHost",
  telefon: "+421 928 444 555",
  datum: "9.8.1994",
  vyhoda: "Ochotný a spoľahlivý",
  omne: "Rád chodím na výlety, spoznávam nové miesta a stretávam zaujímavých ľudí. Milujem hudbu, filmy a dobré jedlo. Vo voľnom čase sa venujem športu a hobby projektom.",
     byvanie: ["1KT","2KT","3KT","4KT","5KT","6KT"],
     fotka:"/zena6.jpg",
     koment: "Úžasná hostiteľka, všetko vysvetlila a odporučila miestne reštaurácie.",
     aktivny:"Aktívny používateľ už 3 rokov.",
    meno:"Natália",
    priezvisko:"Molnarova",
    pocetrecenzie:34,
    pocethodnoteteni:"4,85",
     recenzie: ["D","B","A"],
     hodnotim:4,
      cislo:"4,5",
     majitel:[
    "vchod",
    "storno",
    "wifi",
    "cistota",
    "wifi",
    "parkovanie",
    "storno",

  ],
   kamosi:[
    "A","L","M","N","O"
  ],
  vlastne : [
    {takasi: "Ubytovanie príjemné a čisté, všetko fungovalo bez problémov.", ohodnotenie: 4.4,kdetobolo:"5NZ"},

],
  email:"natalika@gamil.com",
   info: { 
    hostia: "2 hostia",
    spalne: "3 spálne",
    lozka: "2 lôžka",
    kupelna: "2 kúpeľňa",
  },
   popisek: "Užite si pohodlie a pokoj v tomto moderne zariadenom byte, ktorý sa nachádza v tichej časti mesta s rýchlym prístupom k zelenej oblasti a mestským atrakciám. Byt sa nachádza na prvom poschodí novostavby s výťahom a súkromným parkovaním. Interiér je plne vybavený moderným nábytkom, kuchynskými spotrebičmi a klimatizáciou, takže budete mať všetko, čo potrebujete pre komfortný pobyt.Z terasy sa naskytá príjemný výhľad na okolitú zeleň a mesto, ideálne miesto na relax, čítanie knihy alebo rannú kávu. Lokalita je veľmi praktická  do centra mesta sa dostanete pešo za 10 minút alebo MHD za 5 minút. Tento byt je ideálny pre tých, ktorí hľadajú kombináciu pohodlia, súkromia a blízkosti prírody.",
     konverzacia: [
  { on: "Dobrý deň! Chcel som dať vedieť, že apartmán je pripravený na váš príchod." },
  { ja: "Dobrý deň, bohužiaľ sa stala nečakaná situácia a nebudem môcť prísť." },
  { on: "Rozumiem. Chceš rezerváciu zrušiť alebo presunúť na iný termín?" },
  { ja: "Momentálne by som ju radšej zrušil, je to neodkladné." },
  { on: "V poriadku, spravíme storno podľa podmienok rezervácie." },
  { ja: "Ďakujem za pochopenie." },
  { on: "Nemáš za čo, dôležité je, že to riešime včas." },
  { ja: "Určite, ospravedlňujem sa za komplikácie." },
  { on: "V poriadku, ak sa situácia zmení a budeš chcieť nový termín, daj vedieť." },
  { ja: "Ďakujem, určite tak urobím." },
  { on: "Rovnako, ak by si potreboval čokoľvek iné, napíš mi." }
],

odpovede: [
  { kluc: "Apartmán je pripravený a čaká na váš príchod." },
  { kluc: "Rozumiem, že sa situácia zmenila a nemôžete prísť." },
  { kluc: "Chceš rezerváciu zrušiť alebo presunúť?" },
  { kluc: "Spravíme storno podľa podmienok rezervácie." },
  { kluc: "Nemáš za čo, hlavné je, že riešime situáciu včas." },
  { kluc: "Ak sa situácia zmení a budeš chcieť nový termín, daj vedieť." },
  { kluc: "Ak budeš potrebovať čokoľvek iné, napíš mi hneď." }
],
byvanieotazky: [
  {
    otazka1: "Ako je riešené osvetlenie bytu?",
    odpoved1: "Byt má zabudované LED stropné svietidlá a nastaviteľné lampy.",

    otazka2: "Aké sú možnosti úložného priestoru?",
    odpoved2: "Skrine, poličky a komory poskytujú dostatok miesta na veci.",

    otazka3: "Je byt vhodný pre hostí a návštevy?",
    odpoved3: "Áno, obývacia izba je priestranná a umožňuje pohodlné prijatie hostí.",

    otazka4: "Ako je to s bezpečnosťou?",
    odpoved4: "Vstup je zabezpečený elektronickým zámkom a dom má kamerový systém.",

    otazka5: "Sú k dispozícii relaxačné miesta?",
    odpoved5: "Byt má balkón a v blízkosti sú parky a prechádzkové chodníky."
  }
]
},

{
    id:"N",
     uroven: "FriendlyHost",
  telefon: "+421 936 222 777",
  datum: "20.11.1995",
  vyhoda: "Rýchla a príjemná komunikácia",
  omne: "Rád skúšam nové veci, cestujem a objavujem skryté miesta. Milujem hudbu, dobré jedlo a dlhé prechádzky so psom. Každý deň sa snažím niečo nové naučiť.",
      kdebyva:"Trečin",
     lokalita:"Slovensko",
     byvanie: ["1TTN","2TTN","3TTN","4TTN","5TTN","6TTN"],
     fotka:"/muz7.webp",
     koment: "Úžasny hostiteľ, všetko vysvetlila a odporučila miestne reštaurácie.",
     aktivny:"Aktívny používateľ už 5 rokov.",
    meno:"Tomas",
    priezvisko:"Urban",
    pocetrecenzie:80,
    pocethodnoteteni:"4,9",
     recenzie: ["D","B","A","E","F"],
     hodnotim:4,
      cislo:"4,2",
     majitel:[
    "vchod",
    "storno",
    "wifi",
    "cistota",
    "wifi",
    "parkovanie",
    "storno",

  ],
  kamosi:[
    "M","B","O","A","L"
  ],
  vlastne : [
    {takasi: "Ubytovanie príjemné a čisté, všetko fungovalo bez problémov.", ohodnotenie: 4.6,kdetobolo:"2NZ"},
  {takasi: "Čisté, priestranné a pohodlné, spokojnosť na 100%.", ohodnotenie: 4.1,kdetobolo:"1NZ"},
  {takasi: "Výborná lokalita, všetko po ruke, veľmi spokojný.", ohodnotenie: 3.1,kdetobolo:"3NZ"},
  {takasi: "Apartmán fajn, ale sem-tam počuť susedov.", ohodnotenie: 3.2,kdetobolo:"4NZ"},


],
  email:"tomasko.@gmail.com",
   info: { 
    hostia: "2 hostia",
    spalne: "3 spálne",
    lozka: "2 lôžka",
    kupelna: "2 kúpeľňa",
  },
  byvanieotazky: [
  {
    otazka1: "Aké materiály sú použité v byte?",
    odpoved1: "Podlahy sú z kvalitného vinylu a dlažba v kúpeľni je keramická.",

    otazka2: "Ako je riešená ventilácia?",
    odpoved2: "Byt má moderný systém vetrania s možnosťou regulácie prúdenia vzduchu.",

    otazka3: "Je v okolí dostupná príroda?",
    odpoved3: "V blízkosti sú lesné chodníky a menšie jazierko pre relaxáciu.",

    otazka4: "Je byt vhodný pre študentov?",
    odpoved4: "Áno, pokojné prostredie a dostupnosť MHD ho robia ideálnym pre štúdium.",

    otazka5: "Sú k dispozícii kultúrne aktivity?",
    odpoved5: "V okolí sú galérie, malé divadlo a knižnica."
  }
],
   popisek: "Užite si pohodlie a pokoj v tomto moderne zariadenom byte, ktorý sa nachádza v tichej časti mesta s rýchlym prístupom k zelenej oblasti a mestským atrakciám. Byt sa nachádza na prvom poschodí novostavby s výťahom a súkromným parkovaním. Interiér je plne vybavený moderným nábytkom, kuchynskými spotrebičmi a klimatizáciou, takže budete mať všetko, čo potrebujete pre komfortný pobyt.Z terasy sa naskytá príjemný výhľad na okolitú zeleň a mesto, ideálne miesto na relax, čítanie knihy alebo rannú kávu. Lokalita je veľmi praktická  do centra mesta sa dostanete pešo za 10 minút alebo MHD za 5 minút. Tento byt je ideálny pre tých, ktorí hľadajú kombináciu pohodlia, súkromia a blízkosti prírody.",

},

{
    id:"O",
    kdebyva:"Zvolen",
     uroven: "ExpertHost",
  telefon: "+421 921 333 999",
  datum: "2.2.1992",
  vyhoda: "Ochotný a spoľahlivý",
  omne: "Som fanúšik dobrodružstva a rád objavujem nové miesta. Milujem varenie, bicyklovanie a dobrú hudbu. Vo voľnom čase si rád pozriem filmy alebo stretnem priateľov.",
     lokalita:"Slovensko",
     byvanie: ["1BZV","2BZV","3BZV","4BZV","5BZV","6BZV"],
     fotka:"/zena2.webp",
     koment: "Úžasná hostiteľka, všetko vysvetlila a odporučila miestne reštaurácie.",
     aktivny:"Aktívny používateľ už 3 rokov.",
    meno:"Elena",
    priezvisko:"Kovacova",
    pocetrecenzie:32,
    pocethodnoteteni:"4,85",
     recenzie: ["D","B","A"],
     hodnotim:3,
      cislo:"4,5",
     majitel:[
    "vchod",
    "storno",
    "wifi",
    "cistota",
    "wifi",
    "parkovanie",
    "storno",

  ],
   kamosi:[
    "B","C","D","E","L"
  ],
  
  vlastne : [
    {takasi: "Ubytovanie príjemné a čisté, všetko fungovalo bez problémov.", ohodnotenie: 4.6,kdetobolo:"6TD"},
  {takasi: "Čisté, priestranné a pohodlné, spokojnosť na 100%.", ohodnotenie: 4.5,kdetobolo:"1TD"},
  

],
  email:"elaeal@gamil.com",
   info: { 
    hostia: "2 hostia",
    spalne: "3 spálne",
    lozka: "2 lôžka",
    kupelna: "2 kúpeľňa",
  },
   popisek: "Užite si pohodlie a pokoj v tomto moderne zariadenom byte, ktorý sa nachádza v tichej časti mesta s rýchlym prístupom k zelenej oblasti a mestským atrakciám. Byt sa nachádza na prvom poschodí novostavby s výťahom a súkromným parkovaním. Interiér je plne vybavený moderným nábytkom, kuchynskými spotrebičmi a klimatizáciou, takže budete mať všetko, čo potrebujete pre komfortný pobyt.Z terasy sa naskytá príjemný výhľad na okolitú zeleň a mesto, ideálne miesto na relax, čítanie knihy alebo rannú kávu. Lokalita je veľmi praktická  do centra mesta sa dostanete pešo za 10 minút alebo MHD za 5 minút. Tento byt je ideálny pre tých, ktorí hľadajú kombináciu pohodlia, súkromia a blízkosti prírody.",

    konverzacia: [
  { on: "Ahoj! Chcel som dať vedieť, že apartmán je pripravený na tvoj príchod." },
  { ja: "Ahoj, mám problém, môže sa stať, že dnes nebudem môcť prísť kvôli práci." },
  { on: "Rozumiem, vieš približne, kedy by si mohol doraziť?" },
  { ja: "Nie som si istý, možno až zajtra popoludní." },
  { on: "V poriadku, udržíme ti apartmán a kľúče budú pripravené." },
  { ja: "Ďakujem, veľmi si cením, že je to možné." },
  { on: "Nemáš sa čoho obávať, hlavné je, aby si dorazil bezpečne." },
  { ja: "Dohodnuté, keď budem mať presný čas, hneď ti napíšem." },
  { on: "Skvelé, budeme pripravení na tvoj príchod." },
  { ja: "Ďakujem, veľmi si to vážim." },
  { on: "Ak by sa niečo zmenilo, napíš mi hneď." }
],

odpovede: [
  { kluc: "Apartmán je pripravený a čaká na tvoj príchod." },
  { kluc: "Rozumiem, že dnes možno neprídeš kvôli práci." },
  { kluc: "Daj mi vedieť približný čas príchodu." },
  { kluc: "Apartmán a kľúče budú pripravené." },
  { kluc: "Nemáš sa čoho obávať, všetko zariadime." },
  { kluc: "Hlavné je, aby si dorazil bezpečne." },
  { kluc: "Keď budeš mať presný čas, daj mi vedieť." },
  { kluc: "Ak sa situácia zmení, napíš mi hneď." }
],
byvanieotazky: [
  {
    otazka1: "Je byt vhodný pre kreatívne projekty?",
    odpoved1: "Áno, voľný priestor umožňuje pohodlné zariadenie pracovného alebo umeleckého kútika.",

    otazka2: "Aké technológie sú k dispozícii?",
    odpoved2: "Byt je vybavený rýchlym Wi-Fi pripojením a inteligentným osvetlením.",

    otazka3: "Je v okolí pokojné prostredie?",
    odpoved3: "Susedstvo je tiché a vhodné na oddych aj prácu z domu.",

    otazka4: "Sú dostupné možnosti športového vyžitia?",
    odpoved4: "Áno, blízko sú fitness centrum, cyklotrasy a prechádzkové chodníky.",

    otazka5: "Ako je to s dostupnosťou obchodov?",
    odpoved5: "Potraviny, kaviareň a lekáreň sú vzdialené len pár minút chôdze."
  }
]

},

{
    id:"X",
    kdebyva:"Šaľa",
     lokalita:"Slovensko",
     byvanie: ["1NSA","2NSA","3NSA","4NSA","5NSA","6NSA"],
     fotka:"/muz9.avif",
     koment: "Úžasná hostiteľka, všetko vysvetlila a odporučila miestne reštaurácie.",
     aktivny:"Aktívny používateľ už 3 rokov.",
    meno:"Leo",
    priezvisko:"Fudaly",
    pocetrecenzie:183,
    pocethodnoteteni:"4,5",
     recenzie: ["D","B","A"],
     hodnotim:3,
      cislo:"4,5",
     majitel:[
    "vchod",
    "storno",
    "wifi",
    "cistota",
    "wifi",
    "parkovanie",
    "storno",

  ],
  
  // totottreba
  vlastne : [
    {takasi: "Ubytovanie príjemné a čisté, všetko fungovalo bez problémov.", ohodnotenie: 5},
  {takasi: "Čisté, priestranné a pohodlné, spokojnosť na 100%.", ohodnotenie: 5},
  {takasi: "Výborná lokalita, všetko po ruke, veľmi spokojný.", ohodnotenie: 5},
  {takasi: "Apartmán fajn, ale sem-tam počuť susedov.", ohodnotenie: 4},
  {takasi: "Kuchyňa dobre vybavená, chýbalo pár drobností.", ohodnotenie: 3},
  {takasi: "Check-in trochu zdĺhavý, ale personál pomohol.", ohodnotenie: 3},
  {takasi: "Posteľ tvrdšia, než som očakával, no spalo sa dobre.", ohodnotenie: 3},
  {takasi: "Výhľad nádherný, miestnosť však menšia.", ohodnotenie: 4},
  {takasi: "Majiteľ milý a komunikácia rýchla.", ohodnotenie: 4},
  {takasi: "Celkovo spokojnosť, drobné chyby, nič vážne.", ohodnotenie: 4}

],
  email:"elaeal@gamil.com",
   info: { 
    hostia: "2 hostia",
    spalne: "3 spálne",
    lozka: "2 lôžka",
    kupelna: "2 kúpeľňa",
  },
   popisek: "Užite si pohodlie a pokoj v tomto moderne zariadenom byte, ktorý sa nachádza v tichej časti mesta s rýchlym prístupom k zelenej oblasti a mestským atrakciám. Byt sa nachádza na prvom poschodí novostavby s výťahom a súkromným parkovaním. Interiér je plne vybavený moderným nábytkom, kuchynskými spotrebičmi a klimatizáciou, takže budete mať všetko, čo potrebujete pre komfortný pobyt.Z terasy sa naskytá príjemný výhľad na okolitú zeleň a mesto, ideálne miesto na relax, čítanie knihy alebo rannú kávu. Lokalita je veľmi praktická  do centra mesta sa dostanete pešo za 10 minút alebo MHD za 5 minút. Tento byt je ideálny pre tých, ktorí hľadajú kombináciu pohodlia, súkromia a blízkosti prírody.",

   konverzacia: [
  { on: "Ahoj! Apartmán je pripravený a čaká na tvoj príchod." },
  { ja: "Ahoj, mám problém – vlak mešká a neviem, či stihnem prísť dnes večer." },
  { on: "Rozumiem, nechceš mi dať vedieť odhadovaný čas príchodu, aby sme vedeli pripraviť všetko?" },
  { ja: "Ťažko povedať, možno neskôr večer okolo 22:00." },
  { on: "V poriadku, apartmán bude pripravený a kľúče čakajú." },
  { ja: "Ďakujem, veľmi oceňujem, že sa dá počkať." },
  { on: "Nemáš sa čoho obávať, hlavné je, aby si prišiel bezpečne." },
  { ja: "Dohodnuté, hneď ako sa vlak pohne, dám ti vedieť presnejší čas." },
  { on: "Skvelé, pripravíme všetko na tvoj príchod." },
  { ja: "Super, ďakujem za flexibilitu." },
  { on: "Rovnako, ak sa niečo zmení, napíš mi hneď." }
],

odpovede: [
  { kluc: "Apartmán je pripravený a čaká na tvoj príchod." },
  { kluc: "Rozumiem, že možno neprídeš dnes večer kvôli meškajúcemu vlaku." },
  { kluc: "Daj mi vedieť približný čas príchodu." },
  { kluc: "Apartmán a kľúče budú pripravené." },
  { kluc: "Nemáš sa čoho obávať, všetko zariadime." },
  { kluc: "Hlavné je, aby si prišiel bezpečne." },
  { kluc: "Keď budeš mať presný čas, daj mi vedieť." },
  { kluc: "Ak sa situácia zmení, napíš mi hneď." }
],

},


]

export const koment = [
  {
    komentId:"A",
    koment:"1",

  },

  {
    komentId:"B",
    koment:"kokokokokokokokokoko",

  },
  {
    komentId:"C",
    koment:"Super článok, veľmi poučné informácie."
},

{
    komentId:"D",
    koment:"Myslím, že by sa dalo ešte vylepšiť týmto spôsobom."
},

{
    komentId:"E",
    koment:"Ďakujem za vysvetlenie, teraz je to jasnejšie."
},

{
    komentId:"F",
    koment:"Mohli by sme pridať aj alternatívne možnosti?"
},
{
    komentId:"G",
    koment:"Tento postup mi veľmi pomohol, vďaka!"
},


]