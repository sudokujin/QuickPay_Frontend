<<<<<<< HEAD:src/Components/PayAndRequest.tsx
import React, { useState } from 'react';
import {
    Box,
    TextField,
    Button,
    FormControl,
    RadioGroup,
    FormControlLabel,
    Radio,
} from '@mui/material';
import TransactionService from '../service/TransactionService';
import Decimal from 'decimal.js';
import AccountService from "../service/AccountService"; // Import the Decimal class
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
const PayAndRequest = () => {
    const [selectedOption, setSelectedOption] = useState('pay');
    const [amount, setAmount] = useState('');
    const [comment, setDescription] = useState('');
    const [targetId, setTargetId] = useState('');

    const handleOptionChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setSelectedOption(event.target.value);
    };

    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        try {
            const actingId = parseInt(localStorage.getItem('accountId') || '0', 10);

            // Validate the form fields
            if (!amount || !comment || !targetId) {
                throw new Error('Please fill in all required fields.');
            }

            // Convert the amount to a Decimal instance
            const transactionAmount = new Decimal(amount);
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            if (isNaN(transactionAmount)) {
                throw new Error('Invalid amount value: ' + amount);
            }

            // Fetch user's account balance from the server
            let userBalanceResponse;
            try {
                userBalanceResponse = await AccountService.getBalance(actingId);
            } catch (error) {
                console.error('Error getting user balance:', error);
                throw new Error('Invalid response received from the server while getting user balance.');
            }

            // Check if the user has enough balance to make the payment
            if (selectedOption === 'pay' && userBalanceResponse.data.balance < transactionAmount.toNumber()) {
                throw new Error('Insufficient balance for payment.');
            }

            // Create the new transaction
            const transaction = {
                actingId,
                targetId,
                amount,
                status: selectedOption === 'request' ? 'Pending' : 'Approved',
                typeId: selectedOption === 'pay' ? 1 : 2,
                comment,
                createdDateTime: new Date().toISOString(),
            };

            // Call the transaction service to create the new transaction
            const createdTransaction = await TransactionService.createTransaction(transaction);

            // Clear the form fields after submitting
            setAmount('');
            setDescription('');
            setTargetId('');
        } catch (error) {
            console.error('Error creating transaction:', error);
        }
    };

    return (
        <Box sx={{ p: 2 }}>
            <h1>Pay & Request</h1>
            <form onSubmit={handleSubmit}>
                {/* New input field for the targetId */}
                <TextField
                    fullWidth
                    type="number"
                    label="Target ID"
                    variant="outlined"
                    value={targetId}
                    onChange={(e) => setTargetId(e.target.value)}
                    required
                />
                {/* New input field for the amount */}
                <TextField
                    fullWidth
                    type="number"
                    label="Amount"
                    variant="outlined"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                />
                {/* New input field for the description */}
                <TextField
                    fullWidth
                    label="Comment"
                    variant="outlined"
                    value={comment}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
                {/* Radio button for selecting between pay and request */}
                <FormControl component="fieldset">
                    <RadioGroup row name="payOrRequest" value={selectedOption} onChange={handleOptionChange}>
                        <FormControlLabel value="pay" control={<Radio />} label="Pay" />
                        <FormControlLabel value="request" control={<Radio />} label="Request" />
                    </RadioGroup>
                </FormControl>
                <Button type="submit" variant="contained" sx={{ mt: 2 }}>
                    Submit
                </Button>
            </form>
        </Box>
    );
};

=======
import React, { useState } from 'react';
import {
    Box,
    TextField,
    Button,
    FormControl,
    RadioGroup,
    FormControlLabel,
    Radio,
} from '@mui/material';
import { Transaction } from '../models/Transaction';
import TransactionService from '../service/TransactionService';
import Decimal from 'decimal.js';
import AccountService from "../service/AccountService"; // Import the Decimal class

const PayAndRequest = () => {
    const [selectedOption, setSelectedOption] = useState('pay');
    const [amount, setAmount] = useState('');
    const [comment, setDescription] = useState('');
    const [targetId, setTargetId] = useState('');

    const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(event.target.value);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const actingId = parseInt(localStorage.getItem('accountId') || '0', 10);

            // Validate the form fields
            if (!amount || !comment || !targetId) {
                throw new Error('Please fill in all required fields.');
            }

            // Convert the amount to a Decimal instance
            const transactionAmount = new Decimal(amount);
            if (isNaN(transactionAmount.toNumber())) {
                throw new Error('Invalid amount value: ' + amount);
            }

            // Fetch user's account balance from the server
            let userBalanceResponse;
            try {
                userBalanceResponse = await AccountService.getBalance(actingId);
            } catch (error) {
                console.error('Error getting user balance:', error);
                throw new Error('Invalid response received from the server while getting user balance.');
            }

            // Check if the user has enough balance to make the payment
            if (selectedOption === 'pay' && userBalanceResponse.data.balance < transactionAmount.toNumber()) {
                throw new Error('Insufficient balance for payment.');
            }

            // Create the new transaction
            const transaction = {
                actingId,
                targetId,
                amount: transactionAmount.toNumber(), // Convert Decimal to number
                status: selectedOption === 'request' ? 'Pending' : 'Approved',
                typeId: selectedOption === 'pay' ? 1 : 2,
                comment,
                createdDateTime: new Date().toISOString(),
            };

            // Call the transaction service to create the new transaction
            const createdTransaction = await TransactionService.createTransaction(transaction);

            // Clear the form fields after submitting
            setAmount('');
            setDescription('');
            setTargetId('');
        } catch (error) {
            console.error('Error creating transaction:', error);
        }
    };

    return (
        <Box sx={{ p: 2 }}>
            <h1>Pay & Request</h1>
            <form onSubmit={handleSubmit}>
                {/* New input field for the targetId */}
                <TextField
                    fullWidth
                    type="number"
                    label="Target ID"
                    variant="outlined"
                    value={targetId}
                    onChange={(e) => setTargetId(e.target.value)}
                    required
                />
                {/* New input field for the amount */}
                <TextField
                    fullWidth
                    type="number"
                    label="Amount"
                    variant="outlined"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                />
                {/* New input field for the description */}
                <TextField
                    fullWidth
                    label="Comment"
                    variant="outlined"
                    value={comment}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
                {/* Radio button for selecting between pay and request */}
                <FormControl component="fieldset">
                    <RadioGroup row name="payOrRequest" value={selectedOption} onChange={handleOptionChange}>
                        <FormControlLabel value="pay" control={<Radio />} label="Pay" />
                        <FormControlLabel value="request" control={<Radio />} label="Request" />
                    </RadioGroup>
                </FormControl>
                <Button type="submit" variant="contained" sx={{ mt: 2 }}>
                    Submit
                </Button>
            </form>
        </Box>
    );
};

>>>>>>> origin/main:react/src/Components/PayAndRequest.tsx
export default PayAndRequest;