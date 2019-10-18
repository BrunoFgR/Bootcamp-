import React from "react";

function PostHeader({ author, date }) {
  return (
    <div className="post-header">
      <img src={author.avatar} className="avatar" />
      <div>
        <span>{author.name}</span>
        <span>{date}</span>
      </div>
    </div>
  );
}

function PostComments({ comments }) {
  return (
    <div className="post-comments">
      <div className="spread">
        {comments.map(comment => (
          <div key={comment.id} className="comment">
            <img src={comment.author.avatar} className="avatar" />
            <p>
              <span>{comment.author.name}</span>
              {comment.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function PostItem({ comments, author, date, content }) {
  return (
    <div className="post">
      <PostHeader author={author} date={date} />
      <p className="post-content">{content}</p>
      <PostComments comments={comments} />
    </div>
  );
}

export default PostItem;
