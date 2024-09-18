import {jwtDecode } from 'jwt-decode';

interface TokenPayload {
    id: string,
    name: string,
    lastname: string,
    role: string
}

export const decodeToken = (token: string) => {
    return jwtDecode<TokenPayload>(token);
}