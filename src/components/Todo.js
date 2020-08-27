import React, { useState, useEffect } from "react";
import { Row, Col, Input } from "antd";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default function Todo() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(JSON.parse(window.localStorage.getItem("todos")));
  }, []);

  return (
    <Row align="middle" justify="center">
      <Col span={10} className="todo">
        <TodoForm setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </Col>
    </Row>
  );
}
