import {
  Flex,
  Stack,
  Heading,
  useColorModeValue,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer,
  Box,
} from '@chakra-ui/react';

import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const Main = () => {
  const [todo, setTodo] = useState('');
  const [items, setItems] = useState([]);
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [editItems, setEditItems] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!todo) {
      alert('plz fill the data');
    } else if (todo && !toggleSubmit) {
      setItems(
        items.map(elem => {
          if (elem.id === editItems) {
            return {
              ...elem,
              name: todo,
            };
          }
          return elem;
        })
      );
      setToggleSubmit(true);
      setTodo('');
      setEditItems(null);
    } else {
      const allTodos = { id: new Date().getTime().toString(), name: todo };
      setItems([...items, allTodos]);
      setTodo('');
    }
  };

  const deleteItem = index => {
    const updateItems = items.filter(ele => {
      return index !== ele.id;
    });
    setItems(updateItems);
  };

  const UpdateItem = id => {
    let newEditItem = items.find(ele => {
      return ele.id === id;
    });
    console.log(newEditItem);
    setToggleSubmit(false);
    setTodo(newEditItem.name);
    setEditItems(id);
  };

  const CancelUpdate = () => {};

  return (
    <>
      <Flex
        minH={'10vh'}
        align={'center'}
        justify={'center'}
        py={12}
        bg={useColorModeValue('gray.50', 'gray.800')}
      >
        <Stack
          boxShadow={'2xl'}
          bg={useColorModeValue('white', 'gray.700')}
          rounded={'xl'}
          p={10}
          spacing={8}
          align={'center'}
        >
          <Stack align={'center'} spacing={2}>
            <Heading
              textTransform={'uppercase'}
              fontSize={'3xl'}
              color={useColorModeValue('gray.800', 'gray.200')}
            >
              Todo App
            </Heading>
          </Stack>
          <TodoForm
            handleSubmit={handleSubmit}
            setTodo={setTodo}
            toggleSubmit={toggleSubmit}
            todo={todo}
            CancelUpdate={CancelUpdate}
          />
        </Stack>
      </Flex>

      {items && items.length > 0 ? (
        <TableContainer
          minH={'10vh'}
          align={'center'}
          justify={'center'}
          py={12}
        >
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Todo List</Th>
                <Th>Action</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {items.map(ele => {
                return (
                  <TodoList
                    deleteItem={deleteItem}
                    UpdateItem={UpdateItem}
                    ele={ele}
                  />
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      ) : (
        <Box textAlign={'center'}>{'No Task...'}</Box>
      )}
    </>
  );
};

export default Main;
