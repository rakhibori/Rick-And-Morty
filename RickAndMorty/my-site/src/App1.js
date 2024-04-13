import React, {useState} from 'react';
import './styles/main.scss'
import MainPage from './components/MainPage';
import {QueryClient, QueryClientProvider} from 'react-query'
import {Routes, Route} from 'react-router-dom';
import RickSanchez from './components/Page/RickSanchez';
import MortySmith from './components/Page/MortySmith';
import SummerSmith from './components/Page/SummerSmith';
import BethSmith from './components/Page/BethSmith';
import JerrySmith from './components/Page/JerrySmith';
import AbadangoClusterPrincess from './components/Page/AbadangoClusterPrincess';
import AbradolfLincler from './components/Page/AbradolfLincler';
import AdjudicatorRick from './components/Page/AdjudicatorRick';
import AgencyDirector from './components/Page/AgencyDirector';
import AlanRails from './components/Page/AlanRails';
import AlbertEinstein from './components/Page/AlbertEinstein';
import Alexander from './components/Page/Alexander';
import AlienGoogah from './components/Page/AlienGoogah';
import AlienMorty from './components/Page/AlienMorty';
import AlienRick from './components/Page/AlienRick';
import AmishCyborg from './components/Page/AmishCyborg';
import Annie from './components/Page/Annie';
import AntennaMorty from './components/Page/AntennaMorty';
import AntennaRick from './components/Page/AntennaRick';
import AntsinmyEyesJohnson from './components/Page/AntsinmyEyesJohnson';

const queryClient = new QueryClient()

export default function App1() {

   // Passing Data Between Pages
   const [transferPost, setTransferPost] = useState([])

    return(
      // Get Data By ReactQuery
       <QueryClientProvider client={queryClient}>
         {/* Using Method React Router Dom */}
         <Routes>
            <Route path='/' element={<MainPage setTransferPost={setTransferPost}/>}></Route>
            <Route path='Rick Sanchez' element={<RickSanchez transferPost= {transferPost}/>}></Route>
            <Route path='Morty Smith' element={<MortySmith transferPost= {transferPost}/>}></Route>
            <Route path='Summer Smith' element={<SummerSmith transferPost= {transferPost}/>}></Route>
            <Route path='Beth Smith' element={<BethSmith transferPost= {transferPost}/>}></Route>
            <Route path='Jerry Smith' element={<JerrySmith transferPost= {transferPost}/>}></Route>
            <Route path='Abadango Cluster Princess' element={<AbadangoClusterPrincess transferPost= {transferPost}/>}></Route>
            <Route path='Abradolf Lincler' element={<AbradolfLincler transferPost= {transferPost}/>}></Route>
            <Route path='Adjudicator Rick' element={<AdjudicatorRick transferPost= {transferPost}/>}></Route>
            <Route path='Agency Director' element={<AgencyDirector transferPost= {transferPost}/>}></Route>
            <Route path='Alan Rails' element={<AlanRails transferPost= {transferPost}/>}></Route>
            <Route path='Albert Einstein' element={<AlbertEinstein transferPost= {transferPost}/>}></Route>
            <Route path='Alexander' element={<Alexander transferPost= {transferPost}/>}></Route>
            <Route path='Alien Googah' element={<AlienGoogah transferPost= {transferPost}/>}></Route>
            <Route path='Alien Morty' element={<AlienMorty transferPost= {transferPost}/>}></Route>
            <Route path='Alien Rick' element={<AlienRick transferPost= {transferPost}/>}></Route>
            <Route path='Amish Cyborg' element={<AmishCyborg transferPost= {transferPost}/>}></Route>
            <Route path='Annie' element={<Annie transferPost= {transferPost}/>}></Route>
            <Route path='Antenna Morty' element={<AntennaMorty transferPost= {transferPost}/>}></Route>
            <Route path='Antenna Rick' element={<AntennaRick transferPost= {transferPost}/>}></Route>
            <Route path='Ants in my Eyes Johnson' element={<AntsinmyEyesJohnson transferPost= {transferPost}/>}></Route>
         </Routes>
       </QueryClientProvider>
    )
}