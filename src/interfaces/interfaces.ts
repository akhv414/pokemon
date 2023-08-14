export interface IPokemonList {
    count?: number,
    next?: string,
    previous?: null,
    results: Object[]
};

export interface IPokemonItem {
    id: number,
    name: string,
    value?: Object
    index?: number
    array?: Object[]
    url: string,
    stats?: Object[];
    stat?: Object;
    base_stat?: number;
};