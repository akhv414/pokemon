import useSWR from 'swr';
import { IPokemonItem } from "../../interfaces/interfaces";
import fetcher from "../../services/serviceAPI";
import { styled } from 'styled-components';

const CardLi: React.ElementType = styled.li`
        display: flex;
        width: 250px;
        border-radius: 15px;
        border: solid 1px;
        height: 150px;
        justify-content: space-between;
        gap: 5px;
        background: papayawhip;
        margin-bottom: 15px;
    `;

    const CardContent: React.ElementType = styled.div`
        display: flex;
        flex-grow: 2;
        flex-direction: column;
    `;

    const CardImage: React.ElementType = styled.img`
        width: 96px;
        height: 96px;
        max-height: 96px;
    `

    const CardName: React.ElementType = styled.h2`
        margin: 0;
        margin-left: auto;
        margin-right: auto;
        font-size: 16px;
    `

    const CardTitle: React.ElementType = styled.div`
        flex-direction: column;
        margin-left: 5px;
    `

const CardItem: React.ElementType = (pokemon: IPokemonItem) => {
    const { url } = pokemon;
    const { data } = useSWR(url, fetcher);  

    //console.log(data.stats)

    return (
        <CardLi key={url}>
            <CardTitle>
                <CardImage src={`${data && data.sprites.front_default}`} alt={`${data && data.sprites.front_default}`} />
                <CardName>{data && data.name}</CardName>
            </CardTitle>
            <CardContent>
                {data && data.stats.map((el: any) => {
                    return (
                       <div>
                            <span>{ el.stat.name}: {el.base_stat}</span>                        
                       </div>
                    )
                })}
            </CardContent>            
        </CardLi>        
    );
};

export default CardItem;