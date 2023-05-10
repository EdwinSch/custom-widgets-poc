import { useState } from "react";
import { Flex, Box, Button } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

import Widget from "./components/Widget";
import widgets from "./widgets.js";

import "./App.css";

function App() {
  const [widgetsList, setWidgetsList] = useState(widgets);
  const [listLength, setListLength] = useState(false);

  const addWidget = () => {
    const newWidgetsList = widgets.push({
      name: "adipisicing",
      type: "files",
      content:
        "Blackbird spyplane cred schlitz, vinyl sustainable mukbang narwhal bruh actually deep v neutral milk hotel celiac grailed pitchfork.",
    });
    // console.log(widgets);
    setWidgetsList(newWidgetsList);

    if (widgets.length >= 10) {
      setListLength(true);
    }
  };

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
          Maximum widgets reached
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
        {widgets.map((widget, index) => {
          return <Widget key={index} {...widget} />;
        })}
      </Flex>
    </Box>
  );
}

export default App;
