import * as THREE from "three";
import { tileSize } from "../constants";
import { Wheel } from "./Wheel";

export function Car(initialTileIndex, direction, color) {
  const car = new THREE.Group();
  car.position.x = initialTileIndex * tileSize;
  if (!direction) car.rotation.z = Math.PI;

  const carBody = new THREE.Mesh(
    new THREE.BoxGeometry(60, 25, 14),
    new THREE.MeshLambertMaterial({
      color: color,
      flatShading: true
    }
    )
  )
  carBody.position.z = 15;
  carBody.castShadow = true;
  carBody.receiveShadow = true;
  car.add(carBody);

  const carTop = new THREE.Mesh(
    new THREE.BoxGeometry(30, 20, 12),
    new THREE.MeshLambertMaterial({
      color: 0xFFFFFF,
      flatShading: true
    })
  );
  carTop.position.z = 30;
  carTop.castShadow = true;
  carTop.receiveShadow = true;
  car.add(carTop);

  const frontWheel = Wheel(18);
  car.add(frontWheel);
  const backWheel = Wheel(-18);
  car.add(backWheel);

  return car;
}