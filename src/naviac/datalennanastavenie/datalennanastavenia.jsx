export const Kategorie = [
  {
    nazov: "Platba a finančný tlak",
    ide:"A",
    otazky: [
       { 
    nazov: "Mám platiť mimo aplikáciu?", 
    id: 1,
    komplet: "Hostiteľ ponúka zaplatiť mimo aplikácie?",
    varovnySignal: "Aplikácia tvoju platbu chráni len vtedy, ak prebehne priamo cez jej platformu.",
    odpoved: "Ak ťa hostiteľ žiada o platbu mimo systému (napr. v hotovosti alebo prevodom na iný účet), nikdy to nerob.",
    preco: "Akonáhle pošleš peniaze mimo aplikácie, strácaš nárok na vrátenie peňazí a platforma ti nevie pomôcť, ak ubytovanie nebude existovať.",
    coUrobit: 'Okamžite nahlás túto správu cez tlačidlo "Nahlásiť" priamo v chate.',
    detail: "Platby mimo oficiálneho systému sú najčastejším typom podvodu. Podvodníci sa snažia presvedčiť používateľa, že ide o výhodnejšiu alebo rýchlejšiu možnosť. V skutočnosti tým obchádzajú bezpečnostné mechanizmy platformy, čím používateľ prichádza o ochranu, podporu aj možnosť refundu.",
    
    detail2: "Platba mimo oficiálnej platformy patrí medzi najčastejšie podvodné praktiky. Útočníci často tvrdia, že takto ušetríš poplatky alebo získaš lepšiu cenu. V skutočnosti ťa však pripravujú o ochranu systému, možnosť reklamácie aj garanciu vrátenia peňazí, pretože transakcia neprebieha cez zabezpečený mechanizmus platformy.",

    detail3: "Obchádzanie oficiálneho platobného systému je typický znak podvodu. Podvodník sa snaží vytvoriť dojem výhody alebo naliehavosti, aby si zaplatil priamo jemu. Tým sa však ruší ochrana používateľa, podpora platformy nemá prístup k platbe a v prípade problému nie je možné uplatniť refund ani oficiálnu reklamáciu.",

       },
       {
    nazov: "Žiada zálohu po rezervácii?", 
    id: 2,
    komplet: "Čo robiť, ak hostiteľ žiada zálohu?",
    varovnySignal: "Platforma chráni platby len vtedy, ak sú realizované priamo cez ňu.",
    odpoved: "Ak hostiteľ žiada zálohu mimo systému, neposielaj peniaze priamo.",
    preco: "Platba mimo platformy znamená stratu ochrany a nároku na refund.",
    coUrobit: 'Nahlás túto žiadosť cez oficiálny chat.',
    detail: "Dodatočné zálohy mimo systému sú často pokusom o neoprávnené získanie peňazí. Legitímne poplatky sú vždy zobrazené priamo v aplikácii. Ak sa objaví externá požiadavka na platbu, ide o rizikové správanie, ktoré môže viesť k finančnej strate.",

    detail2: "Požiadavky na dodatočné zálohy mimo oficiálneho systému bývajú častým znakom podvodu. Všetky oprávnené poplatky sú vždy uvedené priamo v aplikácii. Ak hostiteľ žiada platbu mimo platformy, ide o rizikovú situáciu, ktorá môže skončiť stratou peňazí bez možnosti ochrany.",

    detail3: "Ak sa po rezervácii objaví požiadavka na extra zálohu mimo aplikácie, je to vážny varovný signál. Legitímne poplatky sú transparentne zobrazené v systéme platformy. Externé platby obchádzajú bezpečnostné mechanizmy a vystavujú používateľa riziku finančnej straty."
  },

  { 
    nazov: "Je cena podozrivo nízka?", 
    id: 3,
    komplet: "Cena je nízka bezpečná?",
    varovnySignal: "Cena výrazne pod trhovou hodnotou môže signalizovať podvod.",
    odpoved: "Over si profil hostiteľa, recenzie a históriu účtu.",
    preco: "Extrémne nízka cena môže byť návnadou na rýchlu platbu.",
    coUrobit: "Porovnaj cenu s podobnými ponukami a komunikuj len cez aplikáciu.",

    detail: "Podvodníci často nastavujú veľmi nízku cenu, aby vytvorili pocit výhodnej ponuky. Tým vyvolajú časový tlak a emocionálne rozhodovanie. Pred rezerváciou je dôležité analyzovať trhové ceny, hodnotenia a konzistentnosť informácií.",

     detail2: "Neprimerane nízka cena je častá taktika podvodníkov na prilákanie pozornosti. Vytvára dojem výnimočnej príležitosti a núti k rýchlemu rozhodnutiu bez dôkladnej kontroly. Pred rezerváciou je vhodné porovnať cenu s podobnými ponukami, preveriť hodnotenia a skontrolovať, či sú informácie v profile konzistentné.",

    detail3: "Extrémne lacná ponuka môže byť zámernou manipuláciou s cieľom vyvolať pocit naliehavosti a výhodnosti. Takýto tlak často vedie k impulzívnemu rozhodnutiu. Bezpečný postup zahŕňa porovnanie trhovej hodnoty, overenie recenzií a kontrolu súladu medzi popisom, fotografiami a profilom hostiteľa."
  },

  { 
    nazov: "Mení cenu počas dohody?", 
    id: 4,
    komplet: "Hostiteľ počas dohody mení cenu?",
    varovnySignal: "Neočakávaná zmena ceny môže byť znakom manipulácie.",
    odpoved: "Nepokračuj, kým nie je cena jasne potvrdená v systéme.",
    preco: "Zmena ceny môže byť pokus presmerovať platbu mimo platformy.",
    coUrobit: "Drž komunikáciu výhradne v oficiálnom chate.",
    detail: "Stabilná a transparentná cenová politika je znakom dôveryhodnosti. Ak hostiteľ mení podmienky bez jasného dôvodu, môže ísť o testovanie reakcie používateľa alebo pokus vytvoriť zmätok pred presmerovaním platby.",

       detail2: "Konštantná a jasne uvedená cena signalizuje serióznosť hostiteľa. Ak sa podmienky menia bez vysvetlenia, môže to byť trik na testovanie tvojej reakcie alebo snaha zmiasť ťa pred presunom platby mimo platformy.",

    detail3: "Transparentná a stabilná cenová ponuka je znakom dôveryhodného ubytovania. Nepredvídateľné zmeny ceny bez dôvodu môžu slúžiť na psychologický tlak alebo na presmerovanie platby mimo Airbnb, čo predstavuje riziko."
  },

  { 
    nazov: "Hostiteľ ma tlačí do rýchlej platby?", 
    id: 5,
    komplet: "Hostiteľ tlačí na rýchlu platbu?",
    varovnySignal: "Nátlak na rýchle rozhodnutie je typická taktika podvodníkov.",
    odpoved: "Nikdy sa nerozhoduj pod tlakom.",
    preco: "Tlak znižuje schopnosť racionálne vyhodnotiť riziko.",
    coUrobit: "Zastav komunikáciu a nahlás podozrivé správanie.",
    detail: "Psychologický tlak je bežná manipulačná technika. Podvodníci vytvárajú pocit naliehavosti („posledná šanca“, „ďalší záujemca čaká“), aby obeť konala bez premýšľania. Bezpečné rozhodnutie si vždy vyžaduje čas a overenie faktov.",

     detail2: "Podvodníci často používajú psychologický tlak, aby vyvolali pocit naliehavosti, napríklad tvrdeniami typu „posledná šanca“ alebo „ďalší záujemca čaká“. NEVIPISUJ impulzívne rozhodnutie – vždy si daj čas a over fakty pred platbou.",

    detail3: "Manipulácia cez naliehanie je bežnou taktikou podvodníkov. Snažia sa vytvoriť dojem urgentnej potreby rozhodnutia, aby obeť konala bez premyslenia. Bezpečné správanie znamená vždy si overiť informácie a nerobiť platbu pod tlakom."
  }
    ]
  },

  {
    nazov: "Komunikácia mimo platformy",
    ide:"B",
    otazky: [
   {
    id: 6,
    nazov: "Komunikujeme mimo aplikáciu?",
    komplet: "Komunikacia mimo aplikácie?",
    varovnySignal: "Komunikácia mimo aplikácie obchádza ochranu platformy.",
    odpoved: "Nikdy nekomunikuj mimo oficiálneho chatu, aby si mal dôkaz o dohode.",
    preco: "Ak komunikuješ mimo aplikácie, strácaš ochranu aplikácie a možnosť refundu.",
    coUrobit: 'Drž sa výhradne oficiálneho chatu a nahlás podozrivé správy cez tlačidlo "Nahlásiť".',
    detail: "Komunikácia mimo platformy znamená, že všetky dohody prebiehajú bez záznamu v systéme. V prípade sporu nemáš dôkaz o tom, čo bolo dohodnuté. Oficiálny chat slúži ako ochranný mechanizmus, ktorý umožňuje podpore preveriť komunikáciu a zasiahnuť, ak dôjde k problému.",
    detail2: "Presun komunikácie mimo Airbnb je častá taktika podvodníkov. Cieľom je odstrániť dohľad platformy nad dohodou a platbami. Drž sa vždy oficiálneho chatu, aby si mal dôkaz a ochranu.",
    detail3: "Podvodníci využívajú externé aplikácie na skrytie podvodov. NEPVUSUJ komunikáciu mimo systému – legitímny hostiteľ nemá dôvod presúvať chat mimo platformy."
  },
  // {
  //   id: 7,
  //   nazov: "Chce komunikovať mimo aplikáciu?",
  //   komplet: "Hostiteľ chce komunikovať mimo aplikácie?",
  //   varovnySignal: "Hostiteľ, ktorý presúva komunikáciu mimo platformy, môže obchádzať pravidlá.",
  //   odpoved: "Nepokračuj v konverzácii mimo aplikácie, všetko rieš cez oficiálny systém.",
  //   preco: "Mimo platformy nemáš právnu ani systémovú ochranu.",
  //   coUrobit: 'Ignoruj žiadosť o komunikáciu mimo systému a nahlás takéto správanie.',
  //   detail: "Presun komunikácie na externé aplikácie (napr. WhatsApp, e-mail) je častá taktika podvodníkov. Cieľom je odstrániť dohľad platformy nad konverzáciou. Legitímny hostiteľ nemá dôvod presúvať komunikáciu mimo oficiálneho prostredia.",
  //   detail2: "Podvodníci sa snažia vytvoriť dojem dôvery a naliehajú na komunikáciu mimo Airbnb. NEPVUSUJ – vždy komunikuj len cez aplikáciu, aby si mal ochranu a dôkaz.",
  //   detail3: "Externé presuny komunikácie znižujú ochranu používateľa. Drž sa oficiálneho systému a všetky podozrivé žiadosti nahlas podpore."
  // },
  {
    id: 7,
    nazov: "Poslal mi podozrivý link?",
    komplet: "Poslal hostiteľ podozrivý odkaz?",
    varovnySignal: "Neznámy alebo podozrivý odkaz môže obsahovať phishing alebo škodlivý softvér.",
    odpoved: "Nikdy na takýto odkaz neklikaj a neotváraj externé prílohy.",
    preco: "Kliknutím môžeš ohroziť svoje údaje, heslá alebo finančné prostriedky.",
    coUrobit: 'Okamžite nahlás správu cez oficiálny chat a ignoruj externé odkazy.',
    detail: "Phishingové odkazy často napodobňujú oficiálny vzhľad platformy a snažia sa získať prihlasovacie údaje alebo platobné informácie. Bezpečná komunikácia a platby prebiehajú výhradne v rámci aplikácie. Ak si nie si istý, vždy kontaktuj oficiálnu podporu.",
    detail2: "Podvodníci používajú neznáme linky na krádež údajov a platieb. NEPVUSUJ – nikdy neklikaj na externé odkazy a zachovaj komunikáciu v Airbnb chate.",
    detail3: "Odkazy mimo systému môžu byť škodlivé alebo slúžiť na phishing. Drž sa platformy a nahlas všetky podozrivé linky podpore Airbnb."
  }
    ]
  },

  {
    nazov: "Dôveryhodnosť profilu hostiteľa",
     ide:"C",
    otazky: [
    {
    id: 8,
    nazov: "Nemá hostiteľ žiadne recenzie?",
    komplet: "Hostiteľ nemá žiadne recenzie?",
    varovnySignal: "Profil bez recenzií je vždy rizikový.",
    odpoved: "Over hostiteľa podľa identity, veku účtu a histórie aktivity.",
    preco: "Bez recenzií nemáš žiadnu istotu o dôveryhodnosti hostiteľa a zvyšuje sa riziko podvodu.",
    coUrobit: 'Buď opatrný, skontroluj profil a komunikuj len cez aplikáciu. Podozrivé správanie nahlás.',
    detail: "Recenzie sú dôležitým ukazovateľom dôveryhodnosti. Ak profil nemá žiadne hodnotenia, môže ísť o nový alebo neaktívny účet. To automaticky neznamená podvod, ale vyžaduje zvýšenú opatrnosť a dôkladné preverenie všetkých dostupných informácií.",
    detail2: "Profil bez recenzií môže byť rizikový, pretože nemáš spätnú väzbu od predchádzajúcich hostí. NEPVUSUJ – over si identitu a históriu účtu pred rezerváciou.",
    detail3: "Nové alebo nehodnotené profily si vyžadujú zvýšenú opatrnosť. Skontroluj vek účtu, verifikáciu a komunikuj len cez oficiálnu platformu."
  },
  {
    id: 9,
    nazov: "Má nový profil bez recenzií?",
    komplet: "Hostiteľ má nový profil bez recenzií?",
    varovnySignal: "Nové účty s podozrivo nízkymi cenami môžu byť rizikové.",
    odpoved: "Uprednostni hostiteľov s históriou a reálnymi hodnoteniami.",
    preco: "Nový profil môže byť vytvorený účelovo na krátkodobý podvod.",
    coUrobit: 'Skontroluj dátum vytvorenia účtu, overené údaje a komunikuj výhradne cez aplikáciu.',
    detail: "Podvodníci často vytvárajú nové účty, ktoré krátko fungujú a následne zmiznú. Kombinácia nového profilu, nízkej ceny a tlaku na rýchlu rezerváciu je výrazný varovný signál. Overenie histórie účtu je preto kľúčové.",
    detail2: "Nové profily bez recenzií môžu skrývať riziko podvodu. NEPVUSUJ – vždy skontroluj históriu účtu a over hostiteľa pred rezerváciou.",
    detail3: "Profily vytvorené nedávno s minimom recenzií sú menej spoľahlivé. Skontroluj vek účtu a históriu komunikácie pred uskutočnením platby."
  },
  {
    id: 10,
    nazov: "Nie sú recenzie podozrivé alebo falošné?",
    komplet: "Recenzie vyzerajú podozrivo?",
    varovnySignal: "Veľmi krátke, všeobecné alebo extrémne pozitívne recenzie môžu byť neautentické.",
    odpoved: "Porovnaj recenzie s fotografiami, dátumami a detailmi v profile.",
    preco: "Falošné recenzie môžu vytvárať falošný pocit bezpečia.",
    coUrobit: 'Skontroluj konzistentnosť informácií a podozrivé hodnotenia nahlás cez aplikáciu.',
    detail: "Autentické recenzie zvyčajne obsahujú konkrétne skúsenosti a detaily. Ak sú všetky hodnotenia veľmi podobné, krátke alebo bez obsahu, môže ísť o manipuláciu. Dôležité je sledovať dátumy hodnotení a ich prirodzenosť.",
    detail2: "Falošné alebo nereálne recenzie môžu skresliť obraz o hostiteľovi. NEPVUSUJ – over si detaily a konzistenciu informácií v profile.",
    detail3: "Podozrivé recenzie sú často krátke, všeobecné alebo príliš pozitívne. Skontroluj dátumy, fotografie a obsah recenzií pred rezerváciou."
  }
    ]
  },

  {
    nazov: "Podozrivé detaily ponuky",
     ide:"D",
    otazky: [
    {
    id: 11,
    nazov: "Adresa nesedí na mape?",
    komplet: "Adresa ubytovania nesedí na mape?",
    varovnySignal: "Nesúlad adresy na mape môže znamenať falošnú alebo zavádzajúcu ponuku.",
    odpoved: "Nespoliehaj sa len na textovú adresu, vždy si over polohu a fotografie priamo v aplikácii.",
    preco: "Nejasná alebo nesprávna adresa môže signalizovať podvod a viesť k finančnej strate.",
    coUrobit: "Skontroluj lokalitu cez mapu v aplikácii, porovnaj recenzie a nikdy neposielaj platby mimo oficiálneho systému.",
    detail: "Presná poloha je kľúčová pri rezervácii ubytovania. Ak sa adresa nezhoduje s mapou alebo je zámerne nejasná, môže ísť o pokus zakryť skutočnú lokalitu alebo úplne falošnú ponuku. Vždy porovnávaj mapu, fotografie a popis a v prípade nezrovnalostí kontaktuj podporu.",
    detail2: "Nejasné alebo nesprávne adresy sú častou taktiku podvodníkov. NEPVUSUJ rezerváciu bez overenia lokality, fotografií a recenzií.",
    detail3: "Ak adresa nesedí s mapou, môže to signalizovať falošnú ponuku. Vždy over všetky informácie a komunikuj výhradne cez platformu."
  },
  {
    id: 12,
    nazov: "Chce kópiu dokladu vopred?",
    komplet: "Hostiteľ žiada kópiu dokladu?",
    varovnySignal: "Zasielanie osobných dokladov mimo platformy predstavuje vážne riziko.",
    odpoved: "Nikdy neposielaj kópie dokladov ani citlivé údaje mimo aplikácie.",
    preco: "Takéto údaje môžu byť zneužité na krádež identity alebo finančný podvod.",
    coUrobit: "Ak hostiteľ požaduje doklad, obráť sa na oficiálnu podporu a komunikuj výhradne cez aplikáciu.",
    detail: "Osobné doklady obsahujú citlivé údaje, ktoré môžu byť zneužité na vytváranie falošných účtov, pôžičiek alebo iných podvodných aktivít. Legitímne overovanie identity prebieha iba cez oficiálny systém platformy. Každá externá požiadavka na zaslanie dokladov je vysokoriziková.",
    detail2: "Podvodníci môžu vyžadovať doklady mimo platformy na zneužitie tvojich údajov. NEPVUSUJ – vždy používaj oficiálne overovanie a nahlas podozrivé žiadosti.",
    detail3: "Žiadosť o zaslanie kópií dokladov mimo systému predstavuje vysoké riziko krádeže identity. Over identitu len cez Airbnb a nikdy neposielaj dokumenty externým kanálom."
  }
    ]
  },

  {
    nazov: "Správanie a nekonzistentnosť",
     ide:"E",
    otazky: [
     {
    id: 13,
    nazov: "Odpovede hostiteľa sú vyhýbavé?",
    komplet: "Hostiteľ odpovedá vyhýbavo?",
    varovnySignal: "Vyhýbavé alebo nelogické odpovede môžu naznačovať podvod.",
    odpoved: "Udrž komunikáciu výhradne cez aplikáciu, aby si mal dôkaz o všetkých dohodách.",
    preco: "Nejasné odpovede môžu byť pokusom zmiasť ťa alebo presmerovať platbu mimo platformy.",
    coUrobit: 'Ignoruj nátlak a podozrivé správy nahlás cez tlačidlo "Nahlásiť".',
    detail: "Dôveryhodný hostiteľ odpovedá jasne, konkrétne a konzistentne. Ak sa odpovede vyhýbajú priamym otázkam alebo si navzájom odporujú, môže ísť o snahu zakryť nepravdivé informácie. Transparentná komunikácia je základom bezpečnej rezervácie.",
    detail2: "Podvodníci často používajú vyhýbavé odpovede, aby zakryli nepravdivé informácie. NEPVUSUJ – vždy si udrž komunikáciu cez oficiálny chat.",
    detail3: "Vyhýbavé alebo nelogické odpovede sú varovným signálom. Drž sa oficiálnej platformy a nahlas podozrivé správanie."
  },
  {
    id: 14,
    nazov: "Fotky vyzerajú ako z fotobanky?",
    komplet: "Fotografie pôsobia prevzaté z internetu?",
    varovnySignal: "Fotobankové alebo generické fotografie môžu skrývať falošnú ponuku.",
    odpoved: "Over si detaily priamo u hostiteľa a porovnaj fotografie s mapou a popisom.",
    preco: "Obrázky z internetu môžu vytvárať falošný dojem reálneho ubytovania.",
    coUrobit: "Použi spätné vyhľadávanie obrázkov a podozrivé fotografie nahlás cez aplikáciu.",
    detail: "Podvodníci často používajú profesionálne fotografie z realitných portálov alebo fotobánk. Ak obrázky pôsobia príliš všeobecne alebo sa nezhodujú s lokalitou, je potrebné zvýšiť opatrnosť. Reálne ubytovanie má zvyčajne autentické fotografie s detailmi.",
    detail2: "Fotky z fotobanky alebo internetu môžu byť podvodné. NEPVUSUJ rezerváciu bez overenia polohy a detailov.",
    detail3: "Používanie generických alebo profesionálnych fotografií môže skrývať falošnú ponuku. Vždy over fotografie, mapu a popis."
  },
  {
    id: 15,
    nazov: "Popis nezodpovedá fotografiám?",
    komplet: "Ubytovanie nezodpovedá fotografiám?",
    varovnySignal: "Nesúlad medzi popisom a realitou je varovný signál.",
    odpoved: "Over si presnú lokalitu, vybavenie a komunikuj iba cez aplikáciu.",
    preco: "Rozdiely medzi popisom a fotografiami môžu naznačovať zavádzanie.",
    coUrobit: "Požiadaj o doplňujúce informácie a podozrivé nezrovnalosti nahlás.",
    detail: "Ak text tvrdí niečo iné ako zobrazujú fotografie, môže ísť o zastarané alebo úmyselne upravené informácie. Konzistentnosť údajov je dôležitým ukazovateľom dôveryhodnosti. Každý výrazný nesúlad by mal byť preverovaný.",
    detail2: "Rozdiely medzi popisom a fotografiami môžu naznačovať podvod. NEPVUSUJ – over všetky informácie a komunikuj len cez aplikáciu.",
    detail3: "Nesúlad popisu a fotografií je varovný signál. Dôkladne over realitu a nezrovnalosti nahlas podpore."
  },
  {
    id: 16,
    nazov: "Tvrdí, že má problém s účtom?",
    komplet: "Hostiteľ tvrdí so svojím účtom?",
    varovnySignal: "Výhovorky o problémoch s účtom môžu byť pokusom presunúť komunikáciu mimo platformy.",
    odpoved: "Drž sa výhradne oficiálneho systému aplikácie.",
    preco: "Presun komunikácie mimo platformy znižuje tvoju ochranu a možnosť refundu.",
    coUrobit: "Ignoruj žiadosti o externú komunikáciu a všetko rieš cez oficiálnu podporu.",
    detail: "Podvodníci často tvrdia, že ich účet má technický problém, aby presvedčili používateľa komunikovať alebo platiť mimo systému. Oficiálna platforma nikdy nevyžaduje externé riešenia platieb alebo komunikácie.",
    detail2: "Výhovorky o účte sú často zámienkou na presun komunikácie mimo Airbnb. NEPVUSUJ – všetko rieš cez oficiálny chat.",
    detail3: "Tvrdí hostiteľ, že má problém s účtom? Môže to byť trik na presmerovanie platby alebo komunikácie. Drž sa oficiálneho systému."
  },
  {
    id: 17,
    nazov: "Zrušil rezerváciu a ponúka presun?",
    komplet: "Hostiteľ zrušil rezerváciu?",
    varovnySignal: "Presuny rezervácií mimo aplikáciu sú vysoko rizikové.",
    odpoved: "Všetku komunikáciu aj platby realizuj iba cez oficiálnu platformu.",
    preco: "Mimo systému strácaš ochranu a nárok na vrátenie peňazí.",
    coUrobit: "Nepokračuj v dohode mimo aplikácie a podozrivú ponuku nahlás.",
    detail: "Zrušenie rezervácie s následným návrhom na externú dohodu je častá podvodná taktika. Cieľom je odstrániť ochranu platformy a získať platbu bez dohľadu. Každý presun mimo oficiálneho systému výrazne zvyšuje riziko finančnej straty.",
    detail2: "Presuny mimo aplikácie sú obvyklou stratégiou podvodníkov. NEPVUSUJ – platbu aj komunikáciu realizuj vždy cez platformu.",
    detail3: "Ponuka presunu mimo Airbnb je vysokoriziková. Vždy drž komunikáciu a platby v oficiálnom systéme a nahlas podozrivé správanie."
  }

    ]
  }
];
