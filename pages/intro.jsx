import Head from "next/head";
import React from "react";
import PeopleGrid from "../components/PeopleGrid";

const Intro = () => {
  return (
    <>
      <Head>
        <title>Giới thiệu | Hoàng Văn Tùng</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PeopleGrid />
      <section className="wot neu-01 noSpacingTop">
        <div className="wot__wrapper">
          <div className="wot__heading">
            <h2 className="wot__title dark:text-blue-400">Teamdevthanhdo</h2>
            <h3 className="wot__subtitle dark:text-slate-200">
              Đây là một sản phẩm cá nhân, Thông tin được cập nhập từ nhiều
              nguồn
            </h3>
          </div>
          <div className="wot__text">
            <p>Nhà Sáng Lập</p>
            <h2 className="wot__title dark:text-blue-400">
              Trường Đại Học Thành Đô
            </h2>
            <h3 className="wot__subtitle noSpacingBottom dark:text-slate-200">
              Sản phẩm của sinh viên Trường Đại Học Thành Đô
            </h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default Intro;
