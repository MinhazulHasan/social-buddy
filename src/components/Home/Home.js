import React from 'react';
import './Home.css';
import Button from '@material-ui/core/Button';
import ForwardTwoTone from '@material-ui/icons/ForwardTwoTone';
import { useHistory } from 'react-router-dom';

const Home = () => {
    const history = useHistory();
    const handleClick = () => {
        history.push('/main')
    }
    return (
        <div className="homeComponent">
            <h1>Welcome To Social Buddy</h1>
            <Button onClick={handleClick} variant="contained" color="secondary" endIcon={<ForwardTwoTone />}>
                Get Started
            </Button>
        </div>
    );
};

export default Home;