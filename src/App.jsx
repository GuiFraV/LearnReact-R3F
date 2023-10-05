import { Canvas } from '@react-three/fiber'
import './styles.css'

function App() {

  return (
    <>
  
    <Canvas>
      <mesh>
        <torusKnotGeometry />
        <meshNormalMaterial />
      </mesh>
    </Canvas>
  
    </>

  
  )
}

export default App
