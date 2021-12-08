import React, { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { css } from '@emotion/react';
import { naverMapsAtom } from '@/recoil/naverMaps';
import { NaverMapConsumer } from '@/contexts/naverMaps';

interface Props {
  options?: naver.maps.MapOptions;
}
const NaverMap: React.FC<Props> = ({ options }: Props) => {
  const [maps, setMaps] = useState<naver.maps.Map | null>(null);
  const setNaverMaps = useSetRecoilState(naverMapsAtom);

  useEffect(() => {
    const map = new naver.maps.Map('maps', options);
    setMaps(map);
    // setNaverMaps(new naver.maps.Map('maps', options));
  }, [options]);

  return (
    <>
      <div
        id='maps'
        css={css`
          height: 100%;
        `}
      />
      <NaverMapConsumer>{({ actions }) => actions.setMaps(maps) || <></>}</NaverMapConsumer>
    </>
  );
};

export default NaverMap;
