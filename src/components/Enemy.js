import { useBox } from "@react-three/cannon";
import React, { useRef, useEffect, useState } from "react";
import { useKeyboard } from "../hooks/Keyboard";
import { useFrame, useThree, useLoader } from "@react-three/fiber";
import { Vector3 } from "three";
import { TextureLoader } from "three/src/loaders/TextureLoader"
import { NearestFilter, RepeatWrapping } from "three";
import { Html, Text } from "@react-three/drei"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";



const speed_2 = 4

do{
    var name2 = prompt("What should I call you player-2 ?").trim()
} while (name2 !== null && name2 === "")


const Hurdle = () => {
    // const [setClients, clients] = useState({})

    // const Player2 = useLoader(TextureLoader, 'texture1.jpg')
    // Player2.wrapS = RepeatWrapping
    // Player2.wrapT = RepeatWrapping
    // Player2.repeat.set(1, 1)
    const modelPlayer = useLoader(GLTFLoader, "/apple.glb")
    const [ref, api_2] = useBox(() => ({
        mass: 1,
        type: "Dynamic",
        position: [9, 2, 0]
    }))

    const vel_2 = useRef([0, 0, 0])
    const { stepBackward_2, stepForward_2, stepRight_2, stepLeft_2 } = useKeyboard()
    useEffect(() => {
        api_2.velocity.subscribe((v) => vel_2.current = v)
        console.log(pos_2)
    }, [api_2.velocity])


    const pos_2 = useRef([0, 0, 0])
    useEffect(() => {
        api_2.position.subscribe((p) => pos_2.current = p)
    }, [api_2.position])

    useFrame(() => {
        const direction = new Vector3()
        const frontVector = new Vector3(
            0,
            0,
            (stepBackward_2 ? 1 : 0) - (stepForward_2 ? 1 : 0)
        )
        const sideVector = new Vector3(
            (stepLeft_2 ? 1 : 0) - (stepRight_2 ? 1 : 0),
            0,
            0,
        )

        direction
            .subVectors(frontVector, sideVector)
            .normalize()
            .multiplyScalar(speed_2)
            .applyEuler(camera.rotation)

        api_2.velocity.set(direction.x, vel_2.current[1], direction.z)
        // console.log(pos_2)


    })

    const posArray = pos_2.current
    const { camera } = useThree()
    const itemPos = [Math.round(pos_2.current[0]), Math.round(pos_2.current[1]), Math.round(pos_2.current[2])];
    console.log(itemPos)
    if (
        // itemPos[2] > 10 || itemPos[0] > 10 || itemPos[2] < -10 || itemPos[0] < -10
        itemPos[1] < 0
    ) {
        console.log("Blue lose")
        // alert(`${name2} died, Enter to restart`)
        window.location.reload()

    }
    // const {newPos} = clients
    // console.log(newPos)

    return (
        <>

            <mesh ref={ref}>
                <object3D>
                    <primitive object={modelPlayer.scene} />
                </object3D>
            </mesh>
        </>
    )
}

export default Hurdle;