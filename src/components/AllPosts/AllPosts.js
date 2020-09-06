import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import { Avatar } from "@material-ui/core";

const AllPosts = ({ post }) => {
    const { userId, id, title, body } = post;

    // ------------------- Fetching UserName by using userId -------------------
    const [name, setName] = useState("");
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
            .then((res) => res.json())
            .then((data) => setName(data.name));
    }, [])

    // ------------------- Material UI CSS Classes -------------------
    const useStyles = makeStyles((theme) => ({
        root: {
            width: '100%',
            marginBottom: "15px"
        },
        heading: {
            fontSize: theme.typography.pxToRem(15),
            flexBasis: '30%',
            flexShrink: 0,
            marginLeft: '40px',
            marginTop: "8px"
        },
        secondaryHeading: {
            fontSize: theme.typography.pxToRem(15),
            color: theme.palette.text.secondary,
        },
    }));
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    // // ------------------- Return Satatement -------------------
    return (
        <div className={classes.root}>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
                    <Avatar src={`https://randomuser.me/api/portraits/men/${userId}.jpg`} alt="not found" />
                    <Typography className={classes.heading}> {id}. {name} </Typography>
                    <Typography className={classes.secondaryHeading}> Post Title : {title} </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography container >
                        <Grid item xs={12} >
                            {body}
                        </Grid>
                        <Grid item xs={4}>
                            <Link to={`/post/${id}`}> see comments </Link>
                        </Grid>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default AllPosts;