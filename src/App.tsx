import { Hero } from "./components/Hero";
import { HouseTour } from "./components/HouseTour";
import { VirtualStaging } from "./components/VirtualStaging";
import { HeadShot } from "./components/HeadShot";
import { Shorts } from "./components/Shorts";
import { Footer } from "./components/Footer";
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Hero />
      <HouseTour />
      <VirtualStaging />
      <HeadShot />
      <Shorts />
      <Footer />
    </>
  );
}

export default App;
