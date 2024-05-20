import {useState} from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Role from './components/Role';
import { v4 as uuidv4 } from 'uuid';


function App() {

 const listChars = [
    {
      id: uuidv4(),
      favorite:false,
      character:'Varian Wrynn',
      race:'Human',
      role:'Warrior',
      faction:'Alliance',
      img:'/imagens/Varian_Wei.webp'
    },
    {
      id: uuidv4(),
      favorite:false,
      character:'Garrosh',
      race:'Orc',
      role:'Warrior',
      faction:'Horde',
      img:'/imagens/Garrosh.webp'
    },
    {
      id: uuidv4(),
      favorite:false,
      character:'Tyrande',
      race:'Night Elf',
      role:'Druid',
      faction:'Alliance',
      img:'/imagens/tyrande.webp'
    },
    {
      id: uuidv4(),
      favorite:false,
      character:'Sylvanas',
      race:'Undead',
      role:'Hunter',
      faction:'Horde',
      img:'/imagens/sylvanas.jpeg'
    },
    {
      id: uuidv4(),
      favorite:false,
      character:'Genn Graymane',
      race:'Worgen',
      role:'Warrior',
      faction:'Alliance',
      img:'/imagens/genn-greymane.jpg'
    },
    {
      id: uuidv4(),
      favorite:false,
      character:'Baine Bloodhoof',
      race:'Tauren',
      role:'Shaman',
      faction:'Horde',
      img:'/imagens/baine.jpg'
    },
    {
      id: uuidv4(),
      favorite:false,
      character:'Malfurion Stormrage',
      race:'Night Elf',
      role:'Druid',
      faction:'Alliance',
      img:'/imagens/malfurion.webp'
    },
    {
      id: uuidv4(),
      favorite:false,
      character:'Andwin',
      race:'Human',
      role:'Priest',
      faction:'Alliance',
      img:'/imagens/andwin.webp'
    },
    {
      id: uuidv4(),
      favorite:false,
      character:"Vol'jin",
      race:'Troll',
      role:'Shaman',
      faction:'Horde',
      img:'/imagens/voljin.jpg'
    },
    {
      id: uuidv4(),
      favorite:false,
      character:'Muradin Bronzebeard',
      race:'Dwarf',
      role:'Warrior',
      faction:'Alliance',
      img:'/imagens/muradin.webp'
    }
    ,
    {
      id: uuidv4(),
      favorite:false,
      character:'Aysa Cloudsinger',
      race:'Pandaren',
      role:'Monk',
      faction:'Alliance',
      img:'/imagens/aysa.webp'
    },
    {
      id: uuidv4(),
      favorite:false,
      character:"Lothemar Theron",
      race:'Blood Elf',
      role:'Hunter',
      faction:'Horde',
      img:'/imagens/lothemar.webp'
    }
  ]

  const [characters, setCharacters] = useState(listChars)

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

  const [roles,setRoles] = useState([ 
    {
      id: uuidv4(),
      name: "Death Knight",
      color1: "#C41E3A",
      color2: "#d98593",
    },
    {
      id: uuidv4(),
      name:'Demon Hunter',
      color1: '#A330C9',
      color2: '#d8abe7'
    },
    {
      id: uuidv4(),
      name:'Druid',
      color1: '#FF7C0A',
      color2: '#e8ad79'
    },
    {
      id: uuidv4(),
      name:'Evoker',
      color1: '	#33937F',
      color2: '#91b3ac'
    },
    {
      id: uuidv4(),
      name:'Hunter',
      color1: '	#AAD372',
      color2: '#c1d6a3'
    },
    {
      id: uuidv4(),
      name:'Mage',
      color1: '#3FC7EB',
      color2: '#b2e4f2'
    },
    {
      id: uuidv4(),
      name:'Monk',
      color1: '#00FF98',
      color2: '#a8e6cd'
    },
    {
      id: uuidv4(),
      name:'Paladin',
      color1: '#F48CBA',
      color2: '#fcd0e4'
    },
    {
      id: uuidv4(),
      name:'Priest',
      color1: '#000000',
      color2: '#FFFFFF'
    },
    {
      id: uuidv4(),
      name:'Rogue',
      color1: '#FFF468',
      color2: '#e0ddb1'
    },
    {
      id: uuidv4(),
      name:'Shaman',
      color1: '#0070DD',
      color2: '#87a6c5'
    },
    {
      id: uuidv4(),
      name:'Warlock',
      color1: '#8788EE',
      color2: '#c9caeb'
    },
    {
      id: uuidv4(),
      name:'Warrior',
      color1: '#C69B6D',
      color2: '#d3c2af'
    }

  ])

  const factions = [
    { faction: 'Horde',
      color: '#C10808'
    },
    { faction: 'Alliance',
      color: '#0D3296'
    }
  ]


  function deleteChar(id){
    setCharacters(characters.filter(character => character.id !== id));
  }

  function pickFavorite(id) {
    console.log(id);
    
    setCharacters(characters.map(character => {
      console.log(character);
      if(character.id === id) character.favorite = !character.favorite;
      return character;
    }))
  }

  return (
    <div className="App">
      <Banner/>
      <h1 className="main-title">World of Warcraft: organizational chart</h1>
      <Form  
        racesList={races.map(race=>race.race)} 
        rolesList={roles.map(role=>role.name)} 
        factionsList={factions.map(faction=>faction.faction)} 
        addedChar={character => onAddChar(character)}/>

      {roles.map(role => <Role 
        key={role.id} 
        id={role.id}
        typeRole={role.name} 
        color1={role.color1} 
        color2={role.color2}
        factionColor={factions.map(faction=>faction.color)} 
        characters={characters.filter(character => character.role === role.name)}
        onDelete={deleteChar}
        onFavorite={pickFavorite} 
        />)}

   
    </div>
  );
}

export default App;
