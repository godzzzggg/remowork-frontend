import React, { createContext, useState } from 'react';

interface ContextState {
  state: { maps: naver.maps.Map | null };
  actions: { setMaps(maps: naver.maps.Map | null): any };
}
const NaverMapContext = createContext<ContextState>({
  state: { maps: null },
  actions: { setMaps: () => {} },
});

const NaverMapProvider = ({ children }: any) => {
  const [maps, setMaps] = useState<naver.maps.Map | null>(null);
  const value = {
    state: { maps },
    actions: { setMaps },
  };
  return <NaverMapContext.Provider value={value}>{children}</NaverMapContext.Provider>;
};

const { Consumer: NaverMapConsumer } = NaverMapContext;

export { NaverMapProvider, NaverMapConsumer };

export default NaverMapContext;
