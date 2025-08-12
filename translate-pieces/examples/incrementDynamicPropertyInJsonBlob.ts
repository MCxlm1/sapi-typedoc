import { world, DimensionLocation } from "@minecraft/server";

function incrementDynamicPropertyInJsonBlob(
  log: (message: string, status?: number) => void,
  targetLocation: DimensionLocation
) {
  let paintStr = world.getDynamicProperty("samplelibrary:longerjson");
  let paint: { color: string; intensity: number } | undefined = undefined;

  log("当前值是: " + paintStr);

  if (paintStr === undefined) {
    paint = {
      color: "purple",
      intensity: 0,
    };
  } else {
    if (typeof paintStr !== "string") {
      log("颜色是意外的类型。");
      return -1;
    }

    try {
      paint = JSON.parse(paintStr);
    } catch (e) {
      log("解析序列化结构时出错。");
      return -1;
    }
  }

  if (!paint) {
    log("解析序列化结构时出错。");
    return -1;
  }

  paint.intensity++;
  paintStr = JSON.stringify(paint); // 务必小心确保序列化的JSON字符串不超过限制
  world.setDynamicProperty("samplelibrary:longerjson", paintStr);
}