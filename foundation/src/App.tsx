import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { Badge } from "./components/ui/badge";
import { IoTrendingDown } from "react-icons/io5";
import { HiOutlineCheckCircle } from "react-icons/hi";
import { PiWarning } from "react-icons/pi";

function App() {
  const [selectedTab, setSelectedTab] = useState("with-icon");

  return (
    <div className="flex h-80 justify-center items-center">
      <Tabs
        value={selectedTab}
        onValueChange={(value) => {
          setSelectedTab(value);
        }}
      >
        <TabsList>
          <TabsTrigger value="with-icon" selected={selectedTab === "with-icon"}>
            With Icon
          </TabsTrigger>
          <TabsTrigger
            value="without-icon"
            selected={selectedTab === "without-icon"}
          >
            Without Icon
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="with-icon"
          className="inline-flex gap-4"
          selected={selectedTab === "with-icon"}
        >
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
        </TabsContent>
        <TabsContent
          value="without-icon"
          className="inline-flex gap-4"
          selected={selectedTab === "without-icon"}
        >
          <Badge variant="orange">-20%</Badge>

          <Badge variant="yellow">+1.2%</Badge>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default App;
