(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{11:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=(n(48),function(e){var t=e.width,n=e.height;return a.a.createElement("div",{className:"loader",style:{width:t,height:n}})});o.defaultProps={width:"30px",height:"30px"},t.a=o},315:function(e,t,n){__NEXT_REGISTER_PAGE("/register",function(){return e.exports=n(316),{page:e.exports.default}})},316:function(e,t,n){"use strict";n.r(t);var r=n(94);t.default=r.default},94:function(e,t,n){"use strict";n.r(t),n.d(t,"RegisterPage",function(){return g});var r=n(0),a=n(8),o=n(4),i=n(9),l=n.n(i),c=n(3),u=n.n(c),s=n(6),m=n(11);n(89);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var g=function(e){function t(e){var n,r,a,o,i,l;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,n=!(a=b(t).call(this,e))||"object"!==f(a)&&"function"!=typeof a?d(r):a,o=d(d(n)),l={name:"",email:""},(i="state")in o?Object.defineProperty(o,i,{value:l,enumerable:!0,configurable:!0,writable:!0}):o[i]=l,n.onRegisterFormSubmit=n.onRegisterFormSubmit.bind(d(d(n))),n}var n,a,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,r["Component"]),n=t,(a=[{key:"onRegisterFormSubmit",value:function(e){var t=this.state,n=t.email,r=t.name,a=this.props,o=a.createUser,i=a.router;o({email:n,name:r,password:"default",password_confirmation:"default"},function(){return i.push("/welcome")}),e.preventDefault()}},{key:"render",value:function(){var e=this,t=this.props.user;return r.createElement("div",{className:"d-flex flex-row align-items-center auth-screen auth-screen--login"},r.createElement(l.a,null,r.createElement("title",null,"Register | 1Life Coursemap")),r.createElement("section",{className:"d-flex flex-column w-100 justify-content-center mb-5 py-5 px-3"},r.createElement("div",{className:"auth-screen--header text-center mb-4"},r.createElement("img",{className:"auth-screen__img img mb-4",src:"/static/img/splashLogo.webp",alt:"1Life Logo"}),r.createElement("h1",{className:"auth-screen__title font-weight-bold mb-3 h3"},"Register")),r.createElement("form",{onSubmit:this.onRegisterFormSubmit},r.createElement("div",{className:"form-group mb-4"},r.createElement("label",null,"Full name"),r.createElement("input",{type:"text",required:!0,value:this.state.name,className:"form-control mb-2",onChange:function(t){return e.setState({name:t.target.value})}})),r.createElement("div",{className:"form-group mb-4"},r.createElement("label",null,"Your E-mail"),r.createElement("input",{type:"email",required:!0,value:this.state.email,className:"form-control mb-2",onChange:function(t){return e.setState({email:t.target.value})}})),r.createElement("div",{className:"form-group mb-4"},r.createElement("button",{className:"btn btn-brand btn-block auth-screen--btn",disabled:t.isCreatingUser,type:"submit"},t.isCreatingUser?r.createElement(m.a,null):"Create account"),r.createElement("p",{className:"text-danger my-2"},t.registrationErrorMessage)),r.createElement("div",{className:"text-center"},r.createElement("span",{className:"mr-1"},"Already have an account?"),r.createElement(u.a,{href:"/login"},r.createElement("a",null,"Login now"))))))}}])&&p(n.prototype,a),o&&p(n,o),t}();t.default=Object(a.b)(function(e){return{user:e.user,home:e.home}},function(e){return{createUser:Object(o.bindActionCreators)(s.b.createUser,e)}})(g)}},[[315,1,0,2]]]);