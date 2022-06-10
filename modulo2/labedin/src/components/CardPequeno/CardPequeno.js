import React from 'react';
import {Carmini, CarminiImg, CarminiP} from './style';

function CardPequeno(props) {
    return (
        <Carmini>
            <CarminiImg src={ props.imagem } />
            <div>
                <CarminiP><strong>{ props.nome }</strong></CarminiP>
                <CarminiP>{ props.descricao }</CarminiP>
            </div>
            </Carmini>
    )
}

export default CardPequeno;