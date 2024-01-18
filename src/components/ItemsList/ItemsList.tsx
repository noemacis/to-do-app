import React, { useState, useEffect } from "react";
import './ItemsList.css';
import Item from "../Item/Item";
import { JSX } from "react/jsx-runtime";
import ts, { updateSetAccessor } from "typescript";
import { AnySoaRecord } from "dns";
import { stat } from "fs/promises";


function ItemsList(props: any) {

  const [list, setList] = useState<any[]>([]);
  const [fil, setFiltro] = useState('all');
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
    list.splice(id, 1, updatedTitle);
    setList(updatedList);

  }



  const liste = (filter: boolean, id: number) => {

    let completedList: any[] = [];
    let activeList: any[] = [];

    if (filter === true) {
      completedList.push(updatedList[id]);

      console.log('completedList from liste : ' + completedList);

    } else {
      activeList.push(updatedList[id]);
    }

  }
  /*
  const handleFilter = (): any[] => {
    if (fil == 'completati') {
      return liste();

    } else if (fil === 'attivi') {
      return liste();
    } else {
      return updatedList;
    }

  } updatedList = handleFilter();
  console.log(updatedList);
*/

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
            filter={liste}
          />))}
      </div>




    </>
  );

}

export default ItemsList;


