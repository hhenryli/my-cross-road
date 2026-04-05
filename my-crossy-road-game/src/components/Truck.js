import * as THREE from "three";
import { tileSize } from "../constants";
import { Wheel } from "./Wheel";

export function Truck(initialTileIndex, direction, color) {
  const truck = new THREE.Group();
  truck.position.x = initialTileIndex * tileSize;
  if (!direction) truck.rotation.z = Math.PI;

  const truckHead = new THREE.Mesh(
    new THREE.BoxGeometry(25, 23, 23),
    new THREE.MeshLambertMaterial({
      color: color,
      flatShading: true
    })
  );
  truckHead.position.x = 40;
  truckHead.position.z = 15;
  truckHead.castShadow = true;
  truckHead.receiveShadow = true;
  truck.add(truckHead);

  const truckBody = new THREE.Mesh(
    new THREE.BoxGeometry(60, 28, 30),
    new THREE.MeshLambertMaterial({
      color: 0xFFFFFF,
      flatShading: true
    })
  );
  truckBody.position.z = 20;
  truckBody.castShadow = true;
  truckBody.receiveShadow = true;
  truck.add(truckBody);

  const frontWheel = Wheel(43);
  const middleWheel = Wheel(-20);
  truck.add(frontWheel);
  truck.add(middleWheel);

  return truck;
}