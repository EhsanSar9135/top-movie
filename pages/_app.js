import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import Layout from "../Components/Layout/Layout";

const MyApp = ({ Component, pageProps }) => {
   return (
      <Layout>
         <Component {...pageProps} />
      </Layout>
   );
};

export default MyApp;
