import React, {useRef, useEffect} from "react";
import { useSphere } from "@react-three/cannon";
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { NearestFilter, RepeatWrapping } from 'three'
import { useLoader } from '@react-three/fiber'
import PlayerModel from "./Player";


const Ball = () => {

    console.log(PlayerModel.name)
    const groundText = useLoader(TextureLoader, 'icecream.jpg')
    groundText.wrapS = RepeatWrapping
    groundText.wrapT = RepeatWrapping
    // groundText.repeat.set(5, 5)
    const [ref, api] = useSphere(() => ({
        mass: 1,
        type: "Dynamic",
        position: [1, 2, 0],
        // args: [0.5, 0.5],
    }))
    const pos = useRef([0, 0, 0])
    useEffect(() => {
        api.position.subscribe((p) => pos.current = p)
    }, [api.position])

    // function check() {
        setInterval(() => {
            const Ball = [Math.round(pos.current[0]), Math.round(pos.current[1]), Math.round(pos.current[2])];
            console.log(Ball, "Ball")
            if(Ball[0] > 26 && Ball[2] >= -5 && Ball[1] < 1) {
                alert("Player1 Won !")
                window.location.reload();
            } else if(Ball[2] > -6 && Ball[0] < -26 && Ball[1] < 1) {
                alert("Player2 Won !")
                window.location.reload();
            }
            // check();
        }, [1000])
    // }


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