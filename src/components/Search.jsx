import { useState } from 'react';
export function Search({ cb = Function.prototype }) {
  const [value, setValue] = useState('');

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      handleSubmint();
    }
  };

  const handleSubmint = () => {
    cb(value);
  };

  return (
    <div className='row'>
      <div className='imput-field col s12'>
        <input
          type='search'
          id='search-field'
          plaseolder='search'
          onKeyDown={handleKey}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
      </div>
      <button
        className='btn'
        style={{ top: 0, right: 0 }}
        onClick={handleSubmint}
      >
        Search
      </button>
    </div>
  );
}
