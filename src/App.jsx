import { Line } from "recharts";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import PriceOptions from "./components/PriceOptions/PriceOptions";
import LineChart from "./components/LineChart/LineChart";
import StraightChart from "./components/LineChart/LineChart";

function App() {
  return (
    <>
      <Navbar></Navbar>

      <h1>Vite + React</h1>
      <PriceOptions></PriceOptions>
      <StraightChart></StraightChart>
    </>
  );
}

export default App;
