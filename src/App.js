import './App.css';
import Profile from './Profile/Profile';


function App() {
  const HandleName = name => alert(name);
  return (
    <div className="App">
    <header className="App-header">
      <Profile fullName="Rihab Ben Mamya" bio="Ing" profession="Web Development" HandleName={HandleName}>
        <img src="/photoProfile.png" alt="photoProfile" width="150" />
      </Profile>
    </header>
    </div>
  );
}

export default App;
