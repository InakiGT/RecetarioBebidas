import React, {useContext, useState} from 'react';
import {CategoriasContext} from '../context/CategoriasContext';//Extraemos la funcion que la que creamos el context desde Categoriascontext(createContext)
import {RecetasContext} from '../context/RecetasContext';

const Formulario = () => {

    const {categorias} = useContext(CategoriasContext);//Use Context toma un context ya creado createContext
    const {buscarRecetas, guardarConsultar} = useContext(RecetasContext);

    const [busqueda, guardarBusqueda] = useState({
        nombre: '',
        categoria: ''
    });

    //función para leer los contenido
    const obtenerDatos = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value 
        })
    }

    return ( 
        <form
            className="col-12"
            onSubmit={ e => {
                e.preventDefault();
                buscarRecetas(busqueda);
                guardarConsultar(true);
            }}
        >
            <fieldset className="text-center">
                <legend>Busca Bebidas por Categoría o Ingrediente</legend>
            </fieldset>
            <div className="row mt-4">
                <div className="col-md-4">
                    <input 
                        className="form-control"
                        type="text"
                        placeholder="Buscar por Ingrediente"
                        name="nombre"
                        onChange={obtenerDatos}
                    />
                    
                </div>
                <div className="col-md-4">
                    <select
                        className="form-control"
                        name="categoria"
                        onChange={obtenerDatos}
                    >
                        <option className="col-md-4">--Seleccionar categoría--</option>
                        {categorias.map(categoria => (
                            <option
                                key={categoria.strCategory}
                                value={categoria.strCategory}
                            >{categoria.strCategory}</option>
                        ))}
                    </select>
                </div>
                <div className="col-md-4">
                    <input 
                        className="btn btn-block btn-primary"
                        value="Buscar Bebidas"
                        type="submit"
                    />
                </div>
            </div>
        </form>
     );
}
 
export default Formulario;