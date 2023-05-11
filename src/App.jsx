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
  const [widgets, setWidgets] = useState(currentWidgets);
  const [listLength, isListLength] = useState(false);

  // console.log(widgets);

  const addWidget = () => {
    const newWidget = {
      id: uuidv4(),
      name: "excepturi",
      type: "new",
      content:
        "Gastropub narwhal authentic coloring book raw denim marxism helvetica affogato freegan franzen vexillologist. Live-edge lumbersexual banjo mixtape craft beer.",
    };
    setWidgets([...widgets, newWidget]);

    // console.log(widgets);

    if (widgets.length >= 8) {
      isListLength(true);
    }
  };

  const removeWidget = (id) => {
    const newWidgetsList = widgets.filter((widget) => widget.id !== id);
    setWidgets(newWidgetsList);

    // console.log(newWidgetsList);

    if (newWidgetsList.length >= 8) {
      isListLength(true);
    }
    if (newWidgetsList.length < 9) {
      isListLength(false);
    }
  };

  return (
    <Box as="main" p={4}>
      <Button
        isDisabled={listLength}
        type="button"
        onClick={addWidget}
        colorScheme="teal"
        mb={6}
        size="sm"
        leftIcon={listLength || <AddIcon />}
      >
        {listLength ? "Maximum widgets reached" : "Add new widget"}
      </Button>
      <Flex flexWrap="wrap" gap={5}>
        {widgets.map((widget) => {
          return (
            <Widget key={widget.id} {...widget} removeWidget={removeWidget} />
          );
        })}
      </Flex>
    </Box>
  );
}

export default App;
