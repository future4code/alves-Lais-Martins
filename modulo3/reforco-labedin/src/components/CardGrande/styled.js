import styled from 'styled-components'

export const BigcardContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 2px black;
    border-style: doble;
    border-radius: 15px;
    padding: 20px 20px;
    margin-bottom: 10px;
    height: 150px;
    width: 400px;
    background-color: white;
    color: black;
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

export const BigcardImg = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`

export const BigcardH4 = styled.h4`
    margin-bottom: 15px;
    margin-left: 25px;
    font-size: large;
`

export const BigcardInicio =styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`
export const Linha1 = styled.div`
display: flex;
`