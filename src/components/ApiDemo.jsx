
import { useEffect, useState } from "react";

function ApiDemo() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data.slice(0, 6));
        setLoading(false);
      })
      .catch((err) => {
        console.error("API Error:", err);
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <section id="api-demo" className="section">
      <div className="container">
        <h2 className="section-title">
          API <span className="gradient-text">Demo</span>
        </h2>

        <p className="muted">
          Sample user information fetched from an external API.
        </p>

        {loading && <p className="muted">Loading users...</p>}

        {error && (
          <p className="muted">
            Unable to load users. Please try again later.
          </p>
        )}

        {!loading && !error && (
          <div className="user-grid">
            {users.map((user) => (
              <div className="card" key={user.id}>
                <h3>{user.name}</h3>
                <p className="muted">{user.email}</p>
                <p className="user-city">{user.address.city}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default ApiDemo;
