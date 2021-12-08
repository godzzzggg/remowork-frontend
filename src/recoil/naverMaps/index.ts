import { atom } from 'recoil';

export const naverMapsAtom = atom<naver.maps.Map | null>({
  key: 'naverMapsAtom',
  default: null,
});
