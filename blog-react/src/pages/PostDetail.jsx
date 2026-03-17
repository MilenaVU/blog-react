
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";

export default function PostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [post, setPost] = useState(null);
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user]);

  useEffect(() => {
    fetch(`https://dummyjson.com/posts/${id}`)
      .then(res => res.json())
      .then(data => setPost(data));
  }, [id]);

  useEffect(() => {
    if (post) {
      fetch(`https://dummyjson.com/users/${post.userId}`)
        .then(res => res.json())
        .then(data => setAuthor(data));
    }
  }, [post]);

  if (!post) return <p style={{ textAlign: "center", marginTop: "50px" }}>Cargando post...</p>;

  return (
    <div style={{ padding: "20px", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Navbar />

      <div style={{
        maxWidth: "800px",
        width: "100%",
        backgroundColor: "#fff",
        padding: "30px",
        borderRadius: "15px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
        marginTop: "20px"
      }}>
        {/* Título */}
        <h1 style={{ color: "#333", marginBottom: "15px" }}>{post.title}</h1>

        {/* Autor */}
        {author && (
          <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
            <img
              src={author.image}
              alt="avatar"
              style={{ width: "50px", height: "50px", borderRadius: "50%", marginRight: "15px" }}
            />
            <div>
              <p style={{ margin: 0, fontWeight: "bold" }}>
                {author.firstName} {author.lastName}
              </p>
              <p style={{ margin: 0, color: "#555", fontSize: "14px" }}>@{author.username}</p>
            </div>
          </div>
        )}

        {/* Body */}
        <p style={{ lineHeight: "1.6", color: "#444" }}>{post.body}</p>

        {/* Tags */}
        <div style={{ margin: "20px 0" }}>
          {post.tags.map(tag => (
            <span key={tag} style={{
              display: "inline-block",
              backgroundColor: "#e0f0ff",
              color: "#007bff",
              padding: "5px 10px",
              borderRadius: "12px",
              marginRight: "8px",
              fontSize: "14px"
            }}>
              #{tag}
            </span>
          ))}
        </div>

        {/* Likes, dislikes y vistas */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          borderTop: "1px solid #eee",
          paddingTop: "15px",
          color: "#555",
          fontWeight: "500"
        }}>
          <span>👍 Likes: {post.reactions?.likes ?? 0}</span>
          <span>👎 Dislikes: {post.reactions?.dislikes ?? 0}</span>
          <span>👁️ Vistas: {post.views ?? 0}</span>
        </div>
      </div>
    </div>
  );
}