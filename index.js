//Definición de clases
import {Cliente} from "./Cliente.js";
import {CuentaCorriente} from "./CuentaCorriente.js";

const cliente = new Cliente();
cliente.nombreCliente = "Leonardo";
cliente.dniCliente= "1231231231";
cliente.rucCliente = "1231231";

const cuentaLeonardo = new CuentaCorriente();
cuentaLeonardo.numero = "1";
cuentaLeonardo.agencia = "001";
cuentaLeonardo.cliente = cliente;

let saldo = cuentaLeonardo.verSaldo();


saldo = cuentaLeonardo.depositoEnCuenta(200);
saldo = cuentaLeonardo.retirarDeCuenta(50);
console.log(`El saldo actual de Leonardo es ${saldo}`);

const cliente2 = new Cliente();
cliente2.nombreCliente = "Sofía";
cliente2.dniCliente= "1231231232";
cliente2.rucCliente = "1231232";

const cuentaSofia = new CuentaCorriente();
cuentaSofia.numero = "2";
cuentaSofia.agencia = "002";
cuentaSofia.cliente = cliente2;

console.log(cuentaSofia.cliente);

cuentaSofia.cliente = 0;

console.log(cuentaSofia.cliente);
/*cuentaLeonardo.transferirParaCuenta(100,cuentaSofia);
let saldoSofia = cuentaSofia.verSaldo();
console.log(`El saldo actual de Sofía es ${saldoSofia}`);
console.log(`El saldo actual de Leonardo es ${cuentaLeonardo.verSaldo()}`);*/
