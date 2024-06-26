import './App.css'
import { Experience } from './components/Experience'
import { Canvas } from '@react-three/fiber'
import { Overlay } from './components/Overlay'

function App() {

  return (
    <Canvas camera={
      {
        fov: 64,
        position: [2.3, 1.5, 2.3],
        
      }
    }>
      <Experience />
    </Canvas>
  )
}

export default App
