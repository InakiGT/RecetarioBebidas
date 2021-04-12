import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

//Crear el context
export const CategoriasContext = createContext();

//Provider es donde se encuentran las funciones y state
const CategoriasProvider = (props) => {
    
    //Crear el state del context
    const [categorias, guardarCategorias] = useState([]);

    //Ejecutar el llamado a la api
    useEffect(() => {
        const obtenerCategorias = async () => {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

            const categoriasD = await axios.get(url);

            guardarCategorias(categoriasD.data.drinks)
        }
        obtenerCategorias();
    }, []);

    return(
        <CategoriasContext.Provider
            value={{
                categorias //Los valores que este context envirá a los componentes
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    );
}

export default CategoriasProvider;