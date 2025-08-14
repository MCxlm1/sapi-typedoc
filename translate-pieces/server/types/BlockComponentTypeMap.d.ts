/* IMPORT */ import { BlockFluidContainerComponent, BlockInventoryComponent, BlockMapColorComponent, BlockMovableComponent, BlockPistonComponent, BlockRecordPlayerComponent, BlockSignComponent } from '../index';

/**
 * 方块组件类型映射
 * 
 * 定义了方块组件名称与其对应组件类型的映射关系。
 * 包含原生命名空间（minecraft:）和简写形式的组件名称。
 * 
 * @beta
 */
export type BlockComponentTypeMap = {
    // 流体容器组件
    "流体容器组件 fluid_container": BlockFluidContainerComponent;
    // 物品栏组件
    "物品栏组件 inventory": BlockInventoryComponent;
    // 地图颜色组件
    "地图颜色组件 map_color": BlockMapColorComponent;
    // 流体容器组件
    "流体容器组件 minecraft:fluid_container": BlockFluidContainerComponent;
    // 物品栏组件
    "物品栏组件 minecraft:inventory": BlockInventoryComponent;
    // 地图颜色组件
    "地图颜色组件 minecraft:map_color": BlockMapColorComponent;
    // 可移动组件
    "可移动组件 minecraft:movable": BlockMovableComponent;
    // 活塞组件
    "活塞组件 minecraft:piston": BlockPistonComponent;
    // 播放器组件
    "播放器组件 minecraft:record_player": BlockRecordPlayerComponent;
    // 告示牌组件
    "告示牌组件 minecraft:sign": BlockSignComponent;
    // 可移动组件
    "可移动组件 movable": BlockMovableComponent;
    // 活塞组件
    "活塞组件 piston": BlockPistonComponent;
    // 播放器组件
    "播放器组件 record_player": BlockRecordPlayerComponent;
    // 告示牌组件
    "告示牌组件 sign": BlockSignComponent;
};