import { useRef, useState } from 'react';
import { ArrayView, BooleanView, Footer, Header, InputArea, JSONError, NullView, NumberView, ObjectView, OutputArea, StringView } from './components';
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
  const [input, setInput] = useState(JSON.stringify(data3, null, 4))
  const [output, setOutput] = useState([])
  const snackbar = useRef(null);
  
  const handleChange = (event) => {
    const { value = '' } = event.target
    setInput(value)
  }

  // const generateOutput = (input, level) => {
  //   const toReturn = []
  //   if (Array.isArray(input)) {
  //     toReturn.push(<div style={{marginLeft: `${10*level}px`}}>[</div>)
  //     toReturn.push(input.map(ele => generateOutput(ele, level+1)))
  //     toReturn.push(<div style={{marginLeft: `${10*level}px`}}>]</div>)
  //   }
  //   else if (typeof input === 'object') {
  //     toReturn.push(<div style={{marginLeft: `${10*level}px`}}>{'{'}</div>)
  //     for (const key in input) {
  //       toReturn.push(
  //         <div key={`${input}-${key}`} style={{marginLeft: `${10*(level+1)}px`}}>
  //           {key}: {input[key]}
  //         </div>
  //       )
  //     }
  //     toReturn.push(<div style={{marginLeft: `${10*level}px`}}>{'}'}</div>)
  //   }
  //   return toReturn
  // }

  const generateOutput = (input, level, property) => {
    let toReturn = 'No Data';
    if (Array.isArray(input)) {
      toReturn = <ArrayView data={input} generateOutput={generateOutput} level={level}/>
    } else if (typeof input === 'object' && input === null) {
      toReturn = <NullView level={level} input={input} property={property} />
    } else if (typeof input === 'object') {
      toReturn = <ObjectView data={input} generateOutput={generateOutput} level={level}/>
    } 
    else {
      switch (typeof input) {
        case 'boolean':
          toReturn = <BooleanView level={level} input={input} property={property} />
          break;
        case 'number':
          toReturn = <NumberView level={level} input={input} property={property} />
          break;
        case 'string':
          toReturn = <StringView level={level} input={input} property={property} />
          break;
        default: 
          break;
      }
    }
    return toReturn
  }

  const handleFormat = () => {
    if (input === '') setOutput([<JSONError empty/>])
    else if (!checkIfJSONString(input)) setOutput([<JSONError />])
    else setOutput(generateOutput(JSON.parse(input), 0))
  }

  const handleSnackbar = (message = 'Copied') => {
    const { current } = snackbar
    current.className = "show";
    current.innerHTML = message
    setTimeout(() => {
      current.className = current.className.replace("show", "");
      current.innerHTML = ''
    }, 3000);
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(input).then(() => {
      handleSnackbar()
    })
  }

  return (
    <div className="container">
      <Header />
      <div className="main">
        <InputArea onChange={handleChange} defaultValue={input} />
        <div className="btn-stack">
          <button className="btn" onClick={handleFormat}>Format</button>
          <button className="btn" onClick={handleCopy}>Copy JSON</button>
        </div>
        <div id="snackbar" ref={snackbar} />
        <OutputArea output={output} />
      </div>
      <Footer />
    </div>
  );
}
export default App;
