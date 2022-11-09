import { useState } from 'react'; 
import classNames from 'classnames';


import './App.css';

import Ballot from './Components/Ballot/Ballot';
import ResultsModal from './Components/ResultsSection/ResultsModal';

function App() {

  const [displayModal, setDisplayModal] = useState(null);

  const closeModal = ()=>{
    setDisplayModal(false); 
  }

  return (
    <>
    <div className={classNames('App', {'App--overlay':Boolean(displayModal)})}>
      
      <header className="App-header">
        <h1>Awards 2022</h1>
      </header>

      <Ballot setDisplayModal= {setDisplayModal}/>
    </div>
    {displayModal && <ResultsModal  closeModal = {closeModal}/>}
    </>
  );
}

export default App;
