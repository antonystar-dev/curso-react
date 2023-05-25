function Pessoa(props){
    return(
        <div>
            <hr/>
            <img src={props.foto} alt={props.nome} height="50px"/>
            <h2>Nome: {props.nome}</h2>
            <p>Idade: {props.idade}</p>
            <p>Profissão: {props.profissão}</p>

        </div>
    )
}
export default Pessoa