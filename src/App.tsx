/*eslint-disable */
import './App.css'

declare global {
  interface Window { ReactNativeWebView: any; }
}

function App() {
  const sendMessage = () => {
    const type = 'TEST'
    const options = {
      method: 'POST',
    }

    window.ReactNativeWebView?.postMessage(JSON.stringify({ ...options, type }))
  }

  return (
    <div className='App'>
      <button onClick={sendMessage}>sendMessage</button>
    </div>
  )
}

export default App
