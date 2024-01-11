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

  useEffect(() => {
    setList(props.items);
  }, [props.items]);


  let handleDelete = (id: any) => {
    const updatedList = [...list];
    updatedList.splice(id, 1);
    setList(updatedList);

  }

  const setUpdate = (updatedTitle: string, id: number) => {
    const updatedList = [...list];
    updatedList[id] = updatedTitle;
    setList(updatedList);

  }



  return (
    <>
      <div className="mt-2">
        {list.map((item: any, index: number) => (
          <Item
            key={index}
            id={index}
            item={item}
            onClick={handleDelete}
            setUpdate={setUpdate}
          //complete={handleFilterChange}
          />))}
      </div>
    </>
  );

}

export default ItemsList;


