export class ConsultAccount {
    private _balance = 0;

    consultBalance(): void {
        console.log(`Seu saldo é de R$ ${this._balance.toFixed(2)}`);
    }

    deposit(value: number): void {
        this._balance += value;

        console.log(`Valor depositado: R$ ${value.toFixed(2)}`);
    }

    withDrow(value: number): void {
        if (value > this._balance) {
            console.log('Saldo insuficiente!');
            return;
        }

        this._balance -= value;

        console.log(`Valor sacado: R$ ${value.toFixed(2)}`);
    }
}
