import './App.css';
import { Features } from './components/features';
import { Skincare } from './components/skincare';
import { Groceries } from './components/groceries';
import {Navbar} from './components/navbar';
import { School } from './components/school';
import Divider from '@mui/material/Divider';
import { Container } from '@mui/material';
import { About } from './components/about';
import SignIn from './components/signin';
import { Todo } from './components/todo';


function App() {
  return (
    <>

    <div className="App">
      <Navbar />
    <Container>
      <About/>
      <Divider orientation="horizontal" flexItem sx={{m:7}} />
      <Features/>
      <Divider orientation="horizontal" flexItem sx={{m:7}} />
      <Todo/>
      <Divider orientation="horizontal" flexItem sx={{m:7}} />
      <School/>
      <Divider orientation="horizontal" flexItem sx={{m:7}} />
      <Groceries/>
      <Divider orientation="horizontal" flexItem sx={{m:7}} />
      <Skincare/>
      <Divider orientation="horizontal" flexItem sx={{m:7}} />
      <SignIn/>
    </Container>
    </div>
    </>
  );
}

export default App;
