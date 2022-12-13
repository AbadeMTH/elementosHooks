import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Texto from '../../../componentes/Texto';
import useTopo from '../../../hooks/useTopo';

export default function Topo(){
    const [imagem, tituloImagem, titulo, legenda] = useTopo();
    return(
        <View style={estilos.topo}>
            <View style={estilos.imagemTitulo}>
                <Image source={imagem} style={estilos.imagem}/>
                <Texto style={estilos.tituloImagem}>{tituloImagem}</Texto>
            </View>
            <Texto style={estilos.titulo}>{titulo}</Texto>
            <Texto style={estilos.legenda}>{legenda}</Texto>
        </View>
    );
}

const estilos = StyleSheet.create({
    topo: {
        padding: 16,
        backgroundColor: '#E8DADA',
    },
    imagemTitulo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom : 16,
    },
    imagem: {
        width: 72,
        height: 72,
    },
    tituloImagem: {
        fontSize: 22,
        lineHeight: 42,
        fontWeight: 'bold',
        textShadowColor:'#B22222',
        textShadowOffset:{width: 1, height: 0},
        textShadowRadius:20,
        flex: 1,
        marginLeft: 16,
        letterSpacing: 10,
    },
    titulo: {
        fontSize: 20,
        lineHeight: 46,
        fontWeight: 'bold',
    },
    legenda: {
        fontSize: 16,
        lineHeight: 22,
        color: '#A2A2A2',
    },
});