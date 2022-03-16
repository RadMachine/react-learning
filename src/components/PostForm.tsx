import React, {FC, MouseEventHandler, useRef} from 'react'
import Input from './UI/Input/input'
import CustomBtn from './UI/Button/button'
import {CreatePost} from './App'

interface IPostFormProps {
  createPost: CreatePost
}

const PostForm: FC<IPostFormProps> = (props) => {
  const titleInput = useRef<HTMLInputElement>(null)
  const bodyInput = useRef<HTMLInputElement>(null)

  const addPost: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    const newPost = {
      title: titleInput.current!.value,
      body: bodyInput.current!.value,
      id: Date.now(),
    }
    props.createPost(newPost)
    titleInput.current!.value = bodyInput.current!.value = ''
  }

  return (
    <form action="">
      <Input ref={titleInput} type="text" placeholder="title"/>
      <Input ref={bodyInput} type="text" placeholder="body"/>
      <CustomBtn onClick={addPost}>Добавить</CustomBtn>
    </form>
  )
}

export default PostForm
