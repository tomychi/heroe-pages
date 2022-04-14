import { useMemo } from "react"
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { getHeroById } from "../../selectors/getHeroById";


export const HeroScreen = () => {

    const {heroeId} = useParams();// recibe parametros del url
    const navigate = useNavigate();

    const hero = useMemo( () => getHeroById(heroeId), [heroeId]); // dependencia de heroeId  cambia solo si heroeId cambia cuando ese cambia

    const handleReturn = () => { 
        navigate(-1); // regresa al historial anterior (pagina anterior)
    }

    if (!hero) {
        return <Navigate to='/' /> // me saca, si no existe el heroe
    }

    const {
        id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;

    const imagePath = `/assets/heroes/${id}.jpg`;

    return (
        <div className='row mt-5'>
            <div className='col-4'>
                <img 
                    src={ imagePath }
                    alt={superhero}
                    className='img-thumbnail animate__animated animate__fadeInLeft'
                />
            </div>

            <div className='col-8'>
                <h2>{superhero}</h2>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'> <b>Alter ego: </b> { alter_ego }</li>
                    <li className='list-group-item'> <b>Publisher: </b> { publisher }</li>
                    <li className='list-group-item'> <b>First Appearance: </b> { first_appearance }</li>
                </ul>
                <h5 className='mt-3'>Characters:</h5>
                <p>{characters}</p>

                <button
                    className='btn btn-outline-info mt-3'
                    onClick={ handleReturn}
                >
                    Regresar
                </button>

            </div>

        </div>
    )
}
