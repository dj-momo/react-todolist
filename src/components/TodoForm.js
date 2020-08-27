import React, { useState, useRef } from "react";
import { Form, Input } from "antd";
import shortid from "shortid";

export default function TodoForm({ setTodos }) {
  const [todo, setTodo] = useState("");
  const [form] = Form.useForm();
  const todoInput = useRef(null);
  const handleSubmit = () => {
    const newTodo = {
      id: shortid.generate(),
      text: todo,
      completed: false,
    };
    form.resetFields();
    setTodos((state) => {
      window.localStorage.setItem("todos", JSON.stringify([...state, newTodo]));
      return [...state, newTodo];
    });
    setTodo("");
    todoInput.current.focus();
  };
  return (
    <Form form={form} onFinish={handleSubmit}>
      <Form.Item
        label=""
        name="todo"
        rules={[{ required: true, message: "Todo item must not be empty" }]}
      >
        <Input
          placeholder="Enter a todo"
          size="large"
          onChange={(event) => {
            event.preventDefault();
            setTodo(event.target.value);
          }}
          ref={todoInput}
        />
      </Form.Item>
    </Form>
  );
}
