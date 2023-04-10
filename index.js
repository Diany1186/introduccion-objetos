//Definición de clases

class Cliente
{
    nombreCliente;
    dniCliente;
    rucCliente;
}

class CuentaCorriente {
    numero;
    #saldo;//atributo privado, solo puede ser modificado por la clase, también se puede poner _antes del nombre para que otros desarrolladores lo traten como privado, pero js no lo trata como privado
    agencia;

    constructor() {
        this.#saldo = 0;
        this.numero = "";
        this.agencia ="";
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
}

cuentaLeonardo = new CuentaCorriente();

let saldo = cuentaLeonardo.verSaldo();
console.log(`El saldo actual es ${saldo}`);

saldo = cuentaLeonardo.depositoEnCuenta(100);
console.log(`El saldo actual es ${saldo}`);

saldo = cuentaLeonardo.retirarDeCuenta(40);
console.log(`El saldo actual es ${saldo}`);

/* 
const cliente1 = new Cliente();
cliente1.nombreCliente = "Diana";
cliente1.dniCliente = "1234567890";
cliente1.rucCliente = "12344";

const cuentaCorriente1 = new CuentaCorriente();
cuentaCorriente1.numero = "1231231";
cuentaCorriente1.saldo = 5000;
cuentaCorriente1.agencia = 1001;

const cliente2 = new Cliente();
cliente2.nombreCliente = "Sofía";
cliente2.dniCliente = "1234567891";
cliente2.rucCliente = "12345";

const cuentaCorriente2 = new CuentaCorriente();
cuentaCorriente2.numero = "1231232";
cuentaCorriente2.saldo = 2000;
cuentaCorriente2.agencia = 1001;

console.log(cuentaCorriente2.saldo);
cuentaCorriente2.depositoEnCuenta(100);
console.log(cuentaCorriente2.saldo);
cuentaCorriente2.depositoEnCuenta(500);
console.log(cuentaCorriente2.saldo);

const cliente3 = new Cliente();
cliente3.nombreCliente = "Leonardo";
cliente3.dniCliente = "1234567892";
cliente3.rucCliente = "12345";

const cuentaCorriente3 = new CuentaCorriente();
cuentaCorriente3.numero = "1231233";
cuentaCorriente3.saldo = 2000;
cuentaCorriente3.agencia = 1001;
*/