import { Card, Divider } from "antd";
import Image from "next/image";
import { Button } from "react-bootstrap";
import Link from "next/link";
import classNames from "classnames";
import classes from "./MovieContent.module.css";

const MovieContent = ({ movieName }) => {
   return (
      <Card
         cover={
            <>
               <Image
                  src={`/Assets/Images/Movies/slider_1.jpg`}
                  alt={movieName}
                  width={100}
                  height={400}
               />
               <div
                  className={classNames(classes.text_img_slider, "text-left")}
               >
                  <h2 className="text-white">Title</h2>
                  <div className="mb-3">
                     <span>
                        <img className="mr-1" src="/Assets/imdb.svg" alt="imdb" width={32} />
                        6.7
                     </span>
                     <Divider className="bg-white" type="vertical" />
                     <span>
                        <img className="mr-1" src="/Assets/clock.svg" alt="clock" width={20} />
                        117 minutes
                     </span>
                     <Divider className="bg-white" type="vertical" />
                     <span>
                        <img
                         className="mr-1"
                           src="/Assets/calendar.svg"
                           alt="calendar"
                           width={20}
                        />
                        2021
                     </span>
                  </div>
                  <Link
                     href="/Movies/Player/[id]"
                     as="/Movies/Player/movie-1"
                     passHref={true}
                  >
                     <Button variant="success">Watch</Button>
                  </Link>
               </div>
            </>
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
