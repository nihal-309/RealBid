import './App.css';
import Header from './components/Header1';
import Header2 from './components/Header2';
import Hero from './components/Hero';
import Main from './components/Main';
import Click from './components/Click';
import Partner from './components/Partner';
import Coursel from './components/coursel';
import Articlecoursel from './components/Articlecoursel';
import Footer from './components/footer';import Login from './components/Login';

function App() {
  return (
    <div>
      <div className="App">
        <Header />
        <Header2 />
        <Hero />
        <Main />
        <Click />
        <Partner />
        <Coursel />
        <Articlecoursel />
      </div>
      <Footer />
      <Login />
    </div>
  );
}
export default App;
