import './App.css';
import Form from './components/Form/Form';
import SlideView from './components/SlideView/SlideView';


function App() {
  return (
    <>
      <h1>Generador de PPTX para letras</h1>
      <div className='container'>
        <Form></Form>
        <SlideView/>
      </div>
    </>
  );
}

export default App;
