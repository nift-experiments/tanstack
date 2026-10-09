/* esm.sh - @tanstack/charts@1.1.0/mark/composite */
import{createMark as t}from"../dist/mark.mjs";import{initializeCompositeMark as m}from"../dist/mark-composite-internal.mjs";function c(o,r={}){return t(({markIndex:e})=>{let i=r.id??`composite-${e}`;return m(i,o,{motion:r.motion})},r.motion,r.renderer)}export{c as compositeMark};
//# sourceMappingURL=composite.mjs.map