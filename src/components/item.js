import { Button, Stack } from '@mui/material';
import React from 'react'

export default function Item({item, deleted, finished}) {
  return (
    <div className={'border border-zinc-400 rounded-lg p-5 my-2' + (! item.active ? ' finish' : '')}>
      <Stack direction='row' justifyContent='space-between' alignItems='stretch'>
        <div className={'text-item' + (! item.active ? ' line-through': '')}>{item.name}</div>
        <div>
        {item.active &&
          <Button variant='contained' id={'finish-' + item.id} color='success' onClick={finished} sx={{mr: 1}}><i className='icon-ok'></i></Button>}
          <Button variant='contained' id={'delete-' + item.id} color='error' onClick={deleted}><i className='icon-cancel'></i></Button>
        </div>
      </Stack>
    </div>
  );
}
