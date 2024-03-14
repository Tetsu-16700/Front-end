import { useNavigate } from "react-router-dom";

export function AuthHook() {
  // para cambiar de ruta 
  const navigate = useNavigate();

  function validateSession() {
    // validar sesion
    const value = window.localStorage.getItem("auth");

    // para que redigir a login
    if (!value || value !== "authenticated") {
      navigate("/login");
    }
  }

  // redirige a la oag principal
  function validateSessionLogin() {
    const value = window.localStorage.getItem("auth");

    if (value && value === "authenticated") {
      navigate("/");
    }
  }

  return { validateSession, validateSessionLogin };
}
