import { useBox } from '@react-three/cannon'
import { useLoader } from '@react-three/fiber'
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'


const Goalpost2 = () => {
    const goalPost = useLoader(GLTFLoader, "/goal2.glb")
    const [ref] = useBox(() => ({
        mass: 1000,
        type: 'Static',
        position: [26,1,-1],
        rotation: [0,-Math.PI, 0],
        args: [0.1,0.1,0.1]
    }))
  return (
    <mesh ref={ref} scale={0.4} position={[-10,1,1]}>
        <object3D>
            <primitive object={goalPost.scene} />
        </object3D>
    </mesh>
  )
}

export default Goalpost2