import { DimensionLocation } from "@minecraft/server";

function checkBlockTags(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  // 获取方块
  const block = targetLocation.dimension.getBlock(targetLocation);

  // 检查方块是否已加载
  if (block) {
    log(`方块是泥土: ${block.hasTag("dirt")}`);
    log(`方块是木头: ${block.hasTag("wood")}`);
    log(`方块是石头: ${block.hasTag("stone")}`);
  }
}