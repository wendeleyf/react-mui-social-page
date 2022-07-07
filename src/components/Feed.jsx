import { Box } from '@mui/material';
import React from 'react';
import Post from './Post';
import { postList } from '../helpers/PostList';

function Feed() {
  return (
    <Box flex={4} p={2} >
      {postList.map((post) =>{
        return <Post title={post.title} content={post.content} image={post.image} />
      })}
    </Box>
  )
}

export default Feed