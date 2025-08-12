import { world, system, BlockPermutation, BlockPistonState, PistonActivateAfterEvent, DimensionLocation } from "@minecraft/server";
import { MinecraftBlockTypes } from "@minecraft/vanilla-data";

function pistonAfterEvent(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  // 设置几个活塞方块
  const piston = targetLocation.dimension.getBlock(targetLocation);
  const button = targetLocation.dimension.getBlock({
    x: targetLocation.x,
    y: targetLocation.y + 1,
    z: targetLocation.z,
  });

  if (piston === undefined || button === undefined) {
    log("无法在指定位置找到方块。");
    return -1;
  }

  piston.setPermutation(BlockPermutation.resolve(MinecraftBlockTypes.Piston).withState("facing_direction", 3));
  button.setPermutation(BlockPermutation.resolve(MinecraftBlockTypes.AcaciaButton).withState("facing_direction", 1));

  world.afterEvents.pistonActivate.subscribe((pistonEvent: PistonActivateAfterEvent) => {
    const eventLoc = pistonEvent.piston.block.location;

    if (eventLoc.x === targetLocation.x && eventLoc.y === targetLocation.y && eventLoc.z === targetLocation.z) {
      log(
        "活塞事件发生在 " +
          system.currentTick +
          (pistonEvent.piston.isMoving ? " 移动中" : "") +
          (pistonEvent.piston.state === BlockPistonState.Expanding ? " 伸出中" : "") +
          (pistonEvent.piston.state === BlockPistonState.Expanded ? " 已伸出" : "") +
          (pistonEvent.piston.state === BlockPistonState.Retracting ? " 缩回中" : "") +
          (pistonEvent.piston.state === BlockPistonState.Retracted ? " 已缩回" : "")
      );
    }
  });
}