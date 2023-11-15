(function(){"use strict";try{if(typeof document<"u"){var a=document.createElement("style");a.appendChild(document.createTextNode(".group-wrap[data-v-efe5d5a7]{position:absolute;left:0;top:0;width:100%;height:100%}.group-wrap .group-item[data-v-efe5d5a7]{position:absolute}.custom-image[data-v-51bcdfe3]{color:var(--35be3580);background-color:var(--7a3808fb);padding:var(--565e2eee);border-radius:var(--ca4fabd6)}.shap-wrap[data-v-400016bf]{word-break:break-all;box-sizing:border-box;height:100%;color:var(--34b705a8);background-color:var(--c38521ba);padding:var(--7a639516);border-radius:var(--7af95eed);font-size:var(--8c7b2eea);border:var(--4a7ad51c)}.text-wrap[data-v-bbe2f60c]{color:var(--b6157f86);background-color:var(--10514f10);padding:var(--5805032a);border-radius:var(--128276f8);font-size:var(--d934ac54);border:var(--07a60bf1);word-break:break-all;white-space:var(--5fa8c5be);overflow:var(--06479661);text-overflow:var(--254482a4);text-align:var(--64e5a8e4);width:100%;height:100%;box-sizing:border-box}.icon-wrap[data-v-6b52c610]{color:var(--46bf371c);stroke:var(--46bf371c);fill:var(--5a1a592f);background-color:var(--1d6b7926);padding:var(--651f2d40);border-radius:var(--5f884d3a);font-size:var(--6f5fc4fe)}.icon-wrap.color-self[data-v-6b52c610] *{color:var(--46bf371c);stroke:var(--46bf371c);fill:var(--5a1a592f)}.img-scale-wrap[data-v-c83ce927]{position:relative;width:100%;height:100%;color:var(--806595a2);background-color:var(--86f44e2c);padding:var(--cea80246);border-radius:var(--52a92046)}.img-scale-wrap .img-scale-reduce[data-v-c83ce927]{position:absolute;overflow:hidden;width:100%;height:100%;transition:.1s}.img-scale-wrap .img-scale[data-v-c83ce927]{display:block;position:absolute;width:100%;height:100%;-webkit-user-drag:none}.drag-editor-preivew-wrap[data-v-8f50c5fc]{width:100%;height:100%;min-width:200px;min-height:200px}.drag-editor-preivew[data-v-8f50c5fc]{width:100%;height:100%}.drag-editor-preivew[data-v-8f50c5fc] .handle{display:none!important}.preview-item-wrap[data-v-8f50c5fc]{touch-action:none;position:absolute;box-sizing:border-box;-webkit-user-select:none;user-select:none}.preview-item-wrap img[data-v-8f50c5fc]{-webkit-user-drag:none}.dycomponent-class[hide][data-v-8f50c5fc]{display:none}")),document.head.appendChild(a)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
import { defineComponent as h, openBlock as p, createElementBlock as g, Fragment as I, renderList as T, normalizeStyle as m, createBlock as B, resolveDynamicComponent as P, mergeProps as H, useCssVars as C, watch as S, onMounted as x, ref as w, toDisplayString as R, unref as M, normalizeClass as k, nextTick as U, computed as j, createElementVNode as $, withModifiers as A } from "vue";
const F = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
      e[o] === void 0 && e[o] === null && (n = !0);
      break;
  }
  let u = {};
  return n && (u = N(f, e)), {
    ...t,
    ...u
  };
}, N = (s, e) => {
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
}, X = { class: "group-wrap" }, Y = ["a"], D = /* @__PURE__ */ h({
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
    return (r, f) => (p(), g("div", X, [
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
      ], 12, Y))), 256))
    ]));
  }
});
const y = (s, e) => {
  const t = s.__vccOpts || s;
  for (const [a, o] of e)
    t[a] = o;
  return t;
}, L = /* @__PURE__ */ y(D, [["__scopeId", "data-v-efe5d5a7"]]), q = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
    }, null, 8, G));
  }
});
const K = /* @__PURE__ */ y(J, [["__scopeId", "data-v-51bcdfe3"]]), Q = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
}), ee = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Z
}, Symbol.toStringTag, { value: "Module" })), te = { class: "shap-wrap" }, ae = /* @__PURE__ */ h({
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
    })), (e, t) => (p(), g("div", te, R(e.modelValue || e.defaultModelValue), 1));
  }
});
const le = /* @__PURE__ */ y(ae, [["__scopeId", "data-v-400016bf"]]), oe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
      b6157f86: d.color,
      "10514f10": d.bgColor,
      "5805032a": d.padding,
      "128276f8": d.radius,
      d934ac54: d.fontSize,
      "07a60bf1": d.borderColor,
      "5fa8c5be": d.noWordWrap ? "nowrap" : "",
      "06479661": d.overEllipsis ? "hidden" : "auto",
      "254482a4": d.overEllipsis ? "ellipsis" : "unset",
      "64e5a8e4": d.align ? d.align : "left"
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
    }, R(d.modelValue || d.defaultModelValue), 43, ne));
  }
});
const de = /* @__PURE__ */ y(re, [["__scopeId", "data-v-bbe2f60c"]]), se = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
    })), (e, t) => (p(), g("div", {
      class: k({ "icon-wrap": !0, "color-self": e.iconUseSelfColor }),
      innerHTML: e.url
    }, null, 10, ue));
  }
});
const ce = /* @__PURE__ */ y(ie, [["__scopeId", "data-v-6b52c610"]]), pe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
    return (o, r) => (p(), g("div", fe, [
      $("div", {
        class: "img-scale-reduce",
        style: m(M(t))
      }, [
        $("img", {
          class: "img-scale",
          src: o.url,
          alt: "",
          style: m(M(a))
        }, null, 12, _e)
      ], 4)
    ]));
  }
});
const ve = /* @__PURE__ */ y(ge, [["__scopeId", "data-v-c83ce927"]]), he = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ve
}, Symbol.toStringTag, { value: "Module" }));
let be = /* @__PURE__ */ Object.assign({ "./Group/index.vue": q, "./Image/index.vue": Q, "./Picture/index.vue": ee, "./Shape/index.vue": oe, "./Text/index.vue": se, "./icon-svg/index.vue": pe, "./img-scale/index.vue": he, "./preview/index.vue": F });
const W = (s) => be[`./${s}/index.vue`], ye = h({
  name: "dragPannelPreview"
}), me = /* @__PURE__ */ h({
  ...ye,
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
            onClickCapture: A((v) => d(i), ["self"]),
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
const V = /* @__PURE__ */ y(me, [["__scopeId", "data-v-8f50c5fc"]]);
V.install = (s) => {
  s.component(V.name, V);
};
export {
  V as default
};
