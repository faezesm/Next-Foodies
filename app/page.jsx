import Link from "next/link";

import styles from "./page.module.css";
import SlideShow from "@/components/images/images-slideShow";

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.slidesShow}>
          <SlideShow />
        </div>
        <div className={styles.text}>
        <div className={styles.hero}>
          <h1>Next Level Food For NextLevel Foodies</h1>
          <p>Taste & share food from all over the word</p>
        </div>
        <div className={styles.cta}>
          <Link href="/community">Join the community</Link>
          <Link href="/meals">Explore Meals</Link>
        </div>

        </div>
      </header>
      <main className={styles.main}>
        <section className={styles.section}>
          <h2>How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite recipes with the world.
            It&apos;s a place to discover new dishes, and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect with other food lovers.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite recipes with the world.
            It&apos;s a place to discover new dishes, and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
