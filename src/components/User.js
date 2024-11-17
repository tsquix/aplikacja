import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function User() {
  const { data: users } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  const { id } = useParams();
  const user = users && users.filter((u) => u.id === parseInt(id))[0];

  return (
    <div>
      {!user && <p>user not found</p>}
      {user && (
        <div className="table-responsive">
          <table className="table">
            <tbody>
              <tr>
                <td>
                  <strong>Name:</strong>
                </td>
                <td>{user.name}</td>
              </tr>
              <tr>
                <td>
                  <strong>Username:</strong>
                </td>
                <td>{user.username}</td>
              </tr>
              <tr>
                <td>
                  <strong>Email:</strong>
                </td>
                <td>{user.email}</td>
              </tr>
              <tr>
                <td>
                  <strong>Phone:</strong>
                </td>
                <td>{user.phone}</td>
              </tr>
              <tr>
                <td>
                  <strong>Address:</strong>
                </td>
                <td>
                  {user.address?.street}, {user.address?.city}
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Website:</strong>
                </td>
                <td>{user.website}</td>
              </tr>
              <tr>
                <td>
                  <strong>Company:</strong>
                </td>
                <td>{user.company?.name}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
