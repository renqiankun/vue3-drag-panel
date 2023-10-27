export type PannelInterface = {
  version: any;
  desc: any;
  height: any;
  width: any;
  color?:any
  fontSize?:any
  bgColor?:any
  components: Array<ComponentsInterface>;
  [key: string]: any;
};



export type ComponentsInterface = {
  //通用属性
  snap: boolean;
  snapTolerance: any;
  parent: boolean;
  rotatable: boolean;
  x: numbwe; // 左
  y: numbwe; // 上
  r?: number; // 旋转
  w?: any; // 宽度
  h?: any; // 高度
  z?: number;
  active: boolean;
  preventDeactivation: boolean;
  resizable: boolean;
  lockAspectRatio: boolean;
  [key: string]: any;
  //组件独有属性
  self: {
    name: string;
    id?: any;
    url?: string; // 图片
    modelValue?: any; // 文本
    defaultModelValue?: string; // 文本
    click?: boolean; // 启用点击抛出事件
    color?: string; // 颜色
    bgColor?: string;  // 背景色
    borderColor?:string // border
    fillColor?:string  // icon
    padding?:string // 文字
    radius?:string
    fontSize?:string
    iconUseSelfColor?:boolean // svg启用自定义颜色
    activeValue?:string // 匹配值 modelValue.prop==activeValue
    activeMap?:string // {bgColor:red}
    [key: string]: any;
  };
  dySelf:{
    [key: string]: any;
  }
};

