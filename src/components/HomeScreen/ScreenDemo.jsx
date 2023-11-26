'use client'

import {useRef} from "react";
import {Text3D, useGLTF, useMatcapTexture} from "@react-three/drei";
import {basePath} from "../../../next.config";
import {useThree} from "@react-three/fiber";

export default function (props) {
    const [matcapTexture] = useMatcapTexture("CB4E88_F99AD6_F384C3_ED75B9");
    const { nodes, materials } = useGLTF(`${basePath}/cowboyhat.glb`)
    const ref = useRef();
    const { width: w, height: h } = useThree((state) => state.viewport);
    return (<group
        {...props}
        dispose={null}
        ref={ref}
        // position={[0.5, -1, -1]}
        // rotation={[Math.PI/12, Math.PI/10, 0]}
    >
        <mesh castShadow geometry={nodes.hat.geometry}
              scale={w/400}
              position={[-w/4+w/40,w/10,w/30]}
              rotation = {[Math.PI/10,Math.PI/3,Math.PI/6]}
              material={materials.mat} material-roughness={1} {...props} dispose={null}>
        </mesh>
        <Text3D
            castShadow
            material-roughness={1}
            position={[-w/4,0,0]}
            maxWidth={[-w / 5, -h * 2, 4]}
            size={w/9}
            height={w/25}
            font={`${basePath}/gt_font.json`}>
            L
            <meshStandardMaterial color={'white'} />
            {/*<meshMatcapMaterial color="white" matcap={matcapTexture} />*/}
        </Text3D>
        <Text3D
            castShadow
            position={[-w/5.5,0,0]}
            maxWidth={[-w / 5, -h * 2, 3]}
            size={w/9}
            height={w/25}
            font={`${basePath}/gt_font.json`}>
            U
            <meshStandardMaterial roughness={1} color={'red'} />
            {/*<meshMatcapMaterial color="white" matcap={matcapTexture} />*/}
        </Text3D>
        <Text3D
            castShadow

            position={[-(w/5-w/9),0,0]}
            maxWidth={[-w / 5, -h * 2, 3]}
            size={w/9}
            height={w/25}
            font={`${basePath}/gt_font.json`}>
            G
            <meshStandardMaterial color={'white'} />
            {/*<meshMatcapMaterial color="white" matcap={matcapTexture} />*/}
        </Text3D>

    </group>)
}