/* esm.sh - @tanstack/charts@1.1.0/d3/area-x */
import{area as m}from"/d3-shape@3.2.0/es2022/d3-shape.mjs";function x(e){let t=m().x0(a=>a[1]).x1(a=>a[2]).y(a=>a[0]).curve(e);return{areaX:(a,c)=>t(a.map((r,u)=>[r[1],c[u]?.[0]??r[0],r[0]]))??""}}export{x as d3AreaXCurve};
//# sourceMappingURL=area-x.mjs.map