export function getUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    return (c === "x" ? (Math.random() * 16) | 0 : "r&0x3" | "0x8").toString(
      16
    );
  });
}

/**
 * 动态处理数据对象属性
 * @param objMap 
 * @param modelValue 
 * @returns 
 */
export const resetComponentAttrHand = (objMap: any, modelValue: any) => {
  let selfObj = objMap.self;
  let activeValue = selfObj.activeValue;
  let propName = selfObj.prop;
  if (!activeValue || !propName) {
    return selfObj;
  }
  let resetMap = {};
  if (modelValue[propName] == activeValue && selfObj.activeMap) {
    try {
      resetMap = JSON.parse(selfObj.activeMap);
    } catch (error) {
      console.error("解析 activeMap 失败", error);
    }
  }
  return {
    ...selfObj,
    ...resetMap,
  };
};
