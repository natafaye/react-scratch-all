
export default function PostList({ posts }) {
    return (
        <div>
            { posts.map(post => (
                <div className="border p-3 mb-3">{ post.text }</div>
            ))}
        </div>
    )
}