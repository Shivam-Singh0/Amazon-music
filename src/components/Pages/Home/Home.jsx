// Home.jsx

import { Container } from 'react-bootstrap';
import { useGetBollyWoodMushQuery, useGetTopFiftyIndiaQuery, useGetTopGlobalQuery, useGetTrendingIndiaQuery } from "../../../redux/api/playlistsApi";
import PlaylistSection from "./PlaylistSection";
import { useSearchParams } from 'react-router-dom';

const Home = () => {
  const { data: top50India, isLoading: top50IndiaLoading } = useGetTopFiftyIndiaQuery();
  const { data: trendingIndia, isLoading: trendingIndiaLoading } = useGetTrendingIndiaQuery();
  const { data: topGlobal, isLoading: topGlobalLoading } = useGetTopGlobalQuery();
  const { data: bollyWood, isLoading: bollyWoodLoading } = useGetBollyWoodMushQuery();

  const [searchParam] = useSearchParams();
  const query = searchParam.get('q');
  console.log(query);


  return (
    <Container>
      <PlaylistSection title="Top 50 India" isLoading={top50IndiaLoading} data={top50India} />
      <PlaylistSection title="Trending in India" isLoading={trendingIndiaLoading} data={trendingIndia} />
      <PlaylistSection title="Top Global Tracks" isLoading={topGlobalLoading} data={topGlobal} />
      <PlaylistSection title="Bollywood Mush" isLoading={bollyWoodLoading} data={bollyWood} />
    </Container>
  );
};

export default Home;
