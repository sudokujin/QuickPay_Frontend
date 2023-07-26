import React from 'react';
import PayAndRequest from '../Components/PayAndRequest';
import MainPage from "./MainPage";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
const PayAndRequestPage: React.FC = () => {
    return (
        <MainPage>
        <div style={{ color: 'blue' }}>
            <PayAndRequest />
        </div>
            </MainPage>
    );
};

export default PayAndRequestPage;