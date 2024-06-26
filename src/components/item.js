import { Button, Stack, TextField } from '@mui/material';
import React, { useCallback, useState, useEffect } from 'react'

export default function Item({item, deleted, finished, edited}) {
  const [text, setText] = useState(item.name);
  const [error, setError] = useState(false);
  const [inputEdit, setInputEdit] = useState(false);

  const onChangeField = useCallback((ev) => {
    setText(ev.target.value);
  }, [setText]);

  const changeTitle = useCallback((ev) => {
    setInputEdit(true);
  }, [setInputEdit]);

  const clickUpdate = useCallback((ev) => {
    ev.preventDefault();
    if (item.name === text) {
      setInputEdit(false);
      return;
    }
    if (text === '') {
      setError(true);
      return;
    }
    edited(item.id, text);
    setInputEdit(false);
  }, [item.id, item.name, text, edited, setInputEdit]);

  const clickCancel = useCallback((ev) => {
    ev.preventDefault();
    setInputEdit(false);
    setText(item.name);
  }, [item.name, setInputEdit]);

  useEffect(() => {
    const listener = event => {
        if (event.code === "Enter" || event.code === "NumpadEnter") {
            event.preventDefault();
            clickUpdate(event);
        } else if (event.code === "Escape") {
            event.preventDefault();
            clickCancel(event);
        }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
}, [clickUpdate, clickCancel]);

  return (
    <div className={'border border-zinc-400 rounded-lg p-5 my-2' + (! item.active ? ' finish' : '')}>
        <Stack
          direction={{xs: 'column', md: 'row'}}
          justifyContent='space-between'
          alignItems='stretch'
          spacing={{xs: 2, md: 0}}
          sx={{alignItems: 'center'}}
        >
            {inputEdit && item.active ? (
              <Stack
                direction={{xs: 'column', md: 'row'}}
                justifyContent={{md: 'flex-start'}}
                alignItems={{md: 'flex-start'}}
                spacing={{xs: 1, md: 2}}
                sx={{mb: 2}}
              >
                <TextField id='edit-item' required={true} autoFocus={true} error={error} variant='outlined' margin='dense' onChange={onChangeField} defaultValue={text} />
                <Button id='edit-item-btn' className='btn' variant='contained' size='large' onClick={clickUpdate} sx={{ml: 1}}>Zmień</Button>
                <Button id='edit-item-cancel' className='btn' variant='contained' size='large' onClick={clickCancel} sx={{ml: 1}}>Anuluj</Button>
              </Stack>
            ) : (
              <div className={'text-item' + (! item.active ? ' line-through': '')}>
                <p>{item.name}</p>
              </div>
            )}
          {! inputEdit ? (
          <div>
              {item.active &&
                <Button variant='contained' id={'finish-' + item.id} color='success' onClick={finished} sx={{mr: 1}}><i className='icon-ok'></i></Button>}
              <Button variant='contained' id={'delete-' + item.id} color='error' onClick={deleted} sx={{mr: 1}}><i className='icon-cancel'></i></Button>
              {item.active &&
                <Button variant='contained' id={'edit-' + item.id} onClick={changeTitle}><i className='icon-pencil'></i></Button>}
          </div>) : (
            <div></div>
          )}
        </Stack>
    </div>
  );
}
