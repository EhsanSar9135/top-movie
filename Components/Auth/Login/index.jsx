import { Button, Form, Input } from "antd";

const layout = {
   labelCol: {
      span: 4,
   },
   wrapperCol: {
      span: 20,
   },
};

const buttonLayout = {
   wrapperCol: {
      span: 24,
   },
};

const Login = ({ setStatus }) => {
   return (
      <Form
         name="login"
         onFinish={(value) => console.log(value)}
         onFinishFailed={(error) => console.log(error)}
         {...layout}
      >
         <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username" }]}
         >
            <Input />
         </Form.Item>
         <Form.Item
            label="Password"
            name="password"
            rules={[
               { required: true, message: "Please input your password" },
               { min: 8, message: "Password must be at least 8 characters" },
            ]}
         >
            <Input />
         </Form.Item>
         <Form.Item {...buttonLayout} className="text-center">
            <Button className="w-25 rounded" htmlType="submit">
               Login
            </Button>
            <br />
            <span>Dont have an account?</span>
            <Button
               onClick={() => setStatus(true)}
               className="mt-3"
               type="link"
            >
               Sign Up Now
            </Button>
         </Form.Item>
      </Form>
   );
};

export default Login;
