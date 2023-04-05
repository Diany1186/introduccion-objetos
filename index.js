class Cliente
{
    nombreCliente;
    dniCliente;
    numeroCuenta;
    saldoCuenta;

}

const cliente1 = new Cliente();
cliente1.nombreCliente = "Diana";
cliente1.dniCliente = "1234567890";
cliente1.numeroCuenta = "123456123";
cliente1.saldoCuenta = 1000;

const cliente2 = new Cliente();
cliente2.nombreCliente = "Sofía";
cliente2.dniCliente = "1234567891";
cliente2.numeroCuenta = "123456124";
cliente2.saldoCuenta = 500;


const cliente3 = new Cliente();
cliente3.nombreCliente = "Leonardo";
cliente3.dniCliente = "1234567892";
cliente3.numeroCuenta = "123456125";
cliente3.saldoCuenta = 500;

console.log(cliente1);
console.log(cliente2);
console.log(cliente3);