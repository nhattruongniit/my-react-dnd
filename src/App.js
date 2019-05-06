import React from "react";
import { DragDropContext } from "react-beautiful-dnd";

function App() {
  const onBeforeDragStart = () => {
    console.log("onBeforeDragStart");
  };

  const onDragStart = () => {
    console.log("onDragStart");
  };

  const onDragUpdate = () => {
    console.log("onDragUpdate");
  };

  const onDragEnd = () => {
    console.log("onDragEnd");
  };

  return (
    <div className="app">
      <DragDropContext
        onBeforeDragStart={onBeforeDragStart}
        onDragStart={onDragStart}
        onDragUpdate={onDragUpdate}
        onDragEnd={onDragEnd}
      >
        <div>hello word</div>
      </DragDropContext>
    </div>
  );
}

export default App;
