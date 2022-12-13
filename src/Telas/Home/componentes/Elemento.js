import React, { useMemo, useReducer } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import Texto from '../../../componentes/Texto';

export default function Elemento({ imagem, nome, legendaminimizada, legenda, vitimas }) {

    const vitimasEmNumeros = (vitimas) => {
        return `${vitimas} vítimas`;
    };


    const vitimasTexto = useMemo(
        () => vitimasEmNumeros(vitimas),
        [vitimas]
    );

    const [cartaoSelecionado, inverterSelecionado] = useReducer(
        (cartaoSelecionado) => !cartaoSelecionado,
        false,
    );

    const estilos = estilosFuncao(cartaoSelecionado);

    const textoLegenda = cartaoSelecionado ? legenda : legendaminimizada;

    return (
        <TouchableOpacity style={estilos.cartao} onPress={inverterSelecionado}>
            <Image source={imagem} style={estilos.imagem} />
            <View style={estilos.detalhes}>
                <View>
                    <Texto style={estilos.nome}>{nome}</Texto>
                    <Texto style={estilos.legenda}>{textoLegenda}</Texto>
                </View>
                <Texto style={estilos.vitimas}>{vitimasTexto}</Texto>
            </View>
        </TouchableOpacity>
    );
}

const estilosFuncao = (cartaoSelecionado) => StyleSheet.create({
    cartao: {
        marginVertical: 8,
        marginHorizontal: 16,
        padding: 16,
        elevation: 4,
        backgroundColor: '#E8DADA',
        borderRadius: 6,
        flexDirection: 'row',
    },
    imagem: {
        width: cartaoSelecionado ? 72 : 48,
        height: cartaoSelecionado ? 72 : 48,
        marginRight: 16,
    },
    detalhes: {
        justifyContent: 'space-between',
        flex: 1,
        flexDirection: cartaoSelecionado? 'column' : 'row',
        alignItems: cartaoSelecionado? 'baseline' : 'center',
    },
    nome: {
        fontSize: cartaoSelecionado ? 24 : 16,
        lineHeight: 32,
        fontWeight: 'bold',
    },
    legenda: {
        fontSize: 12,
        lineHeight: 16,
        marginVertical: cartaoSelecionado? 16 : 0,
    },
    vitimas: {
        fontWeight: 'bold',
    },
});