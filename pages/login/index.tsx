import Head from "next/head";
import { Fragment } from "react";
import Login from "../../components/login/Login";

const LoginPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Đăng ký/Đăng nhập</title>
        <meta name="description" content="Đăng ký/Đăng nhập" />
        <meta property="og:title" content="Đăng ký/Đăng nhập" />
        <meta property="og:description" content="Đăng ký/Đăng nhập" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="vi_VN" />
      </Head>
      <Login />
    </Fragment>
  );
};

export default LoginPage;
