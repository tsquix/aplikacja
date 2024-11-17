import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function Comments() {
  const { data: posts } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const { data: users } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  const { data: comments } = useFetch(
    "https://jsonplaceholder.typicode.com/comments"
  );
  const { id } = useParams();
  const post = posts && posts.find((p) => p.id === parseInt(id));
  const filteredComments =
    comments && comments.filter((comment) => comment.postId === parseInt(id));
  return (
    <div className="container mt-4">
      <h2 className="mb-3">Post Title</h2>
      <p className="lead">{post ? post.title : "nie znaleziono postu"}</p>
      <ul className="list-group">
        {filteredComments.map((c) => (
          <li className="list-group-item" key={c.id}>
            <h5>{c.name}</h5>
            <p>{c.body}</p>
            <small className="text-muted">Author: {c.email}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}
