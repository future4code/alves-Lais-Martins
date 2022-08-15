import React from 'react';
import * as C from './styled'

function CardGrande(props) {
    return (
        <C.BigcardContainer>
            <C.Linha1>
            <C.BigcardImg src={ props.imagem } />
             <C.BigcardH4>{ props.nome }</C.BigcardH4>
             </C.Linha1>
                <C.BigcardInicio>
                <p>{ props.descricao }</p>
            </C.BigcardInicio>
            </C.BigcardContainer>
    )
}

export default CardGrande;