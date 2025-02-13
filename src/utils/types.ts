import * as THREE from "three";
import { GLTF } from "three-stdlib";

export type GLTFResult = GLTF & {
  nodes: {
    [key: string]: THREE.Mesh & {
      skeleton?: THREE.Skeleton;
    };
  };
  materials: {
    [key: string]: THREE.Material;
  };
};
