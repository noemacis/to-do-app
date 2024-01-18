import React, { useEffect, useRef, useState } from 'react';
import './Item.css'
import modifica from './modifica.png'
import 'bootstrap/dist/css/bootstrap.css';
import elimina from './elimina.png';


function Item(props: any) {

    const [completed, setComplete] = useState(false);
    const [editing, setEditing] = useState(false);

    const handleCheck = () => {
        setComplete(!completed);

    };


    const handleEditing = () => {
        setEditing(!editing);
        console.log('handleEditing : ' + editing);

    };
    const handleUpdatedDone = (event: any) => {
        if (event.key === 'Enter') {
            setEditing(!editing);
        }
    }



    return (
        <>
            <div className='container-fluid'>
                <div className='d-flex justify-content-center'>
                    <div className="item-body  d-flex align-items-center row"
                        style={{ background: completed ? '#f9b4abad' : '#fdebd3ac' }}
                    >
                        <input type="checkbox" className='col-2 checkBox'
                            onClick={handleCheck}
                            onChange={props.filter(completed, props.id)}
                        //onChange={props.complete(completed, props.id, props.item)}
                        />
                        <div className='col-7 testo d-flex align-items-center' >{props.item}</div>
                        <a className='col-1'
                            onClick={() => { props.onClick(props.id) }}>
                            <img src={elimina} />
                        </a>
                        <a className='col-1' onClick={handleEditing} >
                            <img src={modifica} />
                        </a>
                        {editing && (
                            <>
                                <input
                                    type='text'
                                    className='pinputModifica'
                                    onChange={(e) => { e.preventDefault(); props.setUpdate(e.target.value, props.id) }}
                                    onKeyUp={handleUpdatedDone}
                                    value={props.item}
                                >
                                </input>
                            </>
                        )}
                    </div>

                </div>
            </div>
        </>
    );
}

export default Item;