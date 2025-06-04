
import React from 'react';
import type { NavLink } from './types';

export const APP_NAME = "Casper Coin";
export const LOGO_TEAL_COLOR = "#82C3BE";

export const SOCIAL_LINKS = {
  PUMP_FUN: "https://pump.fun/board", // Placeholder - replace with actual Casper Coin pump.fun link
  TELEGRAM: "https://t.me/CasperFriendlyCoin", // Placeholder
  TWITTER: "https://x.com/CasperFriendlyCoin", // Placeholder
};

export const NAVIGATION_LINKS: NavLink[] = [
  { href: "#sobre", label: "Sobre" },
  { href: "#roadmap", label: "Roadmap" },
  { href: "#comprar", label: "Como Comprar" },
  { href: "#comunidade", label: "Comunidade" },
];

interface IconProps {
  className?: string;
  "aria-hidden"?: React.AriaAttributes['aria-hidden'];
}

// Placeholder icons for roadmap or features
export const GhostIcon = ({ className, "aria-hidden": ariaHidden }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className || "w-6 h-6"} aria-hidden={ariaHidden}>
    <path fillRule="evenodd" d="M4.5 2.25a.75.75 0 000 1.5v16.5a.75.75 0 001.5 0v-1.875a.75.75 0 01.604-.734A14.25 14.25 0 0018.695 7.5a.75.75 0 00-1.39-.55 12.75 12.75 0 01-11.205 9.808.75.75 0 01-.6-1.465A9.723 9.723 0 0013.96 9.32a.75.75 0 00-1.018-1.018A11.216 11.216 0 016 14.625v-3.375a.75.75 0 00-1.5 0v1.875a.75.75 0 01-1.5 0V2.25z" clipRule="evenodd" />
    <path d="M6.122 18.706a.75.75 0 01-.604.734A14.25 14.25 0 003.305 7.5a.75.75 0 011.39-.55 12.75 12.75 0 0011.205 9.808.75.75 0 01.6 1.465A9.723 9.723 0 017.54 9.32a.75.75 0 011.018-1.018A11.216 11.216 0 006 14.625V18a.75.75 0 01-.604.706z" />
 </svg>
);

export const RocketIcon = ({ className, "aria-hidden": ariaHidden }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className || "w-6 h-6"} aria-hidden={ariaHidden}>
    <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 00-1.071 1.071L12.19 4.027a17.185 17.185 0 00-3.082 1.506C7.096 6.484 6 8.186 6 10.233v5.517a.75.75 0 001.071.671L12 14.21l4.929 2.211a.75.75 0 001.071-.671v-5.517c0-2.047-.96-3.749-2.963-4.718a17.304 17.304 0 00-3.082-1.506l.308-.742a.75.75 0 00-1.071-1.071l-.792.396a.75.75 0 00-.383.918l.463 1.108c-.24-.034-.483-.064-.728-.089l-1.108-.463a.75.75 0 00-.918.383l-.396.792zM12 8.25a.75.75 0 000 1.5h.008a.75.75 0 000-1.5H12zm-.75 3.75a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008zM9.75 9a.75.75 0 000 1.5h.008a.75.75 0 000-1.5H9.75z" clipRule="evenodd" />
    <path d="M12 21a8.212 8.212 0 005.038-1.795.75.75 0 00-.865-1.216A6.712 6.712 0 0112 19.5a6.712 6.712 0 01-4.173-1.51.75.75 0 00-.866 1.215A8.212 8.212 0 0012 21z" />
  </svg>
);

export const UsersIcon = ({ className, "aria-hidden": ariaHidden }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className || "w-6 h-6"} aria-hidden={ariaHidden}>
    <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.07 10.07 0 01-3.71.917c-.21.004-.415.008-.624.008a.75.75 0 01-.75-.75v-.653a3.375 3.375 0 00-3.375-3.375H8.125a3.375 3.375 0 00-3.375 3.375v.653a.75.75 0 01-.75.75c-.207 0-.413-.003-.624-.007a10.07 10.07 0 01-3.71-.917 2.25 2.25 0 01-.233-.962l-.001-.144c0-1.194.756-2.238 1.847-2.663a11.258 11.258 0 018.652 0c1.09.425 1.847 1.47 1.847 2.663z" />
  </svg>
);

export const PuzzleIcon = ({ className, "aria-hidden": ariaHidden }: IconProps) => (
 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className || "w-6 h-6"} aria-hidden={ariaHidden}>
    <path fillRule="evenodd" d="M11.03 2.47a.75.75 0 010 1.06l-4.5 4.5a.75.75 0 01-1.06-1.06l4.5-4.5a.75.75 0 011.06 0zm2.47-.47a.75.75 0 011.06 0l4.5 4.5a.75.75 0 11-1.06 1.06l-4.5-4.5a.75.75 0 010-1.06zm-2.47 10.94a.75.75 0 010-1.06l4.5-4.5a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0zm-4.63 2.63a.75.75 0 011.061-.001l.001.001 2.374 2.373a.75.75 0 01-1.06 1.06L8.373 18.03a.75.75 0 01-.001-1.061z" clipRule="evenodd" />
    <path d="M12.75 6a.75.75 0 00-1.5 0v5.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V6z" />
    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm.75 0a9 9 0 1118 0 9 9 0 01-18 0z" clipRule="evenodd" />
  </svg>
);
