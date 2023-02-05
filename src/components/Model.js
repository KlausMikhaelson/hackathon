import { useBox } from '@react-three/cannon'
import React from 'react'

const Model = () => {
    const [ref] = useBox(() => ({
        rotation:[-Math.PI / 2, 0, 0], position: [0, 0, 0], mass: 10, type: "Static", args: [15, 15, 2, 1]
    }))
  return (
    <>
    <mesh ref={ref}>
        <boxBufferGeometry attach='geometry' args={[15, 15, 2, 1]} />
        <meshBasicMaterial color='pink' attach='material' />
    </mesh>
    </>
  )
}

export default Model