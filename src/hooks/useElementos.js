import { useEffect, useState } from "react";
import { carregaElementos } from "../serviços/carregaDados";

export default function useElementos(){
    const [titulo, setTitulo] = useState('');
    const [lista, setLista] = useState([]);

    useEffect(() => {
        const retorno = carregaElementos();
        retorno.lista.sort(
            (elemento1, elemento2) => elemento1.vitimas - elemento2.vitimas,
        );
        setTitulo(retorno.titulo);
        setLista(retorno.lista);
    }
    ,[]);
    return [titulo, lista];
}