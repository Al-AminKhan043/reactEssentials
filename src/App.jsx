import CoreConcepts from './components/CoreConcept.jsx';
import Header from './components/Header/Header.jsx'
import {CORE_CONCEPTS} from './data.js'
import TabButton from './components/tabButton.jsx';
import { useState } from 'react';

function App() {
  const [selectedTopic, setSelectedTopic]=useState('Please Click a  button!');
  
  function handleSelect(selectedfeature){
     setSelectedTopic(selectedfeature)
    //  console.log(selectedTopic)
   }
   
  return (
    <div>
      <Header/>
      <main>
        <section id='core-concepts'> 
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcepts 
           {...CORE_CONCEPTS[0]}
          />
          <CoreConcepts 
          {...CORE_CONCEPTS[1]}
          />
          <CoreConcepts 
          {...CORE_CONCEPTS[2]}
          />
          <CoreConcepts 
          {...CORE_CONCEPTS[3]}
          />
        </ul>
        </section>
        <section id="examples">
            <h2>Examples</h2>
            <menu>
                <TabButton onSelect={()=>handleSelect('component')}>Component</TabButton>
                <TabButton onSelect={()=>handleSelect('jsx')}>JSX</TabButton>
                <TabButton onSelect={()=>handleSelect('props')}>Props</TabButton>
                <TabButton onSelect={()=>handleSelect('state')}>State</TabButton>
            </menu>
              {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;
