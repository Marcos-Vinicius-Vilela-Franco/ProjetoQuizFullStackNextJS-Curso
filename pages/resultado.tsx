import Botao from "../components/botao/Botao"
import Estatistica from "../components/estatistica/Estatistica"
import { useRouter } from "../node_modules/next/router"
import styles from "../styles/Resultado.module.css"

export default function Resultado() {
    const router = useRouter()

    const total = +router.query.total
    const certas = +router.query.certas
    const percentual = Math.round((certas / total) * 100)
    return (
        <div className={styles.resultado}>
            <h1>Resultado</h1>
            <div style={{display:"flex"}}>
                <Estatistica texto="Perguntas" valor={total} />
                <Estatistica texto="Certas" valor={certas} 
                corFundo="#9cd2a4"/>
                <Estatistica texto="Percentual" valor={`${percentual}%`} 
                corFundo={percentual<60 ? "#DE6A33" :"#78c283"}/>
            </div>
            <Botao href="/" texto="Tentar Novamente"/>
        </div>
    )
}