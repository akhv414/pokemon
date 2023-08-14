import useSWR from 'swr';
import {useState} from 'react';
import fetcher from '../../services/serviceAPI';
import CardItem from '../CardItem/CardItem';
import { styled } from 'styled-components';
import { IPokemonItem, IPokemonList } from '../../interfaces/interfaces';

const listURL: string = 'https://pokeapi.co/api/v2/pokemon/';
const List = styled.ul`
    display: flex;
    justify-content: space-between;
    margin: 5 auto;
    max-width: 1200px;
    gap: 5px;
    flex-wrap: wrap;
`;

const CardList: React.FC<IPokemonList> = ({ results }) => {
    
    const elements = results.map((el: any) => {
        return (
            <CardItem key={el.url} {...el} />
        )
    });
    
    //Пагинация по странично, решил сделать на кнопках
    // const pages: (count: number) => JSX.Element[] = () => {
    //     let totalPages = 0;
    //     let arrPages = [];
    //     if(!isLoading) totalPages = Math.ceil(data.count / 20);
    //     for(let i = 1; i <= totalPages; i++){
    //         arrPages.push(i)
    //     }
    //     return arrPages.map((el, index) => {
    //         return (
    //             <button onClick={() => setOffset(index * 20)}>{el}</button>
    //         )
    //     });
    // }

    return (
        <List>
            {elements}
        </List>
    );
};

export default CardList;