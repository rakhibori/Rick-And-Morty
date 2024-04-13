import axios from 'axios';

export const fetchPosts = async()=>{
    const response = await axios.get('https://rickandmortyapi.com/api/character/');
    return response.data
}