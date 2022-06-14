import React, { useCallback } from 'react';
import Item from './item';
import ItemAdd from './item-add';
import { Stack } from '@mui/material';
import { useLocalStorage } from './use-localstorage';

export default function ItemList() {
  const timestamp = () => Math.floor(Date.now() / 1000);
  const [items, setItems] = useLocalStorage('todos', []);

  const addTodo = useCallback((text) => {
    setItems([...items, {name: text, active: true, id: timestamp()}]);
  }, [items, setItems]);

  const delTodo = useCallback((id) => {
    setItems(items.filter((item) => item.id !== id));
  }, [items, setItems]);

  const endTodo = useCallback((id) => {
    setItems(items.map((item) => {
      if (item.id === id) {
        item.active = false;
      }
      return item;
    }));
  }, [items, setItems]);

  const deleteItemClick = useCallback((ev) => {
    ev.preventDefault();
    var id;

    if (ev.target.id) {
      id = ev.target.id.split('-')[1];
    } else {
      id = ev.target.parentNode.id.split('-')[1];
    }

    delTodo(Number(id));
  }, [delTodo]);

  const endedItemClick = useCallback((ev) => {
    ev.preventDefault();
    var id;

    if (ev.target.id) {
      id = ev.target.id.split('-')[1];
    } else {
      id = ev.target.parentNode.id.split('-')[1];
    }

    endTodo(Number(id));
  }, [endTodo]);

  return (
    <div>
      <ItemAdd handler={addTodo} />
      <Stack direction='column' spacing={2} justifyContent='center' alignItems='stretch'>
        {items.map((item, idx) => <Item item={item} deleted={deleteItemClick} finished={endedItemClick} key={idx} />)}
      </Stack>
    </div>
  );
}
