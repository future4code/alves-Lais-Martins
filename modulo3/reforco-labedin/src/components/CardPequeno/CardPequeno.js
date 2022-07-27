import React from 'react';
import * as P from './styled'

function CardPequeno(props) {
    return (
        <P.LittleCardContainer>
            <P.LittleCardImg src={ props.imagem } />
            {/* <P.LittleCardInicio> */}
                <P.LittleCardH4>{ props.nome }</P.LittleCardH4>
                <P.Descricao>{ props.descricao }</P.Descricao>
            {/* </P.LittleCardInicio> */}
        </P.LittleCardContainer>
    )
}

export default CardPequeno;