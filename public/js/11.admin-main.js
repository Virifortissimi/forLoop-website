webpackJsonp([11],{13:function(n,t,e){var a,s;e(372),a=e(275);var i=e(351);s=a=a||{},"object"!=typeof a["default"]&&"function"!=typeof a["default"]||(s=a=a["default"]),"function"==typeof s&&(s=s.options),s.render=i.render,s.staticRenderFns=i.staticRenderFns,n.exports=a},275:function(n,t,e){"use strict";function a(){return $("#eventsTable").DataTable({data:[],columns:[{title:"Title"},{title:"Date"},{title:"Location"},{title:"Attendees"},{title:"Action"}]})}var s=e(5),i=e.n(s),l=i.a.database(),r=l.ref("events");t["default"]={name:"Events",mounted:function(){var n=this;this.eventsTable=a(),this.$firebaseRefs.events.on("child_added",function(t){var e=t.val(),a=new Date(e.when.date).toString("dddd MMM d yyyy"),s=e.when.from.h+":"+e.when.from.mm+" "+e.when.from.A,i=e.when.to.h+":"+e.when.to.mm+" "+e.when.to.A,l=a+" <br> "+s+" - "+i,r=e.location.name+" <br> "+e.location.address,o=e.attendees?Object.keys(e.attendees).length:0,c="/events/"+e.url_slug,d='<a href="'+c+'" target="blank" class="btn btn-primary">View Event</a>',v="/admin/events/edit/"+e.url_slug,f='<a href="'+v+'" target="blank" class="btn btn-primary">Edit Event</a>',u=d+"  "+f;n.eventsTable.row.add([e.title,l,r,o,u]).draw()}),this.$firebaseRefs.events.on("child_removed",function(n){})},data:function(){return{eventsTable:{}}},firebase:{events:r}}},300:function(n,t,e){t=n.exports=e(3)(),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},351:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement;n._self._c||t;return n._m(0)},staticRenderFns:[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{},[e("div",{staticClass:"page-title"},[e("div",{staticClass:"title_left"},[e("h3",[n._v("Events")])]),n._v(" "),e("div",{staticClass:"title_right"},[e("div",{staticClass:"col-md-5 col-sm-5 col-xs-12 form-group pull-right top_search"},[e("div",{staticClass:"input-group"},[e("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Search for..."}}),n._v(" "),e("span",{staticClass:"input-group-btn"},[e("button",{staticClass:"btn btn-default",attrs:{type:"button"}},[n._v("Go!")])])])])])]),n._v(" "),e("div",{staticClass:"clearfix"}),n._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"x_panel"},[e("div",{staticClass:"x_content"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("table",{staticClass:"table table-striped table-bordered datatable",attrs:{id:"eventsTable"}})])])])])])])])}]}},372:function(n,t,e){var a=e(300);"string"==typeof a&&(a=[[n.i,a,""]]);e(4)(a,{});a.locals&&(n.exports=a.locals)}});