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
    actions['turbine-flame']?.play();
  }, [progress, actions]);

  return (
    <>
      <OrbitControls ref={controlsRef} />
      <directionalLight position={[2, 1, 3]} intensity={2} />
      <directionalLight position={[2, 1, -3]} />
      <ambientLight />
      <mesh position={[0, 0, 0]} rotation={[0.1, 0.1, (3 / 2) * Math.PI + 0.1]}>
        <primitive object={model.scene} ref={modelRef} />
      </mesh>
    </>
  );
};

useGLTF.preload('./models/rocket.gltf');

export default Rocket;
