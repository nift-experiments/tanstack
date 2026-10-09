/* esm.sh - @tanstack/charts@1.1.0/d3/shape */
import{area as i,line as o}from"/d3-shape@3.2.0/es2022/d3-shape.mjs";function u(r){let t=o().x(a=>a[0]).y(a=>a[1]).curve(r),n=i().x(a=>a[0]).y0(a=>a[1]).y1(a=>a[2]).curve(r);return{line:a=>t(a)??"",area:(a,c)=>n(a.map((e,h)=>[e[0],c[h]?.[1]??e[1],e[1]]))??""}}export{u as d3Curve};
//# sourceMappingURL=shape.mjs.map