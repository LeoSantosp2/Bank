export interface FunctionsAccount {
    balance(): number;
    deposit(value: number): void;
    withDrow(value: number): string;
}
