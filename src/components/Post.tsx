import React, {FC} from 'react'
import CustomBtn from './UI/Button/button'
import {DeletePost, IPost} from './App'

interface IPostProps {
  post: IPost,
  deletePost: DeletePost
}

const Post: FC<IPostProps> = ({post, ...props}) => {
  const deletePost = () => props.deletePost(post.id)

  return (
    <div className="post">
      <div className="content">
        <strong>{`${post.id}. ${post.title}`}</strong>
        <div>{post.body}</div>
      </div>
      <div className="actions">
        <CustomBtn onClick={deletePost}>Удалить</CustomBtn>
      </div>
    </div>
  )
}

export default Post

