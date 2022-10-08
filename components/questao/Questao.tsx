import QuestaoModel from "../../model/questao";
import Enunciado from "../enunciado/Enunciado";
import Resposta from "../resposta/Resposta";
import Temporizador from "../temporizador/Temporizador";
import styles from "./Questao.module.css"

const letras = [
    {valor:"A", cor:"#f2c866"},
    {valor:"B", cor:"#f266BA"},
    {valor:"C", cor:"#85D4F2"},
    {valor:"D", cor:"#BCE596"},
]

interface QuestaoProps {
    valor: QuestaoModel
    tempoPraResposta?:number
    respostaFornecida: (indice: number) => void
    tempoEsgotado:()=> void
}

export default function Questao(props: QuestaoProps) {
    const questao = props.valor
    function renderizarRespostas() {
        return questao.respostas.map((resposta, i) => {
            return (
                <Resposta
                    key={i}
                    valor={resposta}
                    indice={i}
                    letra={letras[i].valor}
                    corFundoLetra={letras[i].cor}
                    respostaFornecida={props.respostaFornecida}
                />)
        })
    }
    return (
        <div className={styles.questao}>
            <Enunciado texto={questao.enunciado} />
            <Temporizador duracao={props.tempoPraResposta ?? 10} tempoEsgotado={props.tempoEsgotado}/>
            {renderizarRespostas()}
        </div>
    )
}