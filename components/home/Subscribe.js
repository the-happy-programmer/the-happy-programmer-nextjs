import { useState, useRef } from 'react';
import SvgtoReact from '../Svgtoreact';
export default function Subscribe({ title, subtitle }) {
  const inputEl = useRef(null);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const sub = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const { error } = await res.json();
    console.log('RES', res.error);

    if (error) {
      setError(error);
      return;
    }
    inputEl.current.value = '';
    setMessage('You are now subscribed');
  };
  return (
    <div className='container text-center py-20'>
      <p className='text-3xl font-bold dark:text-gray-50'>{title}</p>
      <p className='p-10 text-gray-700 max-w-2xl mx-auto dark:text-gray-300'>
        {subtitle}
      </p>
      <form onSubmit={sub}>
        <input
          type='email'
          name='email'
          ref={inputEl}
          placeholder='example@email.com'
          className='py-3 px-4  bg-gray-200 dark:bg-gray-800 dark:focus:border-gray-50 border dark:border-gray-600 focus:outline-none focus:border-gray-300 rounded-md mr-4 shadow-lg dark:text-gray-50 text-gray-900'
        />
        <button
          type='submit'
          className='dark:bg-gray-50 bg-gray-900 px-10 py-3 hover:bg-gray-700 dark:hover:bg-gray-200 rounded-md dark:text-gray-900 text-gray-50'
        >
          Subrcibe
        </button>
        <div className='flex flex-row justify-center items-center gap-x-2 pt-4'>
          {error != message && (
            <>
              <SvgtoReact
                name={error ? 'tick ' : 'tick'}
                className='h-5 fill-current text-gray-700 dark:text-gray-50'
              />
              <p className='dark:text-gray-300 text-gray-900'>{error}</p>
            </>
          )}
          {message != error && (
            <>
              <SvgtoReact
                name={message ? 'tick ' : 'tick'}
                className='h-5 fill-current text-gray-700 dark:text-gray-50'
              />
              <p className='dark:text-gray-300 text-gray-900'>{message}</p>
            </>
          )}
        </div>
      </form>
    </div>
  );
}
