import React from 'react';
import { useRecoilValue } from 'recoil';
import { naverMapsAtom } from '@/recoil/naverMaps';

const useNaverMaps = () => {
  const maps = useRecoilValue(naverMapsAtom);
  return [maps];
};

export default useNaverMaps;
