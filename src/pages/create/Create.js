import { useState } from 'react';

//styles
import './Create.css';

export default function Create() {
  const [title, setTitle] = useState('');
  const [method, setMethod] = useState('');
  const [cookingTime, setCookingTime] = useState('');

  return (
    <div className="create">
      <h2 className="page-title"></h2>
    </div>
  );
}
