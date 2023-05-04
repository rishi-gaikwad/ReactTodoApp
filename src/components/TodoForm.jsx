import React from 'react';
import {
  Stack,
  Input,
  Button,
  useColorModeValue,
  ButtonGroup,
} from '@chakra-ui/react';

const TodoForm = ({
  handleSubmit,
  setTodo,
  todo,
  toggleSubmit,
  CancelUpdate,
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Stack spacing={4} direction={{ base: 'column', md: 'row' }} w={'full'}>
          <Input
            type={'text'}
            color={useColorModeValue('gray.800', 'gray.200')}
            bg={useColorModeValue('gray.100', 'gray.600')}
            rounded={'full'}
            border={0}
            _focus={{
              bg: useColorModeValue('gray.200', 'gray.800'),
              outline: 'none',
            }}
            placeholder="Add Todo List.."
            value={todo}
            onChange={e => setTodo(e.target.value)}
          />

          {toggleSubmit ? (
            <Button bg={'green.400'} rounded={'lg'} type="submit">
              Add
            </Button>
          ) : (
            <ButtonGroup>
              <Button bg={'orange.400'} rounded={'lg'} type="submit">
                Update
              </Button>
              <Button bg={'blue.300'} type="submit" onClick={CancelUpdate}>
                Cancel
              </Button>
            </ButtonGroup>
          )}
        </Stack>
      </form>
    </>
  );
};

export default TodoForm;
