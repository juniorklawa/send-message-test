/*eslint-disable */
import './App.css'

function App() {
  const sendMessage = () => {
    const obj = {
      type: 'TEST',
      data: {
        name: 'test',
      },
    }

    if ((window as any).ReactNativeWebView) {
      ;(window as any).ReactNativeWebView.postMessage(JSON.stringify(obj))
    }
  }


  return (
    <div className='App'>
      <button onClick={sendMessage}>sendMessage</button>
    </div>
  )
}

export default App
