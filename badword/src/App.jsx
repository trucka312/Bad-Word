import { useState } from 'react'
import './App.css'
import data from './data'


function App() {
  const [badWord, setBadWord] = useState(data)

  return (
    <div>
      <h2 className='text'>Danh sách Bad Word:</h2>
      
      <div>
        <div className='card'>
          <div className='card-list'>
            {badWord.length > 0 ? badWord?.map((item) => (
              <div key={item.id}>{item}</div>
            )) : <></>}
          </div>
        </div>
      </div>
      
      <div className="bottom">
        <div>
          
        </div>
        <div className='button add'>
          <button onClick={() => setBadWord()}>
            Thêm Bad Word
          </button>
        </div>

      </div>
      
    </div>
  )
}

export default App
