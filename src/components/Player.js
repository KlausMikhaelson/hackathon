import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { useBox } from "@react-three/cannon";

const PlayerModel = () => {
    const [ref] = useBox(() => ({
        mass: 1,
        type: "Dynamic",
        position: [4, 8, 3],
        args: [0.5,0.5,0.5]
    }))
    const modelPlayer = useLoader(GLTFLoader, "/Burger.glb")
    return(
        <>
        <mesh ref={ref}>
        <object3D>
            <primitive object={modelPlayer.scene} />
        </object3D>
        </mesh>
        </>
    )
}

export default PlayerModel;