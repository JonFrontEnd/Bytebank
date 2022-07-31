
import { Cliente } from "./Cliente.js";
import{ContaCorrente}from "./Contacorrente.js";

const cliente1 = new Cliente("Jonias",11122233309 );

const cliente2 = new Cliente("Júlia" ,  88822233309);






const cliente3 = new Cliente();
cliente3.nome = "Rodrigo";
cliente3.cpf = 88822233309;


const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = cliente1;
contaCorrenteRicardo.depositar(300);


const conta2 = new ContaCorrente();
conta2.cliente= cliente1;
conta2.agencia = 102;

let valor = 200;



const conta3 = new ContaCorrente();
conta3.cliente= cliente3;
conta3.agencia = 105;


contaCorrenteRicardo.transferir(100, conta2);

console.log(cliente2);