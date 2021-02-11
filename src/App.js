import { Footer, Header, InputArea, OutputArea } from './components';
import './scss/App.scss';

const App = () => (
  <div className="container">
    <Header />
    <div className="main">
      <InputArea defaultValue="default value" />
      <OutputArea output="Output here" />
    </div>
    <Footer />
  </div>
);

export default App;
