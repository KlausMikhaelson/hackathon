import { useBox } from '@react-three/cannon'
import { useLoader } from '@react-three/fiber'
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'


const Goalpost = () => {
    const goalPost = useLoader(GLTFLoader, "/goal.glb")
    const [ref] = useBox(() => ({
        mass: 1000,
        type: 'Static',
        position: [-25,2,-1],
        args: [0.1,0.1,0.1]
    }))
  return (
    <mesh ref={ref} scale={0.4}>
        <object3D>
            <primitive object={goalPost.scene} />
        </object3D>
    </mesh>
  )
}

export default Goalpost