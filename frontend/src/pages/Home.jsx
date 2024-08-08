import Biography from "../components/Biography";
import Departments from "../components/Departments";
import Hero from "../components/Hero";
import MessageForm from "../components/MessageForm";

const Home = () => {
  return (
    <>
      <Hero
        title={
          "Welcome to ZeeCare Medical Institute | Your Trusted Healthcare Provider"
        }
        imageUrl={"/hero.png"}
      />
      <Biography imageUrl={"/doctor5.JPG"} />
      <Departments />
      <MessageForm />
    </>
  );
};

export default Home;
