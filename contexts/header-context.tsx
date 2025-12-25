import {createContext, ReactNode, useContext, useState} from 'react';

type HeaderLinks = Array<{ href: string; label: string }>;

const HeaderContext = createContext<{
  links: HeaderLinks;
  setLinks: (links: HeaderLinks) => void;
}>({
  links: [],
  setLinks: () => {
  },
});

export const HeaderProvider = ({children}: { children: ReactNode }) => {
  const [links, setLinks] = useState<HeaderLinks>([]);
  return (
    <HeaderContext.Provider value={{links, setLinks}}>
      {children}
    </HeaderContext.Provider>
  );
};

export const useHeaderLinks = () => useContext(HeaderContext);
