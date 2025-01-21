import CoreConcepts from './components/CoreConcept.jsx';
import Header from './components/Header/Header.jsx'
import {CORE_CONCEPTS} from './data.js'
import TabButton from './components/tabButton.jsx';
import { useState } from 'react';
import { EXAMPLES } from './data.js';
function App() {
  const [selectedTopic, setSelectedTopic]=useState();
  
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
                <TabButton isSelected={selectedTopic==='components'} 
                onSelect={()=>handleSelect('components')}>Component</TabButton>
                <TabButton isSelected={selectedTopic==='jsx'} 
                onSelect={()=>handleSelect('jsx')}>JSX</TabButton>
                <TabButton isSelected={selectedTopic==='props'} 
                 onSelect={()=>handleSelect('props')}>Props</TabButton>
                <TabButton isSelected={selectedTopic==='state'} 
                 onSelect={()=>handleSelect('state')}>State</TabButton>
            </menu>
              
               {!selectedTopic && <p>Please select a topic. </p> }
                {selectedTopic? 
                <div id='tab-content'>
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                  <code>
                  {EXAMPLES[selectedTopic].code}
                  </code>
                </pre>
              </div> : null
               }
               
        </section>
      </main>
    </div>
  );
}

export default App;
