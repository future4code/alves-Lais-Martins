function Form1 ( ) {
    function etapaUm (event) {
        event.preventDefaulf()
        console.log('Foi pro Banco de dados!')
    }
    return (
        <div>
            <h1> <strong> Etapa 1 - Dados Gerais </strong> </h1>
            <form onSubmit={etapaUm}>
                <div>
                    <p>1- Qual o seu nome?</p>
                    <input type= "text" placeholder= "Digite aqui"/>
                </div>
                <br/>
                <div>
                <p>2- Qual a sua idade?</p>
                    <input type= "text" placeholder="Digite aqui"/>
                </div>
                <br/>
                <div>
                <p>3- Qual seu e-mail?</p>
                    <input type= "text" placeholder="Digite aqui"/>
                </div>
            </form>
        </div>
    )
}

export default Form1