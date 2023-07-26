import MainPage from './MainPage';
import { Grid, Paper } from '@mui/material'; // Import Grid and Paper components from @mui/material
import PendingTransactionTable from './PendingTransactionTable';
import Balance from './Balance';
import TransactionTable from './TransactionTable';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
const Dashboard = () => {
    return (
        <MainPage>
            <Grid container spacing={3}>
<<<<<<< HEAD:src/pages/Dashboard.tsx
=======
                {/* Chart */}
                <Grid item xs={12} md={8} lg={9}>
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            height: 240,
                        }}
                    >
                    </Paper>
                </Grid>
>>>>>>> origin/main:react/src/pages/Dashboard.tsx
                {/* Pending Transactions */}
                <Grid item xs={12} md={4} lg={3}>
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            height: 240,
                        }}
                    >
                        <PendingTransactionTable />
                    </Paper>
                </Grid>
                {/* Recent Orders */}
                <Grid item xs={12}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                        <TransactionTable />
                    </Paper>
                </Grid>
            </Grid>
        </MainPage>
    );
};

export default Dashboard;
