(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d55d3ce2"],{"22ab":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container py-5"},[r("NavTabs"),r("h1",{staticClass:"mt-5"},[e._v("美食達人")]),r("hr"),r("div",{staticClass:"row text-center"},e._l(e.users,(function(e){return r("UsersTopContent",{key:e.id,attrs:{"initial-user":e}})})),1)],1)},s=[],a=(r("d81d"),r("b0c0"),r("96cf"),r("1da1")),o=r("8bb1"),u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"col-3"},[r("router-link",{attrs:{to:"/users/"+e.user.id}},[r("img",{attrs:{src:e.user.image,width:"140px",height:"140px"}})]),r("h2",[e._v(e._s(e.user.name))]),r("span",{staticClass:"badge badge-secondary"},[e._v("追蹤人數："+e._s(e.user.followerCount))]),r("p",{staticClass:"mt-3"},[e.user.isFollowed?r("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.deleteFollow(e.user.id)}}},[e._v("取消追蹤")]):r("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.addFollow(e.user.id)}}},[e._v("追蹤")])])],1)},i=[],c=r("5530"),l=r("4cce"),d=r("2fa3"),p={props:{initialUser:{type:Object,required:!0}},data:function(){return{user:this.initialUser}},methods:{addFollow:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function r(){var n,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,l["a"].addFollowing({userId:e});case 3:if(n=r.sent,s=n.data,console.log("data",s),"success"===s.status){r.next=8;break}throw new Error(s.message);case 8:if(t.user.id===e){r.next=12;break}return r.abrupt("return",t.user);case 12:t.user=Object(c["a"])(Object(c["a"])({},t.user),{},{followerCount:t.user.followerCount+1,isFollowed:!0});case 13:r.next=18;break;case 15:r.prev=15,r.t0=r["catch"](0),d["a"].fire({icon:"error",title:"無法加入追蹤，請稍後再試"});case 18:case"end":return r.stop()}}),r,null,[[0,15]])})))()},deleteFollow:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function r(){var n,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,l["a"].deleteFollowing({userId:e});case 3:if(n=r.sent,s=n.data,"success"===s.status){r.next=7;break}throw new Error(s.message);case 7:if(t.user.id===e){r.next=11;break}return r.abrupt("return",t.user);case 11:t.user=Object(c["a"])(Object(c["a"])({},t.user),{},{followerCount:t.user.followerCount-1,isFollowed:!1});case 12:r.next=17;break;case 14:r.prev=14,r.t0=r["catch"](0),d["a"].fire({icon:"error",title:"無法取消追蹤，請稍後再試"});case 17:case"end":return r.stop()}}),r,null,[[0,14]])})))()}}},f=p,w=r("2877"),b=Object(w["a"])(f,u,i,!1,null,null,null),h=b.exports,v={components:{NavTabs:o["a"],UsersTopContent:h},data:function(){return{users:[]}},created:function(){this.fetchUsers()},methods:{fetchUsers:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l["a"].getTopUsers();case 3:r=t.sent,n=r.data,e.users=n.users.map((function(e){return{id:e.id,name:e.name,image:e.image,followerCount:e.FollowerCount,isFollowed:e.isFollowed}})),t.next=12;break;case 8:t.prev=8,t.t0=t["catch"](0),console.log(t.t0),d["a"].fire({icon:"error",title:"無法取得美食達人，請稍後再試"});case 12:case"end":return t.stop()}}),t,null,[[0,8]])})))()}}},m=v,g=Object(w["a"])(m,n,s,!1,null,null,null);t["default"]=g.exports},d81d:function(e,t,r){"use strict";var n=r("23e7"),s=r("b727").map,a=r("1dde"),o=r("ae40"),u=a("map"),i=o("map");n({target:"Array",proto:!0,forced:!u||!i},{map:function(e){return s(this,e,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-d55d3ce2.b8d69a29.js.map