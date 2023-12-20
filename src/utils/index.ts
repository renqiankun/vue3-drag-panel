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
  let activeMode = selfObj.activeMode;
  let activeMap = selfObj.activeMap;
  if (!propName || !activeMode || !activeMap) {
    return selfObj;
  }
  let equalModelValue = false;
  switch (activeMode) {
    case "大于":
      if (modelValue[propName] > activeValue) equalModelValue = true;
      break;
    case "小于":
      if (modelValue[propName] < activeValue) equalModelValue = true;

      break;
    case "等于":
      if (modelValue[propName] == activeValue) equalModelValue = true;
      break;
    case "不等于":
      if (modelValue[propName] != activeValue) equalModelValue = true;
      break;
    case "大于等于":
      if (modelValue[propName] >= activeValue) equalModelValue = true;
      break;
    case "小于等于":
      if (modelValue[propName] < activeValue) equalModelValue = true;
      break;
    case "存在":
      if (modelValue[propName] !== undefined && modelValue[propName] !== null)
        equalModelValue = true;
      break;
    case "不存在":
      if (modelValue[propName] === undefined || modelValue[propName] === null)
        equalModelValue = true;
      break;
    default:
      break;
  }
  let resetMap = {};
  if (equalModelValue) {
    resetMap = parseMapValuehand(activeMap, modelValue);
  }
  return {
    ...selfObj,
    ...resetMap,
  };
};

const parseMapValuehand = (map: string, modelValue: any) => {
  let resetMap: any = {};
  let reg_g = /\$\{(.*?)\}.*/g; //(.*?)\}表示匹配任意字符到离它最近的'}'
  try {
    resetMap = JSON.parse(map);
    for (var key in resetMap) {
      let value = resetMap[key]; // bb${a}px
      if (reg_g.test(value)) {
        let reg_key = /\$\{(.*?)\}/g; // ${a}
        let match = value.match(reg_key)?.[0] ?? ""; // ${a}
        let allStringArr = value.split(match); // ['bb','px']
        let resetKey = match.replace(/[\$|{|}]/g, ""); // a
        let dataValue = modelValue?.[resetKey] ?? "";
        resetMap[key] = allStringArr.join?.(dataValue);
      }
    }
  } catch (error) {
    console.error("解析 activeMap 失败", error);
  }
  return resetMap;
};

export const getMinComponentArea = (components: any) => {
  let left: any = undefined;
  let right: any = undefined;
  let top: any = undefined;
  let bottom: any = undefined;
  components.forEach((item: any) => {
    let halfFont = (parseFloat(item.fontSize) || 16) / 2;
    let halfFontW = 32;

    let itemX = parseFloat(item.x);
    let itemY = parseFloat(item.y);
    let itemH = item.h === "auto" ? halfFont : parseFloat(item.h) || halfFont;
    let itemW = item.w === "auto" ? halfFontW : parseFloat(item.w) || halfFontW;
    if (left === undefined || itemX < left) left = itemX;

    if (right === undefined || itemX + itemW > right) right = itemX + itemW;

    if (top === undefined || itemY < top) top = itemY;
    if (bottom === undefined || itemY + itemH > bottom) bottom = itemY + itemH;
  });
  return {
    left,
    right,
    top,
    bottom,
  };
};

/** 对象浅拷贝，保证origin不会引入额外的key */
export const mergeObjHand = (origin: any, target: any) => {
  for (let key of Object.keys(origin)) {
    origin[key] = target?.[key] ?? origin[key];
  }
};

// 获取一个组件旋转 rotate 后的样式
export function getComponentRotatedStyle(style: any) {
  style = { ...style };
  if (style.rotate != 0) {
    const newWidth =
      style.width * Math.cos(style.rotate) +
      style.height * Math.sin(style.rotate);
    const diffX = (style.width - newWidth) / 2; // 旋转后范围变小是正值，变大是负值
    style.left += diffX;
    style.right = style.left + newWidth;

    const newHeight =
      style.height * Math.cos(style.rotate) +
      style.width * Math.sin(style.rotate);
    const diffY = (newHeight - style.height) / 2; // 始终是正
    style.top -= diffY;
    style.bottom = style.top + newHeight;

    style.width = newWidth;
    style.height = newHeight;
  } else {
    style.bottom = style.top + style.height;
    style.right = style.left + style.width;
  }

  return style;
}


export const sleepHand = (time=0)=>{
  return new Promise((resolve:any)=>{
    setTimeout(()=>{
      resolve()
    },time)
  })
}