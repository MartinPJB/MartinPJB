/*
    Ce fichier contient le javascript exécuté sur la page d'accueil (index.html).
*/
import * as THREE from "three";

import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { RGBShiftShader } from 'three/addons/shaders/RGBShiftShader.js';
import { DotScreenShader } from 'three/addons/shaders/DotScreenShader.js';

// Vitesse de rotation des éléments
const SPEED = .01;

// Contient les éléments de la scène
const content = {
    scene: null,
    camera: null,
    renderer: null,
    cube: null,
    outline: null,
    particles: null,
    composer: null,
}

// Initialise la scène
function init() {
    content.scene = new THREE.Scene();

    // Init la cam & le renderer
    content.camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 10);
    content.camera.position.set(0, 3.5, 5);
    content.camera.lookAt(content.scene.position);

    content.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, logarithmicDepthBuffer: true });
    content.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.getElementsByTagName("main")[0].appendChild(content.renderer.domElement);


    // Une lumière
    let light = new THREE.DirectionalLight(0xffffff, 0.75);
    light.position.setScalar(100);
    content.scene.add(light);
    content.scene.add(new THREE.AmbientLight(0xffffff, 0.25));


    // Ajoute un cube
    const loader = new THREE.TextureLoader();
    const material = new THREE.MeshBasicMaterial({ 
        color: 0x000000, 
        // map: loader.load('./img/cubel.png'),
    });

    // Ajoute un outline autour du cube
    const outlineMaterial = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        side: THREE.BackSide
    });

    content.cube = new THREE.Mesh(new THREE.BoxGeometry(2, 2, 2), material);
    content.outline = new THREE.Mesh(new THREE.BoxGeometry(2, 2, 2), outlineMaterial);
    content.outline.scale.multiplyScalar(1.05);

    content.scene.add(content.cube);
    content.scene.add(content.outline);

    // Particules autour du cube
    const particlesGeometry = new THREE.SphereGeometry(4, 32, 32);
    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.02,
        sizeAttenuation: true
    });

    content.particles = new THREE.Points(particlesGeometry, particlesMaterial);
    content.particles.rotation.x = 15;
    content.particles.position.z = 2;
    content.particles.position.y = 3;
    content.scene.add(content.particles)  ;

    // PostProcessing
    content.composer = new EffectComposer(content.renderer);
    content.composer.addPass(new RenderPass(content.scene, content.camera));

    const dotScreen = new ShaderPass(DotScreenShader);
    dotScreen.uniforms['scale'].value = 4;
    content.composer.addPass(dotScreen);

    const rgbShift = new ShaderPass(RGBShiftShader);
    rgbShift.uniforms['amount'].value = 0.0015;
    content.composer.addPass(rgbShift);
}

// Fonction appelée à chaque frame pour mettre à jour la scène et la rendre
function render() {
    requestAnimationFrame(render);

    // Rotation du cube
    content.cube.rotation.x += SPEED * 2;
    content.cube.rotation.y += SPEED * 2;
    content.cube.rotation.z += SPEED * 2;

    // Rotation de l'outline du cube
    content.outline.rotation.x += SPEED * 2;
    content.outline.rotation.y += SPEED * 2;
    content.outline.rotation.z += SPEED * 2;

    // Rotation des particules
    content.particles.rotation.y += SPEED / 4;

    // Rendu de la scène
    content.renderer.render(content.scene, content.camera);
    content.composer.render();

    // Redimensionnement de la fenêtre
    window.addEventListener('resize', onWindowResize, false);
}

// Appelé à chaque redimensionnement de la fenêtre
function onWindowResize() {
    content.camera.aspect = window.innerWidth / window.innerHeight;
    content.camera.updateProjectionMatrix();
    content.renderer.setSize(window.innerWidth, window.innerHeight);
}
init();
render();