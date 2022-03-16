import React, {useState} from 'react'
import '../styles/App.css'
import Post from './Post'
import PostForm from './PostForm'
import {S} from './UI/Separator/Separator'
import {Actions} from './Actions/Actions'
import {usePosts, usePostsInit} from '../hooks/posts'

const App = () => {
  const [posts, setPosts] = usePostsInit()

  const createPost: CreatePost = (newPost) => setPosts([newPost, ...posts])
  const deletePost: DeletePost = (id) => setPosts(posts.filter(post => post.id !== id))

  const [actions, setActions] = useState<IActions>({sort: '', query: ''})
  const setAction: SetAction = (key, value) => {setActions({...actions, [key]: value})}

  const filtered = usePosts(actions.sort, actions.query, posts)

  return (
    <div className="app">
      <PostForm createPost={createPost}/>
      <S/>
      <Actions actions={actions} setAction={setAction}/>

      {(!posts[0]) ? <h1>Нет постов</h1> : ''}
      {filtered.map(postData => <Post
        post={postData}
        key={postData.id}
        deletePost={deletePost}
      />)}
    </div>
  )
}

export default App

export interface IPost {
  id: string | number,
  title: string,
  body: string
}

export type DeletePost = (_: IPost['id']) => void

export type CreatePost = (_: IPost) => void

export type Sort = keyof IPost | ''

export interface IActions {
  sort: Sort,
  query: string
}

export type SetAction = (key: keyof IActions, value: IActions[typeof key]) => void
