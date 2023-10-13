import React from "react";
import "./Different.scss";
import { useMyContext } from "../../context/MyContext";
const Different = () => {
  const { lang, setlang, t, i18n } = useMyContext();
  return (
    <div className="Different">
      <h2 className="section-title text-center mb-5">{t('why.head')}</h2>

      <div className="container">
        <div className="row">
          <div className="Diffcard col-lg-3 col-md-6 col-12">
            <div className="image">
              {/* <img src="/images/1st1st.png" alt="" /> */}
              <svg
                width="62"
                height="64"
                viewBox="0 0 62 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.512 1.12798L16.904 5.41198C17.3374 6.7141 18.0685 7.8972 19.0392 8.86725C20.01 9.83729 21.1936 10.5676 22.496 11L26.784 12.392L26.872 12.416C27.2024 12.5323 27.4886 12.7483 27.691 13.0342C27.8935 13.32 28.0022 13.6617 28.0022 14.012C28.0022 14.3623 27.8935 14.7039 27.691 14.9898C27.4886 15.2757 27.2024 15.4917 26.872 15.608L22.584 17C21.2811 17.4324 20.097 18.1627 19.1256 19.1327C18.1542 20.1026 17.4223 21.2857 16.988 22.588L15.6 26.868C15.4837 27.1984 15.2677 27.4846 14.9818 27.687C14.696 27.8894 14.3543 27.9982 14.004 27.9982C13.6537 27.9982 13.3121 27.8894 13.0262 27.687C12.7403 27.4846 12.5243 27.1984 12.408 26.868L11.016 22.588C10.586 21.2807 9.8559 20.0922 8.88417 19.1177C7.91244 18.1432 6.72607 17.4097 5.42001 16.976L1.13201 15.584C0.80159 15.4677 0.51542 15.2517 0.312985 14.9658C0.110551 14.6799 0.00183105 14.3383 0.00183105 13.988C0.00183105 13.6377 0.110551 13.296 0.312985 13.0102C0.51542 12.7243 0.80159 12.5083 1.13201 12.392L5.42001 11C6.7066 10.5559 7.87315 9.82054 8.82861 8.85121C9.78406 7.88188 10.5026 6.70484 10.928 5.41198L12.32 1.13198C12.4355 0.800177 12.6514 0.512544 12.9377 0.309C13.2241 0.105455 13.5667 -0.00390625 13.918 -0.00390625C14.2693 -0.00390625 14.6119 0.105455 14.8983 0.309C15.1846 0.512544 15.4005 0.800177 15.516 1.13198L15.512 1.12798ZM59 16C59.7957 16 60.5587 16.3161 61.1213 16.8787C61.6839 17.4413 62 18.2043 62 19V37C62 37.7956 61.6839 38.5587 61.1213 39.1213C60.5587 39.6839 59.7957 40 59 40C58.2044 40 57.4413 39.6839 56.8787 39.1213C56.3161 38.5587 56 37.7956 56 37V26.24L39.12 43.12C38.5575 43.6818 37.795 43.9973 37 43.9973C36.205 43.9973 35.4425 43.6818 34.88 43.12L28 36.24L9.12001 55.12C8.55131 55.6499 7.79912 55.9384 7.02192 55.9247C6.24471 55.911 5.50317 55.5961 4.95352 55.0465C4.40387 54.4968 4.08902 53.7553 4.07531 52.9781C4.06159 52.2009 4.35009 51.4487 4.88001 50.88L25.88 29.88C26.4425 29.3182 27.205 29.0026 28 29.0026C28.795 29.0026 29.5575 29.3182 30.12 29.88L37 36.76L51.76 22H41C40.2044 22 39.4413 21.6839 38.8787 21.1213C38.3161 20.5587 38 19.7956 38 19C38 18.2043 38.3161 17.4413 38.8787 16.8787C39.4413 16.3161 40.2044 16 41 16H59ZM56.068 51.86L59.132 52.852L59.192 52.868C59.3684 52.9303 59.528 53.0325 59.6583 53.1668C59.7886 53.3011 59.8861 53.4637 59.943 53.6419C60 53.8202 60.0149 54.0091 59.9866 54.1941C59.9583 54.379 59.8876 54.5549 59.78 54.708C59.6344 54.9121 59.4289 55.0659 59.192 55.148L56.132 56.14C55.2009 56.4488 54.3546 56.9704 53.6603 57.6633C52.966 58.3563 52.4427 59.2015 52.132 60.132L51.14 63.192C51.0572 63.4283 50.903 63.633 50.6988 63.7778C50.4946 63.9226 50.2504 64.0004 50 64.0004C49.7496 64.0004 49.5055 63.9226 49.3012 63.7778C49.097 63.633 48.9428 63.4283 48.86 63.192L47.864 60.136C47.5567 59.2025 47.0353 58.3539 46.3414 57.658C45.6476 56.9621 44.8005 56.4381 43.868 56.128L40.808 55.132C40.6319 55.0693 40.4727 54.9667 40.3428 54.8322C40.213 54.6977 40.116 54.5351 40.0594 54.3569C40.0029 54.1787 39.9883 53.9899 40.0169 53.8051C40.0454 53.6204 40.1163 53.4448 40.224 53.292C40.3685 53.0885 40.5726 52.9348 40.808 52.852L43.868 51.86C44.7874 51.543 45.6211 51.0178 46.3038 50.3253C46.9866 49.6328 47.5001 48.7918 47.804 47.868L48.8 44.808C48.8828 44.5717 49.037 44.367 49.2412 44.2222C49.4455 44.0774 49.6896 43.9996 49.94 43.9996C50.1904 43.9996 50.4346 44.0774 50.6388 44.2222C50.843 44.367 50.9972 44.5717 51.08 44.808L52.076 47.864C52.3845 48.7948 52.906 49.6407 53.5991 50.3344C54.2921 51.0282 55.1375 51.5505 56.068 51.86Z"
                  fill="white"
                />
              </svg>
            </div>
            <h2>{t('why.h1')}</h2>
            <p>{t('why.p1')}</p>
          </div>
          <div className="Diffcard col-lg-3 col-md-6 col-12">
            <div className="image">
              {/* <img src="/images/2st2st.png" alt="" /> */}
              <svg
                width="70"
                height="64"
                viewBox="0 0 70 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.0513 63.3333L18.3846 40L0.384613 24L24.3846 22L33.7179 0L43.0513 22L67.0513 24L56.3846 33.3333H53.7179C51.3846 33.3333 49.0513 33.6667 46.7179 34.6667L54.0513 28.3333L39.3846 27L33.7179 13.6667L28.0513 27L13.3846 28.3333L24.3846 38L21.0513 52.3333L33.7179 44.6667L35.3846 45.6667C34.7179 47.3333 34.0513 49.3333 34.0513 51L13.0513 63.3333ZM53.0513 64L43.7179 54L47.7179 50L53.0513 55.3333L65.0513 43.3333L69.0513 48L53.0513 64Z"
                  fill="white"
                />
              </svg>
            </div>
            <h2>{t('why.h2')}</h2>
            <p>{t('why.p2')}</p>
          </div>
          <div className="Diffcard col-lg-3 col-md-6 col-12">
            <div className="image">
              {/* <img src="/images/3333.png" alt="" /> */}
              <svg
                width="66"
                height="56"
                viewBox="0 0 66 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                className="pathFill"
                  d="M13 3.66675H53L63 20.3334L34.6667 52.0001C34.4494 52.2218 34.1901 52.398 33.9039 52.5182C33.6177 52.6385 33.3104 52.7004 33 52.7004C32.6896 52.7004 32.3823 52.6385 32.0961 52.5182C31.8099 52.398 31.5506 52.2218 31.3333 52.0001L3 20.3334L13 3.66675Z"
                  stroke="white"
                  stroke-width="6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                className="pathFill"
                  d="M26.3333 27.0002L19.6667 19.6668L21.6667 16.3335"
                  stroke="white"
                  stroke-width="6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <h2>{t('why.h3')}</h2>
            <p>{t('why.p3')}</p>
          </div>
          <div className="Diffcard col-lg-3 col-md-6 col-12">
            <div className="image">
              {/* <img src="/images/4444.png" alt="" /> */}
              <svg
                width="66"
                height="66"
                viewBox="0 0 66 66"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M45.5 0.577393L43.86 2.37489C40.1875 6.41739 37.16 8.22489 34.64 9.40739C32.12 10.5874 30.0025 10.9399 27.9225 12.5324C25.705 14.2324 22.4825 17.4924 21.125 23.3124C18.215 23.9474 16.085 25.0624 14.405 26.5149C12.745 27.9499 11.495 29.5824 9.955 31.3599C9.9425 31.3799 9.9625 31.4174 9.955 31.4374C7.745 33.9774 5.8125 36.7124 2.0625 38.1574L0.5 38.7824V65.4999H48.1575C50.89 65.3524 52.785 63.4599 53.9375 61.5924C55.0875 59.7274 55.725 57.7074 56.0475 56.0474C56.8775 51.8174 58.39 39.6399 58.39 39.6399L58.47 39.4074V39.1724C58.39 37.4824 57.695 36.0474 56.8275 34.7174L59.64 26.3599L64.095 19.6399L65.345 17.8424L63.7025 16.3599L47.2975 2.13989L45.5 0.577393ZM45.6575 7.45239L58.7025 18.7824L55.265 23.8574L55.0325 24.0949L54.9525 24.4849L52.6875 31.2024C51.505 30.7149 50.2875 30.3724 48.9375 30.4224H48.78L33 30.4999H30.5V40.1874C30.15 42.9124 28.635 43.9674 26.75 44.7199C26.125 44.9724 26.0475 44.8349 25.5 44.9524V30.4249C25.09 21.1574 28.39 18.4899 30.97 16.5174C31.6825 15.9699 33.77 15.3374 36.75 13.9399C39.24 12.7674 42.335 10.6649 45.6575 7.45239ZM20.6575 28.9374C20.6475 29.5049 20.47 29.9049 20.5 30.4999V50.4999H23C23 50.4999 25.675 50.4699 28.5475 49.3274C31.4175 48.1849 34.885 45.5099 35.5 40.8124V35.4999L48.9375 35.4224H49.015C50.1124 35.3623 51.189 35.7395 52.009 36.4714C52.8289 37.2032 53.3255 38.2302 53.39 39.3274C53.38 39.3674 53.265 40.2949 53.235 40.4999H43V45.4999H52.61C52.345 47.4324 52.1025 48.6449 51.8275 50.4999H43V55.4999H51.0475C50.7521 56.7094 50.2777 57.868 49.64 58.9374C48.9575 60.0499 48.37 60.4699 47.845 60.4999H5.5V41.8274C9.5525 39.6774 12.0725 36.5849 13.7025 34.7199C15.3925 32.7849 16.5525 31.3199 17.6875 30.3449C18.43 29.7099 19.5925 29.3474 20.6575 28.9374Z"
                  fill="white"
                />
              </svg>
            </div>
            <h2>{t('why.h4')}</h2>
            <p>{t('why.p4')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Different;
