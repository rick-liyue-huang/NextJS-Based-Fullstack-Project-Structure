import { NextPageWithLayout } from './page';
import CatCard from '../components/cards/cat/CatCard';
import { mockCatCardProps } from '../components/cards/cat/CatCard.mocks';
import PrimaryLayout from '../components/layout/primary/PrimaryLayout';
import SidebarLayout from '../components/layout/sidebar/SidebarLayout';

const Home: NextPageWithLayout = () => {
  return (
    <section className={'bg-gradient-to-bl from-amber-50 to-blue-200'}>
      <h1>
        Welcome to <a href="https://nextjs.org">NextJS</a>
      </h1>
      <CatCard {...mockCatCardProps.base} />
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <SidebarLayout />
      {page}
    </PrimaryLayout>
  );
};
