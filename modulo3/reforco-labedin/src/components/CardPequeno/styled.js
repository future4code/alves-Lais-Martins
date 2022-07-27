import styled from 'styled-components'

export const LittleCardContainer = styled.div`
    display: flex;
    align-items: center;
    border: 5px solid white;
    
    border-radius: 15px;
    padding: 10px 20px;
    margin-bottom: 10px;
    height: 50px;
    width: 400px;
    background-color: white;
    :hover,
button:focus {
    background: rgb(80,92,105);
background: linear-gradient(90deg, rgba(80,92,105,1) 0%, rgba(130,156,186,1) 81%);
        color: white;
  border: 2px white;
    border-style: dashed;
   -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
`

export const LittleCardImg = styled.img`
    width: 30px;
    margin-right: 5px;
    border-radius: 50%;
`

export const LittleCardH4 = styled.h4`
color: black;
    margin-right: 5px;
    
`

export const Descricao =styled.p`
font-size: small;    
 color: black; 
 :hover,
button:focus {
   color: white;
`