import { OrbitControls, useAnimations, useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';

interface RocketProps {
  progress: number;
}

const Rocket = ({ progress }: RocketProps) => {
  const model = useGLTF('./models/rocket.gltf');
  const modelRef = useRef();
  const { actions } = useAnimations(model.animations, modelRef);
  const controlsRef = useRef<any>();
  useEffect(() => {
    actions['KeyAction']?.play();
  }, [progress, actions]);

  return (
    <>
      <OrbitControls ref={controlsRef} />
      <directionalLight position={[0, 1, 3]} intensity={2} />
      <directionalLight position={[0, 1, -3]} />
      <ambientLight />
      <mesh position={[0, 0, 0]} rotation={[0, 0, (3 / 2) * Math.PI]}>
        <primitive object={model.scene} ref={modelRef} />
      </mesh>
    </>
  );
};

useGLTF.preload('./models/rocket.gltf');

export default Rocket;
