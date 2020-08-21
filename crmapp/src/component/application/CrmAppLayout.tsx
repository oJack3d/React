import React, { ReactElement } from 'react'
import { Grid, Paper } from '@material-ui/core'

interface Layout {
    header: ReactElement
    body: ReactElement
}

const CrmAppLayout : React.FC<Layout> = (props) => {
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

export default CrmAppLayout
