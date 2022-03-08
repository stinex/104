import { Suspense, useRef } from "react"
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { Html, useFBX, useGLTF, useTexture } from '@react-three/drei'
import { TextureLoader } from 'three/src/loaders/TextureLoader.js';



export const HomePage = () => {



    const Model = () => {
        const { scene } = useGLTF('/104_BODY_06_PBR.gltf')
        return <primitive object={scene} />
    }

    const Lights = () => {
        return (
            <>
                <ambientLight intensity={0.4} />
                <directionalLight position={[0, 10, 0]} intensity={1} />
                <directionalLight position={[10, 10, 0]} intensity={1} />
            </>
        )
    }

    const HTMLcontent = () => {
        const texture_1 = useLoader(TextureLoader, '/textur.png');


        return (
            <mesh position={[0, -90, 0]}>
                <Model />
                <meshStandardMaterial attach="material" map={texture_1} />
            </mesh>
        )
    }
    return (
        <div className='container__wrapper'>
            <div className="home">
                <div className="home__wrapper ">
                    <div className="nav__home">
                        <a href="/tracks-page" ><span></span>треки</a>
                        <a href="/video-page" ><span></span>видео</a>
                        <a href="/about-page" ><span></span>обо мне</a>
                        <a href="/contacts-page" ><span></span>контакты</a>
                        <a href="/concerts-page" ><span></span>концерты</a>
                    </div>

                    <div className="block">
                        <div className="canvas">
                            <Suspense fallback={null}>
                                <Canvas
                                    colorManagement
                                    camera={{ position: [0, 40, -440, 0], fov: 30 }}
                                >
                                    <Lights />
                                    <HTMLcontent />
                                </Canvas>
                            </Suspense>
                        </div>
                    </div>
                    <div className="information">
                        <span>// музыкант</span>
                        <span>рэп-исполнитель</span>
                        <span>саунд-продюсер </span>
                    </div>
                </div>
            </div>
        </div>
    )
}