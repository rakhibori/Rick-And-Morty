import React, {useState} from 'react';
import { fetchPosts } from '../services/RickAndMortyApi';
import {useQuery} from 'react-query'

// To increase the efficiency of the site
const SearchBox = React.lazy(() => import('./SearchBox'));
const TitleBox = React.lazy(() => import('./TitleBox'));
const ShowCharacters = React.lazy(() => import('./ShowCharacters'));


const PostsList = ({setTransferPost}) => {
    const {data:posts, isLoading, error} = useQuery('posts', fetchPosts)
    const [searchedCharacter, setSearchedCharacter] = useState([])
    const [aliveCharacter, setAliveCharacter] = useState([])
    const [maleCharacter, setMaleCharacter] = useState([])

    if(isLoading){
        return <h1>Loading ...</h1>
    }

    if(error){
        return <h1>Error : {error.message};</h1>    
    }
    return ( 
        <>
            <SearchBox info={posts} setSearchedCharacter={setSearchedCharacter} setAliveCharacter={setAliveCharacter} setMaleCharacter={setMaleCharacter}/>
            <TitleBox/>
            <div className='postMainBox'>
                <ShowCharacters info={posts} setTransferPost={setTransferPost} searchedCharacter={searchedCharacter} aliveCharacter={aliveCharacter} maleCharacter={maleCharacter}/>
            </div>
        </>
     );
}
 
export default PostsList;