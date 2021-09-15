import './App.scss';
import { Header } from './components/Header'
import About  from './components/AboutPage/AboutPage'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery/Gallery'
import { HomePage } from './components/HomePage/HomePage'
import { Brochures } from './components/Brochures/Brochures'
// import { FeaturedProjects } from './components/FeaturedProjects/FeaturedProjects'
import FeaturedProjects from './components/FeaturedProjects/FeaturedProjects'
import { BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'


function App() {
  
  return (
    <Router>
    <div className="App">
        <Header/>
        <Switch>
            <Route path="/about" component={About}></Route>
            <Route path="/brochure" component={Brochures} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/:project" component={FeaturedProjects} />
            <Route path="/" component={HomePage}></Route>
          </Switch>
        <Footer/>
    </div>
    </Router>
  );
}

export default App;
