import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 768;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050609, 0.0018);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 85;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isMobile,
      powerPreference: 'high-performance',
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 1. Particle Constellation
    const particleCount = isMobile ? 220 : 650;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color(0x38bdf8); // Sky Cyan
    const color2 = new THREE.Color(0x818cf8); // Soft Indigo
    const color3 = new THREE.Color(0x2dd4bf); // Teal

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 200;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 180;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 160;

      const mixedColor = color1.clone();
      const r = Math.random();
      if (r < 0.4) {
        mixedColor.lerp(color2, Math.random());
      } else if (r < 0.8) {
        mixedColor.lerp(color3, Math.random());
      }
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Particle Texture circle
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      gradient.addColorStop(0, 'rgba(255,255,255,1)');
      gradient.addColorStop(0.3, 'rgba(56,189,248,0.7)');
      gradient.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 32, 32);
    }
    const particleTexture = new THREE.CanvasTexture(canvas);

    const particleMaterial = new THREE.PointsMaterial({
      size: isMobile ? 1.6 : 2.2,
      vertexColors: true,
      map: particleTexture,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(geometry, particleMaterial);
    scene.add(particles);

    // 2. Floating Minimalist Geometric Objects
    const group = new THREE.Group();
    scene.add(group);

    // Floating Icosahedron
    const icoGeo = new THREE.IcosahedronGeometry(14, 1);
    const icoMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.3,
      metalness: 0.9,
      wireframe: true,
      transparent: true,
      opacity: 0.28,
    });
    const icosahedron = new THREE.Mesh(icoGeo, icoMat);
    icosahedron.position.set(42, 10, -15);
    group.add(icosahedron);

    // Floating Torus Knot
    const knotGeo = new THREE.TorusKnotGeometry(9, 2.2, 80, 16);
    const knotMat = new THREE.MeshStandardMaterial({
      color: 0x1e1b4b,
      wireframe: true,
      transparent: true,
      opacity: 0.22,
    });
    const knot = new THREE.Mesh(knotGeo, knotMat);
    knot.position.set(-45, -18, -25);
    group.add(knot);

    // Floating Octahedron Ring
    const octGeo = new THREE.OctahedronGeometry(11, 0);
    const octMat = new THREE.MeshStandardMaterial({
      color: 0x0e7490,
      wireframe: true,
      transparent: true,
      opacity: 0.2,
    });
    const octahedron = new THREE.Mesh(octGeo, octMat);
    octahedron.position.set(20, -35, -20);
    group.add(octahedron);

    // Subtle Ambient & Directional Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x38bdf8, 1.8);
    dirLight1.position.set(50, 40, 60);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x818cf8, 1.4);
    dirLight2.position.set(-50, -40, 40);
    scene.add(dirLight2);

    // Mouse Tracking with smooth spring damping
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (event: MouseEvent) => {
      targetX = (event.clientX / window.innerWidth) * 2 - 1;
      targetY = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // Scroll Tracking
    let scrollY = 0;
    const onScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    // Resize Handler
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        // Smooth camera movement based on mouse
        mouseX += (targetX * 9 - mouseX) * 0.05;
        mouseY += (targetY * 7 - mouseY) * 0.05;

        camera.position.x = mouseX;
        camera.position.y = mouseY - scrollY * 0.02;
        camera.lookAt(0, -scrollY * 0.02, 0);

        // Slowly rotate particles
        particles.rotation.y = elapsedTime * 0.025;
        particles.rotation.x = elapsedTime * 0.012;

        // Animate floating shapes
        icosahedron.rotation.x += delta * 0.15;
        icosahedron.rotation.y += delta * 0.2;
        icosahedron.position.y = 10 + Math.sin(elapsedTime * 0.8) * 4;

        knot.rotation.x += delta * 0.18;
        knot.rotation.z += delta * 0.12;
        knot.position.y = -18 + Math.cos(elapsedTime * 0.7) * 3.5;

        octahedron.rotation.y += delta * 0.22;
        octahedron.rotation.z += delta * 0.15;
        octahedron.position.y = -35 + Math.sin(elapsedTime * 0.6) * 3;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animationFrameId);

      geometry.dispose();
      particleMaterial.dispose();
      particleTexture.dispose();
      icoGeo.dispose();
      icoMat.dispose();
      knotGeo.dispose();
      knotMat.dispose();
      octGeo.dispose();
      octMat.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
};
