import 'bootstrap/dist/css/bootstrap.min.css';
import 'normalize.css';
import './style.css';

import MainForm from './components/Form';

const App = () => {
  return (
    <div className="App">
      <h1 className='text-center'>Hello</h1>
      <MainForm />
    </div>
  );
}

export default App;
