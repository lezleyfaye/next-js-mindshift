'use client';
import { useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from './utils/localstorage';

export default function CookieBanner() {
  const [areCookiesTermsAccepted, setAreCookiesTermsAccepted] = useState(false);

  useEffect(() => {
    const localStorageValue = getLocalStorage('areCookiesTermsAccepted');
    const initialState =
      localStorageValue === undefined ? false : localStorageValue;
    setAreCookiesTermsAccepted(initialState);
  }, []);

  return areCookiesTermsAccepted ? (
    <div />
  ) : (
    <>
      <div>Cookie Banner terms and conditions</div>
      <button
        onClick={() => {
          setAreCookiesTermsAccepted(true);
          setLocalStorage('areCookiesTermsAccepted', true);
        }}
      >
        Accept
      </button>
    </>
  );
}
