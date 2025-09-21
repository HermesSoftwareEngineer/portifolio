import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const InteractiveBackground = () => {
  const { isDark } = useTheme();
  const canvasRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const animationRef = useRef(null);
  const particlesRef = useRef([]);
  const totalParticles = 150; // Aumentado de 80 para 150
  
  // Referência para suavizar o movimento do mouse
  const targetMousePosition = useRef({ x: 0, y: 0 });
  const mouseLerpFactor = 0.08; // Aumentado para resposta mais rápida, mas ainda suave
  
  // Flag para verificar se o mouse se moveu
  const hasMouseMoved = useRef(false);

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        const canvas = canvasRef.current;
        const { width, height } = canvas.getBoundingClientRect();
        setDimensions({ width, height });
        canvas.width = width;
        canvas.height = height;
        initParticles();
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Initialize particles
  const initParticles = () => {
    if (!canvasRef.current) return;
    
    const { width, height } = canvasRef.current;
    const particles = [];

    for (let i = 0; i < totalParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2.5 + 1, // Tamanho base aumentado
        speedX: Math.random() * 2 - 0.5, // Velocidade inicial dobrada
        speedY: Math.random() * 2 - 0.5, // Velocidade inicial dobrada
        opacity: Math.random() * 0.5 + 0.1,
      });
    }

    particlesRef.current = particles;
  };

  // Track mouse movement com posição alvo
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!canvasRef.current) return;
      
      const { left, top } = canvasRef.current.getBoundingClientRect();
      targetMousePosition.current = {
        x: e.clientX - left,
        y: e.clientY - top
      };
      
      // Indicar que o mouse moveu
      hasMouseMoved.current = true;
    };

    // Também inicializar posição do mouse no centro
    const canvas = canvasRef.current;
    if (canvas) {
      const { width, height } = canvas.getBoundingClientRect();
      targetMousePosition.current = {
        x: width / 2,
        y: height / 2
      };
      setMousePosition({
        x: width / 2,
        y: height / 2
      });
    }

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animation loop
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const draw = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      
      const ctx = canvas.getContext('2d');
      const { width, height } = canvas;
      
      // Suavizar movimento do mouse com interpolação linear (LERP)
      setMousePosition(prev => ({
        x: prev.x + (targetMousePosition.current.x - prev.x) * mouseLerpFactor,
        y: prev.y + (targetMousePosition.current.y - prev.y) * mouseLerpFactor
      }));
      
      // Clear canvas
      ctx.clearRect(0, 0, width, height);
      
      // Draw gradient following mouse
      const gradientRadius = Math.max(width, height) * 0.6;
      const gradient = ctx.createRadialGradient(
        mousePosition.x, mousePosition.y, 0,
        mousePosition.x, mousePosition.y, gradientRadius
      );
      
      if (isDark) {
        gradient.addColorStop(0, 'rgba(30, 64, 175, 0.2)'); // Opacidade reduzida
        gradient.addColorStop(0.5, 'rgba(15, 23, 42, 0.05)'); // Opacidade reduzida
        gradient.addColorStop(1, 'rgba(15, 23, 42, 0)');
      } else {
        gradient.addColorStop(0, 'rgba(59, 130, 246, 0.15)'); // Opacidade reduzida
        gradient.addColorStop(0.5, 'rgba(239, 246, 255, 0.05)'); // Opacidade reduzida
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      }
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
      
      // Update and draw particles
      particlesRef.current.forEach((particle, i) => {
        // Update position mais suavemente
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > height) particle.speedY *= -1;
        
        // Calculate distance to mouse
        const dx = mousePosition.x - particle.x;
        const dy = mousePosition.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Partículas FOGEM do mouse - modificado para empurrar as partículas
        const maxDistance = 180; // Área de influência aumentada
        if (distance < maxDistance && hasMouseMoved.current) {
          const force = (maxDistance - distance) / maxDistance;
          
          // Força de repulsão aumentada
          const repelStrength = 0.25; // Aumentada de 0.15 para 0.25
          
          // Direção oposta ao mouse (dx e dy negativos para empurrar para longe)
          particle.speedX += (-dx / distance) * force * repelStrength;
          particle.speedY += (-dy / distance) * force * repelStrength;
          
          // Efeito de explosão quando muito próximo ao cursor
          if (distance < 40) { // Aumentado de 30 para 40
            const explosionForce = (40 - distance) / 40 * 1.2; // Força aumentada de 0.8 para 1.2
            particle.speedX += (-dx / distance) * explosionForce;
            particle.speedY += (-dy / distance) * explosionForce;
          }
          
          // Limitar velocidade máxima
          const maxSpeed = 3.5; // Aumentada de 2.5 para 3.5
          const currentSpeed = Math.sqrt(particle.speedX * particle.speedX + particle.speedY * particle.speedY);
          if (currentSpeed > maxSpeed) {
            particle.speedX = (particle.speedX / currentSpeed) * maxSpeed;
            particle.speedY = (particle.speedY / currentSpeed) * maxSpeed;
          }
        } else {
          // Desaceleração mais suave para manter movimento por mais tempo
          particle.speedX *= 0.985; // Alterado de 0.98 para 0.985
          particle.speedY *= 0.985;
          
          // Adicionar pequena velocidade aleatória para manter o movimento
          if (Math.random() < 0.05) { // Aumentado de 0.03 para 0.05
            particle.speedX += (Math.random() * 0.4 - 0.2); // Dobrado o impulso aleatório
            particle.speedY += (Math.random() * 0.4 - 0.2);
          }
          
          // Se a velocidade for muito baixa, adicione um pequeno impulso
          const minSpeed = 0.1; // Aumentado de 0.05 para 0.1
          const currentSpeed = Math.sqrt(particle.speedX * particle.speedX + particle.speedY * particle.speedY);
          if (currentSpeed < minSpeed) {
            const angle = Math.random() * Math.PI * 2;
            particle.speedX = Math.cos(angle) * minSpeed * 1.5; // Impulso 50% maior
            particle.speedY = Math.sin(angle) * minSpeed * 1.5;
          }
        }
        
        // Draw particle com cor variável baseada na velocidade
        const baseSize = particle.size;
        const speed = Math.sqrt(particle.speedX * particle.speedX + particle.speedY * particle.speedY);
        const speedFactor = Math.min(speed / 2, 1); // Normalizar para [0,1]
        const sizeChange = 0.8 + speedFactor * 0.5; // Partículas rápidas ficam maiores
        const currentSize = baseSize * sizeChange;
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, currentSize, 0, Math.PI * 2);
        
        // Partículas ficam mais brilhantes quando estão se movendo rápido
        const baseOpacity = particle.opacity;
        const opacityBoost = baseOpacity * (1 + speedFactor * 0.5);
        
        // Partículas mudam levemente de cor com a velocidade
        if (isDark) {
          // No modo escuro, mais rápido = mais azul claro
          const blue = 191 + Math.floor(speedFactor * 64);
          ctx.fillStyle = `rgba(${blue - 20}, ${blue}, 254, ${opacityBoost})`;
        } else {
          // No modo claro, mais rápido = mais azul escuro
          const blue = 175 - Math.floor(speedFactor * 50);
          ctx.fillStyle = `rgba(30, 64, ${blue}, ${opacityBoost})`;
        }
        
        ctx.fill();
      });
      
      animationRef.current = requestAnimationFrame(draw);
    };
    
    initParticles();
    draw();
    
    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [dimensions, isDark]);

  return (
    <canvas 
      ref={canvasRef} 
      className={`absolute top-0 left-0 w-full h-full pointer-events-none z-0
      ${isDark 
        ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-blue-900 text-white' 
        : 'bg-gradient-to-br from-blue-50 via-white to-blue-50 text-gray-900'
      }
    `}
    />
  );
};

export default InteractiveBackground;