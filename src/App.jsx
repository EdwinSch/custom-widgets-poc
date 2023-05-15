// Usage
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
// Components
import Widget from "./components/Widget";
import Options from "./components/Options";
// Data
import currentWidgets from "./widgetsList.js";
// Styles
import "./App.css";
import { Flex, Box, Button, Text } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

function App() {
  const [widgets, setWidgets] = useState(currentWidgets);
  const [listLength, isListLength] = useState(false);

  // console.log(widgets);

  const addWidget = () => {
    const newWidget = {
      id: uuidv4(),
      name: "excepturi",
      type: "new widget",
      content:
        "Gastropub narwhal authentic coloring book raw denim marxism helvetica affogato freegan franzen vexillologist. Live-edge lumbersexual banjo mixtape craft beer.",
    };
    setWidgets([...widgets, newWidget]);

    if (widgets.length >= 7) {
      isListLength(true);
    }
  };

  const removeWidget = (id) => {
    const newWidgetsList = widgets.filter((widget) => widget.id !== id);
    setWidgets(newWidgetsList);

    // console.log(widgets.length);

    if (widgets.length >= 7) {
      isListLength(true);
    }
    if (widgets.length < 9) {
      isListLength(false);
    }
  };

  if (widgets.length === 0) {
    return (
      <Box as="main" p={4}>
        <Flex mb={10} gap={5} alignItems="center">
          <Button
            minW={150}
            padding={5}
            isDisabled={listLength}
            type="button"
            onClick={addWidget}
            colorScheme="teal"
            size="sm"
            leftIcon={listLength || <AddIcon />}
          >
            {listLength ? "Maximum widgets reached" : "Add new widget"}
          </Button>
          <Options widgets={widgets} />
        </Flex>

        <Text fontSize="sm" color="blue.600" fontWeight={600}>
          No widgets on the dashboard.
        </Text>
      </Box>
    );
  }

  return (
    <Box as="main" p={4}>
      <Flex mb={10} gap={5} alignItems="center">
        <Button
          minW={150}
          padding={5}
          isDisabled={listLength}
          type="button"
          onClick={addWidget}
          colorScheme="teal"
          size="sm"
          leftIcon={listLength || <AddIcon />}
        >
          {listLength ? "Maximum widgets reached" : "Add new widget"}
        </Button>
        <Options widgets={widgets} />
      </Flex>

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
