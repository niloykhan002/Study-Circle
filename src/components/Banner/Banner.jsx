import "./Banner.css";
const Banner = () => {
  return (
    <div className="hero min-h-[calc(100vh-324px)] background ">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="container mx-auto px-4">
        <div className="">
          <h1 className="mb-5 text-5xl font-bold text-white">
            Meet, chat, and study with <br /> friends over online
          </h1>
          <p className="mb-5 text-white">
            Join our student community online and say goodbye to lack of
            motivation.
          </p>
          <button className="btn bg-primary text-white border-none">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;