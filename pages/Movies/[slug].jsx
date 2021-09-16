import MovieContent from "../../Components/Movies/MovieContent/MovieContent";
import MovieDetails from "../../Components/Movies/MovieDetails/MovieDetails";

const MoviePage = ({ movieName }) => {
   return (
      <section className="p-5">
         <MovieContent movieName={movieName} />
         <MovieDetails />
      </section>
   );
};

export const getServerSideProps = (context) => {
   const movieName = context.params.slug;
   return {
      props: {
         movieName,
      },
   };
};

export default MoviePage;
