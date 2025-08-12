import { DimensionLocation } from "@minecraft/server";

function createExplosion(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  log("创建半径为10的爆炸。");
  targetLocation.dimension.createExplosion(targetLocation, 10);
}