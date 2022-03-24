import React, { useCallback, useState } from 'react';
import Item from './item';
import ItemAdd from './item-add';
import { Stack } from '@mui/material';

export default function ItemList() {
  const timestamp = () => Math.floor(Date.now() / 1000);
  const [items, setItems] = useState([]);

  const deactivate = (collection, id) => {
    for (const elem of collection) {
      if (elem.id === id) {
        return elem;
      }
    }
  };

  const addTodo = useCallback((text) => {
    setItems((prev) => ([...prev, {name: text, active: true, id: timestamp()}]));
  }, [setItems]);

  const delTodo = useCallback((id) => {
    setItems(items.filter((item) => item.id !== id));
  }, [items, setItems]);

  const endTodo = useCallback((id) => {
    const item = deactivate(items, id);
    item.active = false;
    setItems([...items]);
  }, [items, setItems]);

  const deleteItemClick = useCallback((ev) => {
    ev.preventDefault();
    const id = ev.target.id.split('-')[1];
    delTodo(Number(id));
  }, [delTodo]);

  const endedItemClick = useCallback((ev) => {
    ev.preventDefault();
    const id = ev.target.id.split('-')[1];
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
