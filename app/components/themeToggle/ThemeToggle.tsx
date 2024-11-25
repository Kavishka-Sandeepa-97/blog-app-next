// "use client";

// import Image from "next/image";
// import styles from "./themeToggle.module.css";
// import { useContext } from "react";
// import { ThemeContext } from "@/context/ThemeContext";

// const ThemeToggle = () => {
//   const { toggle, theme } = useContext(ThemeContext);

//   return (
//     <div
//       className={styles.container}
//       onClick={toggle}
//       style={
//         theme === "dark" ? { backgroundColor: "white" } : { backgroundColor: "#0f172a" }
//       }
//     >
//       <Image src="/moon.png" alt="" width={14} height={14} />
//       <div
//         className={styles.ball}
//         style={
//           theme === "dark"
//             ? { left: 1, background: "#0f172a" }
//             : { right: 1, background: "white" }
//         }
//       ></div>
//       <Image src="/sun.png" alt="" width={14} height={14} />
//     </div>
//   );
// };

// export default ThemeToggle;
import Image from 'next/image'
import React from 'react'

function ThemeToggle(){
  return (
    <div className='flex bg-black w-16 h-7 rounded-full justify-between p-1 items-center cursor-pointer relative'>
      <div className=''><Image src="/moon.png" width={15} height={10} alt='sun image'></Image></div>
      <div className='w-5 h-5  bg-white rounded-full absolute '></div>
      <div className=''><Image src="/sun.png" width={15} height={15} alt='sun image'></Image></div>
    </div>
  ) 
}

export default ThemeToggle
