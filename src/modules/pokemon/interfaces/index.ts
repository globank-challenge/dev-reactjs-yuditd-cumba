export interface PokemonData {
    count: number,
    next: string | null ,
    previous: string | null,
    results: PokemonResult[]
}

export interface PokemonResult  {
    name: string,
    url: string
}
export interface SelectedContex {
    selected: PokemonCardData | null,
    setSelected: React.Dispatch<any>
}
export interface PokemonCardData {
    name: string,
    img: string,
    id: number,
    types: Type[],
    weight: number,
    sprites: string[],
    moves: string[],
}
interface Sprite {
    back_default: string 
    back_female: string
    back_shiny: string 
    back_shiny_female: string 
    front_default: string
    front_female: string 
    front_shiny: string
    front_shiny_female:string 
}
export interface Type {
    slot: number,
    type: {
        name: string | null,
        url: string | null
    }
}

export interface respPokemon {
    id: string, name: string, types: string, sprites: Sprite[], weight:string, moves?: string[]
}