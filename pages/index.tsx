import { useEffect, useRef, useState } from 'react'
import Botao from '../components/botao/Botao'
import Questao from '../components/questao/Questao'
import QuestaoModel from '../model/questao'
import RespostaModel from '../model/resposta'
const questaoMock = new QuestaoModel(1, 'Melhor cor?', [
  RespostaModel.errada('Verde'),
  RespostaModel.errada('Vermelho'),
  RespostaModel.errada('Azul'),
  RespostaModel.certa('Preto')
])

export default function Home() {
  const [questao, setQuestao] = useState(questaoMock)
  

  function respostaFornecida(indice: number) {
    setQuestao(questao.responderCom(indice))
  }
  function tempoEsgotado() {
    if (questao.naoRespondida) {
      setQuestao(questao.responderCom(1))
    }
  }
  return (
    <div style={{
      display: 'flex',
      flexDirection:'column',
      height: '100vh',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Questao valor={questao}
        tempoPraResposta={10}
        respostaFornecida={respostaFornecida}
        tempoEsgotado={tempoEsgotado} />
        <Botao texto="Próxima" href='/resultado'/>
    </div>
  )
}
