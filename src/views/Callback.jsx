import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // si usas react-router

export function Callback() {
  const navigate = useNavigate();

  useEffect(() => {
    // Obtenemos el hash de la URL (después del #)
    const hash = window.location.hash;

    // Parseamos el token del hash
    const params = new URLSearchParams(hash.substring(1)); // quitamos el #

    const accessToken = params.get('access_token');

    if (accessToken) {
      // Guardamos el token en localStorage o en un estado global
      localStorage.setItem('spotifyAccessToken', accessToken);

      // Redirigimos a la página principal o dashboard
      navigate('/');
    } else {
      // Si no hay token, redirigir al login
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div>
      <h2>Procesando autenticación...</h2>
    </div>
  );
}
