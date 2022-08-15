import 'bulma/css/bulma.min.css';
import { Route, Routes } from 'react-router-dom';
import { CocktailDetails } from './components/CocktailDetails';
import { CocktailList } from './components/CocktailList';
import { CocktailRandom } from './components/CocktailRandom';
import { Footer } from './components/Footer';
import { NavbarMenu } from './components/NavbarMenu';

function App() {



  return (
    <section className="hero is-fullheight is-default is-bold">
      <div className="hero-head">
        <NavbarMenu />
      </div>
      <div className="hero-body">
        <div className="container has-text-centered">
          <Routes>
            <Route path='/' element={<CocktailRandom />} />
            <Route path='/cocktails' element={<CocktailList />} />
            <Route path='/cocktails/:id' element={<CocktailDetails />}/>
          </Routes>

        </div>
      </div>
      <Footer />
    </section>
  );
}

export default App;
