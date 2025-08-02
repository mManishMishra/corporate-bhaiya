// utils/checkTokenExpiry.ts
import { jwtDecode } from "jwt-decode";

interface JwtPayload {
  exp: number;
  [key: string]: any;
}

export const isTokenValid = (token: string | null): boolean => {
  if (!token) return false;
  try {
    // const decoded: any = jwtDecode(token);
    const decoded: JwtPayload = jwtDecode(token);
    const now = Date.now() / 1000;
    return decoded.exp > now;
  } catch {
    return false;
  }
};
