(function(){"use strict";try{if(typeof document<"u"){var a=document.createElement("style");a.appendChild(document.createTextNode(".group-wrap[data-v-efe5d5a7]{position:absolute;left:0;top:0;width:100%;height:100%}.group-wrap .group-item[data-v-efe5d5a7]{position:absolute}.custom-image[data-v-51bcdfe3]{color:var(--35be3580);background-color:var(--7a3808fb);padding:var(--565e2eee);border-radius:var(--ca4fabd6)}.shap-wrap[data-v-7cddd7a5]{word-break:break-all;box-sizing:border-box;height:100%;color:var(--61fa260c);background-color:var(--55a66c16);padding:var(--9d5a2030);border-radius:var(--2a2a61db);font-size:var(--60be67f9);border:var(--71bc76ee)}.text-wrap[data-v-8f822377]{color:var(--47b5a944);background-color:var(--27bcc882);padding:var(--6f707c9c);border-radius:var(--7061a25e);font-size:var(--2863cf6f);border:var(--7aff53b8);word-break:break-all;white-space:var(--3b2782fa);overflow:var(--514c5593);text-overflow:var(--71345cf5);text-align:var(--70e03432);width:100%;height:100%;box-sizing:border-box}.icon-wrap[data-v-6b52c610]{color:var(--46bf371c);stroke:var(--46bf371c);fill:var(--5a1a592f);background-color:var(--1d6b7926);padding:var(--651f2d40);border-radius:var(--5f884d3a);font-size:var(--6f5fc4fe)}.icon-wrap.color-self[data-v-6b52c610] *{color:var(--46bf371c);stroke:var(--46bf371c);fill:var(--5a1a592f)}.img-scale-wrap[data-v-c83ce927]{position:relative;width:100%;height:100%;color:var(--806595a2);background-color:var(--86f44e2c);padding:var(--cea80246);border-radius:var(--52a92046)}.img-scale-wrap .img-scale-reduce[data-v-c83ce927]{position:absolute;overflow:hidden;width:100%;height:100%;transition:.1s}.img-scale-wrap .img-scale[data-v-c83ce927]{display:block;position:absolute;width:100%;height:100%;-webkit-user-drag:none}.drag-editor-preivew-wrap[data-v-c96c08cb]{width:100%;height:100%;min-width:200px;min-height:200px}.drag-editor-preivew[data-v-c96c08cb]{width:100%;height:100%}.drag-editor-preivew[data-v-c96c08cb] .handle{display:none!important}.preview-item-wrap[data-v-c96c08cb]{touch-action:none;position:absolute;box-sizing:border-box;-webkit-user-select:none;user-select:none}.preview-item-wrap img[data-v-c96c08cb]{-webkit-user-drag:none}.dycomponent-class[data-v-c96c08cb]{pointer-events:none}.dycomponent-class[hide][data-v-c96c08cb]{display:none}")),document.head.appendChild(a)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
import { defineComponent as b, openBlock as f, createElementBlock as v, Fragment as I, renderList as T, normalizeStyle as w, createBlock as B, resolveDynamicComponent as P, mergeProps as H, useCssVars as C, watch as x, onMounted as k, ref as m, unref as M, normalizeClass as V, toDisplayString as W, nextTick as R, computed as j, createElementVNode as $, withModifiers as A } from "vue";
const F = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get default() {
    return S;
  }
}, Symbol.toStringTag, { value: "Module" })), U = (s, e) => {
  let t = s.self, a = t.activeValue, o = t.prop, r = t.activeMode, _ = t.activeMap;
  if (!o || !r || !_)
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
  let c = {};
  return n && (c = N(_, e)), {
    ...t,
    ...c
  };
}, N = (s, e) => {
  var r, _;
  let t = {}, a = /\$\{(.*?)\}.*/g;
  try {
    t = JSON.parse(s);
    for (var o in t) {
      let n = t[o];
      if (a.test(n)) {
        let c = /\$\{(.*?)\}/g, d = ((r = n.match(c)) == null ? void 0 : r[0]) ?? "", p = n.split(d), l = d.replace(/[\$|{|}]/g, ""), i = (e == null ? void 0 : e[l]) ?? "";
        t[o] = (_ = p.join) == null ? void 0 : _.call(p, i);
      }
    }
  } catch (n) {
    console.error("解析 activeMap 失败", n);
  }
  return t;
}, X = { class: "group-wrap" }, Y = ["a"], D = /* @__PURE__ */ b({
  __name: "index",
  props: {
    data: {},
    modelValue: { default: () => ({}) },
    groupModel: { default: () => ({}) },
    disabled: { type: Boolean }
  },
  setup(s) {
    const e = s, t = (r) => E(r).default, a = (r) => ({
      width: r.w == "auto" ? r.w : r.w + "px",
      height: r.h == "auto" ? r.h : r.h + "px",
      transform: `translate(${r.x}px, ${r.y}px) rotate(${r.r || 0}deg)`
    }), o = (r) => U(r, e.groupModel);
    return (r, _) => (f(), v("div", X, [
      (f(!0), v(I, null, T(r.data.group, (n) => (f(), v("div", {
        a: n.active,
        class: "group-item",
        style: w(a(n))
      }, [
        (f(), B(P(t(n.self.name)), H({
          data: n,
          h: n.h,
          w: n.w
        }, o(n), {
          modelValue: r.groupModel[n.self.modelValue],
          "onUpdate:modelValue": (c) => r.groupModel[n.self.modelValue] = c,
          defaultModelValue: n.self.defaultModelValue,
          "onUpdate:defaultModelValue": (c) => n.self.defaultModelValue = c,
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
}, Symbol.toStringTag, { value: "Module" })), G = ["width", "height", "src"], J = /* @__PURE__ */ b({
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
    })), x(
      () => [e.w, e.h],
      () => t()
    ), k(() => {
      t();
    });
    const t = () => {
    };
    return (a, o) => (f(), v("img", {
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
}, Symbol.toStringTag, { value: "Module" })), Z = /* @__PURE__ */ b({
  __name: "index",
  props: {
    url: {},
    w: {},
    h: {},
    flip: {}
  },
  setup(s) {
    const e = s;
    let t = m(), a = "", o = !0, r = "";
    x(() => [e.w, e.h], () => _()), x(() => {
      var c, d;
      return [(c = e.flip) == null ? void 0 : c.horizontal, (d = e.flip) == null ? void 0 : d.vertical];
    }, () => n()), k(() => {
      a = t.value.getContext("2d"), _();
    });
    const _ = () => {
      let c = e.w, d = e.h;
      t.value.width = c, t.value.height = d, o ? (o = !1, r = document.createElement("img"), r.src = e.url, r.onload = () => {
        a.drawImage(r, 0, 0, c, d), n();
      }) : n();
    }, n = () => {
      const { vertical: c, horizontal: d } = e.flip ?? {};
      let p = e.w, l = e.h;
      const i = d ? -1 : 1, u = c ? -1 : 1;
      a.clearRect(0, 0, p, l), a.translate(p / 2 - p * i / 2, l / 2 - l * u / 2), a.scale(i, u), a.drawImage(r, 0, 0, p, l), a.setTransform(1, 0, 0, 1, 0, 0);
    };
    return (c, d) => (f(), v("canvas", {
      ref_key: "canvas",
      ref: t
    }, null, 512));
  }
}), ee = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Z
}, Symbol.toStringTag, { value: "Module" })), te = { class: "shap-wrap" }, ae = /* @__PURE__ */ b({
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
      "61fa260c": e.color,
      "55a66c16": e.bgColor,
      "9d5a2030": e.padding,
      "2a2a61db": e.radius,
      "60be67f9": e.fontSize,
      "71bc76ee": e.borderColor
    })), (e, t) => (f(), v("div", te));
  }
});
const le = /* @__PURE__ */ y(ae, [["__scopeId", "data-v-7cddd7a5"]]), oe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: le
}, Symbol.toStringTag, { value: "Module" })), ne = ["contenteditable"], re = /* @__PURE__ */ b({
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
    let a = m(!1), o = m();
    const r = async () => {
      t.disabled || (a.value = !0, _(o.value), await R(), o.value.focus());
    }, _ = (d) => {
      const p = window.getSelection(), l = document.createRange();
      l.selectNodeContents(d), p.removeAllRanges(), p.addRange(l);
    }, n = () => {
      a.value = !1;
    }, c = (d) => {
      t.hasModelValue && e("update:modelValue", d.target.innerText), e("update:defaultModelValue", d.target.innerText);
    };
    return (d, p) => (f(), v("div", {
      contenteditable: M(a),
      onBlur: n,
      onInput: c,
      ref_key: "text",
      ref: o,
      class: V({ "text-wrap": !0, "can-edit": M(a) }),
      onDblclick: r
    }, W(d.modelValue || d.defaultModelValue), 43, ne));
  }
});
const de = /* @__PURE__ */ y(re, [["__scopeId", "data-v-8f822377"]]), se = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: de
}, Symbol.toStringTag, { value: "Module" })), ue = ["innerHTML"], ce = /* @__PURE__ */ b({
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
    })), (e, t) => (f(), v("div", {
      class: V({ "icon-wrap": !0, "color-self": e.iconUseSelfColor }),
      innerHTML: e.url
    }, null, 10, ue));
  }
});
const ie = /* @__PURE__ */ y(ce, [["__scopeId", "data-v-6b52c610"]]), pe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ie
}, Symbol.toStringTag, { value: "Module" })), fe = { class: "img-scale-wrap" }, _e = ["src"], ge = /* @__PURE__ */ b({
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
    return (o, r) => (f(), v("div", fe, [
      $("div", {
        class: "img-scale-reduce",
        style: w(M(t))
      }, [
        $("img", {
          class: "img-scale",
          src: o.url,
          alt: "",
          style: w(M(a))
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
const E = (s) => be[`./${s}/index.vue`], ye = ["onClick"], we = b({
  name: "dragPannelPreview"
}), me = /* @__PURE__ */ b({
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
    k(() => {
      _();
    });
    const r = (l) => ({
      width: l.w === "auto" ? l.w : l.w + "px",
      height: l.h === "auto" ? l.h : l.h + "px",
      fontSize: t.pannel.fontSize || l.fontSize,
      zIndex: l.z || "auto",
      transform: `translate(${l.x || 0}px, ${l.y || 0}px) rotate(${l.r || 0}deg)`
    }), _ = async () => {
      await R();
      let l = {
        transformOrigin: "0% 0%",
        width: t.pannel.width + "px",
        height: t.pannel.height + "px",
        color: t.pannel.color,
        fontSize: t.pannel.fontSize,
        backgroundColor: t.pannel.bgColor
      }, i = a.value.getBoundingClientRect(), { endRate: u, translateX: h, translateY: g } = n(
        i.width,
        i.height
      );
      o.value = {
        ...l,
        // width: right - left + "px",
        // height: bottom - top + "px",
        transform: `translate(${h}px, ${g}px) scale(${u})`
      };
    }, n = (l, i) => {
      let u = l / t.pannel.width, h = i / t.pannel.height, g = u > h ? h : u, z = u <= h ? 0 : l * g, O = h <= u ? 0 : i * g;
      return {
        endRate: g,
        translateX: z > 0 ? l / 2 - t.pannel.width / 2 * g : z,
        translateY: O > 0 ? i / 2 - t.pannel.height / 2 * g : O
      };
    }, c = (l) => E(l).default, d = (l, i) => {
      i.self.click && (console.log("click", l.target), e("click", { event: l, item: i }));
    }, p = (l) => U(l, t.modelValue);
    return (l, i) => (f(), v("div", {
      ref_key: "wrapRef",
      ref: a,
      class: "drag-editor-preivew-wrap"
    }, [
      $("div", {
        class: V({ "drag-editor-preivew": !0 }),
        style: w(M(o))
      }, [
        (f(!0), v(I, null, T(l.pannel.components, (u) => {
          var h;
          return f(), v("div", {
            class: V({ "preview-item-wrap": !0, "click-able": u.self.click }),
            style: w(r(u)),
            onClick: A((g) => d(g, u), ["self"])
          }, [
            (f(), B(P(c(u.self.name)), H({
              class: { "dycomponent-class": !0 },
              data: u,
              h: u.h,
              w: u.w
            }, p(u), {
              modelValue: l.modelValue[u.self.modelValue],
              "onUpdate:modelValue": (g) => l.modelValue[u.self.modelValue] = g,
              defaultModelValue: u.self.defaultModelValue,
              "onUpdate:defaultModelValue": (g) => u.self.defaultModelValue = g,
              groupModel: l.modelValue,
              disabled: !0,
              id: ((h = u.self) == null ? void 0 : h.id) || ""
            }), null, 16, ["data", "h", "w", "modelValue", "onUpdate:modelValue", "defaultModelValue", "onUpdate:defaultModelValue", "groupModel", "id"]))
          ], 14, ye);
        }), 256))
      ], 4)
    ], 512));
  }
});
const S = /* @__PURE__ */ y(me, [["__scopeId", "data-v-c96c08cb"]]);
S.install = (s) => {
  s.component(S.name, S);
};
export {
  S as default
};
