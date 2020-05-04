import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';

import Character from './Character'

export default function CharacterList(props){

    const [charData, setCharData] = useState([]);
    let pageNumber = props.page;

    useEffect(() =>{
        axios.get(`https://swapi.py4e.com/api/people/?page=${pageNumber}`)
        .then(response =>{
            setCharData(response.data.results)
        })
        .catch(err =>{
            console.log(err)
        })
    }, [pageNumber])

    return(
        <div>
            <Grid
                justify="space-around"
                alignItems="center"
                container spacing={2}
              >
           {charData.map(x =>{
               return(
                <Grid item xs>
                   <Character {...x} />
                   </Grid> 
           )})}
           </Grid>
        </div>
    )} 