import { useEffect, useRef } from "react";
import * as THREE from "three";
import setCharacter from "./utils/character";
import setLighting from "./utils/lighting";
import { useLoading } from "../../context/LoadingProvider";
import handleResize from "./utils/resizeUtils";
import {
  handleMouseMove,
  handleTouchEnd,
  handleHeadRotation,
  handleTouchMove,
} from "./utils/mouseUtils";
import setAnimations from "./utils/animationUtils";
import { setProgress } from "../Loading";

const Scene = () => {
  const canvasDiv = useRef<HTMLDivElement | null>(null);
  const hoverDivRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef(new THREE.Scene());
  const { setLoading } = useLoading();

  useEffect(() => {
    if (canvasDiv.current) {
      let isMounted = true;
      let isCharacterVisible = true;

      // Intersection Observer for visibility check to pause WebGL rendering when offscreen
      const visibilityMap = new Map<string, boolean>();
      const visibilityObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          // Normalize className to handle multiple classes
          const firstClass = entry.target.className.split(" ")[0];
          visibilityMap.set(firstClass, entry.isIntersecting);
        });
        let visible = false;
        visibilityMap.forEach((val) => {
          if (val) visible = true;
        });
        isCharacterVisible = visible;
      });

      const landing = document.querySelector(".landing-section");
      const about = document.querySelector(".about-section");
      const whatido = document.querySelector(".whatIDO");

      if (landing) visibilityObserver.observe(landing);
      if (about) visibilityObserver.observe(about);
      if (whatido) visibilityObserver.observe(whatido);

      let rect = canvasDiv.current.getBoundingClientRect();
      let container = { width: rect.width, height: rect.height };
      const aspect = container.width / container.height;
      const scene = sceneRef.current;

      const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
      });
      renderer.setSize(container.width, container.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1;
      canvasDiv.current.appendChild(renderer.domElement);

      const camera = new THREE.PerspectiveCamera(14.5, aspect, 0.1, 1000);
      camera.position.z = 10;
      camera.position.set(0, 13.1, 24.7);
      camera.zoom = 1.1;
      camera.updateProjectionMatrix();

      let headBone: THREE.Object3D | null = null;
      let screenLight: any | null = null;
      let mixer: THREE.AnimationMixer;

      const clock = new THREE.Clock();

      const light = setLighting(scene);
      let progress = setProgress((value) => setLoading(value));
      const { loadCharacter } = setCharacter(renderer, scene, camera);

      let activeCharacter: THREE.Object3D | null = null;
      const onResize = () => {
        if (activeCharacter) {
          handleResize(renderer, camera, canvasDiv, activeCharacter);
        }
      };
      window.addEventListener("resize", onResize);

      loadCharacter().then((gltf) => {
        if (gltf && isMounted) {
          const animations = setAnimations(gltf);
          hoverDivRef.current && animations.hover(gltf, hoverDivRef.current);
          mixer = animations.mixer;
          let character = gltf.scene;
          activeCharacter = character;
          scene.add(character);
          headBone = character.getObjectByName("spine006") || null;
          screenLight = character.getObjectByName("screenlight") || null;
          progress.loaded().then(() => {
            if (isMounted) {
              setTimeout(() => {
                if (isMounted) {
                  light.turnOnLights();
                  animations.startIntro();
                }
              }, 2500);
            }
          });
        }
      });

      let mouse = { x: 0, y: 0 },
        interpolation = { x: 0.1, y: 0.2 };

      const onMouseMove = (event: MouseEvent) => {
        handleMouseMove(event, (x, y) => (mouse = { x, y }));
      };
      let debounce: number | undefined;

      const onTouchMove = (e: TouchEvent) => {
        handleTouchMove(e, (x, y) => (mouse = { x, y }));
      };

      const onTouchStart = (event: TouchEvent) => {
        const element = event.target as HTMLElement;
        debounce = setTimeout(() => {
          element?.addEventListener("touchmove", onTouchMove);
        }, 200);
      };

      const onTouchEnd = (event: TouchEvent) => {
        const element = event.target as HTMLElement;
        element?.removeEventListener("touchmove", onTouchMove);
        handleTouchEnd((x, y, interpolationX, interpolationY) => {
          mouse = { x, y };
          interpolation = { x: interpolationX, y: interpolationY };
        });
      };

      document.addEventListener("mousemove", onMouseMove);
      const landingDiv = document.getElementById("landingDiv");
      if (landingDiv) {
        landingDiv.addEventListener("touchstart", onTouchStart);
        landingDiv.addEventListener("touchend", onTouchEnd);
      }

      let animationFrameId: number;
      const animate = () => {
        if (!isMounted) return;
        animationFrameId = requestAnimationFrame(animate);

        // Save resources if character model is scrolled out of view
        if (!isCharacterVisible) {
          return;
        }

        if (headBone) {
          handleHeadRotation(
            headBone,
            mouse.x,
            mouse.y,
            interpolation.x,
            interpolation.y,
            THREE.MathUtils.lerp
          );
          light.setPointLight(screenLight);
        }
        const delta = clock.getDelta();
        if (mixer) {
          mixer.update(delta);
        }
        renderer.render(scene, camera);
      };
      animate();

      return () => {
        isMounted = false;
        cancelAnimationFrame(animationFrameId);
        visibilityObserver.disconnect();
        clearTimeout(debounce);
        scene.clear();
        renderer.dispose();
        window.removeEventListener("resize", onResize);
        if (canvasDiv.current && renderer.domElement.parentNode === canvasDiv.current) {
          canvasDiv.current.removeChild(renderer.domElement);
        }
        document.removeEventListener("mousemove", onMouseMove);
        if (landingDiv) {
          landingDiv.removeEventListener("touchstart", onTouchStart);
          landingDiv.removeEventListener("touchend", onTouchEnd);
        }
      };
    }
  }, []);

  return (
    <>
      <div className="character-container">
        <div className="character-model" ref={canvasDiv}>
          <div className="character-rim"></div>
          <div className="character-hover" ref={hoverDivRef}></div>
        </div>
      </div>
    </>
  );
};

export default Scene;
