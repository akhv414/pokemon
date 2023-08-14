import useSWR from 'swr';
import {useState} from 'react';
import fetcher from '../../services/serviceAPI';
import CardItem from '../CardItem/CardItem';
import { styled } from 'styled-components';
import { IPokemonItem, IPokemonList } from '../../interfaces/interfaces';

const listURL: string = 'https://pokeapi.co/api/v2/pokemon/';
const loader: string = '...loading';
const List = styled.ul`
    display: flex;
    justify-content: space-between;
    margin: 5 auto;
    max-width: 1200px;
    gap: 5px;
    flex-wrap: wrap;
`;

// const pages: (totalPages: number, isLoading: boolean, count: number) => number[] = (totalPages = 0, isLoading = false) => {    let arrPages = [];
//     if(isLoading == false) totalPages = Math.ceil(count / 20);
//     for(let i = 1; i <= totalPages; i++){
//         arrPages.push(i)
//     }
//     return arrPages.map((el) => {
//         return (
//             <div> {el} </div>
//         )
//     });
// }

const CardList: React.FC<IPokemonList> = ({ results }) => {
    const [offset, setOffset] = useState(0);
    const  { data, error, isLoading } = useSWR(`${listURL}?offset=${offset}&limit=20`, fetcher);
    console.log(results)
    const elements = results.map((el: any) => {
        return (
            <CardItem key={el.url} {...el} />
        )
    });
    

    const pages: (count: number) => JSX.Element[] = () => {
        let totalPages = 0;
        let arrPages = [];
        if(!isLoading) totalPages = Math.ceil(data.count / 20);
        for(let i = 1; i <= totalPages; i++){
            arrPages.push(i)
        }
        return arrPages.map((el, index) => {
            return (
                <button onClick={() => setOffset(index * 20)}>{el}</button>
            )
        });
    }

    return (
        <>
            <List>
                {error ? 'Something going wrong. Check you internet connection' : null}
                {elements}
            </List>
            {/* {pages(data && data.count)} */}
        </>
    );
};

export default CardList;