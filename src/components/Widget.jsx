import { Box, Heading, Text } from "@chakra-ui/react";

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
      <Heading as="h2" size="md" textAlign="center" textTransform="capitalize">
        {name}
      </Heading>
      <Text pt={5} fontSize="sm">
        {content}
      </Text>
    </Box>
  );
};

export default Widget;
