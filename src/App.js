import {useState} from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Role from './components/Role';


function App() {

  const [characters, setCharacters] = useState([])

  const onAddChar = (character) => {
    setCharacters([...characters, character])
  }

  const races = [ 

    {
      race: "Blood Elf",
      color1: "#750303",
      color2: "#E9B5B5",
    },

    {
      race:  'Dark Iron Dwarf',
      color1: ' #132869',
      color2: '#A0AFDA',
    },
    {
      race: 'Dracthyr',
      color1: " #570A78" ,
      color2: "#BE98CE",
    },   
   
    {
      race:  'Draenei',
      color1: ' #132869',
      color2: '#A0AFDA',
    },
    {
      race:  'Dwarf',
      color1: ' #132869',
      color2: '#A0AFDA',
    },
    {
      race:  'Gnome',
      color1: ' #132869',
      color2: '#A0AFDA',
    },
    {
      race: "Goblin",
      color1: "#750303",
      color2: "#E9B5B5",
    },
    {
      race: "High Mountain Tauren",
      color1: "#750303",
      color2: "#E9B5B5",
    },
    {
      race:  'Human',
      color1: ' #132869',
      color2: '#A0AFDA',
    },
    
    {
      race:  'Kul Tiran',
      color1: ' #132869',
      color2: '#A0AFDA',
    },
    {
      race:  'Lightforged Draenei',
      color1: ' #132869',
      color2: '#A0AFDA',
    },
    {
      race: "Mag'har Orc",
      color1: "#750303",
      color2: "#E9B5B5",
    },
  
    {
      race:  'Mechagnome',
      color1: ' #132869',
      color2: '#A0AFDA',
    },
    {
      race: "Nightborne",
      color1: "#750303",
      color2: "#E9B5B5",
    },

    {
      race:  'Night Elf',
      color1: ' #132869',
      color2: '#A0AFDA',
    },
    {
      race: "Orc",
      color1: "#750303",
      color2: "#E9B5B5",
    },
    {
      race: 'Pandaren',
      color1: " #570A78" ,
      color2: "#BE98CE",
    }, 
    {
      race: "Tauren",
      color1: "#750303",
      color2: "#E9B5B5",
    },
    {
      race: "Troll",
      color1: "#750303",
      color2: "#E9B5B5",
    },
           
    {
      race: "Undead",
      color1: "#750303",
      color2: "#E9B5B5",
    },
    
    {
      race:  'Void Elf',
      color1: ' #132869',
      color2: '#A0AFDA',
    },
    {
      race: "Vulpera",
      color1: "#750303",
      color2: "#E9B5B5",
    },
    {
      race:  'Worgen',
      color1: ' #132869',
      color2: '#A0AFDA',
    },
    
    {
      race: "Zandalari Troll",
      color1: "#750303",
      color2: "#E9B5B5",
    },
]


const roles = [ 
  {
    name: "Death Knight",
    color1: "#C41E3A",
    color2: "#d98593",
  },
  {
    name:'Demon Hunter',
    color1: '#A330C9',
    color2: '#d8abe7'
  },
  {
    name:'Druid',
    color1: '#FF7C0A',
    color2: '#e8ad79'
  },
  {
    name:'Evoker',
    color1: '	#33937F',
    color2: '#91b3ac'
  },
  {
    name:'Hunter',
    color1: '	#AAD372',
    color2: '#c1d6a3'
  },
  {
    name:'Mage',
    color1: '#3FC7EB',
    color2: '#b2e4f2'
  },
  {
    name:'Monk',
    color1: '#00FF98',
    color2: '#a8e6cd'
  },
  {
    name:'Paladin',
    color1: '#F48CBA',
    color2: '#fcd0e4'
  },
  {
    name:'Priest',
    color1: '#FFFF89',
    color2: '#FFFFFF'
  },
  {
    name:'Rogue',
    color1: '#FFF468',
    color2: '#e0ddb1'
  },
  {
    name:'Shaman',
    color1: '#0070DD',
    color2: '#87a6c5'
  },
  {
    name:'Warlock',
    color1: '#8788EE',
    color2: '#c9caeb'
  },
  {
    name:'Warrior',
    color1: '#C69B6D',
    color2: '#d3c2af'
  }

]


  return (
    <div className="App">
      <Banner/>
      <h1 className="main-title">World of Warcraft: organizational chart</h1>
      <Form  racesList={races.map(race=>race.race)} rolesList={roles.map(role=>role.name)} addedChar={character => onAddChar(character)}/>
      {roles.map(role => <Role 
        key={role.name} 
        typeRole={role.name} 
        color1={role.color1} 
        color2={role.color2}
        characters={characters.filter(character => character.role == role.name)}
        />)}

   
    </div>
  );
}

export default App;
