import React from 'react'
import './App.css'

function App() {
  const sendMessage = () => {
    if ((window as any).ReactNativeWebView) {
      (window as any).ReactNativeWebView.postMessage('Hello from React!')
    }
  }

  return (
    <div className='App'>
      <button onClick={sendMessage}>Send Message</button>
    </div>
  )
}

export default App
