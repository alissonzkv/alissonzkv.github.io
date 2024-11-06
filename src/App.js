import { HashRouter as Router, Routes, Route,} from 'react-router-dom'
import Disciplina1 from './components/pages/Disciplina1';
import Inicio from './components/pages/Inicio';

import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
    <Container customClass="min-height">
      <Navbar />
  <Routes>
    <Route path="/" element={<Inicio />} />
  
   
  </Routes>
  </Container>
<Footer />
 

</Router>
  );
}

export default App;