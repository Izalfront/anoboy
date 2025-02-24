import { useState } from 'react';

interface TodoformProps {
  addTodo: (text: string) => void;
}

const TodoForm: React.FC<TodoformProps> = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} className="border p-2 rounded w-full" placeholder="Tambahkan tugas..." />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Tambah
      </button>
    </form>
  );
};

export default TodoForm;
