'use client'

import {Canvas} from "@react-three/fiber";
import HomeScreen from "@/components/HomeScreen/index"

export default function Home() {
  return (
      <div className={"absolute w-full h-full top-0 lef-0"}>
          <Canvas
              shadows
              gl={{ preserveDrawingBuffer: true }}
              eventSource={document.getElementById('root')} eventPrefix="client"
              camera={{
                fov: 64,
                position: [0, -2, 6],
              }}
          >
            <HomeScreen />
          </Canvas>
      </div>
  )
}
