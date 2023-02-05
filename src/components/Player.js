import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
import { useLoader } from "@react-three/fiber";

const PlayerModel = () => {
    const modelPlayer = useLoader(GLTFLoader, "/Burger.glb")
    return(
        <>
        <object3D>
            <primitive object={modelPlayer.scene} />
        </object3D>
        </>
    )
}

export default PlayerModel;