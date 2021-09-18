import { Divider } from "antd";
import Head from "next/head";
import MoviePoster from "../Components/MoviePoster";
import MovieSlider from "../Components/Movie_Slider/MovieSlider";
import Slider from "../Components/Poster_Slider/Slider";

const Home = () => {
   return (
      <>
         <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <div>
            <Slider />
            <Divider orientation="center">Top Movies</Divider>
            <MovieSlider dark />
            <MoviePoster />
         </div>
      </>
   );
};

export default Home;
