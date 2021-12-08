import React from 'react';
import Head from 'next/head';

const HTMLHead = () => {
  return (
    <Head>
      <title>RemoWork: 리모워크</title>
      <meta name='description' content='remowork' />
      <link rel='icon' href='/favicon.ico' />

      <script
        type='text/javascript'
        src='https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=iyh74glokv'
      ></script>
    </Head>
  );
};

export default HTMLHead;
