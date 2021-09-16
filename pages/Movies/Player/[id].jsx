import VideoPlayer from "../../../Components/VideoPlayer/VideoPlayer";

const PlayerPage = ({ id }) => {
   console.log(id);
   return (
      <div className="p-5">
         <VideoPlayer />
      </div>
   );
};

export const getServerSideProps = (context) => {
   const id = context.params.id;
   return {
      props: {
         id,
         customize: true,
      },
   };
};

export default PlayerPage;
