import React from 'react'
import CardGrande from './components/CardGrande/CardGrande'
import CardPequeno from './components/CardPequeno/CardPequeno'
import ImagemButton from './components/ImagemButton/ImagemButton'

import labenu from './imagens/labenu.jpg'
import git from './imagens/git.png'
import * as A from './styled'


export default function PaiDeTodos() {
  return (
    
    <A.App>
        
      <A.PageSectionContainer>
        <A.TextoH2>Dados pessoais</A.TextoH2>
        <CardGrande 
          imagem="https://avatars.githubusercontent.com/u/104601856?v=4" 
          nome="Laís Rodrigues Martins" 
          descricao="Olá, eu sou a Laís e estou em transição de carreira. Atualmente estudo no bootcamp da Labenu, aprendendo na prática como me tornar uma desenvolvedora FullStack."
        />
         
      </A.PageSectionContainer>

      <A.PageSectionContainer>
        <A.TextoH2> ➥ Entre em contato </A.TextoH2>
        
         
      </A.PageSectionContainer>
    
      <A.PageSectionContainer>
      <CardPequeno 
          imagem="https://cdn-icons.flaticon.com/png/512/3178/premium/3178158.png?token=exp=1658866506~hmac=7ef99aca77d812c86cbc23178f986d75" 
          nome="E-mail: " 
          descricao="navarandadalis@gmail.com"
        />
        
        
<CardPequeno 
          imagem="https://cdn-icons-png.flaticon.com/512/1239/1239525.png" 
          nome="Endereço: " 
          descricao="R. Minas Gerais, 179 - Piquete-SP Cep:12620-000"
        />
        </A.PageSectionContainer>

      <A.PageSectionContainer>
        <A.TextoH2>Experiências profissionais</A.TextoH2>
        <CardGrande 
          imagem="https://th.bing.com/th/id/R.a5c477784fd5946958e70fa59b81df14?rik=aPKaViULomIqIw&pid=ImgRaw&r=0" 
          nome="TIM S.A. " 
          descricao="Supervisora Administrativo e multiplicadora de backoffices com foco em esteira de vendas." 
        />
        
        <CardGrande 
          imagem="https://th.bing.com/th/id/R.bceb5848ca82f27fe601f0f1f14b68c3?rik=3nkhr1k0Oo5JNA&pid=ImgRaw&r=0" 
          nome="Grainn Service Ltda" 
          descricao="Auxiliar Administrativo Comercial." 
        />
      </A.PageSectionContainer>

      <A.PageSectionContainer>
        <A.TextoH2>Siga-me no Github</A.TextoH2>
        <a href={'https://www.labenu.com.br/'}><A.Git src={git}/></a> 
         
      </A.PageSectionContainer>
      <a href={'https://github.com/laisrm'}><A.Labenu src={labenu}/></a> 
    </A.App>
    

  );
}
