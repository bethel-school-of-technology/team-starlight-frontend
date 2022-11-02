import logo from './logo.svg';
import MainPage from './MainPage';
import './App.css';
import Stack from 'react-bootstrap/Stack';
import CreateAccount from './CreateAccount';
import RecipeList from '../images/RecipeList';

function App() {
  return (
    <Stack gap={3} className="col-md-10 mx-auto">
      <MainPage />
      <CreateAccount />
      <RecipeList />
    </Stack>
  );
}

export default App;
