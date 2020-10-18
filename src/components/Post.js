import React from 'react';
import s from './Post.module.css';

const Post =(props) => { 

    

    return( <div className="post-item">
     <div className={s.item}> 
    
     <img className="img-post" src="https://i.ibb.co/Fzxbqzn/nastol-com-ua-138035.jpg" alt="post"/>
     <div> LIKE{ props.like } </div>
     <textarea></textarea>
     <button>Add post</button>
    
     </div>
     
    </div>);
}

export default Post;