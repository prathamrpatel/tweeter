import { api } from '~/utils/api';
import { Heading } from '@chakra-ui/react';
import { UserButton } from '@clerk/nextjs';
import NavBar from '~/components/NavBar';

export default function Home() {
  const hello = api.post.hello.useQuery({ text: 'from tRPC' });

  return (
    <>
      <NavBar />
      <div>welcome to tweeter</div>
      <Heading>hello</Heading>
      <UserButton afterSignOutUrl="/" />
    </>
  );
}
