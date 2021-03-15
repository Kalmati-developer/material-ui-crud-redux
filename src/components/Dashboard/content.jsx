import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {
    Card,
    CardContent,
    Box,
    Typography,
} from '@material-ui/core'
import {
    GroupAddOutlined,
    Person,
    OfflinePin,
    Block
} from '@material-ui/icons'
import MyChart from './chart'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2, 3),
        // textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    card: {
        textAlign: 'center'
    }
}));

export default function Content() {
    const classes = useStyles();

    return (
        <div>
            <Grid container spacing={3}>
                <Grid item sm={12}>
                    <Paper variant="outlined" className={classes.paper}>
                        <Box boxShadow={3} height="100%" bgcolor="grey.300" mx={0.5} width={'24%'} display="inline-block">
                            <Card className={classes.card}>
                                <CardContent>
                                    <Typography variant="h5">
                                        <GroupAddOutlined fontSize='large' />
                                         Totol User
                                    </Typography>
                                    <Typography variant='h3'>
                                        115
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Box>
                        <Box boxShadow={3} height="100%" bgcolor="grey.300" mx={0.5} width={'24%'} display="inline-block">
                            <Card className={classes.card}>
                                <CardContent>
                                    <Typography variant="h5">
                                        <Person fontSize='large' />
                                         Active User
                                    </Typography>
                                    <Typography variant='h3'>
                                        4
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Box>
                        <Box boxShadow={3} height="100%" bgcolor="grey.300" mx={0.5} width={'24%'} display="inline-block">
                            <Card className={classes.card}>
                                <CardContent>
                                    <Typography variant="h5">
                                        <OfflinePin fontSize='large' />
                                         Offline User
                                    </Typography>
                                    <Typography variant='h3'>
                                        14
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Box>
                        <Box boxShadow={3} height="100%" bgcolor="grey.300" mx={0.5} width={'24%'} display="inline-block">
                            <Card className={classes.card}>
                                <CardContent>
                                    <Typography variant="h5">
                                        <Block fontSize='large' />
                                         Blocked User
                                    </Typography>
                                    <Typography variant='h3'>
                                        3
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item md={12}>
                    <MyChart/>
                </Grid>
            </Grid>
        </div>
    );
}
