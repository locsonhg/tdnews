import Head from "next/head";
import { useRouter } from "next/router";
import useSWR from "swr";
import Loading from "../components/Loading";
import GridNews from "../components/GridNews";
import RelatedArticles from "../components/RelatedArticles";
import VideoGrid from "../components/VideoGrid";
import PhotoGalleries from "../components/PhotoGalleries";
import AdvertisementHorizontal from "../components/AdvertisementHorizontal";
import { domainApi } from "../requestMethods";

const Home = () => {
  const { query } = useRouter();
  const page = query.page || 1;
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR(`${domainApi}/posts?page=${page}`, fetcher);
  if (error) return <div className="error">Failed to load</div>;
  if (!data) return <Loading />;

  return (
    <>
      <Head>
        <title>TDNews | Hoàng Văn Tùng</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GridNews posts={data.posts} page={data.page} />
      <RelatedArticles posts={data.posts} />
      <VideoGrid posts={data.posts} page={data.page} />
      <PhotoGalleries posts={data.posts} page={data.page} />
      <AdvertisementHorizontal
        photo="https://res.cloudinary.com/tachibao/image/upload/v1666541043/posts/52432241465_5c8ed1ad36_k_gha4mz_aq2csh.jpg"
        blurhash="LWF~:ss:?bbaWCj[aya{~pWBM{jZ"
        alt="alt"
      />
    </>
  );
};

export default Home;
