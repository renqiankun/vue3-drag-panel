(function(){"use strict";try{if(typeof document<"u"){var a=document.createElement("style");a.appendChild(document.createTextNode(".group-wrap[data-v-efe5d5a7]{position:absolute;left:0;top:0;width:100%;height:100%}.group-wrap .group-item[data-v-efe5d5a7]{position:absolute}.custom-image[data-v-51bcdfe3]{color:var(--35be3580);background-color:var(--7a3808fb);padding:var(--565e2eee);border-radius:var(--ca4fabd6)}.shap-wrap[data-v-400016bf]{word-break:break-all;box-sizing:border-box;height:100%;color:var(--34b705a8);background-color:var(--c38521ba);padding:var(--7a639516);border-radius:var(--7af95eed);font-size:var(--8c7b2eea);border:var(--4a7ad51c)}.text-wrap[data-v-8f822377]{color:var(--47b5a944);background-color:var(--27bcc882);padding:var(--6f707c9c);border-radius:var(--7061a25e);font-size:var(--2863cf6f);border:var(--7aff53b8);word-break:break-all;white-space:var(--3b2782fa);overflow:var(--514c5593);text-overflow:var(--71345cf5);text-align:var(--70e03432);width:100%;height:100%;box-sizing:border-box}.icon-wrap[data-v-6b52c610]{color:var(--46bf371c);stroke:var(--46bf371c);fill:var(--5a1a592f);background-color:var(--1d6b7926);padding:var(--651f2d40);border-radius:var(--5f884d3a);font-size:var(--6f5fc4fe)}.icon-wrap.color-self[data-v-6b52c610] *{color:var(--46bf371c);stroke:var(--46bf371c);fill:var(--5a1a592f)}.img-scale-wrap[data-v-c83ce927]{position:relative;width:100%;height:100%;color:var(--806595a2);background-color:var(--86f44e2c);padding:var(--cea80246);border-radius:var(--52a92046)}.img-scale-wrap .img-scale-reduce[data-v-c83ce927]{position:absolute;overflow:hidden;width:100%;height:100%;transition:.1s}.img-scale-wrap .img-scale[data-v-c83ce927]{display:block;position:absolute;width:100%;height:100%;-webkit-user-drag:none}.drag-editor-preivew-wrap[data-v-b9ca1a47]{width:100%;height:100%;min-width:200px;min-height:200px}.drag-editor-preivew[data-v-b9ca1a47]{width:100%;height:100%}.drag-editor-preivew[data-v-b9ca1a47] .handle{display:none!important}.preview-item-wrap[data-v-b9ca1a47]{touch-action:none;position:absolute;box-sizing:border-box;-webkit-user-select:none;user-select:none}.preview-item-wrap img[data-v-b9ca1a47]{-webkit-user-drag:none}.dycomponent-class[hide][data-v-b9ca1a47]{display:none}")),document.head.appendChild(a)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
import { defineComponent as h, openBlock as p, createElementBlock as g, Fragment as I, renderList as T, normalizeStyle as m, createBlock as B, resolveDynamicComponent as P, mergeProps as H, useCssVars as C, watch as S, onMounted as x, ref as w, toDisplayString as R, unref as M, normalizeClass as k, nextTick as U, computed as j, createElementVNode as $ } from "vue";
const A = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get default() {
    return V;
  }
}, Symbol.toStringTag, { value: "Module" })), E = (s, e) => {
  let t = s.self, a = t.activeValue, o = t.prop, r = t.activeMode, f = t.activeMap;
  if (!o || !r || !f)
    return t;
  let n = !1;
  switch (r) {
    case "大于":
      e[o] > a && (n = !0);
      break;
    case "小于":
      e[o] < a && (n = !0);
      break;
    case "等于":
      e[o] == a && (n = !0);
      break;
    case "不等于":
      e[o] != a && (n = !0);
      break;
    case "大于等于":
      e[o] >= a && (n = !0);
      break;
    case "小于等于":
      e[o] < a && (n = !0);
      break;
    case "存在":
      e[o] !== void 0 && e[o] !== null && (n = !0);
      break;
    case "不存在":
      (e[o] === void 0 || e[o] === null) && (n = !0);
      break;
  }
  let u = {};
  return n && (u = F(f, e)), {
    ...t,
    ...u
  };
}, F = (s, e) => {
  var r, f;
  let t = {}, a = /\$\{(.*?)\}.*/g;
  try {
    t = JSON.parse(s);
    for (var o in t) {
      let n = t[o];
      if (a.test(n)) {
        let u = /\$\{(.*?)\}/g, d = ((r = n.match(u)) == null ? void 0 : r[0]) ?? "", c = n.split(d), l = d.replace(/[\$|{|}]/g, ""), _ = (e == null ? void 0 : e[l]) ?? "";
        t[o] = (f = c.join) == null ? void 0 : f.call(c, _);
      }
    }
  } catch (n) {
    console.error("解析 activeMap 失败", n);
  }
  return t;
}, N = { class: "group-wrap" }, X = ["a"], Y = /* @__PURE__ */ h({
  __name: "index",
  props: {
    data: {},
    modelValue: { default: () => ({}) },
    groupModel: { default: () => ({}) },
    disabled: { type: Boolean }
  },
  setup(s) {
    const e = s, t = (r) => W(r).default, a = (r) => ({
      width: r.w == "auto" ? r.w : r.w + "px",
      height: r.h == "auto" ? r.h : r.h + "px",
      transform: `translate(${r.x}px, ${r.y}px) rotate(${r.r || 0}deg)`
    }), o = (r) => E(r, e.groupModel);
    return (r, f) => (p(), g("div", N, [
      (p(!0), g(I, null, T(r.data.group, (n) => (p(), g("div", {
        a: n.active,
        class: "group-item",
        style: m(a(n))
      }, [
        (p(), B(P(t(n.self.name)), H({
          data: n,
          h: n.h,
          w: n.w
        }, o(n), {
          modelValue: r.groupModel[n.self.modelValue],
          "onUpdate:modelValue": (u) => r.groupModel[n.self.modelValue] = u,
          defaultModelValue: n.self.defaultModelValue,
          "onUpdate:defaultModelValue": (u) => n.self.defaultModelValue = u,
          disabled: !0
        }), null, 16, ["data", "h", "w", "modelValue", "onUpdate:modelValue", "defaultModelValue", "onUpdate:defaultModelValue"]))
      ], 12, X))), 256))
    ]));
  }
});
const y = (s, e) => {
  const t = s.__vccOpts || s;
  for (const [a, o] of e)
    t[a] = o;
  return t;
}, D = /* @__PURE__ */ y(Y, [["__scopeId", "data-v-efe5d5a7"]]), L = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: D
}, Symbol.toStringTag, { value: "Module" })), q = ["width", "height", "src"], G = /* @__PURE__ */ h({
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
    })), S(
      () => [e.w, e.h],
      () => t()
    ), x(() => {
      t();
    });
    const t = () => {
    };
    return (a, o) => (p(), g("img", {
      class: "custom-image",
      width: a.w,
      height: a.h,
      src: a.url,
      alt: ""
    }, null, 8, q));
  }
});
const J = /* @__PURE__ */ y(G, [["__scopeId", "data-v-51bcdfe3"]]), K = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: J
}, Symbol.toStringTag, { value: "Module" })), Q = /* @__PURE__ */ h({
  __name: "index",
  props: {
    url: {},
    w: {},
    h: {},
    flip: {}
  },
  setup(s) {
    const e = s;
    let t = w(), a = "", o = !0, r = "";
    S(() => [e.w, e.h], () => f()), S(() => {
      var u, d;
      return [(u = e.flip) == null ? void 0 : u.horizontal, (d = e.flip) == null ? void 0 : d.vertical];
    }, () => n()), x(() => {
      a = t.value.getContext("2d"), f();
    });
    const f = () => {
      let u = e.w, d = e.h;
      t.value.width = u, t.value.height = d, o ? (o = !1, r = document.createElement("img"), r.src = e.url, r.onload = () => {
        a.drawImage(r, 0, 0, u, d), n();
      }) : n();
    }, n = () => {
      const { vertical: u, horizontal: d } = e.flip ?? {};
      let c = e.w, l = e.h;
      const _ = d ? -1 : 1, i = u ? -1 : 1;
      a.clearRect(0, 0, c, l), a.translate(c / 2 - c * _ / 2, l / 2 - l * i / 2), a.scale(_, i), a.drawImage(r, 0, 0, c, l), a.setTransform(1, 0, 0, 1, 0, 0);
    };
    return (u, d) => (p(), g("canvas", {
      ref_key: "canvas",
      ref: t
    }, null, 512));
  }
}), Z = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Q
}, Symbol.toStringTag, { value: "Module" })), ee = { class: "shap-wrap" }, te = /* @__PURE__ */ h({
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
      "34b705a8": e.color,
      c38521ba: e.bgColor,
      "7a639516": e.padding,
      "7af95eed": e.radius,
      "8c7b2eea": e.fontSize,
      "4a7ad51c": e.borderColor
    })), (e, t) => (p(), g("div", ee, R(e.modelValue || e.defaultModelValue), 1));
  }
});
const ae = /* @__PURE__ */ y(te, [["__scopeId", "data-v-400016bf"]]), le = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ae
}, Symbol.toStringTag, { value: "Module" })), oe = ["contenteditable"], ne = /* @__PURE__ */ h({
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
    align: {},
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
      "47b5a944": d.color,
      "27bcc882": d.bgColor,
      "6f707c9c": d.padding,
      "7061a25e": d.radius,
      "2863cf6f": d.fontSize,
      "7aff53b8": d.borderColor,
      "3b2782fa": d.noWordWrap ? "nowrap" : "",
      "514c5593": d.overEllipsis ? "hidden" : "visible",
      "71345cf5": d.overEllipsis ? "ellipsis" : "unset",
      "70e03432": d.align ? d.align : "left"
    }));
    let a = w(!1), o = w();
    const r = async () => {
      t.disabled || (a.value = !0, f(o.value), await U(), o.value.focus());
    }, f = (d) => {
      const c = window.getSelection(), l = document.createRange();
      l.selectNodeContents(d), c.removeAllRanges(), c.addRange(l);
    }, n = () => {
      a.value = !1;
    }, u = (d) => {
      t.hasModelValue && e("update:modelValue", d.target.innerText), e("update:defaultModelValue", d.target.innerText);
    };
    return (d, c) => (p(), g("div", {
      contenteditable: M(a),
      onBlur: n,
      onInput: u,
      ref_key: "text",
      ref: o,
      class: k({ "text-wrap": !0, "can-edit": M(a) }),
      onDblclick: r
    }, R(d.modelValue || d.defaultModelValue), 43, oe));
  }
});
const re = /* @__PURE__ */ y(ne, [["__scopeId", "data-v-8f822377"]]), de = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: re
}, Symbol.toStringTag, { value: "Module" })), se = ["innerHTML"], ue = /* @__PURE__ */ h({
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
    })), (e, t) => (p(), g("div", {
      class: k({ "icon-wrap": !0, "color-self": e.iconUseSelfColor }),
      innerHTML: e.url
    }, null, 10, se));
  }
});
const ie = /* @__PURE__ */ y(ue, [["__scopeId", "data-v-6b52c610"]]), ce = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ie
}, Symbol.toStringTag, { value: "Module" })), pe = { class: "img-scale-wrap" }, fe = ["src"], _e = /* @__PURE__ */ h({
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
      "806595a2": o.color,
      "86f44e2c": o.bgColor,
      cea80246: o.padding,
      "52a92046": o.radius
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
    return (o, r) => (p(), g("div", pe, [
      $("div", {
        class: "img-scale-reduce",
        style: m(M(t))
      }, [
        $("img", {
          class: "img-scale",
          src: o.url,
          alt: "",
          style: m(M(a))
        }, null, 12, fe)
      ], 4)
    ]));
  }
});
const ge = /* @__PURE__ */ y(_e, [["__scopeId", "data-v-c83ce927"]]), ve = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ge
}, Symbol.toStringTag, { value: "Module" }));
let he = /* @__PURE__ */ Object.assign({ "./Group/index.vue": L, "./Image/index.vue": K, "./Picture/index.vue": Z, "./Shape/index.vue": le, "./Text/index.vue": de, "./icon-svg/index.vue": ce, "./img-scale/index.vue": ve, "./preview/index.vue": A });
const W = (s) => he[`./${s}/index.vue`], be = h({
  name: "dragPannelPreview"
}), ye = /* @__PURE__ */ h({
  ...be,
  props: {
    pannel: {},
    modelValue: { default: () => ({}) },
    disabled: { type: Boolean, default: !1 },
    parentWidth: { default: 0 }
  },
  emits: ["click"],
  setup(s, { emit: e }) {
    const t = s;
    let a = w(), o = w({});
    x(() => {
      f();
    });
    const r = (l) => ({
      width: l.w === "auto" ? l.w : l.w + "px",
      height: l.h === "auto" ? l.h : l.h + "px",
      fontSize: t.pannel.fontSize || l.fontSize,
      zIndex: l.z || "auto",
      transform: `translate(${l.x || 0}px, ${l.y || 0}px) rotate(${l.r || 0}deg)`
    }), f = async () => {
      await U();
      let l = {
        transformOrigin: "0% 0%",
        width: t.pannel.width + "px",
        height: t.pannel.height + "px",
        color: t.pannel.color,
        fontSize: t.pannel.fontSize,
        backgroundColor: t.pannel.bgColor
      }, _ = a.value.getBoundingClientRect(), { endRate: i, translateX: v, translateY: b } = n(
        _.width,
        _.height
      );
      o.value = {
        ...l,
        // width: right - left + "px",
        // height: bottom - top + "px",
        transform: `translate(${v}px, ${b}px) scale(${i})`
      };
    }, n = (l, _) => {
      let i = l / t.pannel.width, v = _ / t.pannel.height, b = i > v ? v : i, z = i <= v ? 0 : l * b, O = v <= i ? 0 : _ * b;
      return {
        endRate: b,
        translateX: z > 0 ? l / 2 - t.pannel.width / 2 * b : z,
        translateY: O > 0 ? _ / 2 - t.pannel.height / 2 * b : O
      };
    }, u = (l) => W(l).default, d = (l) => {
      l.self.click && (console.log("click"), e("click", l));
    }, c = (l) => E(l, t.modelValue);
    return (l, _) => (p(), g("div", {
      ref_key: "wrapRef",
      ref: a,
      class: "drag-editor-preivew-wrap"
    }, [
      $("div", {
        class: k({ "drag-editor-preivew": !0 }),
        style: m(M(o))
      }, [
        (p(!0), g(I, null, T(l.pannel.components, (i) => (p(), g("div", {
          class: "preview-item-wrap",
          style: m(r(i))
        }, [
          (p(), B(P(u(i.self.name)), H({
            class: "dycomponent-class",
            data: i,
            h: i.h,
            w: i.w
          }, c(i), {
            onClickCapture: (v) => d(i),
            modelValue: l.modelValue[i.self.modelValue],
            "onUpdate:modelValue": (v) => l.modelValue[i.self.modelValue] = v,
            defaultModelValue: i.self.defaultModelValue,
            "onUpdate:defaultModelValue": (v) => i.self.defaultModelValue = v,
            groupModel: l.modelValue,
            disabled: !0
          }), null, 16, ["data", "h", "w", "onClickCapture", "modelValue", "onUpdate:modelValue", "defaultModelValue", "onUpdate:defaultModelValue", "groupModel"]))
        ], 4))), 256))
      ], 4)
    ], 512));
  }
});
const V = /* @__PURE__ */ y(ye, [["__scopeId", "data-v-b9ca1a47"]]);
V.install = (s) => {
  s.component(V.name, V);
};
export {
  V as default
};
