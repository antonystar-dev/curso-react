//Esse setName e o use state permite eu pegar os dados que estão sendo alterados no form
import {useState} from 'react'
function Form(){
    function cadastrarUsuario(e){
        e.preventDefault()
        console.log(name)
        console.log('Cadastrou usuario')
    }
    const [name, setName]= useState()
    const [password, setPassword]= useState()
    return(
        <div>
        <h1>Formulario de cadastro</h1>
        <form onSubmit={cadastrarUsuario}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input
                 type="text"
                  id="name"
                   name="name"
                    placeholder="Digite o seu nome"
                //value={name} >>>>> aq to ja pegando os dados..... acho q posso usar no update, mas tenho q passar o nome no state
                 onChange={(e) => setName(e.target.value)}
                 />
            </div>
            <div>
            <label htmlFor="password">Senha:</label>
                <input
                 type="password"
                  id="password"
                   nome="password"
                    placeholder="Digite o sua senha"
                    onChange={(e) => setPassword(e.target.value)}
                    />
            </div>
            <div>
                <input type="submit" value="Cadastrar"/>
            </div>
        </form>

        </div>
    )
}
export default Form