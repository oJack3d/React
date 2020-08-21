import React, { ReactElement } from 'react'
import { Grid, Paper } from '@material-ui/core'

interface BodyLayout {
    customer: ReactElement
    memos: ReactElement
}
const CrmBody : React.FC= () => {
    return (
        <Paper>
            <h1>Body goes here</h1>
        </Paper>
    )
}

export default CrmBody
