import { useBox } from '@react-three/cannon'
import { useLoader } from '@react-three/fiber'
import React from 'react'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { NearestFilter, RepeatWrapping } from 'three'


const Model = () => {
  const groundText = useLoader(TextureLoader, 'grass.jpg')
  groundText.wrapS = RepeatWrapping
  groundText.wrapT = RepeatWrapping
  groundText.repeat.set(5,5)
    const [ref] = useBox(() => ({
        rotation:[-Math.PI / 2, 0, 0], position: [0, 0, 0], mass: 10, type: "Static", args: [60, 40, 2, 1]
    }))
  return (
    <>
    <mesh ref={ref}>
        <boxBufferGeometry attach='geometry' args={[60, 40, 2, 1]} />
        <meshBasicMaterial map={groundText} color='pink' attach='material' />
    </mesh>
    </>
  )
}

export default Model