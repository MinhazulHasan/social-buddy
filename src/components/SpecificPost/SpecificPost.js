import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Button } from '@material-ui/core';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { useHistory } from 'react-router-dom';
import Comments from '../Comments/Comments';

const SpecificPost = () => {

    const { postId } = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);

    // ------------------- Getting the selected post and respective comments -------------------
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then((res) => res.json())
            .then((data) => setPost(data));

        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
            .then((res) => res.json())
            .then((data) => setComments(data));
    }, [])


    const history = useHistory();
    const handleClick = () => {
        history.push('/main');
    }

    // ------------------- Material UI CSS Classes -------------------
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            marginTop: '10px'
        },
        paper: {
            padding: theme.spacing(2),
            margin: 'auto'
        },
        image: {
            width: 128,
            height: 128,
        },
        img: {
            margin: 'auto',
            display: 'block',
            maxWidth: '100%',
            maxHeight: '100%'
        },
        postTitle: {
            fontWeight: '700',
            textAlign: 'center',
            margin: '15px 0'
        }
    }));
    const classes = useStyles();

    // ------------------- Calculate User ID -------------------
    const userId = (postId % 10 === 0) ? (postId / 10) : Math.floor(postId / 10 + 1);

    return (
        <Container maxWidth='md'>
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <Grid container spacing={2}>
                        <Grid item>
                            <ButtonBase className={classes.image}>
                                <img className={classes.img} alt="not found" src={`https://randomuser.me/api/portraits/men/${userId}.jpg`} />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography className={classes.postTitle} gutterBottom variant="subtitle1">
                                        {post.title}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        {post.body}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Typography variant="subtitle1">
                                    <Button onClick={handleClick} variant="outlined" color="primary" startIcon={<KeyboardBackspaceIcon />}>Back</Button>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </div>

            {/* Display Comments by passing comment props */}

            {comments.map(comment => <Comments comment={comment} key={comment.id}></Comments>)}

        </Container>
    );
};

export default SpecificPost;