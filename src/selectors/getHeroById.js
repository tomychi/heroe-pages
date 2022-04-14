import { heroes } from "../data/heroes"

export const getHeroById = (id = '') => {
    return (
        // manejar el error
        heroes.find(heroe => heroe.id === id)
    )
}
