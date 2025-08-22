
// import bg from "../assets/background.svg";
const LandingPage = () => {
  // const handleDownloadResume = () => {
  //   const resumeUrl = "https://drive.google.com/uc?export=download&id=1xeLHYBruwS69D6ooRHKxeKZlkVT-3NMq";
  //   const link = document.createElement("a");
  //   link.href = resumeUrl;
  //   link.download = "Hassam_Ali_Resume.pdf"; // Set the desired file name
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };
  return (
    <div className="relative h-screen text-white p-4">
      {/* Background */}

      {/* Content */}
      <div className="relative z-10 md:flex-row-reverse flex flex-col items-end justify-start h-full">
<img
  src="https://i.ibb.co/fGGfBmjg/self-animated.png"
  alt="self"
  className="h-[400px] md:h-[800px] w-auto object-contain "
/>      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl font-bold">Hi, I’m Syed Danish Abbas,</h1>
        <h2 className="md:text-6xl text-5xl font-extrabold mt-4 text-center">I'M A WEB DEVELOPER</h2>
        <p className="mt-4 max-w-md text-center text-gray-300">
          A passionate developer from Pakistan! Undergrade from NUST, Islamabad, I specialize in designing sleek, functional, and user-centric websites. Whether it’s breathing life into creative ideas or solving complex digital challenges, I’m here to make it happen. Let’s build something amazing together!
        </p>
        {/* <button
          className="mt-6 inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          onClick={() => handleDownloadResume()}
        >
          Download Resume
        </button> */}
      </div>
</div>
    </div>
  );
};

export default LandingPage;
