/** creacion de una clase contador */

class Contador {
    responsable
    consutructor(responsable){
        this.responsable = responsable
        this.contadorIndividual = 0
    }
    static CONTADOR_GLOBAL = 0;

    getResponsable(){
        return this.responsable
    }
    contar(){
        this.contadorIndividual++
        Contador.CONTADOR_GLOBAL++
    }
    getCuentaIndividual(){  
        return this.contadorIndividual
    }
    getContadorGlobal(){
        return Contador.CONTADOR_GLOBAL
    }
}
module.exports = Contador;