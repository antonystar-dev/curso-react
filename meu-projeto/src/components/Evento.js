function Evento(){
    function meuEvento(){
        console.log('Ummmmm.... clicou mesmo')
    }
    return(
        <>
        <p>Teste de eventos</p>
        <button onClick={meuEvento}>Clique em mim</button>
        </>
    )
}
export default Evento