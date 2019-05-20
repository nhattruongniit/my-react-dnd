import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { initialData } from "./data";

function App() {
  const [data, setData] = useState(initialData);

  const onDragEnd = drag => {
    const { destination, source } = drag;
    const newData = [...data];

    const [removed] = newData.splice(source.index, 1);
    newData.splice(destination.index, 0, removed);
    setData(newData);
  };

  return (
    <div className="app">
      <center>
        <h1>Todos App With React Drag & Drop</h1>
      </center>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {provided => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {" "}
              {data.map((item, index) => (
                <Draggable
                  key={item.id}
                  draggableId={item.id}
                  index={index}
                  isDragDisabled={item.isDragDisabled}
                >
                  {provided => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="draggable"
                    >
                      {item.content}; disable drag:{" "}
                      {item.isDragDisabled ? "yes" : "no"}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default App;
