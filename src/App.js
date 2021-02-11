import { useState } from 'react';
import { Footer, Header, InputArea, JSONError, OutputArea } from './components';
import { data, data2, data3 } from './constants/dummy-data';
import './scss/App.scss';

const checkIfJSONString = str => {
  try {
    return str.length > 0 && JSON.parse(str);
  } catch (e) {
    return false;
  }
};

const App = () => {
  const [input, setInput] = useState(JSON.stringify(data2, null, 4))
  const [output, setOutput] = useState([])
  
  const handleChange = (event) => {
    const { value = '' } = event.target
    setInput(value)
  }

  const generateOutput = (input, level) => {
    const toReturn = []
    if (Array.isArray(input)) {
      toReturn.push(<div style={{marginLeft: `${10*level}px`}}>[</div>)
      toReturn.push(input.map(ele => generateOutput(ele, level+1)))
      toReturn.push(<div style={{marginLeft: `${10*level}px`}}>]</div>)
    }
    else if (typeof input === 'object') {
      toReturn.push(<div style={{marginLeft: `${10*level}px`}}>{'{'}</div>)
      for (const key in input) {
        toReturn.push(
          <div key={`${input}-${key}`} style={{marginLeft: `${10*(level+1)}px`}}>
            {key}: {input[key]}
          </div>
        )
      }
      toReturn.push(<div style={{marginLeft: `${10*level}px`}}>{'}'}</div>)
    }
    return toReturn
  }

  const handleFormat = () => {
    if (input === '') setOutput([<JSONError empty/>])
    else if (!checkIfJSONString(input)) setOutput([<JSONError />])
    else setOutput(generateOutput(JSON.parse(input), 0))
  }

  return (
    <div className="container">
      <Header />
      <div className="main">
        <InputArea onChange={handleChange} defaultValue={input} />
        <div className="btn-stack">
          <button className="btn" onClick={handleFormat}>Format</button>
        </div>
        <OutputArea output={output} />
      </div>
      <Footer />
    </div>
  );
}
export default App;
