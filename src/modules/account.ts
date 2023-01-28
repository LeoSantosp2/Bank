import { InfoCreateAccount } from '../interfaces/infoCreateAccount';
import { FunctionsAccount } from '../interfaces/functionsAccount';

export class Account implements FunctionsAccount {
    private _balance = 0;

    createAccount(infoCreateAccount: InfoCreateAccount): void {
        console.log(`Nome: ${infoCreateAccount.nome} ${infoCreateAccount.sobrenome}`);
        console.log(`E-mail: ${infoCreateAccount.email}`);
        console.log(`Telefone: ${infoCreateAccount.telefone}`);
        console.log(`CPF/CNPJ: ${infoCreateAccount.cpfCnpj}`);
    }

    balance(): number {
        return this._balance;
    }

    deposit(value: number): void {
        this._balance += value;
    }

    withDrow(value: number): string {
        if (value > this._balance) {
            return 'Saldo insuficiente';
        }

        this._balance -= value;

        return `Valor sacado: R$ ${value.toFixed(2)}`;
    }
}
