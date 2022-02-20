import Head from 'next/head';

import { Container } from '../styles/Home';

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Template - Nextjs-Typescript-Eslint-Prettier</title>
      </Head>

      <main>
        <h1>Hello World</h1>
      </main>
    </Container>
  );
};

export default Home;
