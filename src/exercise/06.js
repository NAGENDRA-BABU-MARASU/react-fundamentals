// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({ onSubmitUsername }) {
  const [username, setUsername] = React.useState('');
  const usernameInputRef = React.useRef();
  // const [error, setError] = React.useState(null);
  function handleSubmit(event) {
    event.preventDefault();
    // const value = event.target.elements['usernameInput'].value;
    // const value = usernameInputRef.current.value;
    onSubmitUsername(username);
  }

  function handleChange(event) {
    const { value } = event.target;
    // const isLowerCase = value === value.toLowerCase();
    // setError(isLowerCase ? null : 'Username must be lowercase');
    // event.target.value;
    setUsername(value.toLowerCase());
  }


  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input ref={usernameInputRef} onChange={handleChange} value={username} id="usernameInput" type="text" />
      </div>
      {/* <div style={{color: 'red'}}>{error}</div> */}
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
