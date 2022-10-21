/*eslint-disable */
import './App.css'

function App() {
  const sendMessage = () => {
    // @typescript-eslint/ban
    // @ts-ignore
    if ((window as any).ReactNativeWebView) {
      // @ts-ignore
      ;(window as any).ReactNativeWebView.postMessage('Hello from React!')
    }
  }

  return (
    <div className='App'>
      <button onClick={sendMessage}>Send Message</button>
    </div>
  )
}

export default App
