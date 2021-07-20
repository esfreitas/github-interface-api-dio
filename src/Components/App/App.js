import Button from '../Button/Button';
import Profile from '../Profile/Profile';
import Repository from '../Repositories/Repository';
import Starred from '../Starred/Starred';
import './App.css';

const App = () => {
  return (
    <>
      <Profile></Profile>
      <Button></Button>
      <Repository></Repository>
      <Starred></Starred>
    </>
  )
}

export default App;
