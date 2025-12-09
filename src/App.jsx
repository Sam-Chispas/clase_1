import Header from './Header';
import Hero from './Hero';
import Carousel from './Carousel';
import ComplaintForm from './ComplaintForm';
import './index.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Carousel />
      <ComplaintForm />
    </div>
  );
}

export default App;