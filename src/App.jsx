// Usage
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
// Components
import Widget from "./components/Widget";
// Data
import currentWidgets from "./widgetsList.js";
// Styles
import "./App.css";
import { Flex, Box, Button } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

function App() {
  const [widgets, setWidgets] = useState([...currentWidgets]);
  const [listLength, isListLength] = useState(false);

  const addWidget = () => {
    const newWidget = {
      id: uuidv4(),
      name: "excepturi",
      type: "new",
      content:
        "Gastropub narwhal authentic coloring book raw denim marxism helvetica affogato freegan franzen vexillologist. Live-edge lumbersexual banjo mixtape craft beer.",
    };
    setWidgets([...widgets, newWidget]);

    if (widgets.length >= 8) {
      isListLength(true);
    }
  };

  // const removeWidget = (id) => {
  //   const newWidgetsList = widgetsList.filter((widget) => widget.id !== id);
  //   console.log(id);
  //   console.log(newWidgetsList);
  //   setWidgetsList(newWidgetsList);
  // };

  return (
    <Box as="main" p={4}>
      {listLength ? (
        <Button
          isDisabled={listLength}
          type="button"
          colorScheme="teal"
          mb={6}
          size="sm"
        >
          Maximum reached
        </Button>
      ) : (
        <Button
          isDisabled={listLength}
          type="button"
          onClick={addWidget}
          colorScheme="teal"
          mb={6}
          size="sm"
          leftIcon={<AddIcon />}
        >
          Add new widget
        </Button>
      )}

      <Flex flexWrap="wrap" gap={5}>
        {widgets.map((widget) => {
          return (
            <Widget
              key={widget.id}
              {...widget}
              // removeWidget={removeWidget}
            />
          );
        })}
      </Flex>
    </Box>
  );
}

export default App;
