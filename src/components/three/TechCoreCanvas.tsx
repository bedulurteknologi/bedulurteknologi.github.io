import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { FallbackCore } from './FallbackCore';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const TechCoreCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [webGLFailed, setWebGLFailed] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (!containerRef.current || prefersReduced) return;

    const container = containerRef.current;
    let renderer: THREE.WebGLRenderer;
    let animationFrameId: number;
    let isVisible = true;

    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
      });
    } catch {
      setWebGLFailed(true);
      return;
    }

    const isMobile = window.innerWidth < 768;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.z = isMobile ? 7.5 : 6.2;

    // --- Lights ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const cyanPointLight = new THREE.PointLight(0x00f2fe, 3, 10);
    cyanPointLight.position.set(0, 0, 0);
    scene.add(cyanPointLight);

    const dirLight1 = new THREE.DirectionalLight(0x38bdf8, 1.5);
    dirLight1.position.set(5, 5, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x6366f1, 1);
    dirLight2.position.set(-5, -5, -2);
    scene.add(dirLight2);

    // --- Core Architecture ---
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // 1. Inner faceted core
    const innerGeo = new THREE.IcosahedronGeometry(1.4, 0);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0x173442,
      emissive: 0x06232c,
      emissiveIntensity: 0.4,
      roughness: 0.15,
      metalness: 0.85,
      wireframe: false,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    coreGroup.add(innerMesh);

    // 2. Outer Wireframe Geodesic Shell
    const shellGeo = new THREE.IcosahedronGeometry(1.9, 1);
    const shellWireframe = new THREE.WireframeGeometry(shellGeo);
    const shellMat = new THREE.LineBasicMaterial({
      color: 0x00f2fe,
      transparent: true,
      opacity: 0.6,
    });
    const shellLines = new THREE.LineSegments(shellWireframe, shellMat);
    coreGroup.add(shellLines);

    // 3. Orbital Data Rings
    const ringGeo1 = new THREE.TorusGeometry(2.35, 0.015, 16, isMobile ? 48 : 80);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.35,
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    coreGroup.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(2.55, 0.012, 16, isMobile ? 48 : 80);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x818cf8,
      transparent: true,
      opacity: 0.25,
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.x = -Math.PI / 6;
    coreGroup.add(ring2);

    // 4. Data Particle Cloud
    const particleCount = isMobile ? 120 : 350;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const radius = 2.0 + Math.random() * 1.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      particlePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = radius * Math.cos(phi);
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x00f2fe,
      size: 0.045,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    coreGroup.add(particleSystem);

    // --- Interactive Mouse & Scroll Variables ---
    let targetRotationX = 0;
    let targetRotationY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseX = x;
      mouseY = y;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.position.z = width < 768 ? 7.5 : 6.2;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Intersection Observer to pause rendering when not in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(container);

    // --- Animation Loop ---
    const startTime = performance.now();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const elapsedTime = (performance.now() - startTime) * 0.001;


      // Autonomous rotation
      coreGroup.rotation.y = elapsedTime * 0.18;
      innerMesh.rotation.y = -elapsedTime * 0.25;
      innerMesh.rotation.x = elapsedTime * 0.15;
      shellLines.rotation.x = elapsedTime * 0.08;

      ring1.rotation.z = elapsedTime * 0.12;
      ring2.rotation.z = -elapsedTime * 0.15;

      // Mouse influence with smooth damping (lerp)
      targetRotationX = mouseY * 0.35;
      targetRotationY = mouseX * 0.45;

      camera.position.x += (targetRotationY - camera.position.x) * 0.04;
      camera.position.y += (targetRotationX - camera.position.y) * 0.04;
      camera.lookAt(0, 0, 0);

      // Subtle breath of point light
      cyanPointLight.intensity = 2.5 + Math.sin(elapsedTime * 2) * 0.8;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      shellGeo.dispose();
      shellMat.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      particleGeo.dispose();
      particleMat.dispose();
    };
  }, [prefersReduced]);

  if (webGLFailed || prefersReduced) {
    return <FallbackCore />;
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[380px] sm:h-[480px] lg:h-[580px] flex items-center justify-center pointer-events-none"
    />
  );
};
