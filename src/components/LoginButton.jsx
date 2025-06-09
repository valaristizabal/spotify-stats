import React from 'react';

export function LoginButton(){
    const clientId = 'afd8dc773e82437ea3c129a63c71dd2b'; // pon tu client ID real
    const redirectUri = 'https://spotify-stats-five-eta.vercel.app/callback';
    const scopes = 'user-top-read user-read-email';
    const responseType = 'token';

    const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scopes)}&response_type=${responseType}`;
    return (
        <a href={authUrl}>
        <button>Iniciar sesión con Spotify</button>
        </a>
    );
}