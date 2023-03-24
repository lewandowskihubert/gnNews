import React, { useState } from 'react';
import Switch from 'react-switch';

const NewsSwitch = () => {
  const [gridView, setGridView] = useState<boolean>(true);

  function handleViewSwitch(checked: boolean) {
    setGridView(checked);
  }

  function renderNews() {
    if (gridView) {
      // Render news in grid view
    } else {
      // Render news in list view
    }
  }

  return (
    <>
     
      <Switch      onChange={handleViewSwitch}
        checked={gridView}
        onColor="#86d3ff"
        offColor="#888"
        handleDiameter={40}
        uncheckedIcon={<div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100%", fontSize: 15, color: "#fff", paddingRight: 2}}>List</div>}
        checkedIcon={<div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100%", fontSize: 15, color: "#fff", paddingLeft: 2}}>Grid</div>}
        height={40}
        width={90} />
      {renderNews()}
      
    </>
  );
}

export default NewsSwitch