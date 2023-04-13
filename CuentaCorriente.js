import { Cliente } from "./Cliente.js";

export class CuentaCorriente {
    #cliente;
    numero;
    agencia;
    #saldo;//atributo privado, solo puede ser modificado por la clase, también se puede poner _antes del nombre para que otros desarrolladores lo traten como privado, pero js no lo trata como privado
    static cantidadCuentas = 0;//hace que el atributo cantidadCuentas sea común para todos los objetos de este tipo (es un atributo estático)
   
    set cliente(valor) {
        if (valor instanceof Cliente)//evita que al atributo cliente se le pueda asignar otro valor que no sea un objeto Cliente
            this.#cliente = valor;
    }

    get cliente() {
        return this.#cliente;
    }

        constructor (cliente, numero, agencia) {
        this.cliente = cliente;
        this.numero = numero;
        this.agencia =agencia;
        this.#saldo = 0;
        CuentaCorriente.cantidadCuentas++;
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