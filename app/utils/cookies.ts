import cookie from 'cookie';
import Cookies from 'js-cookie';

export function getParsedCookie(key: string): CookieValue | undefined) {
  const cookieValue = Cookies.get(key);

  if (!cookieValue) {
    return undefined;
  }
  try {
    return JSON.parse(cookieValue);
  } catch (err) {
    return undefined;
  }
}

export type CookieValue = {
  id: number;
  stars: number;
}[];

export function setStringifiedCookie(key: string, value: CookieValue) {
  Cookies.set(key, JSON.stringify(value));
}

export function createSerializedRegisterSessionTokenCookie(token: string) {

  const isProduction = process.env.NODE_ENV === 'production';

  const maxAge = 60 * 60 * 24;

return cookie.serialize('sessionToken', token, {
  maxAge: maxAge,
  expires: new Date(
    Date.now() + maxAge * 1000,
  ),

    httpOnly: true,
    secure: isProduction,
    path: '/',
    sameSite: 'lax'
 });
}
