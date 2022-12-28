import { Canvas } from "@react-three/fiber"
import { Loader, PointerLockControls, KeyboardControls , Text, Sparkles , Html } from "@react-three/drei"
import { Physics } from "@react-three/rapier"
import { Player } from "./Player"
import { Model } from "./Scene"
import { Suspense } from "react"
// Controls: WASD + left click

export default function App() {
 
  return ( <>

    <KeyboardControls
      map={[
        { name: "forward", keys: ["ArrowUp", "w", "W"] },
        { name: "backward", keys: ["ArrowDown", "s", "S"] },
        { name: "left", keys: ["ArrowLeft", "a", "A"] },
        { name: "right", keys: ["ArrowRight", "d", "D"] },
        { name: "jump", keys: ["Space"] },
      ]}>
       
      <Suspense>
      <Canvas camera={{ fov: 45 }} shadows> 

      <mesh>
      <Html position={[3.1,9,-2.82]}  transform distanceFactor={1.7} occlude>
        <table bgcolor="orange" color="white">
        <strong>Virtual Computer</strong> (Esc and click)</table>
       <iframe width="600" title="gamingzone" height="400" src="./comp.html" frameborder="10" />
       
       </Html> 
       </mesh>


       <Sparkles count={200} speed={1} scale={10} size={10} position={[-2,0,0]}/>
       <Sparkles count={200} speed={3} scale={10} size={10} position={[4,0,-22]}/>


       <Text position={[3,1,-40]} scale={1}> click on screen and turn around</Text>
       <Text position={[3,0.9,-40]} scale={1}> use WASD to move around</Text>
      
     

       <pointLight intensity={0.1} position={[0,40,-20]}/>      
       <ambientLight intensity={0.2} position={[0,20,0]} />
         <directionalLight intensity={0.5} position={[0, 40, -20]} castShadow
          shadow-camera-left={-100}
          shadow-camera-top={100}
          shadow-camera-bottom={-100}
          shadow-camera-right={100}
         
          shadow-normalBias={1} />
        <Physics> 
        
        <Model /> 
       
        <Player />       
        </Physics>
        <PointerLockControls />
      </Canvas>
      </Suspense>
      <Loader/>
    </KeyboardControls>
     </>
  )
}
