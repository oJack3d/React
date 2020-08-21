import React, { ReactElement } from 'react'
import { Grid } from '@material-ui/core';

interface AppLayoutProps {
    header: ReactElement;
    body: ReactElement;
}

const AppLayout: React.FC<AppLayoutProps> = (props) => {
    return (
        <Grid container direction="column">
            <Grid item>
                { props.header }
            </Grid>
            <Grid item>
                <Grid container direction="row">
                    <Grid item xs="auto" sm={1} lg={2}></Grid>
                    <Grid item xs={12} sm={10} lg={8}>
                        { props.body }
                    </Grid>
                    <Grid item xs="auto" sm={1} lg={2}></Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default AppLayout