import ProductList from '../Components/ProductList'
import { useEffect } from 'react'

export const products = [
  {
    id: 1,
    name: 'Med',
    info: `Med je sladak i gust sok kojeg pčele medarice tvore od nektara koji skupljaju na cvjetovima ili slatkim izlučevinama (medene rose) nekih kukaca. Med je i najsavršeniji proizvod prirode, u njemu se nalaze gotovo svi sastojci koji grade ljudski organizam.
    Nektar koji pčele skupljaju iz cvijeća glavni je izvor ugljikohidrata koje pčele pretvaraju u lako probavljivi šećer – glukozu i fruktozu, koji je glavni sastojak meda.
    Zreli med ne sadrži više od 15% vode, a pčele ga u saću pokrivaju voštanim poklopcima i tako čuvaju od upijanja vlage i kvarenja. U medu se nalaze minerali, aminokiseline, visoko vrijedne organske kiseline kao što su mravlja, jabučna, limunska, octena, jantarna kiselina, pigmenti, razni derivati klorofila, vosak, inulin te elementi kompleksa vitamina B.
    Med medljikovac sadrži 13 puta više mineralnih tvari od cvjetnog meda, a osobito željeza. Svi dosadašnji pokušaji miješanja industrijske proizvodnje meda unatoč silnoj tehnologiji i uloženim ogromnim sredstvima dali su poražavajuće rezultate.
    Tajnu proizvodnje pravog prirodnog pčelinjeg meda pčele nose u svom tijelu i organima za probavu koji taj proizvod pretvaraju u lijek gotovo nezamjenjiv u ljudskoj prehrani.
    Nema na svijetu pčele koja proizvodi loš med, loš med rezultat je industrijskog punjenja meda ili lošeg nesavjesnog i neobrazovanog pčelara.`,
    img: 'https://images.unsplash.com/photo-1587049352851-8d4e89133924?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
  },
  {
    id: 2,
    name: 'Propolis',
    info: `Propolis je smolasta smjesa koju pčele prikupljaju s pupoljaka stabala, biljnih sokova ili drugih biljnih izvora. Koristi se kao sredstvo za brtvljenje neželjenih otvora na košnici.
    Propolis je najistraživaniji pčelinji proizvod. Brojne studije pokazale su da djeluje protiv bakterija, gljivica, virusa i upala te da ima anestetički, antioksidacijski i antitumorski učinak, sprječava rast biljaka i klijanje sjemena, potiče regeneraciju tkiva i jača imunološki sustav. To je smolasta supstanca koju pojedine pčele radilice kada postanu izletnice (od 21 dana života) sakupljaju s pupoljaka i kore drveća, kao i drugih biljaka. Time se bavi samo mali broj pčela koje imaju u košnici tu odgovornu zadaću. Unosom u košnicu upotrebljavaju ga za izgradnju ulaza, zatvaranje pukotina i rupa i skladištenje odnosno "sterilizaciju" ćelija sača... Ime propolis prema pojedinim tumačenjima dobio je od grčke riječi "pro" - prije ili ispred i "polis"- grad, zbog upotrebe propolisa za izgradnju i regulaciju ulaza u košnicu dok drugi misle da nosi naziv prema riječi propoliso koja bi na grčkom ili latinskom značila zamazivati-zaglađivati.`,
    img: 'https://radovanpetrovic.com/wp-content/uploads/2018/04/propolis-krupni-plan-870x580.jpg',
  },
  {
    id: 3,
    name: 'Matična mliječ',
    info: `Matična mliječ je lučevina medonosnih pčela koja se koristi kao hrana ličinki. Luči se iz hipofaringealnih žlijezdi u glavama mladih radilica, te se koristi (s ostalim supstancama) za hranjenje ličinaka u koloniji. Uz to, ako se javi potreba za maticom, izabrana ličinka će dobivati velike količine matične mliječi kao jedini izvor hrane prva četiri dana svoga rasta. Ovo brzo, rano hranjenje aktivira razvoj matičine morfologije, što uključuje i potpuno razvijene jajnike koji su potrebni za polaganje jajašaca. Sve ličinke u koloniji se hrane s matičnom mliječi, ali ju odrasle pčele uopće ne konzumiraju.
    `,
    img: 'https://www.adiva.hr/wp-content/uploads/2019/01/maticna_mlijec_je_zdrava_hranjiva_bomba.jpg',
  },
  {
    id: 4,
    name: 'Pelud',
    info: `Pčele sakupljaju cvjetni pelud zato što sadrži bjelančevine, masti, šećere, vitamine i druge korisne tvari za njegovanje legla. Ako nema dovoljno unosa cvjetnog praha u košnicu pčele zaostaju u razvoju. Peludi raznih vrsta biljaka imaju određene i stalne veličine, boju i oblik. Ako gledamo pod mikroskopom pelud uzet s tijela pčele ili iz meda, po njihovoj veličini i obliku možemo odrediti koje je cvjetove posjetila pčela, odnosno od kojih biljaka potiče med. Veličina peludovih zrna raznih biljaka bitno se razlikuju. U većini slučajeva ta zrna dostižu oko 0,015 - 0,050 mm u promjeru, a kod samo malog broja biljaka npr. tikava, 0,15 - 0,20 mm. Po boji peluda može se raspoznati od kojih je biljaka sakupljeno: s maline je bijel, s jabuka je svijetložut, sa suncokreta i žutog kokosa je zlatnožut, s krušaka je crvenožut, s marelice i kestena je tamnocrven, s bijele djeteline je smeđ, s hrasta je žutozelen, s lipe je svijetlozelen, s facelije je ljubičast i tako dalje. Cvjetni pelud ili cvjetni prah kao pčelinji proizvod izuzetno je zdrav kao dodatak ljudskoj prehrani.`,
    img: 'https://pcelarstvo-veber.hr/cms/wp-content/uploads/2017/10/cvjetni-pelud.jpg.webp',
  },
]

const Products = ({ setTitle, setIsHome }) => {
  useEffect(() => {
    setIsHome()
  }, [])

  return (
    <>
      <ProductList products={products} />
    </>
  )
}

export default Products
