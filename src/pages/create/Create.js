import { useState } from 'react';

//styles
import './Create.css';

export default function Create() {
  const [title, setTitle] = useState('');
  const [method, setMethod] = useState('');
  const [cookingTime, setCookingTime] = useState('');

  return <div className="create">Create</div>;
}
