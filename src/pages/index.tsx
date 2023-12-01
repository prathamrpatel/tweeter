import Head from 'next/head';
import Link from 'next/link';
import { api } from '~/utils/api';
import styles from './index.module.css';
import { Heading } from '@chakra-ui/react';

export default function Home() {
  const hello = api.post.hello.useQuery({ text: 'from tRPC' });

  return (
    <>
      <div>
        <div>welcome to tweeter</div>
        <Heading>hello</Heading>
      </div>
    </>
  );
}
