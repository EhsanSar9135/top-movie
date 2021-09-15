import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import Layout from "../Components/Layout/Layout";
import "../Styles/Global.css";

const MyApp = ({ Component, pageProps }) => {
   return (
      <Layout>
         <Component {...pageProps} />
      </Layout>
   );
};

export default MyApp;
