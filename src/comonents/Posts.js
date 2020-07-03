import React from 'react';
import Post from './Post';
import { connect } from 'react-redux';

const Posts = ({syncPost}) => {
    if (!syncPost.length) {
        return <p className='text-center'> Not Post Yet</p>
    }
    return syncPost.map(post => <Post post={post} key={post.id}/>)
}

const mapStateToProps = (state) => {
    return {
        syncPost: state.posts.posts
    }
}

export default connect(mapStateToProps,null)(Posts)