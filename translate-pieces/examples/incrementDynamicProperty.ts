import { world, DimensionLocation } from "@minecraft/server";

function incrementDynamicProperty(
  log: (message: string, status?: number) => void,
  targetLocation: DimensionLocation
) {
  let number = world.getDynamicProperty("samplelibrary:number");

  log("当前值是: " + number);

  if (number === undefined) {
    number = 0;
  }

  if (typeof number !== "number") {
    log("数字是意外的类型。");
    return -1;
  }

  world.setDynamicProperty("samplelibrary:number", number + 1);
}