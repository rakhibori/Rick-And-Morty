import React from 'react';
import TitlePersonalityFeaturesBox from './TitlePersonalityFeaturesBox';
import { FaCircle } from "react-icons/fa"
import {useNavigate} from 'react-router-dom';

const ShowCharactersInfo = ({transferPost}) => {

    const navigate = useNavigate();
   
    return ( 
        
        <>
            <TitlePersonalityFeaturesBox/>

            <div className='ShowCharactersInfoBox'>
                <div className='nameBox'>
                    <h1>{transferPost.name}</h1>
                </div>
                <div className='imageMainBox'>
                    <div className='imageBox'>
                        <div>
                            <img src={transferPost.image} alt={transferPost.origin.name}/>
                        </div>
                        <div className='infoBox'>
                            {/* React Icon */}
                            <h3><span className='span1'><FaCircle className={transferPost.status === 'Dead' ? 'iconRedStyle':'iconGreenStyle' }></FaCircle></span>{transferPost.status} - {transferPost.species}</h3>
                            <h3><span>Gender : </span> {transferPost.gender}</h3>
                            <h3><span>Origin : </span> {transferPost.origin.name}</h3>
                            <h3><span>Last known location : </span> {transferPost.location.name}</h3>
                            {/* Use Navigate For Back To MainPage */}
                            <div className='btnBox'><button onClick={()=>navigate('/')}>back</button></div>
                        </div>
                    </div>
                </div>
                <div>
                    
                </div>
            </div>
           
        </>
     );
}
 
export default ShowCharactersInfo;