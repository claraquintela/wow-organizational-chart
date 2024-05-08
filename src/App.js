import {useState} from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Role from './components/Role';


function App() {

  const [characters, setCharacters] = useState([])

  const onAddChar = (character) => {
    console.log(character);
    setCharacters([...characters, character])
  }

  return (
    <div className="App">
      <Banner/>
      <h1 className="main-title">World of Warcraft: organizational chart</h1>
      <Form addedChar={character => onAddChar(character)}/>
      <Role typeRole='Death Knight'/>
      <Role typeRole='Demon Hunter'/>
      <Role typeRole='Druid'/>
      <Role typeRole='Evoker'/>
      <Role typeRole='Hunter'/>
      <Role typeRole='Mage'/>
      <Role typeRole='Monk'/>
      <Role typeRole='Paladin'/>
      <Role typeRole='Priest'/>
      <Role typeRole='Rogue'/>
      <Role typeRole='Shaman'/>
      <Role typeRole='Warlock'/>
      <Role typeRole='Warrior'/>
   
    </div>
  );
}

export default App;
