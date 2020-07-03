import React from 'react';
import Post from './Post';
import { useDispatch, useSelector } from 'react-redux';
import { fetchedPosts } from '../Redux/actions';
import Loader from './loader';

const FetchedPosts = () => {
    const dispatch = useDispatch()
    
    const loading = useSelector((state) => {
        return state.app.loading
    })
    
    const posts = useSelector((state) => {
        return state.posts.fetchedPosts
    })
    if (loading) {
        return   <Loader/>
    }

    if (!posts.length) {
        return <button className="btn btn-primary" onClick={() => dispatch(fetchedPosts())}>upload</button>
    }
    return  posts.map(post => <Post post={post} key={post.id}/>)
}

export default FetchedPosts