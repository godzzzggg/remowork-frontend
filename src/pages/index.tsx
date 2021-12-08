import type { NextPage } from 'next';
import { css } from '@emotion/react';
import NaverMap from '@/components/naverMaps';
import useNaverMaps from '@/hooks/naverMaps/useNaverMaps';

const Home: NextPage = () => {
  const [maps] = useNaverMaps();
  console.log('pages', maps);

  return (
    <div
      css={css`
        height: 100%;
      `}
    >
      <NaverMap />
    </div>
  );
};

export default Home;
