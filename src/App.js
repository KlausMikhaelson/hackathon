import './App.css';
import {Canvas} from "@react-three/fiber"
import { Suspense } from 'react';
import {Html} from "@react-three/drei"

function App() {
  return (
    <div className='App'>
      <Canvas camera={{position: [0,5,12]}}>
        <Suspense fallback={<Html>Loading please wait</Html>}
      </Canvas>
    </div>
  );
}

export default App;
