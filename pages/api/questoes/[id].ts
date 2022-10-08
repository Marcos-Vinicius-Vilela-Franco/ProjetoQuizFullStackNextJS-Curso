
import questoes from '../bancoDeQuestoes'
export default (req,res) =>{
    const idSelecionado = +req.query.id
    const UnicaQuestaoOuNada = questoes.filter(questoes => questoes.id === idSelecionado)
    
    if(UnicaQuestaoOuNada.length ===1){
        const questaoSelecionada=UnicaQuestaoOuNada[0].embaralharRespostas()
        res.status(200).json(questaoSelecionada.ConverterparaObjeto())
    }else{
        res.status(204).send()
    }
}