import * as THREE from "three";

export function Wheel(x) {
  const wheel = new THREE.Mesh(
    new THREE.BoxGeometry(10, 30, 10),
    new THREE.MeshLambertMaterial({
      color: 0x444444,
      flatShading: true,
    })
  );
  wheel.position.x = x;
  wheel.position.z = 6;

  return wheel;
}