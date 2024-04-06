import React from 'react';
import {Card, CardActions, CardContent, CardHeader, CardMedia, Grid, IconButton, styled} from '@mui/material';
import {apiURL} from '../../constants';
import imageNotAvailable from '../../assets/images/no-image-available.png';
import {Link} from "react-router-dom";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {useAppDispatch, useAppSelector} from "../../app/hook";
import {selectPosts} from "../../store/postsSlice";
import DeleteIcon from '@mui/icons-material/Delete';
import {deletePost} from "../../store/postsThunks";

const ImageCardMedia = styled(CardMedia)({
  height: 0,
  paddingTop: '56.25%',
});

interface Props {
  id: string;
  title: string;
  content: string;
  image: string | null;
  dateTime: string;
}

const PostItem: React.FC<Props> = ({id, title, content, image, dateTime}) => {

  const dispatch = useAppDispatch();
  const posts = useAppSelector(selectPosts);
  const post = posts.find(p => p.id === id);
  let cardImage = imageNotAvailable as string;

  const formattedDateTime = new Date().toLocaleString();

  if (image) {
    cardImage = apiURL + '/' + image;
  }

  return (
    <Grid item xs={10} sm={10} md={6} lg={4}>
      <Card sx={{height: '100%'}}>
        <CardHeader title={title}/>
        <ImageCardMedia
          image={cardImage}
          title={title}
        />
        <CardContent>
          <p>
            {content}
          </p>
          <strong>{formattedDateTime}</strong>
        </CardContent>
        <Grid container justifyContent="flex-end">
          <CardActions>
            <IconButton component={Link} to={`/posts/${id}`}>
              <ArrowForwardIcon />
            </IconButton>
            <IconButton onClick={() => post && dispatch(deletePost(post.id))}>
              <DeleteIcon />
            </IconButton>
          </CardActions>
        </Grid>
      </Card>
    </Grid>
  );
};

export default PostItem;