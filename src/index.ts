import { CreateAccount } from './modules/createAccount';
import { ConsultAccount } from './modules/consultAccount';

const createAccount = new CreateAccount({
    nome: 'Leonardo',
    sobrenome: 'Santos',
    email: 'leonardo@email.com.br',
    telefone: 11985827775,
    cpfCnpj: '123.456.789-00',
});

createAccount.perfil();

const consultAccount = new ConsultAccount();

consultAccount.consultBalance();
consultAccount.deposit(10);
consultAccount.consultBalance();
consultAccount.withDrow(5);
consultAccount.consultBalance();
