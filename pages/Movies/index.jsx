import { Radio, Divider, Pagination } from "antd";
import { Row, Col } from "react-bootstrap";
import MovieCard from "../../Components/Movie/MovieCard";

const MovieList = () => {
   return (
      <>
         <div className="w-100 p-3 text-center">
            <Radio.Group defaultValue="a" buttonStyle="solid">
               <Radio.Button value="a">Action</Radio.Button>
               <Radio.Button value="b">Comedy</Radio.Button>
               <Radio.Button value="c">Romance</Radio.Button>
               <Radio.Button value="d">Horror</Radio.Button>
            </Radio.Group>
            <p className="mt-3">Selection By Genre</p>
         </div>
         <Divider />
         <Row className="w-100 p-3 text-center">
            <Col xl={2} lg={2} md={3} sm={4} xs={6}>
               <MovieCard />
            </Col>
         </Row>
         <div className="text-center">
            <Pagination size="small" total={50} pageSize={5} />
         </div>
      </>
   );
};

export default MovieList;
