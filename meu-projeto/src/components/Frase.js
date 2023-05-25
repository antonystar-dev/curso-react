import styles from './Frase.module.css'
function Frase(){
    return(
        <div className={styles.fraseContainer}>
            <p className={styles.fraseContent}>Estou colocando um componentes dentro de outro e exportando para principal</p>
        </div>
    )
}
export default Frase