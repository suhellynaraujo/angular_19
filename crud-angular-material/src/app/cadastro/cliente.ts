import { v4 as uuid } from 'uuid'


export class Cliente {
    id?: String;
    nome?: String;
    cpf?: String;
    dataNascimento?: String;
    email?: String;

    // criar um id a cada cadastro de um novo cliente 
    static newCliente(){
        const cliente = new Cliente();
        cliente.id = uuid();
        return cliente;
    }

}