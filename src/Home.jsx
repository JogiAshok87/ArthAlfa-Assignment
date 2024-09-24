import React,{useState} from 'react'
import './index.css'

const Home = () => {
    const [UserInputText,SetUserInputText] = useState('')
    const [uniqueWords,setUniqueWords] = useState(0);
    const [charCount,setCharCount] = useState(0);
    const [searchText, setSearchText] = useState('');
    const [replaceText, setReplaceText] = useState('');

 
    const getUniqueWordsCount = (inputText) =>{
         const words = inputText.toLowerCase().match(/\b\w+\b/g);
         return words ? new Set(words).size : 0;
         console.log('words:',words)
    }

    const getCharacterCount =  (inputText) =>{
          const chars = inputText.replace(/[^a-zA-Z0-9]/g, '')
          return chars.length;
    }
    const onChangeInputText = (e) =>{
        const inputText = e.target.value
       SetUserInputText(inputText)

       setUniqueWords(getUniqueWordsCount(inputText))
       setCharCount(getCharacterCount(inputText));
       //console.log(uniquewords)
    }

    
  const handleReplaceAll = () => {
    if (searchText.trim()) {
      const newText = UserInputText.split(searchText).join(replaceText);
      SetUserInputText(newText);
      
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
        <h2>Real-Time Text Analysis and String Replacement</h2>

        <textarea className='textarea' placeholder='Enter the text' onChange={onChangeInputText} value={UserInputText} cols={100} rows={15} />

        <div style={{ marginBottom: '20px' }}>
        <p>Unique Words: {uniqueWords}</p>
        <p>Character Count (Excluding Spaces and Punctuation): {charCount}</p>
      </div>

      <div style={{ marginBottom: '10px' }}>
        <input
          type='text'
          placeholder='Search text'
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <input
          type='text'
          placeholder='Replace with'
          value={replaceText}
          onChange={(e) => setReplaceText(e.target.value)}
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <button onClick={handleReplaceAll}  className='replaceBtn'
        >Replace All</button>
      </div>
             
       
    </div>
  )
}

export default Home