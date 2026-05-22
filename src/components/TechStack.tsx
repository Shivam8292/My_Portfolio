import * as THREE from "three";
import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import {
  BallCollider,
  Physics,
  RigidBody,
  CylinderCollider,
  RapierRigidBody,
} from "@react-three/rapier";

const skills = [
  "Python",
  "JavaScript",
  "SQL",
  "C++",
  "React.js",
  "HTML",
  "CSS",
  "FastAPI",
  "REST APIs",
  "RAG",
  "LangChain",
  "LLM APIs",
  "Semantic Search",
  "Embeddings",
  "ChromaDB",
  "Git",
  "GitHub",
  "Excel",
  "Power BI",
  "Pandas",
  "NumPy",
  "Data Visualization"
];

const sphereGeometry = new THREE.SphereGeometry(1, 14, 14);

type SphereProps = {
  vec?: THREE.Vector3;
  scale: number;
  r?: typeof THREE.MathUtils.randFloatSpread;
  material: THREE.MeshStandardMaterial;
  isActive: boolean;
};

function SphereGeo({
  vec = new THREE.Vector3(),
  scale,
  r = THREE.MathUtils.randFloatSpread,
  material,
  isActive,
}: SphereProps) {
  const api = useRef<RapierRigidBody | null>(null);

  useFrame((_state, delta) => {
    if (!isActive) return;
    delta = Math.min(0.1, delta);
    const impulse = vec
      .copy(api.current!.translation())
      .normalize()
      .multiply(
        new THREE.Vector3(
          -50 * delta * scale,
          -150 * delta * scale,
          -50 * delta * scale
        )
      );

    api.current?.applyImpulse(impulse, true);
  });

  return (
    <RigidBody
      linearDamping={0.75}
      angularDamping={0.15}
      friction={0.2}
      position={[r(20), r(20) - 25, r(20) - 10]}
      ref={api}
      colliders={false}
    >
      <BallCollider args={[scale]} />
      <CylinderCollider
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 0, 1.2 * scale]}
        args={[0.15 * scale, 0.275 * scale]}
      />
      <mesh
        castShadow
        receiveShadow
        scale={scale}
        geometry={sphereGeometry}
        material={material}
        rotation={[0.3, 1, 1]}
      />
    </RigidBody>
  );
}

type PointerProps = {
  vec?: THREE.Vector3;
  isActive: boolean;
};

function Pointer({ vec = new THREE.Vector3(), isActive }: PointerProps) {
  const ref = useRef<RapierRigidBody>(null);

  useFrame(({ pointer, viewport }) => {
    if (!isActive) return;
    const targetVec = vec.lerp(
      new THREE.Vector3(
        (pointer.x * viewport.width) / 2,
        (pointer.y * viewport.height) / 2,
        0
      ),
      0.2
    );
    ref.current?.setNextKinematicTranslation(targetVec);
  });

  return (
    <RigidBody
      position={[100, 100, 100]}
      type="kinematicPosition"
      colliders={false}
      ref={ref}
    >
      <BallCollider args={[2]} />
    </RigidBody>
  );
}

const TechStack = () => {
  const [isActive, setIsActive] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.01 }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const threshold = document
        .getElementById("work")!
        .getBoundingClientRect().top;
      setIsActive(scrollY > threshold);
    };
    document.querySelectorAll(".header a").forEach((elem) => {
      const element = elem as HTMLAnchorElement;
      element.addEventListener("click", () => {
        const interval = setInterval(() => {
          handleScroll();
        }, 10);
        setTimeout(() => {
          clearInterval(interval);
        }, 1000);
      });
    });
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const spheres = useMemo(() => {
    return [...Array(30)].map((_, i) => ({
      scale: [0.75, 0.95, 0.85, 1.05, 0.9][Math.floor(Math.random() * 5)],
      materialIndex: i % skills.length,
    }));
  }, []);

  const materials = useMemo(() => {
    const createTextTexture = (text: string) => {
      const canvas = document.createElement("canvas");
      canvas.width = 256;
      canvas.height = 256;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        // Draw solid dark background circle matching portfolio theme
        ctx.fillStyle = "#120e16";
        ctx.fillRect(0, 0, 256, 256);

        // Draw a clean, thick purple circular border with neon glow style
        ctx.beginPath();
        ctx.arc(128, 128, 115, 0, Math.PI * 2);
        ctx.strokeStyle = "#a87cff"; // purple accent
        ctx.lineWidth = 10;
        ctx.stroke();

        // Text settings
        ctx.fillStyle = "#ffffff";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        // Draw text: split by space if multi-word, to fit nicely in the circle
        const words = text.split(" ");
        if (words.length > 1 && text.length > 8) {
          ctx.font = "bold 26px sans-serif";
          ctx.fillText(words[0], 128, 105);
          ctx.fillText(words.slice(1).join(" "), 128, 150);
        } else {
          let fontSize = 34;
          if (text.length > 8) fontSize = 28;
          if (text.length > 12) fontSize = 22;
          ctx.font = `bold ${fontSize}px sans-serif`;
          ctx.fillText(text, 128, 128);
        }
      }
      const texture = new THREE.CanvasTexture(canvas);
      texture.colorSpace = THREE.SRGBColorSpace;
      return texture;
    };

    return skills.map((skill) => {
      const texture = createTextTexture(skill);
      return new THREE.MeshStandardMaterial({
        map: texture,
        emissive: "#ffffff",
        emissiveMap: texture,
        emissiveIntensity: 0.35,
        metalness: 0.4,
        roughness: 0.5,
      });
    });
  }, []);

  useEffect(() => {
    return () => {
      materials.forEach((mat) => {
        mat.map?.dispose();
        mat.dispose();
      });
    };
  }, [materials]);

  return (
    <div className="techstack" ref={containerRef}>
      <h2> My Techstack</h2>

      <Canvas
        shadows
        dpr={[1, 1.5]}
        frameloop={isVisible ? "always" : "never"}
        gl={{ alpha: true, stencil: false, depth: false, antialias: false }}
        camera={{ position: [0, 0, 20], fov: 32.5, near: 1, far: 100 }}
        onCreated={(state) => (state.gl.toneMappingExposure = 1.5)}
        className="tech-canvas"
      >
        <ambientLight intensity={1} />
        <spotLight
          position={[20, 20, 25]}
          penumbra={1}
          angle={0.2}
          color="white"
          castShadow
          shadow-mapSize={[512, 512]}
        />
        <directionalLight position={[0, 5, -4]} intensity={2} />
        <Physics gravity={[0, 0, 0]}>
          <Pointer isActive={isActive} />
          {spheres.map((props, i) => (
            <SphereGeo
              key={i}
              scale={props.scale}
              material={materials[props.materialIndex]}
              isActive={isActive}
            />
          ))}
        </Physics>
        <Environment
          files="/models/char_enviorment.hdr"
          environmentIntensity={0.5}
          environmentRotation={[0, 4, 2]}
        />
      </Canvas>
    </div>
  );
};

export default TechStack;
