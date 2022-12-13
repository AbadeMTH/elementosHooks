import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Texto from '../../../componentes/Texto';
import useElementos from '../../../hooks/useElementos';
import Elemento from './Elemento';

export default function Elementos({topo: Topo}){
    const [titulo, lista] = useElementos();

    const RenderTopo = () => {
        return(
            <>
                <Topo/>
                <Texto style={estilos.titulo}>{titulo}</Texto>
            </>
        );
    }
    return(
        <FlatList
            data={lista}
            renderItem={({item}) => <Elemento {...item}/>}
            keyExtractor={({imagem}) => imagem}
            ListHeaderComponent={RenderTopo}
        />
    );
}

const estilos = StyleSheet.create({
    titulo: {
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
        marginHorizontal: 16,
        marginTop: 16,
    },
});