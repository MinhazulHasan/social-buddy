import React, { useEffect, useState } from 'react';
import { Avatar } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const Comments = ({ comment }) => {

    // ------------------- Getting the image of the commentator -------------------
    const [image, setImage] = useState("");
    useEffect(() => {
        fetch("https://randomuser.me/api/")
            .then((res) => res.json())
            .then((data) => setImage(data.results[0].picture.thumbnail));
    }, [])

    // ------------------- Material UI CSS Classes -------------------
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            marginTop: '35px'
        },
        paper: {
            padding: theme.spacing(2),
            margin: 'auto',
            maxWidth: 500,
        },
        img: {
            margin: 'auto',
            display: 'block',
            maxWidth: '100%',
            maxHeight: '100%',
        },
        usersEmail: {
            fontWeight: '600',
            textAlign: 'center'
        }
    }));
    const classes = useStyles();

    // ------------------- Return Statement -------------------
    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>

                    <Grid item xs={2}>
                        <Avatar className={classes.img} src={image} alt="Not found" />
                    </Grid>
                    <Grid item xs={9}>
                        <Typography className={classes.usersEmail} gutterBottom variant="subtitle1">
                            E-Mail : {comment.email}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography gutterBottom variant="subtitle1">
                            Comment : {comment.body}
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
};

export default Comments;