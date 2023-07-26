import * as React from 'react';
import Typography from '@mui/material/Typography';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
interface TitleProps {
    children?: React.ReactNode;
}

export default function Title(props: TitleProps) {
    return (
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
            {props.children}
        </Typography>
    );
}
