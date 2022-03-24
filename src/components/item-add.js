import React, { useCallback, useState } from 'react';
import { Button, TextField } from '@mui/material';


function ItemAdd({handler}) {
    const [add, setAdd] = useState(false);
    const [text, setText] = useState('');

    const clickAdd = (ev) => {
        setAdd(true);
    }

    const clickSend = (ev) => {
        ev.preventDefault();
        text && handler(text);
        setText('');
        setAdd(false);
    }

    const onChangeField = useCallback(
        (ev) => {
            setText(ev.target.value);
        },
    [text]);

    return (
        <div>
            <Button variant="contained" onClick={clickAdd} sx={{p: 0, minWidth: 32}}>+</Button>
            {add &&
                <div>
                    <TextField id='add-item' label='Wpisz zadanie' variant='outlined' margin='dense' onChange={onChangeField} value={text} />
                    <Button id='add-item-btn' className='btn' variant='contained' size='large' onClick={clickSend} sx={{ml: 2}}>Dodaj</Button>
                </div>
            }
        </div>
    )
}

export default ItemAdd;
