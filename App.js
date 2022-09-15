import Main from "./components/main/Main";
import Menu from "./components/menu/Menu";
import Nav from "./components/nav/Nav";

function App() {
  return (
    <div className="text-[#5F5E61]">
      {/*Navigation Bar*/}
      <div className="border">
        <Nav />
      </div>
      <div className="flex">
        {/* Menu Bar*/}
        <div className="w-1/6">
          <Menu />
        </div>
        {/* Main Components */}
        <div className="w-5/6">
          <Main />
        </div>
      </div>
    </div>
  );
}
export default App;
