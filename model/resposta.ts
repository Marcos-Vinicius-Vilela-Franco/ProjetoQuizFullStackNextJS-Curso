export default class RespostaModel {
    #valor: string
    #certa: boolean
    #revelada: boolean

    static certa(valor:string){
        return new RespostaModel(valor,true)
    }
    static errada(valor:string){
        return new RespostaModel(valor,false)
    }



    constructor(valor: string, certa: boolean, revelada: false){
        this.#certa=certa
        this.#valor=valor
        this.#revelada=revelada
    }
    get valor(){
        return this.#valor
    }
    get certa(){
        return this.#certa
    }
    get revelada(){
        return this.#revelada
    }
    revelar(){
        return new RespostaModel(this.#valor, this.#certa,true)
    }
    ConverterparaObjeto(){
        return {
            valor: this.#valor,
            certa: this.#certa,
            revelada: this.#revelada
        }
    }
}