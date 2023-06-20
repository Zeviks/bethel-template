import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavigationBar/index";

const Page = () => {
  return (
    <>
      <NavigationBar />
      <div className="ministry-header relative h-full">
        <img
          alt="Ministries Header"
          className="block h-[700px] w-full"
          src="/images/pre-final/testBG.jpg"
          style={{ filter: "brightness(0.7)" }}
        />
        <h1 className="absolute inset-0 flex items-center justify-center text-center text-7xl font-bold text-white">
          Events
        </h1>
      </div>
      <div className="container my-10 flex h-[80vh] w-full items-center justify-center border shadow-lg">
        <h1 className="text-6xl font-bold text-gray-500">Calendar Image</h1>
      </div>
      <Footer />
    </>
  );
};

export default Page;
