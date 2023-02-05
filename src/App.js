import './App.css';
import { Canvas } from "@react-three/fiber"
import { Suspense } from 'react';
import { Html, OrbitControls } from "@react-three/drei"
import { Physics } from "@react-three/cannon"
import Model from './components/Model';
import PlayerModel from './components/Player';
import Hurdle from './components/Enemy';
import Goalpost from './components/Goalpost';
import Goalpost2 from './components/Goalpost2';
import Ball from './components/Ball';
import Walls from './components/Boundary';

function App() {
  return (
    <div className='App'>
      <Canvas camera={{ position: [0, 5, 12] }}>
        <Physics
        defaultContactMaterial={{
          restitution: 0.5,
          friction: 0
        }}
        >
          <Suspense fallback={<Html>Loading please wait</Html>}>
            <OrbitControls />
            <ambientLight />
            <Model />
            <PlayerModel />
            <Hurdle />
            <Goalpost />
            <Goalpost2 />
            <Ball />
            <Walls />
          </Suspense>
        </Physics>
      </Canvas>
    </div>
  );
}

export default App;
