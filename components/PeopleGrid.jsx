import React from "react";
import LazyLoadImage from "./LazyLoadImage";

const PeopleGrid = () => {
  return (
    <section className="peopleGrid neu-01 line" data-items="3">
      <div className="wrapper">
        <div className="peopleGrid__heading">
          <h2 className="peopleGrid__title dark:text-slate-200">
            <span>Người sáng lập</span>
          </h2>
        </div>
        <div className="peopleGrid__container">
          <article className="peopleGrid__item">
            <figure className="relative">
              <LazyLoadImage
                photo={require("../assets/images/profile001.jpeg")}
                blurhash="LBE2^B~q?aD%8{9F9G?a?bD*axNG"
                alt="Chủ tịch"
              />
            </figure>
            <h3 className="peopleGrid__name dark:text-blue-400">
              Nhà Thiết Kế Đồ Họa, Giao Diện Người Dùng
            </h3>
            <p className="peopleGrid__description dark:text-slate-200">
              Hoàng Văn Tùng
            </p>
          </article>

          <article className="peopleGrid__item">
            <figure className="relative">
              <LazyLoadImage
                photo={require("../assets/images/profile001.jpeg")}
                blurhash="LiNvl8t7?]MyXPIUMxt6S$RkV@oy"
                alt="Quản trị viên-Ủy quyền"
              />
            </figure>
            <h3 className="peopleGrid__name dark:text-blue-400">
              Quản Trị Viên
            </h3>
            <p className="peopleGrid__description dark:text-slate-200">
              Hoàng Văn Tùng
            </p>
          </article>

          <article className="peopleGrid__item">
            <figure className="relative">
              <LazyLoadImage
                photo={require("../assets/images/profile001.jpeg")}
                blurhash="LQQQ]?^,}bSc8_pI%LV[.8Z~I:oz"
                alt="Hội viên"
              />
            </figure>
            <h3 className="peopleGrid__name dark:text-blue-400">
              Sử lý sự cố | Hội Viên
            </h3>
            <p className="peopleGrid__description dark:text-slate-200">
              Hoàng Văn Tùng
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default PeopleGrid;
