import { Divider, Tag, Avatar } from "antd";
import { Card, Col, Row } from "react-bootstrap";

const MovieDetails = () => {
   return (
      <Card className="mt-5">
         <Divider>Details</Divider>
         <Row>
            <Col xs={1} sm={1} md={1} lg={1} xl={1}>
               <Tag>
                  <Avatar
                     size={32}
                     src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  />
                  {"Actor"}
               </Tag>
            </Col>
         </Row>
      </Card>
   );
};

export default MovieDetails;
