import * as THREE from "three";
import { tilesPerRow, tileSize } from "../constants";
export function Road(rowIndex) {
  const road = new THREE.Group();
  road.position.y = rowIndex * tileSize;

  const roadFoundation = new THREE.Mesh(
    new THREE.BoxGeometry(tilesPerRow * tileSize, tileSize),
    new THREE.MeshLambertMaterial({ color: 0x002233 })
  )
  roadFoundation.receiveShadow = true;
  road.add(roadFoundation);

  return road;
}