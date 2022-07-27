import React from 'react';
import * as I from './styled'

function ImagemButton(props) {
    return (
    
        <I.ImageButtonContainer>
           
            <I.Image src={ props.imagem }/>
           
            <a href={'https://github.com/laisrm'}>Meu Github</a> 
        </I.ImageButtonContainer>

    )
}

export default ImagemButton;