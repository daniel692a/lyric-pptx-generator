import './App.css';
import Form from './components/Form/Form';
import Sample from './components/Sample/Sample';


function App() {
  return (
    <>
      <h1>Generador de PPTX para letras</h1>
      <div className='container'>
        <Form></Form>
        <Sample></Sample>
      </div>
    </>
  );
}

export default App;
