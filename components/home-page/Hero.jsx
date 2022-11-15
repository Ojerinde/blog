import Image from "next/image";

import classes from "./hero.module.css";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <figure className={classes.image}>
        <Image
          src="/images/site/img.jpg"
          alt="An image of Joel"
          width={300}
          height={300}
        />
      </figure>
      <h1>Hi, I am Joel</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        React, Vue, and NextJs.
      </p>
    </section>
  );
}
