import React, { useState } from 'react';
import Switch from 'react-switch';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectOrder, changeDisplay } from '../../slices/news-slice';

const NewsSwitch = () => {
const isGrid = useAppSelector(selectOrder)
const dispatch = useAppDispatch();

const handleViewSwitch = (checked: boolean) => {
  dispatch(changeDisplay(checked))
};



  return (
    <>
     
      <Switch      onChange={handleViewSwitch}
        checked={isGrid}
        onColor="#3057F8"
        offColor="#ccc"
        handleDiameter={40}
        uncheckedIcon={<div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100%", fontSize: 15, color: "#fff", paddingRight: 2}}>List</div>}
        checkedIcon={<div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100%", fontSize: 15, color: "#fff", paddingLeft: 2}}>Grid</div>}
        height={40}
        width={90} />
    
      
    </>
  );
}

export default NewsSwitch