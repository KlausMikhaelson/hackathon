import React from "react";
import { useSphere } from "@react-three/cannon";
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { NearestFilter, RepeatWrapping } from 'three'
import { useLoader } from '@react-three/fiber'



const Ball = () => {

    const groundText = useLoader(TextureLoader, 'icecream.jpg')
    groundText.wrapS = RepeatWrapping
    groundText.wrapT = RepeatWrapping
    // groundText.repeat.set(5, 5)

    const [ref] = useSphere(() => ({
        mass: 1,
        type: "Dynamic",
        position: [1, 2, 0],
        // args: [0.5, 0.5],
    }))

    return (
        <>
            <mesh ref={ref} scale={1}>
                <sphereBufferGeometry attach="geometry" />
                <meshStandardMaterial map={groundText} attach='material' />
            </mesh>
        </>
    )
}

export default Ball;