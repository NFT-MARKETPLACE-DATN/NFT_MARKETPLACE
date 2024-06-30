import { Typography } from '@mui/material'
import React from 'react'
import {styles} from './NoDataStyle';

const NoDataComponent = (props) => {
    const { isShowText } = props;

    return (
        <div style={styles?.divContainer}>
            { isShowText ? <Typography style={styles?.txtNoData}>No items found for this search</Typography> : null }
           </div>
    )
}

export default NoDataComponent
