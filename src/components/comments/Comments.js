import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';
import useHttp from '../../hooks/use-http';
import { getAllComments } from '../../lib/api';
import LoadingSpinner from '../Ui/LoadingSpinner';
import CommentsList from './CommentsList';

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const {sendRequest , status ,data : loadedComments } = useHttp(getAllComments)
  const params = useParams();
  const {quotesId} = params;

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };
  const addcommentHandler= useCallback(()=>{
    sendRequest(quotesId)
  },[sendRequest,quotesId])
  
  useEffect(()=>{
    sendRequest(quotesId)
  },[quotesId,sendRequest])

  let comments;
  if(status === 'pending'){
    comments = <div className='centered'><LoadingSpinner/></div>
  }
  if(status === 'completed' && (loadedComments && loadedComments.length > 0)){
    comments = <div><CommentsList comments={loadedComments}/></div>
  }
  if( status === 'completed' &&(!loadedComments || loadedComments.length === 0))
  {
    comments = <div className='centered'>No comments are not added yet!</div>
  }
  
  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm quoteId={quotesId} onAddComment={addcommentHandler} />}
      {comments}
    </section>
  );
};

export default Comments;
