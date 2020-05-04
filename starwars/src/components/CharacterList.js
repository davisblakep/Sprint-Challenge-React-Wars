import React, { useState, useEffect } from 'react';
import axios from 'axios';



import Character from './Character'





export default function CharacterList(){

    const [charData, setCharData] = useState([]);
    const [page, setPage] = useState(1)

    const charList = [];

    console.log("Character Data state", charData)
    
    useEffect(() =>{
        axios.get(`https://swapi.py4e.com/api/people/?page=${page}`)
        .then(response =>{
            setCharData(response.data.results)
            // if(page < 9){setPage(page +1)}
            
        })
        .catch(err =>{
            console.log(err)
        })
    }, [page])

    charList.push(charData);
    console.log("charList items", charList)

    return(
        <div>
           {charData.map(x =>{
               
               return(
                   
                   <Character {...x} />
                   
               )
           })}
        </div>
    )
} 