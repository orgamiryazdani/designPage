import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <div className="w-screen h-screen grid grid-cols-[15%,85%] grid-rows-[12%,88%]">
      <Header />
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
