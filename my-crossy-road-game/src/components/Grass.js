import * as THREE from "three";
import { tilesPerRow, tileSize } from "../constants";

export function Grass(rowIndex) {
  const grass = new THREE.Group();
  grass.position.y = rowIndex * tileSize;

  const grassFoundation = new THREE.Mesh(
    new THREE.BoxGeometry(tilesPerRow * tileSize, tileSize, 3),
    new THREE.MeshLambertMaterial({ color: 0xbaf455 })
  )
  grassFoundation.position.z = 1.5;
  grassFoundation.receiveShadow = true;
  grass.add(grassFoundation);

  return grass;
}