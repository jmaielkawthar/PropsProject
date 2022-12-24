import './App.css';
import './css/profileStyle.css';
import Profile from './components/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const profileItems =
    {
      fullName: "kawthar",
      bio: "yes",
      profession: "IT computing",
    }
    const handleName = (x) => {
      alert(x);
    };

  return (
    <div className="App">
      <div className='profileCard'>
        <Profile   handleName={handleName} >
            https://img.batiweb.com/repo-images/supplier/3273/kawneerfrance-logo.jpg
        </Profile>
        
      </div>
    </div>
  );
}

export default App;
