// src/pages/Home.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { auth } from "../firebase";
import Navbar from "../components/Navbar";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const { user } = useAuth();
  const navigate = useNavigate();

  // Redirige a login si no hay usuario
  useEffect(() => {
    if (!user) navigate("/login");
  }, [user]);

  // Cargar posts y usuarios
  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then(res => res.json())
      .then(data => setPosts(data.posts));

    fetch("https://dummyjson.com/users")
      .then(res => res.json())
      .then(data => setUsers(data.users));
  }, []);

  // Filtrar posts por id o userId
  const filteredPosts = posts.filter(
    post => search === "" || post.id == search || post.userId == search
  );

  return (
    <div style={{ padding: "20px" }}>
      {/* Menú de navegación */}
      <Navbar />

      <h1>Blog 🚀</h1>

      {/* Buscador */}
      <input
        type="number"
        placeholder="Buscar por id o usuario"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "10px", marginBottom: "20px", width: "100%" }}
      />

      {/* Lista de posts */}
      {filteredPosts.map(post => {
        const author = users.find(u => u.id === post.userId);
        return (
          <div
            key={post.id}
            onClick={() => navigate(`/post/${post.id}`)}
            style={{
              border: "1px solid gray",
              margin: "10px 0",
              padding: "15px",
              borderRadius: "10px",
              cursor: "pointer",
              backgroundColor: "#f9f9f9"
            }}
          >
            <h2>{post.title}</h2>
            <p>{post.body}</p>

            <p>
              <strong>Tags:</strong>{" "}
              {post.tags.map(tag => (
                <span key={tag} style={{ color: "blue", marginRight: "5px" }}>
                  #{tag}
                </span>
              ))}
            </p>

            {author && (
              <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                <img
                  src={author.image}
                  width="40"
                  style={{ borderRadius: "50%" }}
                  alt="avatar"
                />
                <span>{author.firstName} {author.lastName}</span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}