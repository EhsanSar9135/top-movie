import moment from "moment";
import { useState } from "react";
import { Comment, Form, Button, List, Input, Card, Divider } from "antd";

const { TextArea } = Input;

const CommentList = ({ comments }) => (
   <List
      className="w-100"
      dataSource={comments}
      header={`${comments.length} ${comments.length > 1 ? "replies" : "reply"}`}
      itemLayout="horizontal"
      renderItem={(props) => <Comment {...props} />}
   />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
   <>
      <Form.Item>
         <TextArea row={4} onChange={onChange} value={value} />
      </Form.Item>
      <Form.Item>
         <Button
            htmlType="submit"
            loading={submitting}
            onClick={onSubmit}
            type="primary"
         >
            Add Comment
         </Button>
      </Form.Item>
   </>
);

const MovieComment = () => {
   const [comments, setComments] = useState([]);
   const [submitting, setSubmitting] = useState(false);
   const [value, setValue] = useState("");

   const handleSubmit = () => {
      if (!value) {
         return;
      }
      setSubmitting(true);
      setTimeout(() => {
         setSubmitting(false);
         setValue("");
         setComments([
            ...comments,
            {
               author: "HAn Solo",
               avatar:
                  "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
               content: <p>{value}</p>,
               datetime: moment().fromNow(),
            },
         ]);
      }, 1000);
   };

   const handleChange = (event) => {
      setValue(event.target.value);
   };
   return (
      <Card className="mt-5">
         <Divider>Comments</Divider>
         {comments.length > 0 && <CommentList comments={comments} />}
         <Comment
            className="w-100"
            content={
               <Editor
                  onChange={handleChange}
                  onSubmit={handleSubmit}
                  submitting={submitting}
                  value={value}
               />
            }
         />
      </Card>
   );
};

export default MovieComment;
