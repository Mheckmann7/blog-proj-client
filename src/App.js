import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/About/About'
import Blog from './pages/Blog/Blog'
import Contact from './pages/Contact/Contact'
import AdminLogin from './pages/AdminLogin/AdminLogin'
import HomePage from './pages/HomePage/HomePage'
import {Switch , Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header /> 
        <main>
        <Switch>
          <Route exact path="/" render={props =>
            <HomePage />
          } />
           <Route exact path="/about" render={props =>
            <About />
          } />
           <Route exact path="/blog" render={props =>
            <Blog />
          } />
           <Route exact path="/contact" render={props =>
            <Contact />
          } />
           <Route exact path="/admin-login" render={props =>
            <AdminLogin {...props}/>
          } />
        </Switch>
        </main>
      <Footer /> 
    </div>
  );
}

export default App;
