import { useBox } from "@react-three/cannon";
import React from "react";

const Walls = () => {
    const Wall1 = () => {
        const [ref] = useBox(() => ({
            mass: 100000,
            position: [0, 4, -13],
            args: [60, 5, 1, 1],

        }))
        return (
            <>
                <mesh ref={ref}>
                    {/* <boxBufferGeometry attach="geometry" args={[60, 5, 1, 1]}/> */}
                    <meshBasicMaterial attach="material" />
                </mesh>
            </>
        )
    }
    const Wall2 = () => {
        const [ref] = useBox(() => ({
            mass: 100000,
            position: [0, 4, 13],
            args: [60, 5, 1, 1],

        }))
        return (
            <>
                <mesh ref={ref}>
                    {/* <boxBufferGeometry attach="geometry" args={[60, 5, 10, 1]} /> */}
                    <meshBasicMaterial attach="material" />
                </mesh>
            </>
        )
    }
    const Wall3 = () => {
        const [ref] = useBox(() => ({
            mass: 100000,
            position: [28, 4, 8],
            args: [1, 5, 9, 1],

        }))
        return (
            <>
                <mesh ref={ref}>
                    {/* <boxBufferGeometry attach="geometry" args={[1, 5, 9, 1]}/> */}
                    <meshBasicMaterial attach="material" />
                </mesh>
            </>
        )
    }

    const Wall4 = () => {
        const [ref] = useBox(() => ({
            mass: 100000,
            position: [-28, 4, 8],
            args: [1, 5, 9, 1],

        }))
        return (
            <>
                <mesh ref={ref}>
                    {/* <boxBufferGeometry attach="geometry" args={[1, 5, 9, 1]}/> */}
                    <meshBasicMaterial attach="material" />
                </mesh>
            </>
        )
    }

    const Wall5 = () => {
        const [ref] = useBox(() => ({
            mass: 100000,
            position: [-28, 4, -9],
            args: [1, 5, 6, 1],

        }))
        return (
            <>
                <mesh ref={ref}>
                    {/* <boxBufferGeometry attach="geometry" args={[1, 5, 6, 1]}/> */}
                    <meshBasicMaterial attach="material" />
                </mesh>
            </>
        )
    }

    const Wall6 = () => {
        const [ref] = useBox(() => ({
            mass: 100000,
            position: [28, 4, -9],
            args: [1, 5, 6, 1],

        }))
        return (
            <>
                <mesh ref={ref}>
                    {/* <boxBufferGeometry attach="geometry" args={[1, 5, 6, 1]}/> */}
                    <meshBasicMaterial attach="material" />
                </mesh>
            </>
        )
    }


    return (
        <>
            <Wall1 />
            <Wall2 />
            <Wall3 />
            <Wall4 />
            <Wall5 />
            <Wall6 />
        </>
    )
}

export default Walls;