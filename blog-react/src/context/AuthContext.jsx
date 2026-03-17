import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

// 1️⃣ Crear el contexto
const AuthContext = createContext();

// 2️⃣ Proveedor del contexto
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Detecta cambios de estado de autenticación (login/logout)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Guarda el usuario logueado o null si cerró sesión
    });

    // Limpieza al desmontar
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
};

// 3️⃣ Hook para usar el contexto fácilmente
export const useAuth = () => useContext(AuthContext);