function Evento(){
    function meuEvento(){
        document.write('Ummmmm.... clicou mesmo')
    }
    return(
        <>
        <p>Teste de eventos</p>
        <button onClick={meuEvento}>Clique em mim</button>
        </>
    )
}
export default Evento