import Link from "next/link";
import React from "react";

import Logo from "@/assets/logo.png";
import styles from "./mainHeader.module.css"
import Image from "next/image";


const MainHeader = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/">
          <Image src={Logo} alt="Food" priority />
        </Link>
        <p>NextLevel Logo</p>
      </header>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href="/community">Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MainHeader;
