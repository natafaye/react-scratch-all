import React from 'react'
import { useParams } from 'react-router-dom'

export default function PostDetailPage({ postList, commentList }) {
    const { postId } = useParams()

    // use that postId to get just the one post, and just the comments with that postId
    const post = undefined
    const commentsForPost = undefined

  return (
    <div>
        { post.title}
        { commentsForPost.map(comment => <div></div>)}
    </div>
  )
}
