import { useEffect, useRef, useState } from 'react'
import Questionario from '../components/questionario/Questionario'
import QuestaoModel from '../model/questao'
import RespostaModel from '../model/resposta'


const questaoMock = new QuestaoModel(1, 'Melhor cor?', [
  RespostaModel.errada('Verde'),
  RespostaModel.errada('Vermelho'),
  RespostaModel.errada('Azul'),
  RespostaModel.certa('Preto')
])
const BASE_URL = 'http://localhost:3000/api'

export default function Home() {
  const [idsDasQuestoes,setIdsDasQuestoes] = useState<number[]>([])
  const [questao, setQuestao] = useState<QuestaoModel>(questaoMock)
  
  async function carregarIdsQuestoes(){
    const resp = await fetch(`${BASE_URL}/questionario`);
    const idsDasQuestoes = await resp.json();
    setIdsDasQuestoes(idsDasQuestoes);
  }

  async function carregarQuestoes(idQuestao:number){
    const resp = await fetch(`${BASE_URL}/questoes/${idQuestao}`);
    const json = await resp.json();
    const novaQuestao = QuestaoModel.criarUsandoObjeto(json)
    setQuestao(novaQuestao);
  }

  useEffect(()=>{
    carregarIdsQuestoes()
  }, []);

  useEffect(()=>{
    idsDasQuestoes.length > 0 && carregarQuestoes(idsDasQuestoes[0])
  }, [idsDasQuestoes]);

  function questaoRespondida(questao:QuestaoModel){

  }
  function irParaProximoPasso(){

  }
 
  return (
    
     <Questionario 
     questao={questao}
     ultima={true}
     questaoRespondida={questaoRespondida}
     irParaProximopasso={irParaProximoPasso}
     />
    
  )
}
