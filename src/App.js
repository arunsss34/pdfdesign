import './App.css';
import FormWithAddButton from './Input';
import logo from './logo.jpeg'

function App() {
  return (<>

    <div className='logo_div'> <img src={logo} className='logo' /></div>
    <FormWithAddButton />
  </>
  );
}

export default App;
