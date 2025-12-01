/// <reference types="vite/client" />

interface Window {
  HotmartCheckout?: {
    open: (options: { src: string; theme: string }) => void;
  };
}
