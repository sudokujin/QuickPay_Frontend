import axios from 'axios';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
const http = axios.create({
    baseURL: "https://quick-pay-backend-5d94c8a645e1.herokuapp.com"
});

http.interceptors.request.use((config) => {
    const token = localStorage.getItem('jwtToken');

    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
}, (error) => {
    return Promise.reject(error);
});

export default {
    createTransaction(transaction : any) {
        return http.post('/transaction', transaction);
    },

    updateTransaction(transaction : any) {
        return http.put('/transaction', transaction);
    },

    getAllTransactions(accountId: number) {
        return http.get(`/transaction/${accountId}`);
    },

    getPendingTransactions(accountId: number) {
        return http.get(`/transaction/pending/${accountId}`);
    },

    getNotPendingTransactions(accountId: number) {
        return http.get(`/transaction/notpending/${accountId}`);
    },

    acceptTransaction(transactionId: number) {
        return http.put(`/transaction/accept/${transactionId}`);
    },

    rejectTransaction(transactionId: number) {
        return http.put(`/transaction/reject/${transactionId}`);
    }
}