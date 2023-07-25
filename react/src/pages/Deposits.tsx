import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import AccountService from '../service/AccountService.ts';
import Decimal from 'decimal.js'; // Import the Decimal class

function preventDefault(event: React.MouseEvent) {
    event.preventDefault();
}

export default function Deposits() {
    const [balance, setBalance] = React.useState(localStorage.getItem('balance') || '');
    const [isEditing, setIsEditing] = React.useState(false);

    const handleBalanceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBalance(event.target.value);
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = async () => {
        setIsEditing(false);
        const balanceValue = parseFloat(balance.replace(/,/g, '')); // Parse the balance value as a float and remove commas
        const updatedBalance = new Decimal(balanceValue); // Convert the balance value to a Decimal instance

        const accountId = localStorage.getItem('accountId');
        if (accountId !== null && !isNaN(Number(accountId))) {
            localStorage.setItem('balance', updatedBalance.toString());
            try {
                await AccountService.updateBalance(updatedBalance, Number(accountId));
                console.log("Balance updated successfully.");
                // Handle success
            } catch (error) {
                console.error("Error updating balance:", error);
                // Handle error
            }
        } else {
            console.error("Invalid accountId in localStorage:", accountId);
            // Handle the case when accountId is invalid or not found
        }
    };

    return (
        <React.Fragment>
            <Title>Balance</Title>
            {isEditing ? (
                <input
                    type="text"
                    value={balance}
                    onChange={handleBalanceChange}
                    onBlur={handleSaveClick}
                    autoFocus
                />
            ) : (
                <Typography component="p" variant="h4" onClick={handleEditClick}>
                    {balance}
                </Typography>
            )}
            <Typography color="text.secondary" sx={{ flex: 1 }}>
                on 15 March, 2019
            </Typography>
            <div>
                <Link color="primary" href="#" onClick={preventDefault}>
                    View balance
                </Link>
            </div>
        </React.Fragment>
    );
}
