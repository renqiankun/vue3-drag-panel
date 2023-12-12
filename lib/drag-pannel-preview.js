(function(){"use strict";try{if(typeof document<"u"){var a=document.createElement("style");a.appendChild(document.createTextNode(".group-wrap[data-v-efe5d5a7]{position:absolute;left:0;top:0;width:100%;height:100%}.group-wrap .group-item[data-v-efe5d5a7]{position:absolute}.custom-image[data-v-51bcdfe3]{color:var(--35be3580);background-color:var(--7a3808fb);padding:var(--565e2eee);border-radius:var(--ca4fabd6)}.shap-wrap[data-v-7cddd7a5]{word-break:break-all;box-sizing:border-box;height:100%;color:var(--61fa260c);background-color:var(--55a66c16);padding:var(--9d5a2030);border-radius:var(--2a2a61db);font-size:var(--60be67f9);border:var(--71bc76ee)}.text-wrap[data-v-8f822377]{color:var(--47b5a944);background-color:var(--27bcc882);padding:var(--6f707c9c);border-radius:var(--7061a25e);font-size:var(--2863cf6f);border:var(--7aff53b8);word-break:break-all;white-space:var(--3b2782fa);overflow:var(--514c5593);text-overflow:var(--71345cf5);text-align:var(--70e03432);width:100%;height:100%;box-sizing:border-box}.icon-wrap[data-v-6b52c610]{color:var(--46bf371c);stroke:var(--46bf371c);fill:var(--5a1a592f);background-color:var(--1d6b7926);padding:var(--651f2d40);border-radius:var(--5f884d3a);font-size:var(--6f5fc4fe)}.icon-wrap.color-self[data-v-6b52c610] *{color:var(--46bf371c);stroke:var(--46bf371c);fill:var(--5a1a592f)}.img-scale-wrap[data-v-c83ce927]{position:relative;width:100%;height:100%;color:var(--806595a2);background-color:var(--86f44e2c);padding:var(--cea80246);border-radius:var(--52a92046)}.img-scale-wrap .img-scale-reduce[data-v-c83ce927]{position:absolute;overflow:hidden;width:100%;height:100%;transition:.1s}.img-scale-wrap .img-scale[data-v-c83ce927]{display:block;position:absolute;width:100%;height:100%;-webkit-user-drag:none}.drag-editor-preivew-wrap[data-v-450a4fac]{width:100%;height:100%;min-width:200px;min-height:200px}.drag-editor-preivew[data-v-450a4fac]{width:100%;height:100%}.drag-editor-preivew[data-v-450a4fac] .handle{display:none!important}.preview-item-wrap[data-v-450a4fac]{touch-action:none;position:absolute;box-sizing:border-box;-webkit-user-select:none;user-select:none}.preview-item-wrap img[data-v-450a4fac]{-webkit-user-drag:none}.dycomponent-class[data-v-450a4fac]{pointer-events:none}.dycomponent-class[hide][data-v-450a4fac]{display:none}")),document.head.appendChild(a)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
import { defineComponent as y, openBlock as _, createElementBlock as v, Fragment as B, renderList as H, normalizeStyle as m, createBlock as P, resolveDynamicComponent as R, mergeProps as U, useCssVars as S, watch as x, onMounted as z, ref as M, unref as C, normalizeClass as V, toDisplayString as D, nextTick as E, computed as I, createElementVNode as $, withModifiers as T } from "vue";
const F = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get default() {
    return k;
  }
}, Symbol.toStringTag, { value: "Module" })), W = (s, e) => {
  let t = s.self, l = t.activeValue, a = t.prop, r = t.activeMode, g = t.activeMap;
  if (!a || !r || !g)
    return t;
  let o = !1;
  switch (r) {
    case "大于":
      e[a] > l && (o = !0);
      break;
    case "小于":
      e[a] < l && (o = !0);
      break;
    case "等于":
      e[a] == l && (o = !0);
      break;
    case "不等于":
      e[a] != l && (o = !0);
      break;
    case "大于等于":
      e[a] >= l && (o = !0);
      break;
    case "小于等于":
      e[a] < l && (o = !0);
      break;
    case "存在":
      e[a] !== void 0 && e[a] !== null && (o = !0);
      break;
    case "不存在":
      (e[a] === void 0 || e[a] === null) && (o = !0);
      break;
  }
  let u = {};
  return o && (u = N(g, e)), {
    ...t,
    ...u
  };
}, N = (s, e) => {
  var r, g;
  let t = {}, l = /\$\{(.*?)\}.*/g;
  try {
    t = JSON.parse(s);
    for (var a in t) {
      let o = t[a];
      if (l.test(o)) {
        let u = /\$\{(.*?)\}/g, d = ((r = o.match(u)) == null ? void 0 : r[0]) ?? "", f = o.split(d), h = d.replace(/[\$|{|}]/g, ""), n = (e == null ? void 0 : e[h]) ?? "";
        t[a] = (g = f.join) == null ? void 0 : g.call(f, n);
      }
    }
  } catch (o) {
    console.error("解析 activeMap 失败", o);
  }
  return t;
}, X = { class: "group-wrap" }, Y = ["a"], L = /* @__PURE__ */ y({
  __name: "index",
  props: {
    data: {},
    modelValue: { default: () => ({}) },
    groupModel: { default: () => ({}) },
    disabled: { type: Boolean }
  },
  setup(s) {
    const e = s, t = (r) => A(r).default, l = (r) => ({
      width: r.w == "auto" ? r.w : r.w + "px",
      height: r.h == "auto" ? r.h : r.h + "px",
      transform: `translate(${r.x}px, ${r.y}px) rotate(${r.r || 0}deg)`
    }), a = (r) => W(r, e.groupModel);
    return (r, g) => (_(), v("div", X, [
      (_(!0), v(B, null, H(r.data.group, (o) => (_(), v("div", {
        a: o.active,
        class: "group-item",
        style: m(l(o))
      }, [
        (_(), P(R(t(o.self.name)), U({
          data: o,
          h: o.h,
          w: o.w
        }, a(o), {
          modelValue: r.groupModel[o.self.modelValue],
          "onUpdate:modelValue": (u) => r.groupModel[o.self.modelValue] = u,
          defaultModelValue: o.self.defaultModelValue,
          "onUpdate:defaultModelValue": (u) => o.self.defaultModelValue = u,
          disabled: !0
        }), null, 16, ["data", "h", "w", "modelValue", "onUpdate:modelValue", "defaultModelValue", "onUpdate:defaultModelValue"]))
      ], 12, Y))), 256))
    ]));
  }
});
const w = (s, e) => {
  const t = s.__vccOpts || s;
  for (const [l, a] of e)
    t[l] = a;
  return t;
}, q = /* @__PURE__ */ w(L, [["__scopeId", "data-v-efe5d5a7"]]), G = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: q
}, Symbol.toStringTag, { value: "Module" })), J = ["width", "height", "src"], K = /* @__PURE__ */ y({
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
    S((l) => ({
      "35be3580": l.color,
      "7a3808fb": l.bgColor,
      "565e2eee": l.padding,
      ca4fabd6: l.radius
    })), x(
      () => [e.w, e.h],
      () => t()
    ), z(() => {
      t();
    });
    const t = () => {
    };
    return (l, a) => (_(), v("img", {
      class: "custom-image",
      width: l.w,
      height: l.h,
      src: l.url,
      alt: ""
    }, null, 8, J));
  }
});
const Q = /* @__PURE__ */ w(K, [["__scopeId", "data-v-51bcdfe3"]]), Z = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Q
}, Symbol.toStringTag, { value: "Module" })), ee = /* @__PURE__ */ y({
  __name: "index",
  props: {
    url: {},
    w: {},
    h: {},
    flip: {}
  },
  setup(s) {
    const e = s;
    let t = M(), l = "", a = !0, r = "";
    x(() => [e.w, e.h], () => g()), x(() => {
      var u, d;
      return [(u = e.flip) == null ? void 0 : u.horizontal, (d = e.flip) == null ? void 0 : d.vertical];
    }, () => o()), z(() => {
      l = t.value.getContext("2d"), g();
    });
    const g = () => {
      let u = e.w, d = e.h;
      t.value.width = u, t.value.height = d, a ? (a = !1, r = document.createElement("img"), r.src = e.url, r.onload = () => {
        l.drawImage(r, 0, 0, u, d), o();
      }) : o();
    }, o = () => {
      const { vertical: u, horizontal: d } = e.flip ?? {};
      let f = e.w, h = e.h;
      const n = d ? -1 : 1, i = u ? -1 : 1;
      l.clearRect(0, 0, f, h), l.translate(f / 2 - f * n / 2, h / 2 - h * i / 2), l.scale(n, i), l.drawImage(r, 0, 0, f, h), l.setTransform(1, 0, 0, 1, 0, 0);
    };
    return (u, d) => (_(), v("canvas", {
      ref_key: "canvas",
      ref: t
    }, null, 512));
  }
}), te = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ee
}, Symbol.toStringTag, { value: "Module" })), le = { class: "shap-wrap" }, ae = /* @__PURE__ */ y({
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
    return S((e) => ({
      "61fa260c": e.color,
      "55a66c16": e.bgColor,
      "9d5a2030": e.padding,
      "2a2a61db": e.radius,
      "60be67f9": e.fontSize,
      "71bc76ee": e.borderColor
    })), (e, t) => (_(), v("div", le));
  }
});
const oe = /* @__PURE__ */ w(ae, [["__scopeId", "data-v-7cddd7a5"]]), ne = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: oe
}, Symbol.toStringTag, { value: "Module" })), re = ["contenteditable"], de = /* @__PURE__ */ y({
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
    S((d) => ({
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
    let l = M(!1), a = M();
    const r = async () => {
      t.disabled || (l.value = !0, g(a.value), await E(), a.value.focus());
    }, g = (d) => {
      const f = window.getSelection(), h = document.createRange();
      h.selectNodeContents(d), f.removeAllRanges(), f.addRange(h);
    }, o = () => {
      l.value = !1;
    }, u = (d) => {
      t.hasModelValue && e("update:modelValue", d.target.innerText), e("update:defaultModelValue", d.target.innerText);
    };
    return (d, f) => (_(), v("div", {
      contenteditable: C(l),
      onBlur: o,
      onInput: u,
      ref_key: "text",
      ref: a,
      class: V({ "text-wrap": !0, "can-edit": C(l) }),
      onDblclick: r
    }, D(d.modelValue || d.defaultModelValue), 43, re));
  }
});
const se = /* @__PURE__ */ w(de, [["__scopeId", "data-v-8f822377"]]), ue = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: se
}, Symbol.toStringTag, { value: "Module" })), ce = ["innerHTML"], ie = /* @__PURE__ */ y({
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
    return S((e) => ({
      "46bf371c": e.color,
      "5a1a592f": e.fillColor,
      "1d6b7926": e.bgColor,
      "651f2d40": e.padding,
      "5f884d3a": e.radius,
      "6f5fc4fe": e.fontSize
    })), (e, t) => (_(), v("div", {
      class: V({ "icon-wrap": !0, "color-self": e.iconUseSelfColor }),
      innerHTML: e.url
    }, null, 10, ce));
  }
});
const pe = /* @__PURE__ */ w(ie, [["__scopeId", "data-v-6b52c610"]]), fe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: pe
}, Symbol.toStringTag, { value: "Module" })), _e = { class: "img-scale-wrap" }, ge = ["src"], ve = /* @__PURE__ */ y({
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
    S((a) => ({
      "806595a2": a.color,
      "86f44e2c": a.bgColor,
      cea80246: a.padding,
      "52a92046": a.radius
    }));
    let t = I(() => ({
      [e.position]: 0,
      width: e.imgWidth,
      height: e.imgHeight
    })), l = I(() => ({
      [e.position]: 0,
      width: e.lockAspectRatio ? e.w + "px" : void 0,
      height: e.lockAspectRatio ? e.h + "px" : void 0
    }));
    return (a, r) => (_(), v("div", _e, [
      $("div", {
        class: "img-scale-reduce",
        style: m(C(t))
      }, [
        $("img", {
          class: "img-scale",
          src: a.url,
          alt: "",
          style: m(C(l))
        }, null, 12, ge)
      ], 4)
    ]));
  }
});
const he = /* @__PURE__ */ w(ve, [["__scopeId", "data-v-c83ce927"]]), be = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: he
}, Symbol.toStringTag, { value: "Module" }));
let ye = /* @__PURE__ */ Object.assign({ "./Group/index.vue": G, "./Image/index.vue": Z, "./Picture/index.vue": te, "./Shape/index.vue": ne, "./Text/index.vue": ue, "./icon-svg/index.vue": fe, "./img-scale/index.vue": be, "./preview/index.vue": F });
const A = (s) => ye[`./${s}/index.vue`], we = ["onClick", "onDblclick"], me = y({
  name: "dragPannelPreview"
}), Me = /* @__PURE__ */ y({
  ...me,
  props: {
    pannel: {},
    modelValue: { default: () => ({}) },
    disabled: { type: Boolean, default: !1 },
    parentWidth: { default: 0 }
  },
  emits: ["click", "dblclick"],
  setup(s, { emit: e }) {
    const t = s;
    let l = M(), a = M({});
    z(() => {
      g();
    });
    const r = (n) => ({
      width: n.w === "auto" ? n.w : n.w + "px",
      height: n.h === "auto" ? n.h : n.h + "px",
      fontSize: t.pannel.fontSize || n.fontSize,
      zIndex: n.z || "auto",
      transform: `translate(${n.x || 0}px, ${n.y || 0}px) rotate(${n.r || 0}deg)`
    }), g = async () => {
      await E();
      let n = {
        transformOrigin: "0% 0%",
        width: t.pannel.width + "px",
        height: t.pannel.height + "px",
        color: t.pannel.color,
        fontSize: t.pannel.fontSize,
        backgroundColor: t.pannel.bgColor
      }, i = l.value.getBoundingClientRect(), { endRate: c, translateX: b, translateY: p } = o(
        i.width,
        i.height
      );
      a.value = {
        ...n,
        // width: right - left + "px",
        // height: bottom - top + "px",
        transform: `translate(${b}px, ${p}px) scale(${c})`
      };
    }, o = (n, i) => {
      let c = n / t.pannel.width, b = i / t.pannel.height, p = c > b ? b : c, O = c <= b ? 0 : n * p, j = b <= c ? 0 : i * p;
      return {
        endRate: p,
        translateX: O > 0 ? n / 2 - t.pannel.width / 2 * p : O,
        translateY: j > 0 ? i / 2 - t.pannel.height / 2 * p : j
      };
    }, u = (n) => A(n).default, d = (n, i) => {
      i.self.click && e("click", { event: n, item: i });
    }, f = (n, i) => {
      i.self.click && e("dblclick", { event: n, item: i });
    }, h = (n) => W(n, t.modelValue);
    return (n, i) => (_(), v("div", {
      ref_key: "wrapRef",
      ref: l,
      class: "drag-editor-preivew-wrap"
    }, [
      $("div", {
        class: V({ "drag-editor-preivew": !0 }),
        style: m(C(a))
      }, [
        (_(!0), v(B, null, H(n.pannel.components, (c) => {
          var b;
          return _(), v("div", {
            class: V({ "preview-item-wrap": !0, "click-able": c.self.click }),
            style: m(r(c)),
            onClick: T((p) => d(p, c), ["self"]),
            onDblclick: T((p) => f(p, c), ["self"])
          }, [
            (_(), P(R(u(c.self.name)), U({
              class: { "dycomponent-class": !0 },
              data: c,
              h: c.h,
              w: c.w
            }, h(c), {
              modelValue: n.modelValue[c.self.modelValue],
              "onUpdate:modelValue": (p) => n.modelValue[c.self.modelValue] = p,
              defaultModelValue: c.self.defaultModelValue,
              "onUpdate:defaultModelValue": (p) => c.self.defaultModelValue = p,
              groupModel: n.modelValue,
              disabled: !0,
              id: ((b = c.self) == null ? void 0 : b.id) || ""
            }), null, 16, ["data", "h", "w", "modelValue", "onUpdate:modelValue", "defaultModelValue", "onUpdate:defaultModelValue", "groupModel", "id"]))
          ], 46, we);
        }), 256))
      ], 4)
    ], 512));
  }
});
const k = /* @__PURE__ */ w(Me, [["__scopeId", "data-v-450a4fac"]]);
k.install = (s) => {
  s.component(k.name, k);
};
export {
  k as default
};
