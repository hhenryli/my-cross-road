import * as THREE from 'three';
import { Renderer} from './components/Renderer.js'
import { Camera } from './components/Camera.js'
import { DirectionalLight} from './components/DirectionalLight.js'
import { player } from './components/Player.js'
import { map, initializeMap } from './components/Map.js';
import { animateVehicles } from './AnimateVehicles.js';
import "./style.css";

const scene = new THREE.Scene();
scene.add(player);

const ambientLight = new THREE.AmbientLight();
scene.add(ambientLight);

const directionalLight = DirectionalLight();
scene.add(directionalLight);

const camera = Camera();
scene.add(camera);

initializeGame();

function initializeGame() {
  initializeMap();
  scene.add(map);
}

const renderer = Renderer();
renderer.setAnimationLoop(animate);

function animate() {
  animateVehicles();
  renderer.render(scene, camera);
}
