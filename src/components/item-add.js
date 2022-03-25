import React, { useCallback, useState } from 'react';
import { Button, TextField } from '@mui/material';


function ItemAdd({handler}) {
    const [add, setAdd] = useState(false);
    const [text, setText] = useState('');
    const [error, setError] = useState(false);

    const clickAdd = useCallback((ev) => {
        setAdd(true);
    }, [setAdd]);

    const clickSend = useCallback((ev) => {
        ev.preventDefault();
        if (! text) {
            setError(true);
            return;
        }

        handler(text);
        setText('');
        setAdd(false);
        setError(false);
    }, [text, setText, setAdd, setError, handler]);

    const clickCancel = useCallback((ev) => {
        ev.preventDefault();
        setAdd(false);
        setText('');
        setError(false);
    }, [setAdd, setText, setError]);

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
                    <TextField id='add-item' label='Wpisz zadanie' required={true} autoFocus={true} error={error} variant='outlined' margin='dense' onChange={onChangeField} value={text} />
                    <Button id='add-item-btn' className='btn' variant='contained' size='large' onClick={clickSend} sx={{ml: 2}}>Dodaj</Button>
                    <Button id='add-item-cancel' className='btn' variant='contained' size='large' onClick={clickCancel} sx={{ml: 2}}>Anuluj</Button>
                </div>
            }
        </div>
    )
}

export default ItemAdd;
