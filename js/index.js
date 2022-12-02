import * as THREE from "three";

const SPEED = .01;
const content = {
    scene: null,
    camera: null,
    renderer: null,

    cube: null,
    outline: null
}


function init() {
    content.scene = new THREE.Scene();

    // Init la cam & le renderer
    content.camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 10);
    content.camera.position.set(0, 3.5, 5);
    content.camera.lookAt(content.scene.position);

    content.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    content.renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(content.renderer.domElement);

    // Une lumière
    let light = new THREE.DirectionalLight(0xffffff, 0.75);
    light.position.setScalar(100);
    content.scene.add(light);
    content.scene.add(new THREE.AmbientLight(0xffffff, 0.25));

    // Ajoute un cube
    const loader = new THREE.TextureLoader();
    const material = new THREE.MeshBasicMaterial({ 
        color: 0xffffff, 
        map: loader.load('./img/cubel.png'),
    });

    const outlineMaterial = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        side: THREE.BackSide
    });

    content.cube = new THREE.Mesh(new THREE.BoxGeometry(2, 2, 2), material);
    content.outline = new THREE.Mesh(new THREE.BoxGeometry(2, 2, 2), outlineMaterial);

    content.outline.scale.multiplyScalar(1.05);

    content.scene.add(content.cube);
    content.scene.add(content.outline);
}


function render() {
    requestAnimationFrame(render);

    content.cube.rotation.x += SPEED * 2;
    content.cube.rotation.y += SPEED * 2;
    content.cube.rotation.z += SPEED * 2;

    content.outline.rotation.x += SPEED * 2;
    content.outline.rotation.y += SPEED * 2;
    content.outline.rotation.z += SPEED * 2;

    content.renderer.render(content.scene, content.camera);
}

init();
render();