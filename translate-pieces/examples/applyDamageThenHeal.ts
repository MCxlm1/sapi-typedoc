import { system, EntityHealthComponent, EntityComponentTypes, DimensionLocation } from "@minecraft/server";
import { MinecraftEntityTypes } from "@minecraft/vanilla-data";

function applyDamageThenHeal(
  log: (message: string, status?: number) => void,
  targetLocation: DimensionLocation
) {
  const skelly = targetLocation.dimension.spawnEntity(MinecraftEntityTypes.Skeleton, targetLocation);

  skelly.applyDamage(19); // 骷髅的最大生命值是20，所以这将使骷髅接近死亡

  system.runTimeout(() => {
    const health = skelly.getComponent(EntityComponentTypes.Health) as EntityHealthComponent;
    log("治疗前骷髅的生命值: " + health?.currentValue);
    health?.resetToMaxValue();
    log("治疗后骷髅的生命值: " + health?.currentValue);
  }, 20);
}