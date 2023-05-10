import { Box, Heading, Text, Button, Flex } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

const Widget = ({ name, type, content }) => {
  return (
    <Box
      w={200}
      h={300}
      padding={4}
      borderRadius={10}
      background="blue.600"
      color="blue.50"
    >
      <Flex justifyContent="flex-end">
        <Button colorScheme="teal" size="xs">
          <CloseIcon />
        </Button>
      </Flex>

      <Heading
        as="h2"
        size="md"
        my={3}
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
