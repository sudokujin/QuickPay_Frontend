import { Decimal } from 'decimal.js';

export interface Account {
    balance: Decimal;
    accountId?: number;
}