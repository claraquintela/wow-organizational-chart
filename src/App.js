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

  const roles = [ 

    {
      role: "Blood Elf",
      color1: "#750303",
      color2: "#E9B5B5",
    },

    {
      role:  'Dark Iron Dwarf',
      color1: ' #132869',
      color2: '#A0AFDA',
    },
    {
      role: 'Dracthyr',
      color1: " #570A78" ,
      color2: "#BE98CE",
    },   
   
    {
      role:  'Draenei',
      color1: ' #132869',
      color2: '#A0AFDA',
    },
    {
      role:  'Dwarf',
      color1: ' #132869',
      color2: '#A0AFDA',
    },
    {
      role:  'Gnome',
      color1: ' #132869',
      color2: '#A0AFDA',
    },
    {
      role: "Goblin",
      color1: "#750303",
      color2: "#E9B5B5",
    },
    {
      role: "High Mountain Tauren",
      color1: "#750303",
      color2: "#E9B5B5",
    },
    {
      role:  'Human',
      color1: ' #132869',
      color2: '#A0AFDA',
    },
    
    {
      role:  'Kul Tiran',
      color1: ' #132869',
      color2: '#A0AFDA',
    },
    {
      role:  'Lightforged Draenei',
      color1: ' #132869',
      color2: '#A0AFDA',
    },
    {
      role: "Mag\'har Orc",
      color1: "#750303",
      color2: "#E9B5B5",
    },
  
    {
      role:  'Mechagnome',
      color1: ' #132869',
      color2: '#A0AFDA',
    },
    {
      role: "Nightborne",
      color1: "#750303",
      color2: "#E9B5B5",
    },

    {
      role:  'Night Elf',
      color1: ' #132869',
      color2: '#A0AFDA',
    },
    {
      role: "Orc",
      color1: "#750303",
      color2: "#E9B5B5",
    },
    {
      role: 'Pandaren',
      color1: " #570A78" ,
      color2: "#BE98CE",
    }, 
    {
      role: "Tauren",
      color1: "#750303",
      color2: "#E9B5B5",
    },
    {
      role: "Troll",
      color1: "#750303",
      color2: "#E9B5B5",
    },
           
    {
      role: "Undead",
      color1: "#750303",
      color2: "#E9B5B5",
    },
    
    {
      role:  'Void Elf',
      color1: ' #132869',
      color2: '#A0AFDA',
    },
    {
      role: "Vulpera",
      color1: "#750303",
      color2: "#E9B5B5",
    },
    {
      role:  'Worgen',
      color1: ' #132869',
      color2: '#A0AFDA',
    },
    
    {
      role: "Zandalari Troll",
      color1: "#750303",
      color2: "#E9B5B5",
    },
]


  return (
    <div className="App">
      <Banner/>
      <h1 className="main-title">World of Warcraft: organizational chart</h1>
      <Form  rolesList={roles.map(role=>role.role)} addedChar={character => onAddChar(character)}/>
      {roles.map(role => <Role key={role.role} typeRole={role.role} color1={role.color1} color2={role.color2}/>)}

   
    </div>
  );
}

export default App;
