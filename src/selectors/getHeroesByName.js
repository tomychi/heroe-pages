import { heroes } from "../data/heroes";

export const getHeroByName = (name = '') => {


    if (name.length === 0) { 
        return [];
    }
    name = name.toLowerCase();
    return (
        heroes.filter(heroe => heroe.superhero.toLowerCase().includes(name.toLowerCase()))
    )
}
