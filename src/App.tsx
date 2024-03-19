import { useState, useCallback } from 'react';
import './App.css';
import { ChildArea } from './ChildArea';

function App() {
  const [count, setCount] = useState(0); //カウンター
  const countUp = (prev) => prev + 1;

  const [state, setState] = useState({ id: 1, value: '' });
  const setValue = (value: string) =>
    setState((prev) => ({
      ...prev,
      value,
    }));

  const [text, setText] = useState('');
  const onChangeText = (event) => {
    const text = event.target.value;
    setText(text);
  };

  const [open, setOpen] = useState(false);
  const onClickOpen = () => {
    setOpen(!open);
  };
  const onClickClose = useCallback(() => setOpen(false), []);

  return (
    <>
      <h1>Reactステップアップ</h1>
      <input value={text} onChange={onChangeText} />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
      <div className="card">
        <button onClick={() => setCount(countUp)}>１つ増やす</button>
        現在のcount is {count}
      </div>
      <div className="card">
        <button onClick={() => setValue('新しい文字')}>変更する</button>
        現在のstate_id={state.value}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
