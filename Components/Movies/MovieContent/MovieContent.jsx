import { Card } from "antd";
import Image from "next/image";

const MovieContent = ({ movieName }) => {
   return (
      <Card
         cover={
            <Image
               src={`/Assets/Images/Movies/slider_1.jpg`}
               alt={movieName}
               width={100}
               height={400}
            />
         }
      >
         <Card.Meta
            title={<h2>{movieName}</h2>}
            description={<p>This movie is belong to the Top Movies</p>}
         />
      </Card>
   );
};

export default MovieContent;
