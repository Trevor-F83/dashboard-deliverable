
import Navigation from './components/Navigation';
import Review from './components/Review';
import Rating from './components/Rating';
import Analysis from './components/Analysis';
import Visitor from './components/Visitor';
import './styles.css';

function App() {
  return (
    <div className='container'>
      <Navigation />
      <Review />
      <Rating />
      <Analysis />
      <Visitor />
    </div>
  );
}

export default App;
