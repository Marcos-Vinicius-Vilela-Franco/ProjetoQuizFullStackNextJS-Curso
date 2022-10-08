import QuestaoModel from "../../model/questao"
import Botao from "../botao/Botao"
import Questao from "../questao/Questao"
import styles from './questionario.module.css'

interface QuestionarioProps{
    questao: QuestaoModel
    ultima:boolean
    questaoRespondida: (questao:QuestaoModel) => void
    irParaProximopasso: ()=>void
}

export default function Questionario(props:QuestionarioProps){
    
    function respostaFornecida(indice:number){
        if(props.questao.naoRespondida){
            props.questaoRespondida(props.questao.responderCom(indice))
        }
    }
    
    return(
        <div className={styles.questionario}>
            {props.questao ?
             <Questao 
             valor={props.questao}
             tempoPraResposta={10}
             respostaFornecida={respostaFornecida}
             tempoEsgotado={props.irParaProximopasso}
             /> : false }
           
            <Botao onClick={props.irParaProximopasso}
            texto={props.ultima ? "Finalizar" :"Próxima"}
            />
        </div>
    )
}