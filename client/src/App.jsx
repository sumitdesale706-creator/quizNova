import WaitingRoom from "./pages/WaitingRoom";
import Navbar from "./ui/components/Navbar";
import Footer from "./ui/components/Footer";

const App = () => {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <WaitingRoom />
      </main>
      <Footer />
    </div>
  );
};

export default App;
