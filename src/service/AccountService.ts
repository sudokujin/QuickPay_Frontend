import axios, { AxiosRequestConfig } from 'axios';
import {Decimal} from 'decimal.js';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
const http = axios.create({
    baseURL: "https://quick-pay-backend-5d94c8a645e1.herokuapp.com"
});

http.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('jwtToken');

        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }

        // Set the content type header to 'application/json'
        config.headers['Content-Type'] = 'application/json';

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

let balance;
export default {
    createAccount(account: any) {
        return http.post('/account', account);
    },
    async updateBalance(balance: Decimal, accountId: number) {
        const stringBalance = balance.toString();

        try {
            const response = await http.put(`/account/${accountId}`, stringBalance, {
                headers: {
                    'Content-Type': 'text/plain'
                }
            });

            // Check if the request was successful
            if (response.status !== 200) {
                throw new Error('Failed to update balance on the server.');
            }

            // Balance updated successfully
            console.log('Balance updated successfully.');
        } catch (error) {
            console.error('Error updating balance:', error);
            throw error;
        }
    },
    getBalance(accountId: number) {
        return http.get(`/account/balance/${accountId}`);
    },

    getAccountByAccountID(accountId: number) {
        return http.get(`/account/${accountId}`);
    },

    getAccountByUserID(userId: number) {
        return http.get(`/account/user/${userId}`);
    },

    deleteAccount(account: AxiosRequestConfig<any> | undefined) {
        return http.delete('/account', account);
    },
};