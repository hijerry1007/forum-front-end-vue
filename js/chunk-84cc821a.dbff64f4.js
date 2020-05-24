(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-84cc821a"],{"12b2":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("form",{directives:[{name:"show",rawName:"v-show",value:!e.isLoading,expression:"!isLoading"}],on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit(t)}}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"name"}},[e._v("Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.restaurant.name,expression:"restaurant.name"}],staticClass:"form-control",attrs:{id:"name",type:"text",name:"name",placeholder:"Enter name",required:""},domProps:{value:e.restaurant.name},on:{input:function(t){t.target.composing||e.$set(e.restaurant,"name",t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"categoryId"}},[e._v("Category")]),a("select",{directives:[{name:"model",rawName:"v-model",value:e.restaurant.categoryId,expression:"restaurant.categoryId"}],staticClass:"form-control",attrs:{id:"categoryId",name:"categoryId",required:""},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.restaurant,"categoryId",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"",selected:"",disabled:""}},[e._v("--請選擇--")]),e._l(e.categories,(function(t){return a("option",{key:t.id,domProps:{value:t.id}},[e._v(e._s(t.name))])}))],2)]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"tel"}},[e._v("Tel")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.restaurant.tel,expression:"restaurant.tel"}],staticClass:"form-control",attrs:{id:"tel",type:"text",name:"tel",placeholder:"Enter telephone number"},domProps:{value:e.restaurant.tel},on:{input:function(t){t.target.composing||e.$set(e.restaurant,"tel",t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"address"}},[e._v("Address")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.restaurant.address,expression:"restaurant.address"}],staticClass:"form-control",attrs:{id:"address",type:"text",placeholder:"Enter address",name:"address"},domProps:{value:e.restaurant.address},on:{input:function(t){t.target.composing||e.$set(e.restaurant,"address",t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"opening-hours"}},[e._v("Opening Hours")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.restaurant.openingHours,expression:"restaurant.openingHours"}],staticClass:"form-control",attrs:{id:"opening-hours",type:"time",name:"opening_hours"},domProps:{value:e.restaurant.openingHours},on:{input:function(t){t.target.composing||e.$set(e.restaurant,"openingHours",t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"description"}},[e._v("Description")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.restaurant.description,expression:"restaurant.description"}],staticClass:"form-control",attrs:{id:"description",rows:"3",name:"description"},domProps:{value:e.restaurant.description},on:{input:function(t){t.target.composing||e.$set(e.restaurant,"description",t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"image"}},[e._v("Image")]),e.restaurant.image?a("img",{staticClass:"d-block img-thumbnail mb-3",attrs:{src:e.restaurant.image,width:"200",height:"200"}}):e._e(),a("input",{staticClass:"form-control-file",attrs:{id:"image",type:"file",name:"image",accept:"image/*"},on:{change:e.handleFileChange}})]),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit",disabled:e.isProcessing}},[e._v(e._s(e.isProcessing?"資料處理中...":"送出"))])])},n=[],s=(a("b0c0"),a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),a("96cf"),a("1da1")),i=a("5530"),o=a("be6c"),c=a("2fa3"),u={props:{initialRestaurant:{type:Object,default:function(){return{name:"",categoryId:"",tel:"",address:"",description:"",image:"",openingHours:""}}},isProcessing:{type:Boolean,default:!1}},data:function(){return{restaurant:{name:"",categoryId:"",tel:"",address:"",description:"",image:"",openingHours:""},categories:[],isLoading:!0}},watch:{initialRestaurant:function(e){this.restaurant=Object(i["a"])(Object(i["a"])({},this.restaurant),e)}},created:function(){this.fetchCategories()},methods:{fetchCategories:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o["a"].categories.get();case 3:a=t.sent,r=a.data,e.categories=r.categories,e.isLoading=!1,t.next=14;break;case 9:t.prev=9,t.t0=t["catch"](0),e.isLoading=!1,c["a"].fire({icon:"error",title:"無法取得餐廳類別，請稍後再試"}),console.log("error",t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,9]])})))()},handleFileChange:function(e){var t=e.target.files;if(0!==t.length){var a=window.URL.createObjectURL(t[0]);this.restaurant.image=a}else this.restaurant.image=""},handleSubmit:function(e){if(this.restaurant.name)if(this.restaurant.categoryId){var t=e.target,a=new FormData(t);this.$emit("after-submit",a)}else c["a"].fire({icon:"warning",title:"請選擇餐廳類別"});else c["a"].fire({icon:"warning",title:"請填寫餐廳名稱"})}}},d=u,l=a("2877"),m=Object(l["a"])(d,r,n,!1,null,null,null);t["a"]=m.exports},2743:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container py-5"},[a("AdminRestaurantForm",{attrs:{"is-processing":e.isProcessing},on:{"after-submit":e.handleAfterSubmit}})],1)},n=[],s=(a("96cf"),a("1da1")),i=a("12b2"),o=a("be6c"),c=a("2fa3"),u={components:{AdminRestaurantForm:i["a"]},data:function(){return{isProcessing:!1}},methods:{handleAfterSubmit:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,t.isProcessing=!0,a.next=4,o["a"].restaurants.create({formData:e});case 4:if(r=a.sent,n=r.data,console.log(n),"success"===n.status){a.next=9;break}throw new Error(n.message);case 9:t.$router.push({name:"admin-restaurant"}),a.next=17;break;case 12:a.prev=12,a.t0=a["catch"](0),t.isProcessing=!1,c["a"].fire({icon:"error",title:"無法建立餐廳，請稍後再試"}),console.log("error",a.t0);case 17:case"end":return a.stop()}}),a,null,[[0,12]])})))()}}},d=u,l=a("2877"),m=Object(l["a"])(d,r,n,!1,null,null,null);t["default"]=m.exports},be6c:function(e,t,a){"use strict";a("b0c0");var r=a("2fa3"),n=function(){return localStorage.getItem("token")};t["a"]={users:{get:function(){return r["b"].get("/admin/users",{headers:{Authorization:"Bearer ".concat(n())}})},update:function(e){var t=e.userId,a=e.isAdmin;return r["b"].put("/admin/users/".concat(t),{isAdmin:a},{headers:{Authorization:"Bearer ".concat(n())}})}},categories:{get:function(){return r["b"].get("/admin/categories",{headers:{Authorization:"Bearer ".concat(n())}})},create:function(e){var t=e.name;return r["b"].post("/admin/categories",{name:t},{headers:{Authorization:"Bearer ".concat(n())}})},getDetail:function(e){return r["b"].get("/admin/categories/".concat(e),{headers:{Authorization:"Bearer ".concat(n())}})},update:function(e){var t=e.categoryId,a=e.name;return r["b"].put("/admin/categories/".concat(t),{categoryId:t,name:a},{headers:{Authorization:"Bearer ".concat(n())}})},delete:function(e){return r["b"].delete("/admin/categories/".concat(e),{headers:{Authorization:"Bearer ".concat(n())}})}},restaurants:{get:function(){return r["b"].get("/admin/restaurants",{headers:{Authorization:"Bearer ".concat(n())}})},create:function(e){var t=e.formData;return r["b"].post("/admin/restaurants",t,{headers:{Authorization:"Bearer ".concat(n())}})},getDetail:function(e){var t=e.restaurantId;return r["b"].get("/admin/restaurants/".concat(t),{headers:{Authorization:"Bearer ".concat(n())}})},update:function(e){var t=e.restaurantId,a=e.formData;return r["b"].put("/admin/restaurants/".concat(t),a,{headers:{Authorization:"Bearer ".concat(n())}})},delete:function(e){var t=e.restaurantId;return r["b"].delete("/admin/restaurants/".concat(t),{headers:{Authorization:"Bearer ".concat(n())}})}}}}}]);
//# sourceMappingURL=chunk-84cc821a.dbff64f4.js.map