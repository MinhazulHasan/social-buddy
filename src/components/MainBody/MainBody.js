import React, { useState, useEffect } from 'react';
import NavbarComponent from '../NavbarComponent/NavbarComponent';
import Container from '@material-ui/core/Container';
import AllPosts from '../AllPosts/AllPosts';

const MainBody = () => {
    const [query, setQuery] = useState("");
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(
                data => setPosts(data.filter(post => post.title.toLowerCase().includes(query.toLowerCase()) ) )
            )
    }, [query]);
    
    return (
        <Container>
            <NavbarComponent query={query} setQuery={setQuery}></NavbarComponent>
            {
                posts.map(post => <AllPosts key={post.id} post={post}></AllPosts>)
            }
        </Container>
    );
};

export default MainBody;