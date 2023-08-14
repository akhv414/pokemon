import CardList from "../../componets/CardList/CardList"
import useSWR from 'swr';
import {useEffect, useState} from 'react';
import fetcher from "../../services/serviceAPI";

const listURL: string = 'https://pokeapi.co/api/v2/pokemon/';

export const HomePage: React.FC = () => {
    const [ loaded, setLoaded ] = useState(false);
    const [ offset, setOffset ] = useState(0)
    const  { data, isLoading } = useSWR(`${listURL}?offset=${offset}&limit=20`, fetcher);
    
    useEffect(() => {
        setLoaded(!loaded)
      }, [isLoading])
    
    return (
        <div>
            Test task
            {isLoading ? null : <CardList results={data.results}/>}
            {offset === 0 ? null : <button onClick={() => setOffset(offset - 20)}>Prev</button>}
            {offset >= data && data.count ? null : <button onClick={() => setOffset(offset + 20)}>Next</button>}
        </div>
    )
}