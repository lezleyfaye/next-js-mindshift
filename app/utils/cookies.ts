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
