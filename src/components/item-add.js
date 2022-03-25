import React, { useCallback, useState } from 'react';
import { Button, TextField } from '@mui/material';


function ItemAdd({handler}) {
    const [add, setAdd] = useState(false);
    const [text, setText] = useState('');

    const clickAdd = useCallback((ev) => {
        setAdd(true);
    }, [setAdd]);

    const clickSend = useCallback((ev) => {
        ev.preventDefault();
        text && handler(text);
        setText('');
        setAdd(false);
    }, [text, setText, setAdd, handler]);

    const clickCancel = useCallback((ev) => {
        ev.preventDefault();
        setAdd(false);
        setText('');
    }, [setAdd, setText]);

    const onChangeField = useCallback(
        (ev) => {
            setText(ev.target.value);
        },
    [setText]);

    return (
        <div>
            <Button variant="contained" onClick={clickAdd} sx={{minWidth: 32}}><i className='icon-plus'></i></Button>
            {add &&
                <div>
                    <TextField id='add-item' label='Wpisz zadanie' variant='outlined' margin='dense' onChange={onChangeField} value={text} />
                    <Button id='add-item-btn' className='btn' variant='contained' size='large' onClick={clickSend} sx={{ml: 2}}>Dodaj</Button>
                    <Button id='add-item-cancel' className='btn' variant='contained' size='large' onClick={clickCancel} sx={{ml: 2}}>Anuluj</Button>
                </div>
            }
        </div>
    )
}

export default ItemAdd;
