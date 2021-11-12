import { Post, Post1 } from './components/posts/interfaces';

interface Db{
    challenges: Post[];
    challengesVaimule: Post1[];
    challengesToitumine: Post[];
}

const db: Db = {
  challenges: [
    {
      id: '1',
      title: 'Viibi täna värskes õhus',
      content: 'Kas oled täna juba õues käinud? Nii vaimsele kui ka füüsilisele tervisele on kasu aktiivsest liikumisest looduslikus keskkonnas. Lastel ja noorukitel on soovitatav viibida värskes õhus nii palju kui võimalik.',
      author: 'Vltr',
    },
    {
      id: '2',
      title: 'Liigu aktiivselt vähemalt 60 minutit',
      content: 'Tagamaks head tervist ja ennetamaks mitmeid kroonilisi haigusi, on oluline olla igapäevaselt kehaliselt aktiivne ning piisavalt liikuda. Rahvusvahelise Maailma Terviseorganisatsiooni (WHO) ja ka Eesti toitumis- ja liikumissoovituste kohaselt peaksid lapsed ja noored vähemalt 60 minutit mõõduka kuni tugeva intensiivsusega liikumistegevusi päevas. Pikema kestvusega kehaliselt aktiivselt veedetud aeg on täiendava positiivse mõjuga. Noorte kehaline aktiivsus on seotud üldise tervisega, sellega, kuidas noor ennast tunneb, kehakaaluga ning ka vaimse tervise ja heaoluga',
      author: 'Vltr',
    },
    {
      id: '3',
      title: 'Vähenda istuvat aega',
      content: 'Tõuse püsti! Iga samm loeb! On oluline, et laste, noorte ja ka täiskasvanute järjestikune istumisaeg ei kujuneks liiga pikaks. Istuva eluviisiga inimestel on kaks korda suurem risk haigestuda südame-veresoonkonnahaigustesse. Pikem istudes veedetud aeg võib olla seotud nii sagedasema depressioonisümptomite esinemisega kui ka ülekaalulisuse tekke riskiga. Proovi täna viia miinimumini kehaliselt mitteaktiivne aeg. Selleks võid vähendada televiisori, arvuti jms kasutamise aega, liikuda lühikesed vahemaad jalgsi.',
      author: 'Vltr',
    },
  ],
  challengesVaimule: [
    {
      id: '1',
      title: 'Väldi ekraani taga olemist',
      content: 'Väldi ekraani taga olemist vähemalt kaks tundi enne magamaminekut (telefon, tahvelarvuti, arvuti, telekas)',
      author: 'Vltr',
    },
    {
      id: '2',
      title: 'Kuula lemmikmuusikat',
      content: 'Võid lihtsalt kuulata oma lemmik muusikat või tantsida selle saatel. Kas teadsid et muusika aitab erinevate muredega toime tulla. ',
      author: 'Vltr',
    },
    {
      id: '3',
      title: 'Aktsepteeri ennast täna sellena, kes sa oled. Tea enda nõrkusi, kuid tunnusta oma tugevusi.',
      content: 'Ära sea endale liiga kõrgeid nõudmisi. Ebarealistlikud ootused vähendavad sinu enesekindlust.  Keskendu sellele, mis sulle enda juures meeldib ning tunnusta end selle eest. Enesekindlus ja enese aktsepteerimine on võtmetegurid positiivse enesehinnangu suunas, end aktsepteerides tunned sa end paremini. Kui sa tunned end paremini, suudad sa rohkem teha; mida rohkem sa teed, seda rohkem sa saavutad; mida rohkem sa saavutad, seda enesekindlamaks muutud; mida enesekindlam sa oled, seda suurem on su eneseusk; mida suurem on su eneseusk, seda enesekindlam ja ennast austavam sa oled – ja seda kõrgem on su enesehinnang. Ole uhke enda ja oma saavutuste üle! ',
      author: 'Vltr',
    },
  ],
  challengesToitumine: [
    {
      id: '1',
      title: 'Alusta tänast päeva klaasi veega',
      content: 'Sa tead, et koosned enamasti veest? Öö jooksul kaotab keha vajalikku vedelikku, seega juba enne hommikusööki oleks hea alustada päeva toasooja vee joomisega. Et oleks uhkem võid sinna lisada näiteks sidrunit. See on väga hea starter päevale, sest see ergutab ainevahetust, mis omakorda toetab seedimist ja immuunsust. Pea meeles piisavalt vett juua ka ülejäänud päeva jooksul.',
      author: 'Vltr',
    },
    {
      id: '2',
      title: 'Proovi puu/juurvilja, mida varem pole söönud.',
      content: 'Proovige kodus perega mõnd puu- või köögivilja, mida pole varem söönud. Kas oled proovinud näiteks sparglit, brokolit, maguskartulit, avokaadot, ananassi, granaatõuna, kiivit, mangot, passionit või hoopis papaiat? Köögiviljade valmistamisel palu appi ema või isa. Puuviljad sobivad hästi vahepalaks – olles maitsvad ja tervislikud.',
      author: 'Vltr',
    },
    {
      id: '3',
      title: 'Joo karastusjoogi asemel ',
      content: 'Joo karastusjoogi asemel vett/ vältida ka suhkrurikkaid mahlajooke (suhkru võrdlus nt mahlajoogis ja karastusjoogis)',
      author: 'Vltr',
    },
  ],

};

export default db;
