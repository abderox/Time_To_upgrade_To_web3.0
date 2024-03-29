import {
  Loader,
  Footer,
  Navbar,
  Welcome,
  Transactions,
  Services,
} from "./components/export";


const App = () => {
  return (
    <div className="min-h screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
        <Welcome />
      </div>
      {/* <Services />
      <Transactions /> */}
      <Footer />
    </div>
  );
};

export default App;
