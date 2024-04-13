import React, {useState, useEffect} from 'react';
// Select Box By React
import Select from "react-select";
import { FaMagnifyingGlass } from "react-icons/fa6";

const SearchBox = ({info, setSearchedCharacter, setAliveCharacter, setMaleCharacter}) => {

    const [characterName, setCharacterName] = useState('')
    const [message, setMessage] = useState('')

    const alive = info.results.filter(character => character.status === 'Alive');
    const male = info.results.filter(character => character.gender === 'Male');
    const options = [
        { value: "All", label: "All"},
        { value: "Alive", label: "Alive"},
        { value: "Male", label: "Male" },
      ]

    
    // Search Every Two Seconds   
    useEffect(() => {
        setMessage('')
        setTimeout(() => {
            const temp = info.results.filter(character => character.name.toLowerCase().includes(characterName.toLowerCase()));
            if(temp.length > 0){
                setSearchedCharacter(temp) 
            }else{
                setMessage('There is no character with this name');
            }    
        }, 2000)
    },[characterName])
    
     
    // Function For Search Box
    const handleSearchCharacter = (event) => {
        setCharacterName(event.target.value)
        setMessage('')
        setAliveCharacter([])
        setMaleCharacter([])
    }  
    


    // Function For Filter Box
    const handleSelectCharacter = (event) => {
        if(event.value === "All"){
            setSearchedCharacter([])
            setAliveCharacter([])
            setMaleCharacter([])

        }
        if(event.value === "Alive"){
            setSearchedCharacter([])
            setMaleCharacter([])
            setAliveCharacter(alive)
        }
        if(event.value === "Male"){
            setSearchedCharacter([])
            setAliveCharacter([])
            setMaleCharacter(male)
        }   
    }


    return ( 
        <>
            <div className='searchBox'>
                <div>
                    <img src='https://rickandmortyapi.com/api/character/avatar/19.jpeg' alt='rickandmorty'/>
                </div>

                <div>
                    <Select className='filterStyle' options={options} onChange={handleSelectCharacter}/>
                </div>

                <div>
                    <div className='inputBox'>
                        <input className='input' type='text' value={characterName} onChange={handleSearchCharacter} placeholder='Search ... |'/><FaMagnifyingGlass className='searchIcon'></FaMagnifyingGlass>
                    </div>
                    <div className='messageBox'><span>{message}</span></div>
                </div>
            </div>
        </>
     );
}
 
export default SearchBox;