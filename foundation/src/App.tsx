import { Badge } from "./components/ui/badge";
import { IoTrendingDown } from "react-icons/io5";
import { HiOutlineCheckCircle } from "react-icons/hi";
import { PiWarning } from "react-icons/pi";

function App() {
  return (
    <div className="flex items-center justify-center h-20 gap-6">
      <Badge variant="ascend">
        <HiOutlineCheckCircle className="stroke-grassGreen" />
        On-Track
      </Badge>

      <Badge variant="descend">
        <IoTrendingDown className="stroke-coral" />
        Off–Track
      </Badge>

      <Badge variant="warn">
        <PiWarning className="fill-yellow" />
        At Risk
      </Badge>

      <Badge variant="orange">-20%</Badge>

      <Badge variant="yellow">+1.2%</Badge>
    </div>
  );
}

export default App;
