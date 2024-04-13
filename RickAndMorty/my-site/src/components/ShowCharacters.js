import React from 'react';
import {Link} from 'react-router-dom'

const ShowCharacters = ({info, setTransferPost, searchedCharacter, aliveCharacter, maleCharacter}) => {

    return ( 
        
        <>
            {/* Show Character Or Searched Character */}
            {   
            searchedCharacter.length > 0 ? 
            searchedCharacter.map(post => (
                <div key={post.id} className='postBox'>
                
                    <div className='infoBox'>
                        <div>
                            <img src={post.image} alt={post.name}/>
                        </div>    
                        <div className='textBox'>
                            <h2>Character Name :</h2>
                            <Link to={post.name} onClick={()=>setTransferPost(post)}><h3>{post.name}</h3></Link>
                        </div>
                    </div>
                </div>    
                )) 
                
                :
                
                info.results.map(post => (
                    <div key={post.id} className={aliveCharacter.length > 0 || maleCharacter.length > 0 ? 'noneDisplay' : 'postBox'}>
                    
                        <div className='infoBox'>
                            <div>
                                <img src={post.image} alt={post.name}/>
                            </div>    
                            <div className='textBox'>
                                <h2>Character Name :</h2>
                                <Link to={post.name} onClick={()=>setTransferPost(post)}><h3>{post.name}</h3></Link>
                            </div>
                        </div>
                    </div>
                ))
            } 
            
            
            {/* Show Alive Character */}
            {
                
                aliveCharacter.length > 0  &&

                aliveCharacter.map(post => (
                    <div key={post.id} className='postBox'>
                    
                        <div className='infoBox'>
                            <div>
                                <img src={post.image} alt={post.name}/>
                            </div>    
                            <div className='textBox'>
                                <h2>Character Name :</h2>
                                <Link to={post.name} onClick={()=>setTransferPost(post)}><h3>{post.name}</h3></Link>
                            </div>
                        </div>
                    </div>    
                    )) 

            }


            {/* Show Male Character */}
            {
                maleCharacter.length > 0  &&

                maleCharacter.map(post => (
                    <div key={post.id} className='postBox'>
                    
                        <div className='infoBox'>
                            <div>
                                <img src={post.image} alt={post.name}/>
                            </div>    
                            <div className='textBox'>
                                <h2>Character Name :</h2>
                                <Link to={post.name} onClick={()=>setTransferPost(post)}><h3>{post.name}</h3></Link>
                            </div>
                        </div>
                    </div>    
                    )) 

            }
            
           
        </>
     );
}
 
export default ShowCharacters;