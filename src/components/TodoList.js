import React, { useState } from "react";
import { List, Checkbox } from "antd";
import { DeleteTwoTone } from "@ant-design/icons";

export default function TodoList({ todos, setTodos }) {
  const [completed, setCompleted] = useState(false);
  const onChange = (id, checked) => {
    let list = [...todos];
    list.forEach((todo) => {
      if (todo.id === id) {
        todo.completed = checked;
      }
    });
    setTodos(list);
  };
  const handleDeleteTodo = (id) => {
    let list = [...todos].filter((todo) => todo.id !== id);
    window.localStorage.setItem("todos", JSON.stringify(list));
    setTodos(list);
  };
  return (
    <List
      style={{ margin: "1rem 0", textAlign: "left" }}
      bordered
      dataSource={todos}
      renderItem={(item) => (
        <List.Item
          className="todo-item"
          actions={[
            <DeleteTwoTone
              twoToneColor="#F44336"
              onClick={() => handleDeleteTodo(item.id)}
            />,
          ]}
        >
          <Checkbox
            checked={item.completed}
            onChange={(event) => onChange(item.id, event.target.checked)}
            className={item.completed ? "completed" : ""}
          >
            {item.text}
          </Checkbox>
        </List.Item>
      )}
    />
  );
}
