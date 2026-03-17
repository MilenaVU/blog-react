
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { user } = useAuth();

  // Si ya hay usuario logueado, ir a home
  useEffect(() => {
    if (user) navigate("/");
  }, [user]);

  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate("/"); 
    } catch (error) {
      console.log("Error login: ", error.message);
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f0f4f8"
    }}>
      <div style={{
        backgroundColor: "#fff",
        padding: "40px",
        borderRadius: "15px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
        textAlign: "center",
        maxWidth: "400px",
        width: "100%"
      }}>
        <h1 style={{ marginBottom: "20px", color: "#333" }}>Bienvenido a Blog 🚀</h1>
        <p style={{ marginBottom: "30px", color: "#555" }}>Inicia sesión con tu cuenta de Google</p>

        <button
          onClick={loginWithGoogle}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            padding: "10px 20px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#4285F4",
            color: "#fff",
            fontWeight: "bold",
            cursor: "pointer",
            fontSize: "16px"
          }}
        >
         
          Iniciar sesión 
        </button>
      </div>
    </div>
  );
}