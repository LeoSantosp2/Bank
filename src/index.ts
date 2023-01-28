import { Account } from './modules/account';

const account = new Account();

const btnSaldo = document.querySelector('.btn-saldo') as HTMLButtonElement;
const btnDepositar = document.querySelector('.btn-depositar') as HTMLButtonElement;
const btnSacar = document.querySelector('.btn-sacar') as HTMLButtonElement;
const divBalance = document.querySelector('.balance') as HTMLDivElement;
const inputValue = document.querySelector('.value') as HTMLInputElement;
const divResults = document.querySelector('.results') as HTMLDivElement;

btnSaldo.addEventListener('click', (event) => {
    event.preventDefault();

    divBalance.innerHTML = `<p>R$ ${account.balance().toFixed(2)}</p>`;
});

btnDepositar.addEventListener('click', (event) => {
    event.preventDefault();

    account.deposit(Number(inputValue.value));

    divResults.innerHTML += `<p>Valor depositado: R$ ${Number(inputValue.value).toFixed(2)}</p>`;
});

btnSacar.addEventListener('click', (event) => {
    event.preventDefault();

    divResults.innerHTML += `<p>${account.withDrow(Number(inputValue.value))}</p>`;
});
