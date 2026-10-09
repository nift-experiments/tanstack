/* esm.sh - @tanstack/charts@1.1.0/dist/svg-render-context-internal */
var n=new WeakMap;function l(e){return n.get(e)}function d(e,t,i){let r=n.get(e);n.set(e,t);try{return i()}finally{r?n.set(e,r):n.delete(e)}}export{l as svgRenderChildren,d as withSvgRenderChildren};
//# sourceMappingURL=svg-render-context-internal.mjs.map