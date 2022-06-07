import React from 'react';
import {Carbig, CarbigImg, CarbigH4, Carbigdiv} from './style';

function CardGrande(props) {
    return (
        <Carbig>
            <CarbigImg src={ props.imagem } />
            <div>
                <CarbigH4>{ props.nome }</CarbigH4>
                <Carbigdiv>{ props.descricao }</Carbigdiv>
            </div>
        </Carbig>
    )
}

export default CardGrande;