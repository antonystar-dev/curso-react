function Pessoa({nome, idade, profissão, foto}){
    return(
        <div>
            <hr/>
            <img src={foto} alt={nome} height="50px"/>
            <h2>Nome: {nome}</h2>
            <p>Idade: {idade}</p>
            <p>Profissão: {profissão}</p>

        </div>
    )
}
export default Pessoa
//Recodificando o props para melhor organização