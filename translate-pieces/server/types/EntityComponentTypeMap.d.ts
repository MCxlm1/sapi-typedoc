/* IMPORT */ import { EntityAddRiderComponent, EntityAgeableComponent, EntityBreathableComponent, EntityCanClimbComponent, EntityCanFlyComponent, EntityCanPowerJumpComponent, EntityColor2Component, EntityColorComponent, EntityEquippableComponent, EntityExhaustionComponent, EntityFireImmuneComponent, EntityFloatsInLiquidComponent, EntityFlyingSpeedComponent, EntityFrictionModifierComponent, EntityHealableComponent, EntityHealthComponent, EntityHungerComponent, EntityInventoryComponent, EntityIsBabyComponent, EntityIsChargedComponent, EntityIsChestedComponent, EntityIsDyeableComponent, EntityIsHiddenWhenInvisibleComponent, EntityIsIgnitedComponent, EntityIsIllagerCaptainComponent, EntityIsSaddledComponent, EntityIsShakingComponent, EntityIsShearedComponent, EntityIsStackableComponent, EntityIsStunnedComponent, EntityIsTamedComponent, EntityItemComponent, EntityLavaMovementComponent, EntityLeashableComponent, EntityMarkVariantComponent, EntityMovementAmphibiousComponent, EntityMovementBasicComponent, EntityMovementComponent, EntityMovementFlyComponent, EntityMovementGenericComponent, EntityMovementGlideComponent, EntityMovementHoverComponent, EntityMovementJumpComponent, EntityMovementSkipComponent, EntityMovementSwayComponent, EntityNavigationClimbComponent, EntityNavigationFloatComponent, EntityNavigationFlyComponent, EntityNavigationGenericComponent, EntityNavigationHoverComponent, EntityNavigationWalkComponent, EntityNpcComponent, EntityOnFireComponent, EntityProjectileComponent, EntityPushThroughComponent, EntityRideableComponent, EntityRidingComponent, EntitySaturationComponent, EntityScaleComponent, EntitySkinIdComponent, EntityStrengthComponent, EntityTameMountComponent, EntityTameableComponent, EntityTypeFamilyComponent, EntityUnderwaterMovementComponent, EntityVariantComponent, EntityWantsJockeyComponent, PlayerCursorInventoryComponent } from '../index';

