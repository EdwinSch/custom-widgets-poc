import { FormControl, Select } from "@chakra-ui/react";

const Options = ({ widgets }) => {
  return (
    <FormControl>
      <Select maxW={300} placeholder="select widget" bg="gray.200">
        {widgets.map((option) => {
          const { id, name, type } = option;

          return (
            <option key={id} value={name}>
              {name} - {type}
            </option>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default Options;
