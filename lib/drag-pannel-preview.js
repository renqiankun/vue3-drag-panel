(function(){"use strict";try{if(typeof document<"u"){var a=document.createElement("style");a.appendChild(document.createTextNode(".group-wrap[data-v-a7d365c4]{position:absolute;left:0;top:0;width:100%;height:100}.group-wrap .group-item[data-v-a7d365c4]{position:absolute}.custom-image[data-v-51bcdfe3]{color:var(--35be3580);background-color:var(--7a3808fb);padding:var(--565e2eee);border-radius:var(--ca4fabd6)}.text-wrap[data-v-8233b39d]{height:100%;color:var(--46dd5ff7);background-color:var(--7f931c9c);padding:var(--c746d0b6);border-radius:var(--a4c36304);font-size:var(--522c9048);border:var(--27fc0faa);word-break:break-all}.text-wrap[data-v-b9e7c0b0]{color:var(--00cd0a69);background-color:var(--863570b8);padding:var(--cde924d2);border-radius:var(--31a3f24c);font-size:var(--7015a02a);border:var(--aedef5c6);word-break:break-all;white-space:var(--ba981f16);overflow:var(--58ddca96);text-overflow:var(--6b9be9da)}.icon-wrap[data-v-6b52c610]{color:var(--46bf371c);stroke:var(--46bf371c);fill:var(--5a1a592f);background-color:var(--1d6b7926);padding:var(--651f2d40);border-radius:var(--5f884d3a);font-size:var(--6f5fc4fe)}.icon-wrap.color-self[data-v-6b52c610] *{color:var(--46bf371c);stroke:var(--46bf371c);fill:var(--5a1a592f)}.img-scale-wrap[data-v-321d426b]{position:relative;width:100%;height:100%;color:var(--ef6c025e);background-color:var(--58f6c20c);padding:var(--351ce7ff);border-radius:var(--cc74ea38)}.img-scale-wrap .img-scale-reduce[data-v-321d426b]{position:absolute;overflow:hidden;width:100%;height:100%;transition:.1s}.img-scale-wrap .img-scale[data-v-321d426b]{display:block;position:absolute;width:100%;height:100%}.drag-editor-preivew-wrap[data-v-b2568ace]{width:100%;height:100%;min-width:200px;min-height:200px}.drag-editor-preivew[data-v-b2568ace]{width:100%;height:100%}.drag-editor-preivew[data-v-b2568ace] .handle{display:none!important}.preview-item-wrap[data-v-b2568ace]{touch-action:none;position:absolute;box-sizing:border-box;-webkit-user-select:none;user-select:none}")),document.head.appendChild(a)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
import { defineComponent as h, openBlock as c, createElementBlock as f, Fragment as I, renderList as T, normalizeStyle as y, createBlock as B, resolveDynamicComponent as P, mergeProps as H, useCssVars as C, watch as V, onMounted as $, ref as m, toDisplayString as R, unref as M, normalizeClass as k, nextTick as U, computed as j, createElementVNode as x, withModifiers as W } from "vue";
const F = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get default() {
    return S;
  }
}, Symbol.toStringTag, { value: "Module" })), E = (s, e) => {
  let t = s.self, a = t.activeValue, o = t.prop, n = t.activeMode, p = t.activeMap;
  if (!o || !n || !p)
    return t;
  let r = !1;
  switch (n) {
    case "大于":
      e[o] > a && (r = !0);
      break;
    case "小于":
      e[o] < a && (r = !0);
      break;
    case "等于":
      e[o] == a && (r = !0);
      break;
    case "不等于":
      e[o] != a && (r = !0);
      break;
    case "大于等于":
      e[o] >= a && (r = !0);
      break;
    case "小于等于":
      e[o] < a && (r = !0);
      break;
    case "存在":
      e[o] !== void 0 && e[o] !== null && (r = !0);
      break;
    case "不存在":
      e[o] === void 0 && e[o] === null && (r = !0);
      break;
  }
  let i = {};
  return r && (i = N(p, e)), {
    ...t,
    ...i
  };
}, N = (s, e) => {
  let t = {}, a = /\$\{(.*?)\}/g;
  try {
    t = JSON.parse(s);
    for (var o in t) {
      let n = t[o];
      if (a.test(n)) {
        let p = n.replace(/[\$|{|}]/g, "");
        t[o] = (e == null ? void 0 : e[p]) ?? void 0;
      }
    }
  } catch (n) {
    console.error("解析 activeMap 失败", n);
  }
  return t;
}, X = { class: "group-wrap" }, Y = ["a"], D = /* @__PURE__ */ h({
  __name: "index",
  props: {
    data: {},
    modelValue: { default: () => ({}) },
    groupModel: { default: () => ({}) },
    disabled: { type: Boolean }
  },
  setup(s) {
    const e = s, t = (n) => A(n).default, a = (n) => ({
      width: n.w == "auto" ? n.w : n.w + "px",
      height: n.h == "auto" ? n.h : n.h + "px",
      transform: `translate(${n.x}px, ${n.y}px) rotate(${n.r || 0}deg)`
    }), o = (n) => E(n, e.groupModel);
    return (n, p) => (c(), f("div", X, [
      (c(!0), f(I, null, T(n.data.group, (r) => (c(), f("div", {
        a: r.active,
        class: "group-item",
        style: y(a(r))
      }, [
        (c(), B(P(t(r.self.name)), H({
          data: r,
          h: r.h,
          w: r.w
        }, o(r), {
          modelValue: n.groupModel[r.self.modelValue],
          "onUpdate:modelValue": (i) => n.groupModel[r.self.modelValue] = i,
          defaultModelValue: r.self.defaultModelValue,
          "onUpdate:defaultModelValue": (i) => r.self.defaultModelValue = i,
          disabled: !0
        }), null, 16, ["data", "h", "w", "modelValue", "onUpdate:modelValue", "defaultModelValue", "onUpdate:defaultModelValue"]))
      ], 12, Y))), 256))
    ]));
  }
});
const w = (s, e) => {
  const t = s.__vccOpts || s;
  for (const [a, o] of e)
    t[a] = o;
  return t;
}, L = /* @__PURE__ */ w(D, [["__scopeId", "data-v-a7d365c4"]]), q = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: L
}, Symbol.toStringTag, { value: "Module" })), G = ["width", "height", "src"], J = /* @__PURE__ */ h({
  __name: "index",
  props: {
    url: {},
    w: {},
    h: {},
    color: { default: "" },
    bgColor: { default: "" },
    padding: { default: "" },
    radius: { default: "" }
  },
  setup(s) {
    const e = s;
    C((a) => ({
      "35be3580": a.color,
      "7a3808fb": a.bgColor,
      "565e2eee": a.padding,
      ca4fabd6: a.radius
    })), V(
      () => [e.w, e.h],
      () => t()
    ), $(() => {
      t();
    });
    const t = () => {
    };
    return (a, o) => (c(), f("img", {
      class: "custom-image",
      width: a.w,
      height: a.h,
      src: a.url,
      alt: ""
    }, null, 8, G));
  }
});
const K = /* @__PURE__ */ w(J, [["__scopeId", "data-v-51bcdfe3"]]), Q = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: K
}, Symbol.toStringTag, { value: "Module" })), Z = /* @__PURE__ */ h({
  __name: "index",
  props: {
    url: {},
    w: {},
    h: {},
    flip: {}
  },
  setup(s) {
    const e = s;
    let t = m(), a = "", o = !0, n = "";
    V(() => [e.w, e.h], () => p()), V(() => {
      var i, d;
      return [(i = e.flip) == null ? void 0 : i.horizontal, (d = e.flip) == null ? void 0 : d.vertical];
    }, () => r()), $(() => {
      a = t.value.getContext("2d"), p();
    });
    const p = () => {
      let i = e.w, d = e.h;
      t.value.width = i, t.value.height = d, o ? (o = !1, n = document.createElement("img"), n.src = e.url, n.onload = () => {
        a.drawImage(n, 0, 0, i, d), r();
      }) : r();
    }, r = () => {
      const { vertical: i, horizontal: d } = e.flip ?? {};
      let g = e.w, l = e.h;
      const v = d ? -1 : 1, u = i ? -1 : 1;
      a.clearRect(0, 0, g, l), a.translate(g / 2 - g * v / 2, l / 2 - l * u / 2), a.scale(v, u), a.drawImage(n, 0, 0, g, l), a.setTransform(1, 0, 0, 1, 0, 0);
    };
    return (i, d) => (c(), f("canvas", {
      ref_key: "canvas",
      ref: t
    }, null, 512));
  }
}), ee = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Z
}, Symbol.toStringTag, { value: "Module" })), te = { class: "text-wrap" }, ae = /* @__PURE__ */ h({
  __name: "index",
  props: {
    modelValue: { default: "" },
    defaultModelValue: { default: "" },
    data: {},
    color: { default: "" },
    bgColor: { default: "" },
    padding: { default: "" },
    radius: { default: "" },
    fontSize: { default: "" },
    borderColor: { default: "" },
    w: {},
    h: {}
  },
  setup(s) {
    return C((e) => ({
      "46dd5ff7": e.color,
      "7f931c9c": e.bgColor,
      c746d0b6: e.padding,
      a4c36304: e.radius,
      "522c9048": e.fontSize,
      "27fc0faa": e.borderColor
    })), (e, t) => (c(), f("div", te, R(e.modelValue || e.defaultModelValue), 1));
  }
});
const le = /* @__PURE__ */ w(ae, [["__scopeId", "data-v-8233b39d"]]), oe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: le
}, Symbol.toStringTag, { value: "Module" })), ne = ["contenteditable"], re = /* @__PURE__ */ h({
  __name: "index",
  props: {
    modelValue: { default: "" },
    defaultModelValue: {},
    data: {},
    color: { default: "" },
    bgColor: { default: "" },
    padding: { default: "" },
    radius: { default: "" },
    fontSize: { default: "" },
    borderColor: { default: "" },
    w: {},
    h: {},
    noWordWrap: { type: Boolean, default: !1 },
    overEllipsis: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    hasModelValue: { type: Boolean }
  },
  emits: [
    "update:modelValue",
    "update:defaultModelValue",
    "click"
  ],
  setup(s, { emit: e }) {
    const t = s;
    C((d) => ({
      "00cd0a69": d.color,
      "863570b8": d.bgColor,
      cde924d2: d.padding,
      "31a3f24c": d.radius,
      "7015a02a": d.fontSize,
      aedef5c6: d.borderColor,
      ba981f16: d.noWordWrap ? "nowrap" : "",
      "58ddca96": d.overEllipsis ? "hidden" : "auto",
      "6b9be9da": d.overEllipsis ? "ellipsis" : "unset"
    }));
    let a = m(!1), o = m();
    const n = async () => {
      t.disabled || (a.value = !0, p(o.value), await U(), o.value.focus());
    }, p = (d) => {
      const g = window.getSelection(), l = document.createRange();
      l.selectNodeContents(d), g.removeAllRanges(), g.addRange(l);
    }, r = () => {
      a.value = !1;
    }, i = (d) => {
      t.hasModelValue && e("update:modelValue", d.target.innerText), e("update:defaultModelValue", d.target.innerText);
    };
    return (d, g) => (c(), f("div", {
      contenteditable: M(a),
      onBlur: r,
      onInput: i,
      ref_key: "text",
      ref: o,
      class: k({ "text-wrap": !0, "can-edit": M(a) }),
      onDblclick: n
    }, R(d.modelValue || d.defaultModelValue), 43, ne));
  }
});
const de = /* @__PURE__ */ w(re, [["__scopeId", "data-v-b9e7c0b0"]]), se = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: de
}, Symbol.toStringTag, { value: "Module" })), ue = ["innerHTML"], ie = /* @__PURE__ */ h({
  __name: "index",
  props: {
    url: {},
    color: { default: "" },
    bgColor: { default: "" },
    fillColor: { default: "" },
    padding: { default: "" },
    radius: { default: "" },
    fontSize: { default: "" },
    iconUseSelfColor: { type: Boolean }
  },
  setup(s) {
    return C((e) => ({
      "46bf371c": e.color,
      "5a1a592f": e.fillColor,
      "1d6b7926": e.bgColor,
      "651f2d40": e.padding,
      "5f884d3a": e.radius,
      "6f5fc4fe": e.fontSize
    })), (e, t) => (c(), f("div", {
      class: k({ "icon-wrap": !0, "color-self": e.iconUseSelfColor }),
      innerHTML: e.url
    }, null, 10, ue));
  }
});
const ce = /* @__PURE__ */ w(ie, [["__scopeId", "data-v-6b52c610"]]), pe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ce
}, Symbol.toStringTag, { value: "Module" })), fe = { class: "img-scale-wrap" }, _e = ["src"], ge = /* @__PURE__ */ h({
  __name: "index",
  props: {
    url: {},
    w: {},
    h: {},
    color: { default: "" },
    bgColor: { default: "" },
    padding: { default: "" },
    radius: { default: "" },
    lockAspectRatio: { type: Boolean, default: !1 },
    position: { default: "left" },
    imgWidth: {},
    imgHeight: {}
  },
  setup(s) {
    const e = s;
    C((o) => ({
      ef6c025e: o.color,
      "58f6c20c": o.bgColor,
      "351ce7ff": o.padding,
      cc74ea38: o.radius
    }));
    let t = j(() => ({
      [e.position]: 0,
      width: e.imgWidth,
      height: e.imgHeight
    })), a = j(() => ({
      [e.position]: 0,
      width: e.lockAspectRatio ? e.w + "px" : void 0,
      height: e.lockAspectRatio ? e.h + "px" : void 0
    }));
    return (o, n) => (c(), f("div", fe, [
      x("div", {
        class: "img-scale-reduce",
        style: y(M(t))
      }, [
        x("img", {
          class: "img-scale",
          src: o.url,
          alt: "",
          style: y(M(a))
        }, null, 12, _e)
      ], 4)
    ]));
  }
});
const ve = /* @__PURE__ */ w(ge, [["__scopeId", "data-v-321d426b"]]), he = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ve
}, Symbol.toStringTag, { value: "Module" }));
let be = /* @__PURE__ */ Object.assign({ "./Group/index.vue": q, "./Image/index.vue": Q, "./Picture/index.vue": ee, "./Shape/index.vue": oe, "./Text/index.vue": se, "./icon-svg/index.vue": pe, "./img-scale/index.vue": he, "./preview/index.vue": F });
const A = (s) => be[`./${s}/index.vue`], we = h({
  name: "dragPannelPreview"
}), ye = /* @__PURE__ */ h({
  ...we,
  props: {
    pannel: {},
    modelValue: { default: () => ({}) },
    disabled: { type: Boolean, default: !1 },
    parentWidth: { default: 0 }
  },
  emits: ["click"],
  setup(s, { emit: e }) {
    const t = s;
    let a = m(), o = m({});
    $(() => {
      p();
    });
    const n = (l) => ({
      width: l.w === "auto" ? l.w : l.w + "px",
      height: l.h === "auto" ? l.h : l.h + "px",
      fontSize: t.pannel.fontSize || l.fontSize,
      zIndex: l.z || "auto",
      transform: `translate(${l.x || 0}px, ${l.y || 0}px) rotate(${l.r || 0}deg)`
    }), p = async () => {
      await U();
      let l = {
        transformOrigin: "0% 0%",
        width: t.pannel.width + "px",
        height: t.pannel.height + "px",
        color: t.pannel.color,
        fontSize: t.pannel.fontSize,
        backgroundColor: t.pannel.bgColor
      }, v = a.value.getBoundingClientRect(), { endRate: u, translateX: _, translateY: b } = r(
        v.width,
        v.height
      );
      o.value = {
        ...l,
        // width: right - left + "px",
        // height: bottom - top + "px",
        transform: `translate(${_}px, ${b}px) scale(${u})`
      };
    }, r = (l, v) => {
      let u = l / t.pannel.width, _ = v / t.pannel.height, b = u > _ ? _ : u, z = u <= _ ? 0 : l * b, O = _ <= u ? 0 : v * b;
      return {
        endRate: b,
        translateX: z > 0 ? l / 2 - t.pannel.width / 2 * b : z,
        translateY: O > 0 ? v / 2 - t.pannel.height / 2 * b : O
      };
    }, i = (l) => A(l).default, d = (l) => {
      l.self.click && (console.log("click"), e("click", l));
    }, g = (l) => E(l, t.modelValue);
    return (l, v) => (c(), f("div", {
      ref_key: "wrapRef",
      ref: a,
      class: "drag-editor-preivew-wrap"
    }, [
      x("div", {
        class: k({ "drag-editor-preivew": !0 }),
        style: y(M(o))
      }, [
        (c(!0), f(I, null, T(l.pannel.components, (u) => (c(), f("div", {
          class: "preview-item-wrap",
          style: y(n(u))
        }, [
          (c(), B(P(i(u.self.name)), H({
            data: u,
            h: u.h,
            w: u.w
          }, g(u), {
            onClickCapture: W((_) => d(u), ["self"]),
            modelValue: l.modelValue[u.self.modelValue],
            "onUpdate:modelValue": (_) => l.modelValue[u.self.modelValue] = _,
            defaultModelValue: u.self.defaultModelValue,
            "onUpdate:defaultModelValue": (_) => u.self.defaultModelValue = _,
            groupModel: l.modelValue,
            disabled: !0
          }), null, 16, ["data", "h", "w", "onClickCapture", "modelValue", "onUpdate:modelValue", "defaultModelValue", "onUpdate:defaultModelValue", "groupModel"]))
        ], 4))), 256))
      ], 4)
    ], 512));
  }
});
const S = /* @__PURE__ */ w(ye, [["__scopeId", "data-v-b2568ace"]]);
S.install = (s) => {
  s.component(S.name, S);
};
export {
  S as default
};
