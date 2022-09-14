import React, {useState} from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import SavedPost from './SavedPost/SavedPost';
import useStyles from './styles';

const Saved = ({ setCurrentId }) => {
  const { posts, isLoading } = useSelector((state) => state.posts);
  const user = JSON.parse(localStorage.getItem('profile'));
  const userId = user?.result?._id || user?.result?.sub;
  const classes = useStyles();
  console.log(posts);
  const noice = [];

  if ((!posts.length && !isLoading)) return 'No posts';

  for (let i = 0; i < posts.length; i++) {
    const hasSavedPost = posts[i]?.saved?.find((save) => save === (userId));
    console.log(hasSavedPost)
    if(hasSavedPost){
        noice.push(posts[i]);
        console.log(noice);
    }
  }
    return (
        isLoading ? <CircularProgress /> : (
          <Grid className={classes.container} container alignItems="stretch" spacing={3}>
            {noice.map((post) => (
              <Grid key={post?._id} item xs={12} sm={12} md={6} lg={3}>
                <SavedPost post={post} setCurrentId={setCurrentId} />
              </Grid>
            ))}
          </Grid>
        )
      );
};

export default Saved;
