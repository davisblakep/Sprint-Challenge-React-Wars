import React, { useState } from 'react';
import './App.css';


import CharacterList from "./components/CharacterList"
import Buttons from "./components/Buttons"

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [page, setPage] = useState(1)

  let pageUp = () => {
    if(page < 9){setPage(page +1)}
    else {setPage(page * 0 + 1)}
  }

  let pageDown = () => {
    if(page > 1){setPage(page -1)}
    else {setPage(page * 0 + 9)}
  }

  

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <div style={{margin: '2%'}}>
      <Buttons pageUp={pageUp} pageDown={pageDown}  />
      </div>
      <div style={{margin: '2%'}} >
     
        <CharacterList page={page} />
       
      </div>
      <div style={{margin: '2%'}}>
      <Buttons pageUp={pageUp} pageDown={pageDown}  />
      </div>
    </div>
  );
}

export default App;
