import React from 'react';
import Elementos from './componentes/Elementos';
import Topo from './componentes/Topo';

export default function Home(){
    return(
        <>
            <Elementos topo = {Topo}/>
        </>
    );
}
