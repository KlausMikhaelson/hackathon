import './App.css';
import { Canvas } from "@react-three/fiber"
import { Suspense } from 'react';
import { Html, OrbitControls } from "@react-three/drei"
import { Physics } from "@react-three/cannon"
import Model from './components/Model';

function App() {
  return (
    <div className='App'>
      <Canvas camera={{ position: [0, 5, 12] }}>
        <Physics>
          <Suspense fallback={<Html>Loading please wait</Html>}>
            <OrbitControls />
            <ambientLight />
            <Model />
          </Suspense>
        </Physics>
      </Canvas>
    </div>
  );
}

export default App;
