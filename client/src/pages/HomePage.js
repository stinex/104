import { Suspense, useRef, useState } from "react"
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { useFBX } from '@react-three/drei'
import { TextureLoader } from 'three/src/loaders/TextureLoader.js';



export const HomePage = () => {

    let rotation = true

    const Model = () => {
        const scene = useFBX('/104_BODY_08_FBX.fbx')
        return <primitive object={scene} dispose={null} />
    }
    const Lights = () => {
        return (
            <>
                <ambientLight intensity={0.35} />
                <directionalLight position={[0, 10, 0]} intensity={0.7} />
                <directionalLight position={[10, 10, 0]} intensity={0.7} />
            </>
        )
    }

    const HTMLcontent = () => {
        const texture_1 = useLoader(TextureLoader, '/textur.png');

        const [pos, setPos] = useState()
        const animation = useRef()

        useFrame(() => {
            if (rotation === true) {
                setPos(animation.current.rotation.y += 0.0035)
                pos >= 0.6 ? rotation = false : rotation = true
            } else {
                setPos(animation.current.rotation.y -= 0.0035)
                pos >= -0.6 ? rotation = false : rotation = true
            }
        })

        return (
            <mesh ref={animation} position={[0, -90, 0]}>
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
                                    camera={{ position: [0, 40, 400, 0], fov: 30 }}
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