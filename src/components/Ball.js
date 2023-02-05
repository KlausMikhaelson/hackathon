import React from "react";
import { useSphere } from "@react-three/cannon";

const Ball = () => {

    const [ref] = useSphere(() => ({
        mass: 1,
        type: "Dynamic",
        position: [1, 2, 0],
        // args: [0.5, 0.5],
    }))

    return(
        <>
            <mesh ref={ref} scale={1}>
                <sphereBufferGeometry attach="geometry" />
                <meshStandardMaterial color="black" attach='material' />
            </mesh>
        </>
    )
}

export default Ball;