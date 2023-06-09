import { Box, Heading, Text, Button, Flex } from "@chakra-ui/react";
import { CloseIcon, DragHandleIcon } from "@chakra-ui/icons";

const Widget = ({ id, name, type, content, removeWidget }) => {
  return (
    <Box
      w={200}
      h={300}
      padding={4}
      borderRadius={10}
      background="blue.600"
      color="blue.50"
      // transition="250ms ease"
    >
      <Flex justifyContent="space-between">
        <Button
          type="button"
          colorScheme="teal"
          size="xs"
          _hover={{ cursor: "move", background: "darkGreen" }}
        >
          <DragHandleIcon />
        </Button>

        <Button
          type="button"
          colorScheme="teal"
          size="xs"
          onClick={() => removeWidget(id)}
        >
          <CloseIcon />
        </Button>
      </Flex>

      <Heading
        as="h2"
        size="md"
        my={4}
        textAlign="center"
        textTransform="capitalize"
      >
        {name}
      </Heading>
      <Text fontSize="sm">{content}</Text>
    </Box>
  );
};

export default Widget;
