import React from 'react';
import { Tr, Td, Button } from '@chakra-ui/react';

const TodoList = ({ deleteItem, UpdateItem, ele }) => {
  return (
    <>
      <Tr key={ele.id}>
        <Td>{ele.name}</Td>
        <Td>
          <Button onClick={() => deleteItem(ele.id)} bg={'red.600'}>
            Delete
          </Button>
        </Td>
        <Td>
          <Button onClick={() => UpdateItem(ele.id)} bg={'orange.300'}>
            Update
          </Button>
        </Td>
      </Tr>
    </>
  );
};

export default TodoList;
