import React from 'react';
import './Posts.css';


function Posts({ posts }) {

  console.log(posts)
 
    return (
        <div className="posts">
          <div className="posts__content">
             {posts.map(post => (
                <div className="post">
                    <h2>{post.postName}</h2>
                    <p>{post.contents}</p>
                </div>
             ))}
          </div>
        </div>
    )
}

export default Posts;
