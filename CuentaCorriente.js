export class CuentaCorriente {
    cliente;
    numero;
    #saldo;//atributo privado, solo puede ser modificado por la clase, también se puede poner _antes del nombre para que otros desarrolladores lo traten como privado, pero js no lo trata como privado
    agencia;

    constructor() {
        this.cliente = null;
        this.numero = "";
        this.agencia ="";
        this.#saldo = 0;
    }

    depositoEnCuenta(valor) {
        if (valor > 0) {
           this.#saldo += valor;
        }
        return this.#saldo;
    }

    retirarDeCuenta(valor) {
        if (valor <= this.#saldo) {
            this.#saldo -= valor;
        }
        return this.#saldo;
    }

    verSaldo () {
        return this.#saldo;
    }

    transferirParaCuenta (valor,cuentaDestino) {
        this.retirarDeCuenta(valor);
        cuentaDestino.depositoEnCuenta(valor);
    }
}