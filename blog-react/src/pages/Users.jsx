// src/pages/Users.jsx
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Users() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  // Redirige a login si no hay usuario
  useEffect(() => {
    if (!user) navigate("/login");
  }, [user]);

  // Cargar usuarios desde la API
  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then(res => res.json())
      .then(data => setUsers(data.users));
  }, []);

  if (!users.length) return <p>Cargando usuarios...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <Navbar />
      <h1>Usuarios de la plataforma 👥</h1>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
        gap: "20px",
        marginTop: "20px"
      }}>
        {users.map(u => (
          <div key={u.id} style={{
            border: "1px solid gray",
            borderRadius: "10px",
            padding: "10px",
            textAlign: "center",
            backgroundColor: "#f9f9f9"
          }}>
            <img
              src={u.image}
              alt={u.firstName}
              style={{ width: "80px", borderRadius: "50%", marginBottom: "10px" }}
            />
            <p><strong>{u.firstName} {u.lastName}</strong></p>
            <p>{u.username}</p>
            <p>{u.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}