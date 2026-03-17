import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { auth } from "../firebase";

export default function Navbar() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.signOut();
    navigate("/login");
  };

  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 20px",
      backgroundColor: "#282c34",
      color: "white",
      borderRadius: "8px",
      marginBottom: "20px"
    }}>
      <div style={{ display: "flex", gap: "15px" }}>
        <strong 
          style={{ cursor: "pointer" }} 
          onClick={() => navigate("/")}
        >
          🏠 Home
        </strong>

        {/*  botón Users */}
        {user && (
          <strong 
            style={{ cursor: "pointer" }} 
            onClick={() => navigate("/users")}
          >
            👥 Users
          </strong>
        )}
      </div>

      {user && (
        <div>
          <span style={{ marginRight: "15px" }}>
            {user.displayName}
          </span>
          <button 
            onClick={handleLogout} 
            style={{
              padding: "5px 10px",
              cursor: "pointer",
              borderRadius: "5px",
              border: "none",
              backgroundColor: "#ff4d4d",
              color: "white"
            }}
          >
            Cerrar sesión
          </button>
        </div>
      )}
    </nav>
  );
}