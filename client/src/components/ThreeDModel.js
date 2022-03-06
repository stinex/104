import { Canvas } from '@react-three/fiber'

import { Html, useGLTF } from '@react-three/drei'
import { Suspense } from 'react'


const Model = () => {
    const gltf = useGLTF('/104_BODY_02.gltf')
    return <primitive object={gltf.scene} depose={null} />
}

const Lights = () => {
    return <ambientLight intensity={0.3} />

}


export const ThreeDModel = () => {
    return (
        <Canvas
            colorManagement
            camera={{ position: [0, 0, 140], fov: 70 }}
        >
            <Lights />
            <group position={[0, 250, 0]}>
                <mesh position={[0, -35, 0]}>
                    <Model />
                </mesh>
                <Suspense fallback={null}>
                    <Html fullscreen>
                        <div className="main">

                        </div>
                    </Html>
                </Suspense>
            </group>

        </Canvas>
    )
}