import * as THREE from "three";
import {metadata as rows} from "./components/Map.js";
import { minTileIndex, maxTileIndex, tileSize, tilesPerRow } from "./constants";

const clock = new THREE.Timer();

export function animateVehicles() {
  const delta = clock.getDelta();

  rows.forEach((rowData) => {
    if (rowData.type == "car" || rowData.type == "truck") {
      const begOfRow = (minTileIndex - 2) * tileSize;
      const endOfRow = (maxTileIndex + 2)* tileSize;

      rowData.vehicles.forEach(({ref}) => {
        if (rowData.direction) {
          ref.position.x = ref.position.x > 
          endOfRow ? begOfRow :
          ref.position.x + rowData.speed * delta;
        } else {
          ref.position.x = ref.position.x <
          begOfRow ? endOfRow :
          ref.position.x - rowData.speed * delta;
        }
      })
    }
  })
}