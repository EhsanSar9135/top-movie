import { Button, Form, Input } from "antd";

const layout = {
   labelCol: {
      span: 6,
   },
   wrapperCol: {
      span: 18,
   },
};

const buttonLayout = {
   wrapperCol: {
      span: 24,
   },
};

const Register = ({ setStatus }) => {
   return (
      <Form
         name="register"
         onFinish={(value) => console.log(value)}
         onFinishFailed={(error) => console.log(error)}
         {...layout}
      >
         <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your Email" }]}
         >
            <Input />
         </Form.Item>
         <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your Username" }]}
         >
            <Input />
         </Form.Item>
         <Form.Item
            label="Password"
            name="password"
            rules={[
               { required: true, message: "Please input your Password" },
               { min: 8, message: "Password must be at least 8 characters" },
            ]}
         >
            <Input />
         </Form.Item>
         <Form.Item
            label="Confirm Password"
            name="password"
            rules={[
               {
                  required: true,
                  message: "Please input your Confirm Password",
               },
               {
                  min: 8,
                  message: "Confirm Password must be at least 8 characters",
               },
            ]}
         >
            <Input />
         </Form.Item>
         <Form.Item {...buttonLayout} className="text-center">
            <Button className="w-25 rounded" htmlType="submit">
               Register
            </Button>
            <br />
            <span>Already Registered?</span>
            <Button
               onClick={() => setStatus(false)}
               className="mt-3"
               type="link"
            >
               Login Now
            </Button>
         </Form.Item>
      </Form>
   );
};

export default Register;
