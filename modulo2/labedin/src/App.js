import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem="https://media-exp1.licdn.com/dms/image/C4D03AQFQzyrbNd22bw/profile-displayphoto-shrink_200_200/0/1517277591582?e=1654732800&v=beta&t=FpFpSZ05ATR7DGTCIvYHnUVFbqYZDqUXjUwdh63ogwY"
          nome="Laís Rodrigues Martins"
          descricao="Oi, eu sou a Laís. Sou estudante da Labenu. Adoro pedir contextualização das explicações em aula, atraso plantão e estou treinando a Clarinha para canonização."
        />

        <ImagemButton
          imagem="https://i.pinimg.com/originals/09/0a/ea/090aea0be7fa8331086ce7023350ef0a.png"
          texto="Ver mais"
        />
      </div>

      <div>
        <CardPequeno
          imagem="https://img2.gratispng.com/20180324/kfe/kisspng-email-address-computer-icons-clip-art-gmail-5ab6f094686b57.2684939715219385804277.jpg"
          nome="E-mail:"

          descricao="navarandadalis@gmail.com"
        />
<br/>
        <CardPequeno
          imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfje34cT6spYGaixaofkFStR-QMHK6afE8aw&usqp=CAU"
          nome="Endereço:"
          descricao="Rua dos bobos, 0"
        />
      </div>

      <br /><br />
      <div >
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAqFBMVEX///8GO4jkDSziAADjABEAN4YANIUAL4PkACT3zM/pW2cAJH/j5u42VJQANoZTaqDqYGsfR44AKIE/W5ijrsjGzNzxo6lfdKXjABr4z9IALILkACjmOElZb6JTa6AAIH6ut86WosEAGnxIYptvga3V2eV5ibLwmaAZQ4wAEXrv8fX98PG6wdXlJjyDkbbvi5P63uD1u78ACHiRnb7oTlzscXvb3+n52dzot36RAAADF0lEQVR4nO3af1PaMBzH8XZAq4JFCljXjR/WFlER3XTb839mKzQJrY1oJXdzuffrL803yeVzcG2a4jgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMBW5yfNPJQHZ1f9Pa56Ra95Gk3700m0yOS4y3Qy7W+bRtpFrRb5iH4/r48PDnjdOmqmfVYafRl6e3RXRa/EC/L/Ai+ciGG9m23LxmyhWdTvn3IKf3Bwwu/fvjTUKif03T3iedFLdvIimbC76zTTLGrhyWrn9P9PGGu+pzNVtSFhZ1lb0yi2KqHbrV1Mlh27EgbTF0salz/hwxM+HzVN2Dac0E161SVF3q5mIOFjq91M60dp9PwmlHaLUk0/x+9K6K8rK7pNXKMJHee4mbvK4LGULeWahplqdN6V0O1WpnzyTSc0ZCAuD0G/Vnorofw2V3vblLBT3risQgsTut1s13kY2JhQFfIt6cy1MaGb3Mq+C69SsCah/yT7Vj9CexK6vqiUtqTGEj63aq5V8bhevH80mfBUjApXlVmWA3MJf13UtmUX56r6tV2rHt0bTOiPRC0YbgtZUfDX046xhJqd9/6ElZ33oQnj+VpcWYrNaVr8182urEk46olLS7E5lVtSZ2hPQnWHjx11nfEvrUood2nhWM2R3x1tSuh4qij2M5tuBhP+22vpJqF8ik6cdfHX5ljDYMLm98M7/TwfTiifeOOxaNwcTZlMaMqHE8pbhLz7b9vsSvjicWK7C7croYpTdErLTZYkrDzWF0/DliV0yseHxYmGbQlLx66ixbaEpSNS8SrKaML6kejuCfDurfNSMwnVDUNcZ4wm1Jx5V+74+8+8TSXMEjE6yYwn1Ly3eGNf2tZPdFBCZz3wwzD0l/KNsFU7by0SNkBCEiqfNqHm9zTtUkJN9Uw/ket7Qc6Lh7XSzBMl+T67dyNaZq8lPPUDU7+ncc7PXjrZ3fH+PNeKD6/MM0+jSU73KyZVUq+YnrYtUbS+rXUurNJomovS1SHZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAZ/YXZSJh4raAqqgAAAAASUVORK5CYII="
          nome="Tim Live"
          descricao="De 2014 a 2022 na Tim Live Fibra ótica, passando de Backoffice a Supervisora de célula Adm  e nunca deixei de ouvir coisas como: Olhe essa mensagem que está chegando no meu celular por favor, também é Tim! "
        />

        <CardGrande
          imagem="https://media-exp1.licdn.com/dms/image/C4D0BAQGfw7PsX5tR5g/company-logo_200_200/0/1519922100442?e=2147483647&v=beta&t=AKIhyrHQV4X-NmObRyIxNagDZxi8-REREYyUQYjfCA4"
          nome="Grainn Service Ltda"
          descricao="Entre 2012 e 2013, fui Auxiliar ADM Comercial em uma metalúrgica. 
            Curiosidade: A empresa é do Mauro Naganawa, pai do CEO da Labenu."
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;
