import {AccumulativeShadows, Environment, RandomizedLight, ScrollControls} from "@react-three/drei";
import Overlay from "@/components/HomeScreen/Overlay";
import ScreenDemo from "@/components/HomeScreen/ScreenDemo";
import {useRef} from "react";
import {useFrame, useThree} from "@react-three/fiber";
import { easing } from 'maath'
import {basePath} from "../../../next.config";

export default function(){
    return (
        <>
            <ambientLight intensity={0.3} />
            <Environment files={`${basePath}/potsdamer_platz_1k.hdr`} />
            <Backdrop />
            {/*<OrbitControls enableZoom={false} />*/}
            <ScrollControls pages={3} damping={0.25}>
                <Overlay />
                <ScreenDemo />
            </ScrollControls>
        </>
    )
}

function Backdrop() {
    const shadows = useRef();
    const { width: w, height: h } = useThree((state) => state.viewport);
    useFrame((state, delta) => easing.dampC(shadows.current.getMesh().material.color, '#ffc1c1', 0.25, delta))
    return (
        <AccumulativeShadows ref={shadows} temporal frames={60} alphaTest={0.85} scale={20} rotation={[Math.PI / 2, 0, 0]} position={[0, 0, -0.1]}>
            <RandomizedLight amount={4} radius={9} intensity={0.55} ambient={0.1} position={[5, 10, -20]} />
            <RandomizedLight amount={4} radius={5} intensity={0.25} ambient={0.55} position={[-5, 20, -9]} />
        </AccumulativeShadows>
    )
}
