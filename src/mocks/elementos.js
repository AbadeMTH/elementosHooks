import conhecimento from '../../assets/elementos/conhecimento.png';
import energia from '../../assets/elementos/energia.png';
import medo from '../../assets/elementos/medo.png';
import morte from '../../assets/elementos/morte.png';
import sangue from '../../assets/elementos/sangue.png';

const gerarNumeroAleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) * min);
}

const elementos = {
    titulo: 'Elementos',
    lista: [
        {
            imagem: conhecimento,
            nome: 'Conhecimento',
            legendaminimizada: 'Clique para exibir',
            legenda: 'O Conhecimento é a entidade da consciência. Descobrir, decifrar, entender, aprender. Ter a própria percepção do Outro Lado e suas entidades agrada o elemento de Conhecimento.',
            vitimas: gerarNumeroAleatorio(1, 9999),
        },
        {
            imagem: energia,
            nome: 'Energia',
            legendaminimizada: 'Clique para exibir',
            legenda: 'Energia é a entidade do caos. Tudo que não pode ser controlado, o intangível, a anarquia. A mudança constante, o frio e o calor. Tudo que envolve o inesperado e a transformação agrada a entidade de Energia.',
            vitimas: gerarNumeroAleatorio(1, 9999),
        },
        {
            imagem: medo,
            nome: 'Medo',
            legendaminimizada: 'Clique para exibir',
            legenda: 'O Medo é o elemento mais misterioso do Outro Lado e não pode ser descrito como as outras entidades. Todas as manifestações do Outro Lado dentro da Realidade são invocadas através do Medo.',
            vitimas: gerarNumeroAleatorio(1, 9999),
        },
        {
            imagem: morte,
            nome: 'Morte',
            legendaminimizada: 'Clique para exibir',
            legenda: 'A Morte é a entidade da espiral do tempo. Ela busca os momentos vivenciados, distorcendo a percepção egóica da existência de cada indivíduo para seu agrado.',
            vitimas: gerarNumeroAleatorio(1, 9999),
        },
        {
            imagem: sangue,
            nome: 'Sangue',
            legendaminimizada: 'Clique para exibir',
            legenda: 'A entidade dos sentimentos: fome, dor, amor, ódio, paixão, obsessão. Sangue busca a intensidade e tudo que envolve sentir uma emoção extrema agrada essa entidade.',
            vitimas: gerarNumeroAleatorio(1, 9999),
        },
    ]
}

export default elementos;