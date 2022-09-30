import { useEffect, useRef } from 'react';

import classes from './NewCommentForm.module.css';
import useHttp from '../../hooks/use-http';
import { addComment } from '../../lib/api';
import LoadingSpinner from '../Ui/LoadingSpinner';

const NewCommentForm = (props) => {
  const commentTextRef = useRef();

  const {sendRequest , status, error} = useHttp(addComment)

  const {onAddComment} = props;

  useEffect(()=>{
    if(status === 'completed' && !error)
    {
      onAddComment();
    }
  },[status,onAddComment,error])

  const submitFormHandler = (event) => {
    const entereText = commentTextRef.current.value;
    event.preventDefault();
    sendRequest({commentData :  {text : entereText},quoteId : props.quoteId})

    // optional: Could validate here

    // send comment to server
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      {status === 'pending' && <div className='centered'><LoadingSpinner/></div>}
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor='comment'>Your Comment</label>
        <textarea id='comment' rows='5' ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className='btn'>Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
