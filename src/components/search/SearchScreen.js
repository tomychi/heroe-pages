import { useNavigate, useLocation } from "react-router-dom";
import queryString from "query-string";
import { useForm } from "../../hooks/useForm";
import { getHeroByName } from "../../selectors/getHeroesByName";
import { HeroCard } from "../hero/HeroCard";
import { useMemo } from "react";


export const SearchScreen = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { q = ''} = queryString.parse(location.search); //parse separa

    const [formValues, handleInputChange] = useForm({
        searchText: q, // el inicio del value va a ser q (query)
    });

    const { searchText } = formValues;

    // el retorno es lo q se memoriza 
    const heroesFileted =  useMemo(() => getHeroByName(q), [q]);

    const handleSearch = (e) => { 
        e.preventDefault();
        navigate(`?q=${searchText}`)
    }

    return (
        <>
            <h1>Busquedas</h1>
            <hr />
            <div className="row"> 
                <div className="col-5"> 
                    <h4>Buscar</h4>
                    <hr />

                    <form
                        onSubmit={handleSearch}
                    >
                        <input
                            type="text"
                            placeholder="Buscar un Heroe"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={ searchText }
                            onChange={ handleInputChange }
                        />
                        <button
                            className="btn btn-outline-primary  mt-2"
                            type="submit"
                        >
                            Buscar...
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Resultado</h4>
                    <hr />
                    {
                        (q === '')
                            ? <div className="alert alert-info" >Buscar un Heroe</div>
                            : (heroesFileted.length === 0) 
                                && <div className="alert alert-danger" >No hay resultados: {q}</div>
                    }
                    {
                        heroesFileted.map(heroe => (
                            <HeroCard 
                                key={heroe.id}
                                {...heroe} // desestructuro para mandarle otdos los props
                            />
                        ))
                    }

                </div>
            </div>
        </>
    )
}
