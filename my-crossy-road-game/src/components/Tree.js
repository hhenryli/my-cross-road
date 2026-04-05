import * as THREE from "three";
import { tileSize } from "../constants";

export function Tree(rowIndex, height) {
  const tree = new THREE.Group();
  tree.position.x = rowIndex * tileSize;

  const trunk = new THREE.Mesh(
    new THREE.BoxGeometry(10, 10, 20),
    new THREE.MeshLambertMaterial({ 
      color: 0x8b4513,
      flatShading: true,
    })
  )
  trunk.position.z = 10;
  trunk.castShadow = true;
  trunk.receiveShadow = true;
  tree.add(trunk);

  const leaves = new THREE.Mesh(
    new THREE.BoxGeometry(30, 30, height),
    new THREE.MeshLambertMaterial({
      color: 0x6FBA2D,
      flatShading: true,
    })
  )
  leaves.position.z = height / 2 + 20;
  leaves.castShadow = true;
  leaves.receiveShadow = true;
  tree.add(leaves);

  return tree;
}