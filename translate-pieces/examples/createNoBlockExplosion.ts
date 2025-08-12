import { DimensionLocation } from "@minecraft/server";
import { Vector3Utils } from "@minecraft/math";

function createNoBlockExplosion(
  log: (message: string, status?: number) => void,
  targetLocation: DimensionLocation
) {
  const explodeNoBlocksLoc = Vector3Utils.floor(Vector3Utils.add(targetLocation, { x: 1, y: 2, z: 1 }));

  log("创建半径为15且不破坏方块的爆炸。");
  targetLocation.dimension.createExplosion(explodeNoBlocksLoc, 15, { breaksBlocks: false });
}