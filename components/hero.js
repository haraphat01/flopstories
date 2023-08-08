import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/hero1.png";

const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
           Unveil the Untold Stories of Extraordinary Entrepreneurs
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            At FlopStories, we are on a mission to shatter the stigma around failure and showcase its transformative power. Our team is passionate about unearthing stories of determination, courage, and perseverance, as told by the brave entrepreneurs who lived through the ups and downs of the startup world.
            </p>

            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">Ready to embrace the wisdom of failure? Subscribe to FlopStories now and gain exclusive access to the most inspiring stories you won't find anywhere else!</p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="#"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md ">
                Subscribe
              </a>
             
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
      
    </>
  );
}











export default Hero;