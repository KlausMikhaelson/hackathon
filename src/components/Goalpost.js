import { useBox } from '@react-three/cannon'
import { useLoader } from '@react-three/fiber'
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'


const Goalpost = () => {
    const goalPost = useLoader(GLTFLoader, "/goal.glb")
    const [ref] = useBox(() => ({
        mass: 100,
        position: [-11,2,1]
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