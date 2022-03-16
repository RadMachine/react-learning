import {useEffect, useMemo, useState} from 'react'
import {IPost, Sort} from '../components/App'

export const useSorted = (sort: Sort, posts: IPost[]) => useMemo(
  () => sort
    ? [...posts].sort((a, b) => a[sort].toString().localeCompare(b[sort].toString()))
    : [...posts],
  [posts, sort],
)

export const useFiltered = (query: string, posts: IPost[]) => useMemo(
  () => posts.filter(({title}) => title.toLowerCase().includes(query!.toLowerCase())),
  [posts, query],
)

export const usePosts = (sort: Sort, query: string, posts: IPost[]) => {
  return useFiltered(query, useSorted(sort, posts))
}

export const usePostsInit = () => {
  const [posts, setPosts] = useState<IPost[]>(JSON.parse(localStorage.getItem('posts')!) ?? [])
  useEffect(() => localStorage.setItem('posts', JSON.stringify(posts)), [posts])
  return [posts, setPosts] as [IPost[], (_: IPost[]) => void]
}
