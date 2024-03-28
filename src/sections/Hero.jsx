import { BsTwitterX, BsInstagram, BsFacebook } from "react-icons/bs";
import { FaLinkedinIn, FaTelegram } from "react-icons/fa6";

function Hero() {
  return (
    <section className=" pt-0  pb-[1rem]">
      <div className="container-wrapper flex justify-end flex-col items-center pt-[6rem] ">
        <div></div>
        <div className=" max-w-full sm:max-w-3xl ml-unset sm:ml-auto flex flex-col items-center  bg-[#7bd259ae] rounded-3xl border-2 ">
          <img src="images/logo.png" alt="" className=" h-[250px]" />

          <div>
            <h1 className=" font-kid text-center text-3xl ">WELCOME TO THE <br />FLOCK BAAAAAAAA</h1>

            <div className=" flex justify-center gap-5 items-center mt-[2rem]">
              <a
                href="https://twitter.com/pepe_sheep_"
                className=" text-xl text-black bg-[#7cd259] hover:scale-125 hover:bg-[#1a4093] rounded-full p-2 border-2 border-[#000]  hover:text-[#fff]"
              >
                <BsTwitterX />
              </a>

              <a
                href="https://t.me/pepesheep"
                target="_blank"
                className=" text-xl text-black hover:scale-125 bg-[#7cd259] hover:bg-[#1a4093] rounded-full p-2 border-2 border-[#000]  hover:text-[#fff]"
              >
                <FaTelegram />
              </a>

              <a
                href="#"
                target="_blank"
                className=" bg-[#7cd259] rounded-full text-xl font-semibold p-1 border-2 hover:scale-125 "
              >
                <img
                  src="images/dext.png"
                  alt=""
                  className=" h-[29px] w-auto"
                />
              </a>
            </div>

            <a
              href="/"
              className=" my-2 text-black font-bold py-2 px-2 sm:px-16 rounded sm:text-base text-xs font-short   flex justify-center w-[360px] sm:w-[580px] mx-auto"
            >
              BpAsimH7aFv2KFLDQeqWQkkCQh2tdsfsdfsdfsfsdfsd
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
