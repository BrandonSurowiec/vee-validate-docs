webpackJsonp([0],{130:function(e,r,a){var t,s;t=a(141);var n=a(160);s=t=t||{},"object"==typeof t["default"]&&(s=t=t["default"]),"function"==typeof s&&(s=s.options),s.render=n.render,s.staticRenderFns=n.staticRenderFns,e.exports=t},135:function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r["default"]={data:function(){return{email:"",name:""}}}},136:function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r["default"]={data:function(){return{email:"",name:"",phone:"",url:""}},methods:{validateBeforeSubmit:function(e){this.$validator.validateAll(),this.errors.any()&&e.preventDefault()}}}},137:function(e,r,a){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(r,"__esModule",{value:!0});var s=a(144),n=t(s);r["default"]={data:function(){return{email:"",phone:""}},created:function(){this.$validator.updateDictionary({ar:{messages:n["default"]["default"]}}),this.$validator.setLocale("ar")}}},138:function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r["default"]={data:function(){return{name:"",email:""}},methods:{validateForm1:function(e){return this.$validator.validateAll("form-1"),this.errors.any("form-1")?void e.preventDefault():(e.preventDefault(),void alert("Form Submitted!"))},validateForm2:function(e){return this.$validator.validateAll("form-2"),this.errors.any("form-2")?void e.preventDefault():(e.preventDefault(),void alert("Form Submitted!"))}}}},141:function(e,r,a){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(r,"__esModule",{value:!0});var s=a(147),n=t(s),i=a(149),o=t(i),l=a(150),u=t(l),m=a(151),d=t(m),h=a(146),p=t(h),c=a(148),f=t(c);r["default"]={components:{DelayExample:n["default"],LocaleExample:o["default"],RejectExample:u["default"],ScopeExample:d["default"],DataExample:p["default"],EventExample:f["default"]}}},144:function(e,r,a){"use strict";function t(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}var s=function(){function e(e,r){var a=[],t=!0,s=!1,n=void 0;try{for(var i,o=e[Symbol.iterator]();!(t=(i=o.next()).done)&&(a.push(i.value),!r||a.length!==r);t=!0);}catch(l){s=!0,n=l}finally{try{!t&&o["return"]&&o["return"]()}finally{if(s)throw n}}return a}return function(r,a){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return e(r,a);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();r["default"]=t({alpha_dash:function(e){return e+" قد يحتوي على حروف او الرموز - و _."},alpha_num:function(e){return e+" قد يحتوي فقط على حروف وارقام."},alpha:function(e){return e+" يجب ان يحتوي على حروف فقط."},between:function(e,r){var a=s(r,2),t=a[0],n=a[1];return"قيمة "+e+" يجب ان تكون ما بين "+t+" و "+n+"."},confirmed:function(e,r){var a=s(r,1);return a[0],e+" لا يماثل التأكيد."},decimal:function(e){var r=arguments.length<=1||void 0===arguments[1]?["*"]:arguments[1],a=s(r,1),t=a[0];return e+" يجب ان يكون قيمة رقمية وقد يحتوي على "+("*"===t?"":t)+" ارقام عشرية."},digits:function(e,r){var a=s(r,1),t=a[0];return e+" يجب ان تحتوي فقط على ارقام والا يزيد عددها عن "+t+" رقم."},dimensions:function(e,r){var a=s(r,2),t=a[0],n=a[1];return e+" يجب ان تكون بمقاس "+t+" بكسل في "+n+" بكسل."},email:function(e){return e+" يجب ان يكون بريدا اليكتروني صحيح."},ext:function(e){return"نوع ملف "+e+" غير صحيح."},image:function(e){return e+" يجب ان تكون صورة."},"in":function(e){return"الحقل "+e+" يجب ان يكون قيمة صحيحة."},ip:function(e){return e+" يجب ان يكون ip صحيح."},max:function(e,r){var a=s(r,1),t=a[0];return"الحقل "+e+" يجب ان يحتوي على "+t+" حروف على الأكثر."},mimes:function(e){return"نوع ملف "+e+" غير صحيح."},min:function(e,r){var a=s(r,1),t=a[0];return"الحقل "+e+" يجب ان يحتوي على "+t+" حروف على الأقل."},not_in:function(e){return"الحقل "+e+" غير صحيح."},numeric:function(e){return e+" يمكن ان يحتوي فقط على ارقام."},regex:function(e){return"الحقل "+e+" غير صحيح."},required:function(e){return e+" مطلوب."},size:function(e,r){var a=s(r,1),t=a[0];return e+" يجب ان يكون اقل من "+t+" كيلوبايت."},url:function(e){return"الحقل "+e+" يجب ان يكون رابطاً صحيحاً."},date_format:function(e,r){var a=s(r,1),t=a[0];return e+" يجب ان يكون على هيئة "+t+"."},before:function(e,r){var a=s(r,1),t=a[0];return e+" يجب ان يكون قبل "+t+"."},after:function(e,r){var a=s(r,1),t=a[0];return e+" يجب ان يكون بعد "+t+"."}},"between",function(e,r){var a=s(r,2),t=a[0],n=a[1];return e+" يجب ان يكون ما بين "+t+" و "+n+"."})},146:function(e,r,a){var t,s;t=a(135);var n=a(155);s=t=t||{},"object"==typeof t["default"]&&(s=t=t["default"]),"function"==typeof s&&(s=s.options),s.render=n.render,s.staticRenderFns=n.staticRenderFns,e.exports=t},147:function(e,r,a){var t,s,n=a(165);s=t=t||{},"object"==typeof t["default"]&&(s=t=t["default"]),"function"==typeof s&&(s=s.options),s.render=n.render,s.staticRenderFns=n.staticRenderFns,e.exports=t},148:function(e,r,a){var t,s;t=a(136);var n=a(157);s=t=t||{},"object"==typeof t["default"]&&(s=t=t["default"]),"function"==typeof s&&(s=s.options),s.render=n.render,s.staticRenderFns=n.staticRenderFns,e.exports=t},149:function(e,r,a){var t,s;t=a(137);var n=a(153);s=t=t||{},"object"==typeof t["default"]&&(s=t=t["default"]),"function"==typeof s&&(s=s.options),s.render=n.render,s.staticRenderFns=n.staticRenderFns,e.exports=t},150:function(e,r,a){var t,s,n=a(156);s=t=t||{},"object"==typeof t["default"]&&(s=t=t["default"]),"function"==typeof s&&(s=s.options),s.render=n.render,s.staticRenderFns=n.staticRenderFns,e.exports=t},151:function(e,r,a){var t,s;t=a(138);var n=a(154);s=t=t||{},"object"==typeof t["default"]&&(s=t=t["default"]),"function"==typeof s&&(s=s.options),s.render=n.render,s.staticRenderFns=n.staticRenderFns,e.exports=t},153:function(module,exports){module.exports={render:function(){with(this)return _h("code-example",[_h("form",{slot:"example",staticClass:"pure-form pure-form-stacked rtl"},[_h("div",{staticClass:"pure-u-1"},[_h("label",{"class":{error:errors.has("email")},attrs:{"for":"email"}},["Email"])," ",_h("input",{directives:[{name:"validate"}],"class":{"pure-input-1":!0,"has-error":errors.has("email")},attrs:{"data-rules":"required|email","data-as":"البريد",name:"email",type:"text"}})," ",_h("span",{directives:[{name:"show",value:errors.has("email"),expression:"errors.has('email')"}],staticClass:"error"},[_s(errors.first("email"))])])," ",_h("div",{staticClass:"pure-u-1"},[_h("label",{"class":{error:errors.has("phone")},attrs:{"for":"phone"}},["Phone"])," ",_h("input",{directives:[{name:"validate"}],"class":{"pure-input-1":!0,"has-error":errors.has("phone")},attrs:{"data-rules":"required|numeric","data-as":"رقم الهاتف",name:"phone",type:"text"}})," ",_h("span",{directives:[{name:"show",value:errors.has("phone"),expression:"errors.has('phone')"}],staticClass:"error"},[_s(errors.first("phone"))])])])," ",_h("div",{slot:"code-html"},['\n        <div id="app">\n            <form class="pure-form pure-form-stacked rtl">\n                <div class="pure-u-1">\n                    <label :class="{\'error\': errors.has(\'email\') }" for="email">Email</label>\n                    <input v-validate data-rules="required|email" data-as="البريد" :class="{\'pure-input-1\': true, \'has-error\': errors.has(\'email\') }" name="email" type="text">\n                    <span class="error" v-show="errors.has(\'email\')">'+_s("{"+"{ errors.first('email') }}")+'</span>\n                </div>\n                <div class="pure-u-1">\n                    <label :class="{\'error\': errors.has(\'phone\') }" for="phone">Phone</label>\n                    <input v-validate data-rules="required|numeric" data-as="رقم الهاتف" :class="{\'pure-input-1\': true, \'has-error\': errors.has(\'phone\') }" name="phone" type="text">\n                    <span class="error" v-show="errors.has(\'phone\')">'+_s("{"+"{ errors.first('phone') }}")+"</span>\n                </div>\n            </form>\n        </div>\n    "])," ",_h("div",{slot:"code-js"},["\n        import messages from './locale/ar';\n        import Vue from 'vue';\n        import VeeValidate, { Validator } from 'vee-validate';\n        Vue.use(VeeValidate);\n\n        // Merge dictionary messages.\n        Validator.updateDictionary({\n            ar: {\n                messages\n            }\n        });\n\n        new Vue({\n            el: 'body',\n            data: {\n                phone: '',\n                email: ''\n            },\n            created() {\n                this.$validator.setLocale('ar'); // Switch locale for this instance.\n            }\n        });\n    "])])},staticRenderFns:[]}},154:function(module,exports){module.exports={render:function(){with(this)return _h("code-example",[_h("div",{slot:"example"},[_h("form",{staticClass:"pure-form pure-form-stacked",on:{submit:validateForm1}},[_m(0)," ",_h("div",{staticClass:"pure-u-1"},[_h("label",{"class":{error:errors.has("name","form-1")},attrs:{"for":"name"}},["Name"])," ",_h("input",{directives:[{name:"validate",value:name,expression:"name"},{name:"model",value:name,expression:"name"}],"class":{"pure-input-1":!0,"has-error":errors.has("name","form-1")},attrs:{"data-rules":"required|alpha","data-scope":"form-1",name:"name",type:"text"},domProps:{value:_s(name)},on:{input:function(e){e.target.composing||(name=e.target.value)}}})," ",_h("span",{directives:[{name:"show",value:errors.has("name","form-1"),expression:"errors.has('name', 'form-1')"}],staticClass:"error"},[_s(errors.first("name","form-1"))])])," ",_h("div",{staticClass:"pure-u-1"},[_h("label",{"class":{error:errors.has("email","form-1")},attrs:{"for":"email"}},["Email"])," ",_h("input",{directives:[{name:"validate",value:email,expression:"email"},{name:"model",value:email,expression:"email"}],"class":{"pure-input-1":!0,"has-error":errors.has("email","form-1")},attrs:{"data-rules":"required|email","data-scope":"form-1",name:"email",type:"text"},domProps:{value:_s(email)},on:{input:function(e){e.target.composing||(email=e.target.value)}}})," ",_h("span",{directives:[{name:"show",value:errors.has("email","form-1"),expression:"errors.has('email', 'form-1')"}],staticClass:"error"},[_s(errors.first("email","form-1"))])])," ",_m(1)])," ",_h("form",{staticClass:"pure-form pure-form-stacked",attrs:{"data-scope":"form-2"},on:{submit:validateForm2}},[_m(2)," ",_h("div",{staticClass:"pure-u-1"},[_h("label",{"class":{error:errors.has("email","form-2")},attrs:{"for":"email"}},["Email"])," ",_h("input",{directives:[{name:"validate"}],"class":{"pure-input-1":!0,"has-error":errors.has("email","form-2")},attrs:{"data-rules":"required|email",name:"email",type:"text"}})," ",_h("span",{directives:[{name:"show",value:errors.has("email","form-2"),expression:"errors.has('email', 'form-2')"}],staticClass:"error"},[_s(errors.first("email","form-2"))])])," ",_h("div",{staticClass:"pure-u-1"},[_h("label",{"class":{error:errors.has("email","form-2")},attrs:{"for":"email"}},["Password"])," ",_h("input",{directives:[{name:"validate"}],"class":{"pure-input-1":!0,"has-error":errors.has("email","form-2")},attrs:{"data-rules":"required",name:"password",type:"password"}})])," ",_m(3)])])," ",_h("div",{slot:"code-html"},['\n        <form @submit="validateForm1" class="pure-form pure-form-stacked">\n            <legend>Form 1</legend>\n            <div class="pure-u-1">\n                <label :class="{\'error\': errors.has(\'name\', \'form-1\') }" for="name">Name</label>\n                <input v-validate="name" v-model="name" data-rules="required|alpha" data-scope="form-1" :class="{\'pure-input-1\': true, \'has-error\': errors.has(\'name\', \'form-1\') }" name="name" type="text">\n                <span class="error" v-show="errors.has(\'name\', \'form-1\')">'+_s(errors.first("name","form-1"))+'</span>\n            </div>\n            <div class="pure-u-1">\n                <label :class="{\'error\': errors.has(\'email\', \'form-1\') }" for="email">Email</label>\n                <input v-validate="email" v-model="email" data-rules="required|email" data-scope="form-1" :class="{\'pure-input-1\': true, \'has-error\': errors.has(\'email\', \'form-1\') }" name="email" type="text">\n                <span class="error" v-show="errors.has(\'email\', \'form-1\')">'+_s(errors.first("email","form-1"))+'</span>\n            </div>\n\n            <button class="pure-button pure-button-primary" type="submit" name="button">Sign up</button>\n        </form>\n\n        <form @submit="validateForm2" class="pure-form pure-form-stacked" data-scope="form-2">\n            <legend>Form 2</legend>\n            <div class="pure-u-1">\n                <label :class="{\'error\': errors.has(\'email\', \'form-2\') }" for="email">Email</label>\n                <input v-validate data-rules="required|email" :class="{\'pure-input-1\': true, \'has-error\': errors.has(\'email\', \'form-2\') }" name="email" type="text">\n                <span class="error" v-show="errors.has(\'email\', \'form-2\')">'+_s(errors.first("email","form-2"))+'</span>\n            </div>\n\n            <div class="pure-u-1">\n                <label :class="{\'error\': errors.has(\'email\', \'form-2\') }" for="email">Password</label>\n                <input v-validate data-rules="required" :class="{\'pure-input-1\': true, \'has-error\': errors.has(\'email\', \'form-2\') }" name="password" type="password">\n            </div>\n\n            <button class="pure-button pure-button-primary" type="submit" name="button">Log in</button>\n        </form>\n    '])," ",_h("div",{slot:"code-js"},["\n        new Vue({\n           el: '#app',\n           data: {\n               name: '',\n               email: ''\n           },\n           methods: {\n               validateForm1(e) {\n                   this.$validator.validateAll('form-1');\n                   if (this.errors.any('form-1')) {\n                       e.preventDefault();\n                       return;\n                   }\n\n                   e.preventDefault();\n                   alert('Form Submitted!');\n               },\n               validateForm2(e) {\n                   this.$validator.validateAll('form-2');\n                   if (this.errors.any('form-2')) {\n                       e.preventDefault();\n                       return;\n                   }\n\n                   e.preventDefault();\n                   alert('Form Submitted!');\n               }\n           }\n       });\n    "])])},staticRenderFns:[function(){with(this)return _h("legend",["Form 1"])},function(){with(this)return _h("button",{staticClass:"pure-button pure-button-primary",attrs:{type:"submit",name:"button"}},["Sign up"])},function(){with(this)return _h("legend",["Form 2"])},function(){with(this)return _h("button",{staticClass:"pure-button pure-button-primary",attrs:{type:"submit",name:"button"}},["Log in"])}]}},155:function(module,exports){module.exports={render:function(){with(this)return _h("code-example",[_h("form",{slot:"example",staticClass:"pure-form pure-form-stacked"},[_h("div",{staticClass:"pure-u-1"},[_h("label",{"class":{error:errors.has("email")},attrs:{"for":"email"}},["Email"])," ",_h("input",{directives:[{name:"model",value:email,expression:"email"},{name:"validate",value:email,expression:"email"}],"class":{"pure-input-1":!0,"has-error":errors.has("email")},attrs:{"data-rules":"required|email",type:"text",placeholder:"Email"},domProps:{value:_s(email)},on:{input:function(e){e.target.composing||(email=e.target.value)}}})," ",_h("span",{directives:[{name:"show",value:errors.has("email"),expression:"errors.has('email')"}],staticClass:"error"},[_s(errors.first("email"))])])," ",_h("div",{staticClass:"pure-u-1"},[_h("label",{"class":{error:errors.has("name")},attrs:{"for":"name"}},["Full Name"])," ",_h("input",{directives:[{name:"model",value:name,expression:"name"},{name:"validate",value:name,expression:"name",modifiers:{initial:!0}}],"class":{"pure-input-1":!0,"has-error":errors.has("name")},attrs:{"data-rules":"required|alpha",type:"text",placeholder:"Full Name"},domProps:{value:_s(name)},on:{input:function(e){e.target.composing||(name=e.target.value)}}})," ",_h("span",{directives:[{name:"show",value:errors.has("name"),expression:"errors.has('name')"}],staticClass:"error"},[_s(errors.first("name"))])])])," ",_h("div",{slot:"code-html"},['\n        <div id="app">\n            <form class="pure-form pure-form-stacked">\n                <div class="pure-u-1">\n                    <label :class="{\'error\': errors.has(\'email\') }" for="email">Email</label>\n                    <input v-model="email" v-validate="email" data-rules="required|email" :class="{\'pure-input-1\': true, \'has-error\': errors.has(\'email\') }" type="text" placeholder="Email">\n                    <span class="error" v-show="errors.has(\'email\')">'+_s("{"+"{ errors.first('email') }}")+'</span>\n                </div>\n                <div class="pure-u-1">\n                    <label :class="{\'error\': errors.has(\'name\') }" for="name">Full Name</label>\n                    <input v-model="name" v-validate.initial="name" data-rules="required|alpha" :class="{\'pure-input-1\': true, \'has-error\': errors.has(\'name\') }" type="text" placeholder="Full Name">\n                    <span class="error" v-show="errors.has(\'name\')">'+_s("{"+"{ errors.first('name') }}")+"</span>\n                </div>\n            </form>\n        </div>\n    "])," ",_h("div",{slot:"code-js"},["\n        import Vue from 'vue';\n        import VeeValidate from 'vee-validate';\n\n        Vue.use(VeeValidate);\n\n        new Vue({\n            el: '#app',\n            data: {\n                email: '',\n                name: ''\n            }\n        });\n    "])])},staticRenderFns:[]}},156:function(module,exports){module.exports={render:function(){with(this)return _h("code-example",[_h("form",{slot:"example",staticClass:"pure-form pure-form-stacked"},[_m(0)," ",_h("div",{staticClass:"pure-u-1"},[_h("label",{"class":{error:errors.has("image")},attrs:{"for":"image"}},["Unrejected Image"])," ",_h("input",{directives:[{name:"validate"}],"class":{"pure-input-1":!0,"has-error":errors.has("image")},attrs:{"data-rules":"mimes:image/*",name:"image",type:"file"}})," ",_h("span",{directives:[{name:"show",value:errors.has("image"),expression:"errors.has('image')"}],staticClass:"error"},[_s(errors.first("image"))])])," ",_h("div",{staticClass:"pure-u-1"},[_h("label",{"class":{error:errors.has("file")},attrs:{"for":"file"}},["Rejected Image"])," ",_h("input",{directives:[{name:"validate",modifiers:{reject:!0}}],"class":{"pure-input-1":!0,"has-error":errors.has("file")},attrs:{"data-rules":"mimes:image/*",name:"file",type:"file"}})," ",_h("span",{directives:[{name:"show",value:errors.has("file"),expression:"errors.has('file')"}],staticClass:"error"},[_s(errors.first("file"))])])])," ",_h("div",{slot:"code-html"},['\n        <div id="app">\n            <form class="pure-form pure-form-stacked">\n                <legend>File Upload</legend>\n                <div class="pure-u-1">\n                    <label :class="{\'error\': errors.has(\'image\') }" for="image">Unrejected Image</label>\n                    <input v-validate data-rules="mimes:image/*" :class="{\'pure-input-1\': true, \'has-error\': errors.has(\'image\') }" name="image" type="file">\n                    <span class="error" v-show="errors.has(\'image\')">'+_s(errors.first("image"))+'</span>\n                </div>\n                <div class="pure-u-1">\n                    <label :class="{\'error\': errors.has(\'file\') }" for="file">Rejected Image</label>\n                    <input  v-validate.reject data-rules="mimes:image/*" :class="{\'pure-input-1\': true, \'has-error\': errors.has(\'file\') }" name="file" type="file">\n                    <span class="error" v-show="errors.has(\'file\')">'+_s(errors.first("file"))+"</span>\n                </div>\n            </form>\n        </div>\n    "])," ",_h("div",{slot:"code-js"},["\n        import Vue from 'vue';\n        import VeeValidate from 'vee-validate';\n\n        Vue.use(VeeValidate);\n\n        new Vue({\n            el: '#app'\n        });\n    "])])},staticRenderFns:[function(){with(this)return _h("legend",["File Upload"])}]}},157:function(module,exports){module.exports={render:function(){with(this)return _h("code-example",[_h("form",{slot:"example",staticClass:"pure-form pure-form-stacked",on:{submit:validateBeforeSubmit}},[_h("div",{staticClass:"pure-u-1"},[_h("label",{"class":{error:errors.has("email")},attrs:{"for":"email"}},["Email"])," ",_h("input",{directives:[{name:"model",value:email,expression:"email"},{name:"validate",value:email,expression:"email",modifiers:{initial:!0}}],"class":{"pure-input-1":!0,"has-error":errors.has("email")},attrs:{"data-rules":"required|email",type:"text",placeholder:"Email"},domProps:{value:_s(email)},on:{input:function(e){e.target.composing||(email=e.target.value)}}})," ",_h("span",{directives:[{name:"show",value:errors.has("email"),expression:"errors.has('email')"}],staticClass:"error"},[_s(errors.first("email"))])])," ",_h("div",{staticClass:"pure-u-1"},[_h("label",{"class":{error:errors.has("name")},attrs:{"for":"name"}},["Name"])," ",_h("input",{directives:[{name:"model",value:name,expression:"name"},{name:"validate",value:name,expression:"name",modifiers:{initial:!0}}],"class":{"pure-input-1":!0,"has-error":errors.has("name")},attrs:{"data-rules":"required|alpha|min:3",type:"text",placeholder:"Name"},domProps:{value:_s(name)},on:{input:function(e){e.target.composing||(name=e.target.value)}}})," ",_h("span",{directives:[{name:"show",value:errors.has("name"),expression:"errors.has('name')"}],staticClass:"error"},[_s(errors.first("name"))])])," ",_h("div",{staticClass:"pure-u-1"},[_h("label",{"class":{error:errors.has("phone")},attrs:{"for":"phone"}},["Phone Number"])," ",_h("input",{directives:[{name:"model",value:phone,expression:"phone"},{name:"validate",value:phone,expression:"phone",modifiers:{initial:!0}}],"class":{"pure-input-1":!0,"has-error":errors.has("phone")},attrs:{"data-rules":"required|numeric",type:"text",placeholder:"Phone"},domProps:{value:_s(phone)},on:{input:function(e){e.target.composing||(phone=e.target.value)}}})," ",_h("span",{directives:[{name:"show",value:errors.has("phone"),expression:"errors.has('phone')"}],staticClass:"error"},[_s(errors.first("phone"))])])," ",_h("div",{staticClass:"pure-u-1"},[_h("label",{"class":{error:errors.has("url")},attrs:{"for":"url"}},["Website"])," ",_h("input",{directives:[{name:"model",value:url,expression:"url"},{name:"validate",value:url,expression:"url",modifiers:{initial:!0}}],"class":{"pure-input-1":!0,"has-error":errors.has("url")},attrs:{"data-rules":"required|url",type:"text",placeholder:"Website"},domProps:{value:_s(url)},on:{input:function(e){e.target.composing||(url=e.target.value)}}})," ",_h("span",{directives:[{name:"show",value:errors.has("url"),expression:"errors.has('url')"}],staticClass:"error"},[_s(errors.first("url"))])])," ",_m(0)])," ",_h("div",{slot:"code-html"},['\n        <div id="app">\n            <form @submit="validateBeforeSubmit" class="pure-form pure-form-stacked">\n                <div class="pure-u-1">\n                    <label :class="{\'error\': errors.has(\'email\') }" for="email">Email</label>\n                    <input v-model="email" v-validate.initial="email" data-rules="required|email" :class="{\'pure-input-1\': true, \'has-error\': errors.has(\'email\') }" type="text" placeholder="Email">\n                    <span class="error" v-show="errors.has(\'email\')">'+_s("{"+"{ errors.first('email') }}")+'</span>\n                </div>\n                <div class="pure-u-1">\n                    <label :class="{\'error\': errors.has(\'name\') }" for="name">Name</label>\n                    <input v-model="name" v-validate.initial="name" data-rules="required|alpha|min:3" :class="{\'pure-input-1\': true, \'has-error\': errors.has(\'name\') }" type="text" placeholder="Full Name">\n                    <span class="error" v-show="errors.has(\'name\')">'+_s("{"+"{ errors.first('name') }}")+'</span>\n                </div>\n                <div class="pure-u-1">\n                    <label :class="{\'error\': errors.has(\'phone\') }" for="phone">Phone Number</label>\n                    <input v-model="phone" v-validate.initial="phone" data-rules="required|numeric" :class="{\'pure-input-1\': true, \'has-error\': errors.has(\'phone\') }" type="text" placeholder="Phone">\n                    <span class="error" v-show="errors.has(\'phone\')">'+_s("{"+"{ errors.first('phone') }}")+'</span>\n                </div>\n                <div class="pure-u-1">\n                    <label :class="{\'error\': errors.has(\'url\') }" for="url">Website</label>\n                    <input v-model="url" v-validate.initial="url" data-rules="required|url" :class="{\'pure-input-1\': true, \'has-error\': errors.has(\'url\') }" type="text" placeholder="Website">\n                    <span class="error" v-show="errors.has(\'url\')">'+_s("{"+"{ errors.first('url') }}")+'</span>\n                </div>\n\n                <input class="pure-button pure-button-primary" type="submit">\n            </form>\n        </div>\n    '])," ",_h("div",{slot:"code-js"},["\n        import Vue from 'vue';\n        import Vee from 'vee-validate';\n\n        new Vue({\n            el: '#app',\n            data() {\n                return {\n                    email: '',\n                    name: '',\n                    phone: '',\n                    url: '',\n                };\n            },\n            methods: {\n                validateBeforeSubmit(e) {\n                    // Note that validateAll here is missing the values parameter, which tells the validator\n                    // to trigger validation for attached inputs.\n                    this.$validator.validateAll();\n\n                    if (this.errors.any()) {\n                        e.preventDefault();\n                    }\n                }\n            }\n        });\n    "])])},staticRenderFns:[function(){with(this)return _h("input",{staticClass:"pure-button pure-button-primary",attrs:{type:"submit"}})}]}},160:function(module,exports){module.exports={render:function(){with(this)return _h("div",[_m(0)," ",_m(1)," ",_h("delay-example")," ",_m(2)," ",_m(3),_m(4)," ",_m(5)," ",_h("reject-example")," ",_m(6)," ",_h("p",["\n        The basic approach relies on listening to the ",_m(7)," or the ",_m(8)," events depending on the file type.\n        However most of the time, your values are bound to your Vue instance and some code may change their inputs programatically, the basic approach won't detect this change.\n        ",_m(9),_m(10)," ",_m(11)," The ",_m(12)," directive can take a binding expression, the expression is the data name you wish to validate. for example:\n        ",_h("code-block",{staticClass:"language-html"},['\n            <input v-validate="email" data-rules="required|email" type="text" name="email">\n        ']),"\n        Whenever the binding value is updated, the validator will validate the new value automatically.\n        "]),_m(13)," ",_m(14)," ",_h("data-example")," ",_m(15),_m(16)," ",_m(17)," ",_m(18)," ",_m(19)," ",_m(20)," ",_m(21)," ",_h("event-example")," ",_m(22)," ",_m(23)," ",_h("locale-example")," ",_m(24),_m(25)," ",_m(26)," ",_m(27)," ",_m(28)," ",_h("scope-example")])},staticRenderFns:[function(){with(this)return _h("h2",{staticClass:"content-subhead",attrs:{id:"debounce-example"}},[_h("a",{attrs:{href:"#debounce-example"}},["Delayed Validation (Debounced)"])])},function(){with(this)return _h("p",["\n        You can specify a delay to debounce the input event, a case scenario that you may want to wait for the user to stop typing then validate the field.\n        This can be achieved by adding a ",_h("code",{staticClass:"inline"},["data-delay"])," attribute on the field being validated, and assign it the number of milliseconds you want to wait for.\n    "])},function(){with(this)return _h("h2",{staticClass:"content-subhead",attrs:{id:"reject-example"}},[_h("a",{attrs:{href:"#reject-example"}},["Reject Invalid Files"])])},function(){with(this)return _h("p",["\n        After validating a file, you may want to reject the uploaded file if it fails the validation, this can be done by adding\n        the ",_h("code",{staticClass:"inline"},["reject"])," modifier to directive. so you would use it like this: ",_h("code",{staticClass:"inline"},["v-validate.reject"]),".\n        "])},function(){with(this)return _h("div",{staticClass:"note"},[_h("b",["Note: "])," The ",_h("code",["reject"])," modifier is only relevant on file inputs, adding it to other input types will not have an effect.\n        "])},function(){with(this)return _h("p")},function(){with(this)return _h("h2",{staticClass:"content-subhead",attrs:{id:"validate-data-example"}},[_h("a",{attrs:{href:"#validate-data-example"}},["Validate $data"])])},function(){with(this)return _h("code",{staticClass:"inline"},["input"])},function(){with(this)return _h("code",{staticClass:"inline"},["change"])},function(){with(this)return _h("br")},function(){with(this)return _h("br")},function(){with(this)return _h("b",{staticClass:"important"},["The Solution:"])},function(){with(this)return _h("code",{staticClass:"inline"},["v-validate"])},function(){with(this)return _h("div",{staticClass:"note"},[_h("b",["Note:"])," The plugin will use the data in your vue instance as the source of the input value, meaning it won't be watching the input anymore.\n            And as you noticed, you don't need to provide a ",_h("code",["name"])," attribute, as the expression name will be used instead.\n        "])},function(){with(this)return _h("p")},function(){with(this)return _h("p")},function(){with(this)return _h("div",{staticClass:"note"},[_h("b",["Note:"])," Notice that the ",_h("code",["email"])," field was immediatly validated when you open the page, you may not want this behavior, use the ",_h("code",["initial"])," modifier to tell the validator to ignore the first evaluation like this: ",_h("code",["v-validate.initial"]),".\n            ",_h("br"),"For example the name field above didn't display any errors when you opened this page.\n            This attribute is only relevant when validating using binding expressions, it has no effect otherwise.\n        "])},function(){with(this)return _h("br")},function(){with(this)return _h("div",{staticClass:"note"},[_h("b",["Note:"])," When you provide a binding expression to the directive, ",_h("code",["delay"])," attribute and ",_h("code",["reject"])," modifier won't have an effect anymore. so you might want to handle debouncing the inputs yourself.\n        "])},function(){with(this)return _h("p")},function(){with(this)return _h("h2",{staticClass:"content-subhead",attrs:{id:"validate-form"}},[_h("a",{attrs:{href:"#validate-form"}},["Validate Form Before Submit"])])},function(){with(this)return _h("p",["\n        You may want to trigger all inputs validation before submitting a form, maybe display an alert or prevent form submission if any errors are detected.\n     "])},function(){with(this)return _h("h2",{staticClass:"content-subhead",attrs:{id:"locale-example"}},[_h("a",{attrs:{href:"#locale-example"}},["Localized Messages"])])},function(){with(this)return _h("p",["\n        You may want to display error messages in different languages, here is an example on how you may do that. The language below is Arabic (RTL):\n     "])},function(){with(this)return _h("p")},function(){with(this)return _h("div",{staticClass:"note"},[_h("b",["Note: "])," Here we are also seeing ",_h("code",["data-as"])," attribute which tells the validator to use that value as the field name when generating error messages, this is a good way to display 'pretty names' for your inputs in error messages, which would make sense when displaying messages in other languages.\n            ",_h("br"),_h("br"),"Keep in mind that those pretty names are only used when generating error messages.\n        "]);
},function(){with(this)return _h("p")},function(){with(this)return _h("h2",{staticClass:"content-subhead",attrs:{id:"scope-example"}},[_h("a",{attrs:{href:"#scope-example"}},["Scopes"])])},function(){with(this)return _h("p",["\n        By default the scope of the validator is the same as the Vue instance that owns it, sometimes you may have multiple fields with the same name, they are in different forms and serve different purposes.\n        The validator will then treat those two fields as the same field which will cause problems detecting the input and displaying the errors.\n        ",_h("br"),_h("br"),"\n        You can tell the validator to scope the fields by adding a ",_h("code",{staticClass:"inline"},["data-scope"])," attribute which tells the validator the name of the scope. Those fields will be then identified using their name and their scope. allowing duplicate fields to exist within the same component.\n        ",_h("br"),_h("br"),"\n        For convienece you may add the ",_h("code",{staticClass:"inline"},["data-scope"])," on the form that owns the inputs, you don't have to add the attribute on each and every input.\n     "])}]}},165:function(module,exports){module.exports={render:function(){with(this)return _h("code-example",[_h("form",{slot:"example",staticClass:"pure-form pure-form-stacked"},[_m(0)," ",_h("div",{staticClass:"pure-u-1"},[_h("label",{"class":{error:errors.has("email")},attrs:{"for":"email"}},["Email - Delay: 500ms"])," ",_h("input",{directives:[{name:"validate"}],"class":{"pure-input-1":!0,"has-error":errors.has("email")},attrs:{"data-rules":"required|email","data-delay":"500",name:"email",type:"text",placeholder:"Email"}})," ",_h("span",{directives:[{name:"show",value:errors.has("email"),expression:"errors.has('email')"}],staticClass:"error"},[_s(errors.first("email"))])])," ",_h("div",{staticClass:"pure-u-1"},[_h("label",{"class":{error:errors.has("name")},attrs:{"for":"name"}},["Name - Delay: 1s"])," ",_h("input",{directives:[{name:"validate"}],"class":{"pure-input-1":!0,"has-error":errors.has("name")},attrs:{"data-rules":"required|alpha|min:3","data-delay":"1000",name:"name",type:"text",placeholder:"Full Name"}})," ",_h("span",{directives:[{name:"show",value:errors.has("name"),expression:"errors.has('name')"}],staticClass:"error"},[_s(errors.first("name"))])])])," ",_h("div",{slot:"code-html"},['\n        <div id="app">\n            <form class="pure-form pure-form-stacked">\n                <legend>Basic Form</legend>\n                <div class="pure-u-1">\n                    <label :class="{\'error\': errors.has(\'email\') }" for="email">Email - Delay: 500ms</label>\n                    <input v-validate data-rules="required|email" data-delay="500" :class="{\'pure-input-1\': true, \'has-error\': errors.has(\'email\') }" name="email" type="email" placeholder="Email">\n                    <span class="error" v-show="errors.has(\'email\')">'+_s("{"+"{ errors.first('email') }}")+'</span>\n                </div>\n                <div class="pure-u-1">\n                    <label :class="{\'error\': errors.has(\'name\') }" for="name">Name - Delay: 1s</label>\n                    <input v-validate data-rules="required|alpha|min:3" data-delay="1000" :class="{\'pure-input-1\': true, \'has-error\': errors.has(\'name\') }" name="name" type="text" placeholder="Full Name">\n                    <span class="error" v-show="errors.has(\'name\')">'+_s("{"+"{ errors.first('name') }}")+"</span>\n                </div>\n            </form>\n        </div>\n    "])," ",_h("div",{slot:"code-js"},["\n        import Vue from 'vue';\n        import VeeValidate from 'vee-validate';\n\n        Vue.use(VeeValidate);\n\n        new Vue({\n            el: '#app'\n        });\n    "])])},staticRenderFns:[function(){with(this)return _h("legend",["Debounced Form"])}]}}});