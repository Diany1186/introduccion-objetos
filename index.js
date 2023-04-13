//Definición de clases
import {Cliente} from "./Cliente.js";
import {CuentaCorriente} from "./CuentaCorriente.js";

const cliente = new Cliente("Leonardo","1231231231","1231231");
const cuentaLeonardo = new CuentaCorriente(cliente,"1","001");

const cliente2 = new Cliente("Sofía","1231231232","1231232");
const cuentaSofia = new CuentaCorriente(cliente2,"2","002");

let saldo = cuentaLeonardo.verSaldo();
saldo = cuentaLeonardo.depositoEnCuenta(200);
saldo = cuentaLeonardo.retirarDeCuenta(50);
console.log(`El saldo actual de Leonardo es ${cuentaLeonardo.verSaldo()}`);

console.log(CuentaCorriente.cantidadCuentas);


