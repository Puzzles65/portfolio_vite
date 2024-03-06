import styles from "../style";
import { photo } from "../assets";

function Home() {
  return (
    <section
      id="home"
      className={`flex justify-center md:flex-row flex-col sm:flex-row ${styles.paddingY}`}
    >
      <div className={`xl:px-0 px-6`}>
        <img
          src={photo}
          alt="profile picture"
          className="w-[280px] max-w-full rounded-lg"
        />
      </div>
      <div className={`xl:px-0 px-6`}>
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[80px] leading-[75px]">
          Hello! <br className="sm:block hidden" /> {/* gradient start */}
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[10%] h-[80%] rounded-full white__gradient bottom-40" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" /> 
          {/* gradient end */}
        </h1>
        <h2 className="text-gradient ss:text-[45px] text-[30px]">
          I'm Trung, a
        </h2>{" "}
        <h2 className="text-gradient ss:text-[45px] text-[30px]">
          junior software engineer
        </h2>{" "}
        <h2 className="text-gradient ss:text-[45px] text-[30px]">
          based in London.
        </h2>{" "}
      </div>
    </section>
  );
}

export default Home;
