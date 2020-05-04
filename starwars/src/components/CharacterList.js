import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';



import Character from './Character'





export default function CharacterList(props){

    const [charData, setCharData] = useState([]);
    // const [page, setPage] = useState(1)

    const charList = [];

    console.log("Character Data state", charData)
    
    useEffect(() =>{
        axios.get(`https://swapi.py4e.com/api/people/?page=${props.page}`)
        .then(response =>{
            setCharData(response.data.results)
            // if(page < 9){setPage(page +1)}
            
        })
        .catch(err =>{
            console.log(err)
        })
    }, [props.page])

    charList.push(charData);
    console.log("charList items", charList)

    return(
        <div>
            <Grid
                container
                direction="row"
                justify="space-around"
                alignItems="center"
                container spacing={2}
              >
           {charData.map(x =>{
               
               return(
                <Grid item xs>
                   <Character {...x} />
                   </Grid>
               )
           })}
           </Grid>
        </div>
    )
} 