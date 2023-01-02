// import React, { useEffect, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../../styles/header/Header.scss";
// import Logo from "./Logo";
// import MenuBar from "../manuBar/MenuBar";
// import PageLabel from "../common/pageLabel/PageLabel";
// function Header() {
//   const TopHeader_Ref = useRef();
//   const PadHeader_Ref = useRef();
//   const HeaderLogo_Ref = useRef();
//   const HeaderBtn_Ref = useRef();
//   const MenuBar_Ref = useRef();

//   // 스크롤이 50px 이상 내려올경우 true값을 넣어줄 useState
//   const [scroll, setScroll] = useState(false);

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll); //clean up
//     };
//   }, []);
//   useEffect(() => {
//     if (scroll)
//       PadHeader_Ref.current.style.height = TopHeader_Ref.current.style.height;
//   }, [TopHeader_Ref]);

//   const handleScroll = () => {
//     // 스크롤이 Top에서 50px 이상 내려오면 true값을 useState에 넣어줌
//     if (window.scrollY > 230) {
//       setScroll(true);
//       TopHeader_Ref.current.style.maxHeight = "0";
//       HeaderBtn_Ref.current.style.display = "none";
//       HeaderLogo_Ref.current.style.display = "none";
//       MenuBar_Ref.current.style.display = "none";
//     } else if (window.scrollY <= 100 && scroll == true) {
//       // 스크롤이 50px 미만일경우 false를 넣어줌
//       setScroll(false);
//       TopHeader_Ref.current.style.maxHeight = "100%";
//       HeaderBtn_Ref.current.style.display = "";
//       HeaderLogo_Ref.current.style.display = "";
//       MenuBar_Ref.current.style.display = "";
//     }
//   };
//   const navigate = useNavigate();
//   return (
//     <div className="header-mainContainer">
//       <div className="header-container" ref={TopHeader_Ref}>
//         <div className="header-wraper">
//           <div ref={HeaderLogo_Ref}>
//             <Logo />
//           </div>
//           <div className="btn-container" ref={HeaderBtn_Ref}>
//             <button
//               className="header__btn--login"
//               onClick={() => navigate("/login")}
//             >
//               알림
//             </button>
//             <button
//               className="header__btn--login"
//               onClick={() => navigate("/login")}
//             >
//               내 정보 변경
//             </button>
//             <button
//               className="header__btn--login"
//               onClick={() => navigate("/login")}
//             >
//               login
//             </button>
//             <button
//               className="header__btn--hello"
//               onClick={() => navigate("/hello")}
//             >
//               hello
//             </button>
//           </div>
//         </div>
//         <div ref={MenuBar_Ref}>
//           <MenuBar />{" "}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Header;
