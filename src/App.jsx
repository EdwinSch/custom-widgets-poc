import { useState } from "react";
import { Flex, Box } from "@chakra-ui/react";

import Widget from "./components/Widget";
import widgets from "./widgets.js";

import "./App.css";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Box as="main" p={3}>
      <Flex flexWrap="wrap" gap={5}>
        {widgets.map((widget) => {
          return <Widget key={widget.id} {...widget} />;
        })}
      </Flex>
    </Box>
  );
}

export default App;
