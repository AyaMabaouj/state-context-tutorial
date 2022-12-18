import './App.css';
import Navigation from '../Navigation/Navigation';
import SaladMaker from '../SaladMaker/SaladMaker';
import UserContext from '../User/User'


const user = {
  name: 'aya',
  favorites: [
    'avocado',
    'carrot'
  ]
}

function App() {
  return (
   <UserContext.Provider value={user}>
    <Navigation></Navigation>
    <SaladMaker></SaladMaker>
    </UserContext.Provider>
  );
}

export default App;
