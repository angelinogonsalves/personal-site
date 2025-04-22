'use client';

import { useEffect } from 'react';

export default function RedirectToLang() {
  useEffect(() => {
    const lang = localStorage.getItem('lang') || 'pt';
    window.location.href = `/${lang}`;
  }, []);

  return null;
}
