import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {
    Card,
    CardContent,
    Box,
} from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(3),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function FullWidthGrid() {
    const classes = useStyles();

    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper variant="outlined" className={classes.paper}>
                        <Box boxShadow={3} height="100%" bgcolor="grey.300" mx={0.5} width={'30%'} display="inline-block">
                            <Card>
                                <h2>hello</h2>
                            </Card>
                        </Box>
                        <Box height="100%" bgcolor="grey.300" mx={0.5} width={'30%'} display="inline-block">
                            <Card>
                                <h2>hello</h2>
                            </Card>
                        </Box>
                        <Box height="100%" bgcolor="grey.300" mx={0.5} width={'30%'} display="inline-block">
                            <Card>
                                <h2>hello</h2>
                            </Card>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}
