import React from 'react';
import './App.css';
import SignIn from "./pages/SignIn";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import BrowserRouter and Routes directly
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import About from "./pages/About";
import FriendsPage from "./pages/FriendsPage";
import MainPage from "./pages/MainPage";
import PendingTransactionTable from "./pages/PendingTransactionTable";
import TransactionTable from "./pages/TransactionTable";
import Balance from "./pages/Balance";
import PayAndRequestPage from "./pages/PayAndRequestPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/" element={<Home />} />
                <Route path="/main" element={<MainPage> <PendingTransactionTable /> <Balance /> <TransactionTable /></MainPage>} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<SignIn />} />
                <Route path="/register" element={<SignUp />} />
                <Route path="/friends" element={<FriendsPage />} />
                <Route path="/pay" element={<PayAndRequestPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
