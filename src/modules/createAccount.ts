import { InfoCreateAccount } from '../interfaces/infoCreateAccount';

export class CreateAccount {
    constructor(private infoCreateAccount: InfoCreateAccount) {}

    perfil(): void {
        console.log(`Nome: ${this.infoCreateAccount.nome} ${this.infoCreateAccount.sobrenome}`);
        console.log(`E-mail: ${this.infoCreateAccount.email}`);
        console.log(`Telefone: ${this.infoCreateAccount.telefone}`);
        console.log(`CPF/CNPJ: ${this.infoCreateAccount.cpfCnpj}`);
    }
}
