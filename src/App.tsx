import useSWR from 'swr';
import CardList from "./componets/CardList/CardList";
import {useEffect, useState} from 'react';
import fetcher from './services/serviceAPI';
import { HomePage } from './pages';

const listURL: string = 'https://pokeapi.co/api/v2/pokemon/';

function App() {
  const [ loaded, setLoaded ] = useState(false);
  const [ offset, setOffset ] = useState(0)
  const  { data, isLoading } = useSWR(`${listURL}?offset=${offset}&limit=20`, fetcher);  
  console.log('isLoading ',isLoading);
  console.log('loaded',loaded);

  useEffect(() => {
    setLoaded(!loaded)
  }, [isLoading])
  
  return (
    <div className="App">
      {/* {isLoading ? null : <CardList results={data.results}/>} */}
      <HomePage />
    </div>
  );
}

export default App;
