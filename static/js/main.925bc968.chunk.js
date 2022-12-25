(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{253:function(e,t,n){e.exports=n(284)},260:function(e,t,n){},262:function(e,t,n){},268:function(e,t){},269:function(e,t){},277:function(e,t){},278:function(e,t){},279:function(e,t){},280:function(e,t){},284:function(e,t,n){"use strict";n.r(t);var a=n(31),r=n.n(a),o=n(229),l=n.n(o),u=(n(260),n(1)),i=n(6),m=n(10),c=n(2),s=n(9),h=n(5),p=(n(262),n(69));function d(e){var t=p.k(2*Math.PI),n=p.i([e],0,1),a=p.i([e],0,1),r=p.i([e],0,1),o=p.o([p.o([p.c(p.f(t,n)),p.l(p.f(t,n)),p.p([e])],1),p.o([p.l(p.f(t,n).mul(-1)),p.c(p.f(t,n)),p.p([e])],1),p.o([p.p([e]),p.p([e]),p.h([e])],1)],1),l=p.o([p.c(a.mul(t)).mul(p.n(r)),p.l(a.mul(t)).mul(p.n(r)),p.n(r.mul(-1).add(1))],1),u=p.d(3,3,[e]),i=l.expandDims(2).mul(2).mul(l.expandDims(1)),m=u.sub(i);return p.e(m,o).mul(-1)}var _=n(68),f=n(224),g=n(287);function E(e){var t=new _.Matrix4,n=e.rot_mat;t.set(n[0],n[1],n[2],-n[2],n[3],n[4],n[5],-n[5],n[6],n[7],n[8],-n[8],0,0,0,1);var a=new _.Vector3,o=new _.Quaternion,l=new _.Vector3;return t.decompose(a,o,l),r.a.createElement("axesHelper",{args:[e.size],position:[a.x,a.y,a.z],quaternion:[o.x,o.y,o.z,o.w]})}function b(e){for(var t=e.rot_mats,n=e.size,a=e.nums,o=[],l=0;l<a;++l)o.push(r.a.createElement(E,{key:l,rot_mat:t.slice(9*l,9*l+9),size:n}));return r.a.createElement(r.a.Fragment,null,o)}function v(){return r.a.createElement("mesh",{position:[0,0,0]},r.a.createElement("sphereGeometry",{args:[1,32,16]}),r.a.createElement("meshStandardMaterial",{depthTest:!1,wireframe:!0,transparent:!0,color:16777215,opacity:.05}))}var S=function(e){return r.a.createElement(f.a,null,r.a.createElement("color",{args:[0],attach:"background"}),r.a.createElement("ambientLight",null),r.a.createElement(g.a,null),r.a.createElement("perspectiveCamera",{fov:75,near:.1,far:1e3,aspect:window.innerWidth/window.innerHeight,position:[5,0,0],lookAt:[0,0,0]}),r.a.createElement(v,null),r.a.createElement(b,{rot_mats:e.rot_mats.dataSync(),nums:e.num_rots,size:.05}))},w="avro",y="spiral",C=w,x={num_rots:100},j={num_sphere_pts:100,num_xy_rots:3};function O(e){var t=Object(a.useState)(x.num_rots),n=Object(h.a)(t,2),o=n[0],l=n[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{htmlFor:"num_rots"},"Number of Rotations:"),r.a.createElement("input",{type:"text",id:"num_rots",value:o,onChange:function(e){return l(e.target.value)}}),r.a.createElement("button",{onClick:function(){e.onSettingChange(w,{num_rots:parseInt(o)})}},"Refresh"))}function k(e){var t=Object(a.useState)(j.num_sphere_pts),n=Object(h.a)(t,2),o=n[0],l=n[1],u=Object(a.useState)(j.num_xy_rots),i=Object(h.a)(u,2),m=i[0],c=i[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"num_sphere_pts"},"Number of Sphere Points:"),r.a.createElement("input",{type:"text",id:"num_sphere_pts",value:o,onChange:function(e){return l(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"num_xy_pts"},"Number of XY Rotations:"),r.a.createElement("input",{type:"text",id:"num_xy_rots",value:m,onChange:function(e){return c(e.target.value)}}),r.a.createElement("button",{onClick:function(){e.onSettingChange(y,{num_sphere_pts:parseInt(o),num_xy_rots:parseInt(m)})}},"Refresh")))}function M(e){return e.method===w?r.a.createElement(O,{onSettingChange:e.onSettingChange}):e.method===y?r.a.createElement(k,{onSettingChange:e.onSettingChange}):void 0}function R(e){var t=Object(a.useState)(C),n=Object(h.a)(t,2),o=n[0],l=n[1];return r.a.createElement("div",{style:{color:"white",backgroundColor:"transparent",position:"absolute",top:"0px"}},r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"method-select"},"Generation Method:"),r.a.createElement("select",{id:"method-select",onChange:function(t){var n=t.target.value;l(n),n===w?e.onSettingChange(n,x):n===y&&e.onSettingChange(n,j)}},r.a.createElement("option",{value:w},"Random-Avro"),r.a.createElement("option",{value:y},"Spiral"))),r.a.createElement(M,{method:o,onSettingChange:e.onSettingChange}))}function z(){return r.a.createElement("div",{style:{color:"white",backgroundColor:"transparent",position:"absolute",bottom:"0px"}},r.a.createElement("p",null,"Reference:"),r.a.createElement("ol",null,r.a.createElement("li",null,'J Avro. "Fast Random Rotation Matrices." (1992)'),r.a.createElement("li",null,r.a.createElement("a",{href:"https://gist.github.com/zhifanzhu/a1d2a108ad6ea81b853a67d2420b01be"},"Spiral method."))))}var F=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(r)))).state={rot_mats:d(x.num_rots),num_rots:x.num_rots},n}return Object(s.a)(t,e),Object(i.a)(t,[{key:"onSettingChange",value:function(e,t){if(e===w){var n=d(t.num_rots);this.setState({num_rots:t.num_rots}),this.setState({rot_mats:n})}else if(e===y){var a=function(e,t){function n(e){return e.div(p.g(e,2,1,!0))}function a(e,t){var n=p.m(e,3,1),a=Object(h.a)(n,3),r=a[0],o=a[1],l=a[2],u=p.m(t,3,1),i=Object(h.a)(u,3),m=i[0],c=i[1],s=i[2],d=o.mul(s).sub(l.mul(c)),_=l.mul(m).sub(r.mul(s)),f=r.mul(c).sub(o.mul(m));return p.b([d,_,f],1)}var r,o=e;r=o>=6e5?214:o>=4e5?75:o>=11e3?27:o>=890?10:o>=177?3.33:o>=24?1.33:.33;var l=p.j(0,o),u=l.mul(2*Math.PI/1.618033988749895),i=p.a(l.add(r).mul(-2/(o-1+2*r)).add(1)),m=p.c(u).mul(p.l(i)),c=p.l(u).mul(p.l(i)),s=p.c(i),d=p.o([m,c,s],1),_=n(a(d,p.o([p.p([o]),p.h([o]),p.p([o])],1))),f=n(a(_,d)),g=p.o([f,_,d],2),E=p.j(0,t).mul(2*Math.PI/t),b=p.o([p.o([p.c(E),p.l(E),p.p([t])],1),p.o([p.l(E).mul(-1),p.c(E),p.p([t])],1),p.o([p.p([t]),p.p([t]),p.h([t])],1)],1),v=e*t;return b=b.expandDims(1).tile([1,e,1,1]).reshape([v,3,3]),(g=g.expandDims(0).tile([t,1,1,1]).reshape([v,3,3])).matMul(b)}(t.num_sphere_pts,t.num_xy_rots);this.setState({num_rots:t.num_sphere_pts*t.num_xy_rots}),this.setState({rot_mats:a})}}},{key:"render",value:function(){return r.a.createElement("div",{style:{width:window.innerWidth,height:window.innerHeight}},r.a.createElement(S,{rot_mats:this.state.rot_mats,num_rots:this.state.num_rots}),r.a.createElement(R,{onSettingChange:this.onSettingChange.bind(this)}),r.a.createElement(z,null))}}]),t}(r.a.Component);l.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(F,null)))}},[[253,2,1]]]);
//# sourceMappingURL=main.925bc968.chunk.js.map