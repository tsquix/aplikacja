import useFetch from "../hooks/useFetch";
import { useEffect, useReducer } from "react";
import TableDataReducer from "../data/TableDataReducer";
import TableHeader from "../components/TableHeader";
import { Accordion } from "react-bootstrap";

export default function Lab5() {
  const { data: posts } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const { data: users } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  const { data: comments } = useFetch(
    "https://jsonplaceholder.typicode.com/comments"
  );

  const [tableData, dispatch] = useReducer(TableDataReducer, []);

  const genTableData = () => {
    return posts.map((p) => ({
      user: users.find((u) => u.id === p.userId),
      post: p,
      comments: comments.filter((c) => c.postId === p.id),
    }));
  };

  useEffect(() => {
    if (posts.length && users.length && comments.length) {
      dispatch({ type: "sortNATURAL", payload: genTableData() });
    }
  }, [posts, users, comments]);

  const sort = (order) => {
    switch (order) {
      case "userSortASC":
        dispatch({ type: "userSortASC" });
        break;
      case "userSortDESC":
        dispatch({ type: "userSortDESC" });
        break;
      case "titleSortASC":
        dispatch({ type: "titleSortASC" });
        break;
      case "titleSortDESC":
        dispatch({ type: "titleSortDESC" });
        break;
      case "commentsSortASC":
        dispatch({ type: "titleSortASC" });
        break;
      case "commentsSortDESC":
        dispatch({ type: "titleSortDESC" });
        break;
      case "sortNATURAL":
        dispatch({ type: "sortNATURAL", payload: genTableData() });
        break;
      default:
        break;
    }
  };

  return (
    <div className="container mt-4">
      <table className="table table-bordered table-hover">
        <thead className="thead-light">
          <tr>
            <th>
              <TableHeader th="user" sort={sort} />
            </th>
            <th>
              <TableHeader th="title" sort={sort} />
            </th>
            <th>
              <TableHeader th="comments" sort={sort} />
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData.map(({ user, post, comments }) => (
            <tr key={post.id}>
              <td>
                <a href={`/lab5/user/${user?.id}`}>
                  {user ? user.name : "nie znaleziono uzytkownika"}
                </a>
              </td>

              <td>
                <Accordion>
                  <Accordion.Item eventKey={post.id.toString()}>
                    <Accordion.Header>{post.title}</Accordion.Header>
                    <Accordion.Body>{post.body}</Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </td>
              <td className="text-xl text-center ">
                <a href={`/lab5/comments/${post.id}`}>{comments.length}</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
