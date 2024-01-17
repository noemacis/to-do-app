import React, { useState, useEffect } from "react";
import './ItemsList.css';
import Item from "../Item/Item";
import { JSX } from "react/jsx-runtime";
import ts from "typescript";
import { AnySoaRecord } from "dns";
import { stat } from "fs/promises";


function ItemsList(props: any) {

  const [list, setList] = useState<any[]>([]);
  const [filter, setFilter] = useState<string>('all');
  let updatedList = [...list];

  useEffect(() => {
    setList(props.items);
  }, [props.items, updatedList]);


  let handleDelete = (id: number) => {
    updatedList.splice(id, 1);
    list.splice(id, 1);
    setList(updatedList);
  }

  const setUpdate = (updatedTitle: string, id: number) => {
    updatedList[id] = updatedTitle;
    setList(updatedList);

  }



  return (
    <>
      <div className="mt-2">
        {updatedList.map((item: any, index: number) => (
          <Item
            key={index}
            id={index}
            item={item}
            onClick={handleDelete}
            setUpdate={setUpdate}
          />))}
      </div>
    </>
  );

}

export default ItemsList;