export type EntityComponentTypeMap = {
    // 添加骑手组件
    "添加骑手组件 addrider": EntityAddRiderComponent;
    // 可成长组件
    "可成长组件 ageable": EntityAgeableComponent;
    // 可呼吸组件
    "可呼吸组件 breathable": EntityBreathableComponent;
    // 可攀爬组件
    "可攀爬组件 can_climb": EntityCanClimbComponent;
    // 可飞行组件
    "可飞行组件 can_fly": EntityCanFlyComponent;
    // 可强力跳跃组件
    "可强力跳跃组件 can_power_jump": EntityCanPowerJumpComponent;
    // 颜色组件
    "颜色组件 color": EntityColorComponent;
    // 颜色2组件
    "颜色2组件 color2": EntityColor2Component;
    // 玩家光标物品栏组件
    "玩家光标物品栏组件 cursor_inventory": PlayerCursorInventoryComponent;
    // 可装备组件
    "可装备组件 equippable": EntityEquippableComponent;
    // 免疫火焰组件
    "免疫火焰组件 fire_immune": EntityFireImmuneComponent;
    // 液体中漂浮组件
    "液体中漂浮组件 floats_in_liquid": EntityFloatsInLiquidComponent;
    // 飞行速度组件
    "飞行速度组件 flying_speed": EntityFlyingSpeedComponent;
    // 摩擦力修改组件
    "摩擦力修改组件 friction_modifier": EntityFrictionModifierComponent;
    // 可治疗组件
    "可治疗组件 healable": EntityHealableComponent;
    // 生命值组件
    "生命值组件 health": EntityHealthComponent;
    // 物品栏组件
    "物品栏组件 inventory": EntityInventoryComponent;
    // 幼体组件
    "幼体组件 is_baby": EntityIsBabyComponent;
    // 已充能组件
    "已充能组件 is_charged": EntityIsChargedComponent;
    // 有箱子组件
    "有箱子组件 is_chested": EntityIsChestedComponent;
    // 可染色组件
    "可染色组件 is_dyeable": EntityIsDyeableComponent;
    // 隐身时隐藏组件
    "隐身时隐藏组件 is_hidden_when_invisible": EntityIsHiddenWhenInvisibleComponent;
    // 已点燃组件
    "已点燃组件 is_ignited": EntityIsIgnitedComponent;
    // 灾厄村民队长组件
    "灾厄村民队长组件 is_illager_captain": EntityIsIllagerCaptainComponent;
    // 已装备鞍组件
    "已装备鞍组件 is_saddled": EntityIsSaddledComponent;
    // 摇晃组件
    "摇晃组件 is_shaking": EntityIsShakingComponent;
    // 已剪毛组件
    "已剪毛组件 is_sheared": EntityIsShearedComponent;
    // 可堆叠组件
    "可堆叠组件 is_stackable": EntityIsStackableComponent;
    // 眩晕组件
    "眩晕组件 is_stunned": EntityIsStunnedComponent;
    // 已驯服组件
    "已驯服组件 is_tamed": EntityIsTamedComponent;
    // 物品组件
    "物品组件 item": EntityItemComponent;
    // 熔岩移动组件
    "熔岩移动组件 lava_movement": EntityLavaMovementComponent;
    // 可拴绳组件
    "可拴绳组件 leashable": EntityLeashableComponent;
    // 标记变种组件
    "标记变种组件 mark_variant": EntityMarkVariantComponent;
    // 添加骑手组件
    "添加骑手组件 minecraft:addrider": EntityAddRiderComponent;
    // 可成长组件
    "可成长组件 minecraft:ageable": EntityAgeableComponent;
    // 可呼吸组件
    "可呼吸组件 minecraft:breathable": EntityBreathableComponent;
    // 可攀爬组件
    "可攀爬组件 minecraft:can_climb": EntityCanClimbComponent;
    // 可飞行组件
    "可飞行组件 minecraft:can_fly": EntityCanFlyComponent;
    // 可强力跳跃组件
    "可强力跳跃组件 minecraft:can_power_jump": EntityCanPowerJumpComponent;
    // 颜色组件
    "颜色组件 minecraft:color": EntityColorComponent;
    // 颜色2组件
    "颜色2组件 minecraft:color2": EntityColor2Component;
    // 玩家光标物品栏组件
    "玩家光标物品栏组件 minecraft:cursor_inventory": PlayerCursorInventoryComponent;
    // 可装备组件
    "可装备组件 minecraft:equippable": EntityEquippableComponent;
    // 免疫火焰组件
    "免疫火焰组件 minecraft:fire_immune": EntityFireImmuneComponent;
    // 液体中漂浮组件
    "液体中漂浮组件 minecraft:floats_in_liquid": EntityFloatsInLiquidComponent;
    // 飞行速度组件
    "飞行速度组件 minecraft:flying_speed": EntityFlyingSpeedComponent;
    // 摩擦力修改组件
    "摩擦力修改组件 minecraft:friction_modifier": EntityFrictionModifierComponent;
    // 可治疗组件
    "可治疗组件 minecraft:healable": EntityHealableComponent;
    // 生命值组件
    "生命值组件 minecraft:health": EntityHealthComponent;
    // 物品栏组件
    "物品栏组件 minecraft:inventory": EntityInventoryComponent;
    // 幼体组件
    "幼体组件 minecraft:is_baby": EntityIsBabyComponent;
    // 已充能组件
    "已充能组件 minecraft:is_charged": EntityIsChargedComponent;
    // 有箱子组件
    "有箱子组件 minecraft:is_chested": EntityIsChestedComponent;
    // 可染色组件
    "可染色组件 minecraft:is_dyeable": EntityIsDyeableComponent;
    // 隐身时隐藏组件
    "隐身时隐藏组件 minecraft:is_hidden_when_invisible": EntityIsHiddenWhenInvisibleComponent;
    // 已点燃组件
    "已点燃组件 minecraft:is_ignited": EntityIsIgnitedComponent;
    // 灾厄村民队长组件
    "灾厄村民队长组件 minecraft:is_illager_captain": EntityIsIllagerCaptainComponent;
    // 已装备鞍组件
    "已装备鞍组件 minecraft:is_saddled": EntityIsSaddledComponent;
    // 摇晃组件
    "摇晃组件 minecraft:is_shaking": EntityIsShakingComponent;
    // 已剪毛组件
    "已剪毛组件 minecraft:is_sheared": EntityIsShearedComponent;
    // 可堆叠组件
    "可堆叠组件 minecraft:is_stackable": EntityIsStackableComponent;
    // 眩晕组件
    "眩晕组件 minecraft:is_stunned": EntityIsStunnedComponent;
    // 已驯服组件
    "已驯服组件 minecraft:is_tamed": EntityIsTamedComponent;
    // 物品组件
    "物品组件 minecraft:item": EntityItemComponent;
    // 熔岩移动组件
    "熔岩移动组件 minecraft:lava_movement": EntityLavaMovementComponent;
    // 可拴绳组件
    "可拴绳组件 minecraft:leashable": EntityLeashableComponent;
    // 标记变种组件
    "标记变种组件 minecraft:mark_variant": EntityMarkVariantComponent;
    // 移动组件
    "移动组件 minecraft:movement": EntityMovementComponent;
    // 两栖移动组件
    "两栖移动组件 minecraft:movement.amphibious": EntityMovementAmphibiousComponent;
    // 基础移动组件
    "基础移动组件 minecraft:movement.basic": EntityMovementBasicComponent;
    // 飞行移动组件
    "飞行移动组件 minecraft:movement.fly": EntityMovementFlyComponent;
    // 通用移动组件
    "通用移动组件 minecraft:movement.generic": EntityMovementGenericComponent;
    // 滑翔移动组件
    "滑翔移动组件 minecraft:movement.glide": EntityMovementGlideComponent;
    // 悬停移动组件
    "悬停移动组件 minecraft:movement.hover": EntityMovementHoverComponent;
    // 跳跃移动组件
    "跳跃移动组件 minecraft:movement.jump": EntityMovementJumpComponent;
    // 跳跃移动组件
    "跳跃移动组件 minecraft:movement.skip": EntityMovementSkipComponent;
    // 摆动移动组件
    "摆动移动组件 minecraft:movement.sway": EntityMovementSwayComponent;
    // 攀爬导航组件
    "攀爬导航组件 minecraft:navigation.climb": EntityNavigationClimbComponent;
    // 浮游导航组件
    "浮游导航组件 minecraft:navigation.float": EntityNavigationFloatComponent;
    // 飞行导航组件
    "飞行导航组件 minecraft:navigation.fly": EntityNavigationFlyComponent;
    // 通用导航组件
    "通用导航组件 minecraft:navigation.generic": EntityNavigationGenericComponent;
    // 悬停导航组件
    "悬停导航组件 minecraft:navigation.hover": EntityNavigationHoverComponent;
    // 行走导航组件
    "行走导航组件 minecraft:navigation.walk": EntityNavigationWalkComponent;
    // NPC组件
    "NPC组件 minecraft:npc": EntityNpcComponent;
    // 燃烧组件
    "燃烧组件 minecraft:onfire": EntityOnFireComponent;
    // 玩家疲劳组件
    "玩家疲劳组件 minecraft:player.exhaustion": EntityExhaustionComponent;
    // 玩家饥饿组件
    "玩家饥饿组件 minecraft:player.hunger": EntityHungerComponent;
    // 玩家饱和度组件
    "玩家饱和度组件 minecraft:player.saturation": EntitySaturationComponent;
    // 投射物组件
    "投射物组件 minecraft:projectile": EntityProjectileComponent;
    // 穿透组件
    "穿透组件 minecraft:push_through": EntityPushThroughComponent;
    // 可骑乘组件
    "可骑乘组件 minecraft:rideable": EntityRideableComponent;
    // 骑乘组件
    "骑乘组件 minecraft:riding": EntityRidingComponent;
    // 缩放组件
    "缩放组件 minecraft:scale": EntityScaleComponent;
    // 皮肤ID组件
    "皮肤ID组件 minecraft:skin_id": EntitySkinIdComponent;
    // 力量组件
    "力量组件 minecraft:strength": EntityStrengthComponent;
    // 可驯服组件
    "可驯服组件 minecraft:tameable": EntityTameableComponent;
    // 驯服坐骑组件
    "驯服坐骑组件 minecraft:tamemount": EntityTameMountComponent;
    // 类型家族组件
    "类型家族组件 minecraft:type_family": EntityTypeFamilyComponent;
    // 水下移动组件
    "水下移动组件 minecraft:underwater_movement": EntityUnderwaterMovementComponent;
    // 变种组件
    "变种组件 minecraft:variant": EntityVariantComponent;
    // 想要骑手组件
    "想要骑手组件 minecraft:wants_jockey": EntityWantsJockeyComponent;
    // 移动组件
    "移动组件 movement": EntityMovementComponent;
    // 两栖移动组件
    "两栖移动组件 movement.amphibious": EntityMovementAmphibiousComponent;
    // 基础移动组件
    "基础移动组件 movement.basic": EntityMovementBasicComponent;
    // 飞行移动组件
    "飞行移动组件 movement.fly": EntityMovementFlyComponent;
    // 通用移动组件
    "通用移动组件 movement.generic": EntityMovementGenericComponent;
    // 滑翔移动组件
    "滑翔移动组件 movement.glide": EntityMovementGlideComponent;
    // 悬停移动组件
    "悬停移动组件 movement.hover": EntityMovementHoverComponent;
    // 跳跃移动组件
    "跳跃移动组件 movement.jump": EntityMovementJumpComponent;
    // 跳跃移动组件
    "跳跃移动组件 movement.skip": EntityMovementSkipComponent;
    // 摆动移动组件
    "摆动移动组件 movement.sway": EntityMovementSwayComponent;
    // 攀爬导航组件
    "攀爬导航组件 navigation.climb": EntityNavigationClimbComponent;
    // 浮游导航组件
    "浮游导航组件 navigation.float": EntityNavigationFloatComponent;
    // 飞行导航组件
    "飞行导航组件 navigation.fly": EntityNavigationFlyComponent;
    // 通用导航组件
    "通用导航组件 navigation.generic": EntityNavigationGenericComponent;
    // 悬停导航组件
    "悬停导航组件 navigation.hover": EntityNavigationHoverComponent;
    // 行走导航组件
    "行走导航组件 navigation.walk": EntityNavigationWalkComponent;
    // NPC组件
    "NPC组件 npc": EntityNpcComponent;
    // 燃烧组件
    "燃烧组件 onfire": EntityOnFireComponent;
    // 玩家疲劳组件
    "玩家疲劳组件 player.exhaustion": EntityExhaustionComponent;
    // 玩家饥饿组件
    "玩家饥饿组件 player.hunger": EntityHungerComponent;
    // 玩家饱和度组件
    "玩家饱和度组件 player.saturation": EntitySaturationComponent;
    // 投射物组件
    "投射物组件 projectile": EntityProjectileComponent;
    // 穿透组件
    "穿透组件 push_through": EntityPushThroughComponent;
    // 可骑乘组件
    "可骑乘组件 rideable": EntityRideableComponent;
    // 骑乘组件
    "骑乘组件 riding": EntityRidingComponent;
    // 缩放组件
    "缩放组件 scale": EntityScaleComponent;
    // 皮肤ID组件
    "皮肤ID组件 skin_id": EntitySkinIdComponent;
    // 力量组件
    "力量组件 strength": EntityStrengthComponent;
    // 可驯服组件
    "可驯服组件 tameable": EntityTameableComponent;
    // 驯服坐骑组件
    "驯服坐骑组件 tamemount": EntityTameMountComponent;
    // 类型家族组件
    "类型家族组件 type_family": EntityTypeFamilyComponent;
    // 水下移动组件
    "水下移动组件 underwater_movement": EntityUnderwaterMovementComponent;
    // 变种组件
    "变种组件 variant": EntityVariantComponent;
    // 想要骑手组件
    "想要骑手组件 wants_jockey": EntityWantsJockeyComponent;
};