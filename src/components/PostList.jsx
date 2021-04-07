import { useState, useEffect } from 'react';
import axios from 'axios';

function PostList() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const  fetchData = () => {
            axios
            .get('http://localhost:8001/posts/')
            .then(res => setPosts(res.data))
        }
        fetchData()
    }, [])

    return (
        <div className='PostList'>
            {posts &&
            posts.map((post) => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    )
}

export default PostList;

