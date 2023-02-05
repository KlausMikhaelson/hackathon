import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { Vector3 } from "three";
import { useBox } from "@react-three/cannon";
import { useFrame, useThree } from "@react-three/fiber";
import React, {useEffect, useRef} from "react"
import { useKeyboard } from "../hooks/Keyboard";

const speed = 8

const PlayerModel = () => {
    const [ref, api] = useBox(() => ({
        mass: 1,
        type: "Dynamic",
        position: [-7,1,1],
        args: [1,1,1]
    }))
    const vel = useRef([0, 0, 0])
    const { stepBackward, stepForward, stepRight, stepLeft, jump } = useKeyboard()
    useEffect(() => {
        api.velocity.subscribe((v) => vel.current = v)
    }, [api.velocity])

    const pos = useRef([0, 0, 0])
    useEffect(() => {
        api.position.subscribe((p) => pos.current = p)
    }, [api.position])

    useFrame(() => {
        const direction = new Vector3()
        const frontVector = new Vector3(
            0,
            0,
            (stepBackward ? 1 : 0) - (stepForward ? 1 : 0)
        )
        const sideVector = new Vector3(
            (stepLeft ? 1 : 0) - (stepRight ? 1 : 0),
            0,
            0,
        )

        direction
            .subVectors(frontVector, sideVector)
            .normalize()
            .multiplyScalar(speed)
            .applyEuler(camera.rotation)

        api.velocity.set(direction.x, vel.current[1], direction.z)
    })
    const itemPos_2 = [Math.round(pos.current[0]), Math.round(pos.current[1]), Math.round(pos.current[2])];
    console.log(itemPos_2)
    if (
        // itemPos_2[2] > 10 || itemPos_2[0] > 10 || itemPos_2[2] < -10 || itemPos_2[0] < -10
        itemPos_2[1] < 0
    ) {
        console.log("Red lose")
        // alert(`${name1} died, Enter to restart`)
        window.location.reload()
    }

    const { camera } = useThree()
    const modelPlayer = useLoader(GLTFLoader, "/Burger.glb")
    return(
        <>
        <mesh ref={ref} scale={0.5}>
        <object3D>
            <primitive object={modelPlayer.scene} />
        </object3D>
        </mesh>
        </>
    )
}

export default PlayerModel;