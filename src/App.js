import {Navbar, Header, Feature, Download, Subscribe, Faq, Footer} from './components';
import './App.css';


function App() {
  return (
    <main>
<header className='header-bg'>
  <Navbar/>
  <Header/>
</header>
<Feature/>
<Download/>
<Subscribe/>
<Faq/>
<Footer/>
    </main>
  );
}

export default App;
