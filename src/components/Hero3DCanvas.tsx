import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Hero3DCanvas: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check WebGL availability
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
      });
    } catch {
      // Fallback if WebGL fails
      return;
    }

    const width = container.clientWidth || 400;
    const height = container.clientHeight || 400;

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0); // Transparent background
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 4.8;

    // Lighting (Pure Monochrome)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 2.5, 15);
    pointLight.position.set(4, 5, 4);
    scene.add(pointLight);

    const backLight = new THREE.PointLight(0x71717a, 1.8, 15);
    backLight.position.set(-4, -4, -3);
    scene.add(backLight);

    // Group for geometric objects
    const group = new THREE.Group();
    scene.add(group);

    // 1. Primary Outer Icosahedron (Silver Wireframe)
    const icoGeo = new THREE.IcosahedronGeometry(1.4, 0);
    const icoMat = new THREE.MeshStandardMaterial({
      color: 0x18181b,
      wireframe: true,
      roughness: 0.2,
      metalness: 0.9,
    });
    const icoMesh = new THREE.Mesh(icoGeo, icoMat);
    group.add(icoMesh);

    // 2. Inner Solid Octahedron with dark sheen
    const octGeo = new THREE.OctahedronGeometry(0.85, 0);
    const octMat = new THREE.MeshStandardMaterial({
      color: 0x09090b,
      roughness: 0.1,
      metalness: 0.95,
      flatShading: true,
    });
    const octMesh = new THREE.Mesh(octGeo, octMat);
    group.add(octMesh);

    // Edge lines for the inner octahedron
    const octEdges = new THREE.EdgesGeometry(octGeo);
    const lineMat = new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: 1.5 });
    const octLines = new THREE.LineSegments(octEdges, lineMat);
    octMesh.add(octLines);

    // 3. Orbiting Torus Ring (Cinematic Lens/Focus Ring)
    const torusGeo = new THREE.TorusGeometry(2.1, 0.02, 16, 100);
    const torusMat = new THREE.MeshStandardMaterial({
      color: 0xa1a1aa,
      roughness: 0.3,
      metalness: 0.8,
    });
    const torusMesh = new THREE.Mesh(torusGeo, torusMat);
    torusMesh.rotation.x = Math.PI / 3;
    group.add(torusMesh);

    // 4. Floating Particles (Spatial Grid Nodes)
    const particleCount = 45;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 5.5;
      positions[i + 1] = (Math.random() - 0.5) * 5.5;
      positions[i + 2] = (Math.random() - 0.5) * 3;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.035,
      transparent: true,
      opacity: 0.65,
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // Mouse Tracking for subtle parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      targetX = (x / rect.width) * 0.8;
      targetY = -(y / rect.height) * 0.8;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse damping
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      // Rotate 3D group
      group.rotation.x = elapsedTime * 0.18 + mouseY;
      group.rotation.y = elapsedTime * 0.28 + mouseX;

      // Counter-rotate inner octahedron
      octMesh.rotation.y = -elapsedTime * 0.4;
      octMesh.rotation.z = elapsedTime * 0.25;

      // Rotate torus
      torusMesh.rotation.z = elapsedTime * 0.15;

      // Subtle particle float
      particleSystem.rotation.y = elapsedTime * 0.04;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      // Dispose geometries & materials
      icoGeo.dispose();
      icoMat.dispose();
      octGeo.dispose();
      octMat.dispose();
      octEdges.dispose();
      lineMat.dispose();
      torusGeo.dispose();
      torusMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full h-full min-h-[380px] md:min-h-[480px] relative pointer-events-none select-none flex items-center justify-center"
      aria-hidden="true"
    />
  );
};
