(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{10:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=(r(42),function(e){var t=e.width,r=e.height,n=e.color;return a.a.createElement("div",{className:"loader",style:{width:t,height:r,borderTopColor:n}})});o.defaultProps={width:"30px",height:"30px",color:"#fff"},t.a=o},334:function(e,t,r){__NEXT_REGISTER_PAGE("/register",function(){return e.exports=r(335),{page:e.exports.default}})},335:function(e,t,r){"use strict";r.r(t);var n=r(99);t.default=n.default},99:function(e,t,r){"use strict";r.r(t),r.d(t,"RegisterPage",function(){return g});var n=r(0),a=r(7),o=r(4),i=r(9),l=r.n(i),c=r(2),u=r.n(c),s=r(5),m=r(10);r(91);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var g=function(e){function t(e){var r,n,a,o,i,l;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,r=!(a=b(t).call(this,e))||"object"!==f(a)&&"function"!=typeof a?d(n):a,o=d(d(r)),l={name:"",email:""},(i="state")in o?Object.defineProperty(o,i,{value:l,enumerable:!0,configurable:!0,writable:!0}):o[i]=l,r.onRegisterFormSubmit=r.onRegisterFormSubmit.bind(d(d(r))),r}var r,a,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,n["Component"]),r=t,(a=[{key:"onRegisterFormSubmit",value:function(e){var t=this.state,r=t.email,n=t.name,a=this.props,o=a.createUser,i=a.router;o({email:r,name:n,password:"default",password_confirmation:"default"},function(){return i.push("/welcome")}),e.preventDefault()}},{key:"render",value:function(){var e=this,t=this.props.user;return n.createElement("div",{className:"d-flex flex-row align-items-center auth-screen auth-screen--login"},n.createElement(l.a,null,n.createElement("title",null,"Register | 1Life Coursemap")),n.createElement("section",{className:"d-flex flex-column w-100 justify-content-center mb-5 py-5 px-3"},n.createElement("div",{className:"auth-screen--header text-center mb-4"},n.createElement("img",{className:"auth-screen__img img mb-4",src:"/static/img/splashLogo.webp",alt:"1Life Logo"}),n.createElement("h1",{className:"auth-screen__title font-weight-bold mb-3 h3"},"Register")),n.createElement("form",{onSubmit:this.onRegisterFormSubmit},n.createElement("div",{className:"form-group mb-4"},n.createElement("label",null,"Full name"),n.createElement("input",{type:"text",required:!0,value:this.state.name,className:"form-control mb-2",onChange:function(t){return e.setState({name:t.target.value})}})),n.createElement("div",{className:"form-group mb-4"},n.createElement("label",null,"Your E-mail"),n.createElement("input",{type:"email",required:!0,value:this.state.email,className:"form-control mb-2",onChange:function(t){return e.setState({email:t.target.value})}})),n.createElement("div",{className:"form-group mb-4"},n.createElement("button",{className:"btn btn-brand btn-block auth-screen--btn",disabled:t.isCreatingUser,type:"submit"},t.isCreatingUser?n.createElement(m.a,null):"Create account"),n.createElement("p",{className:"text-danger my-2"},t.registrationErrorMessage)),n.createElement("div",{className:"text-center"},n.createElement("span",{className:"mr-1"},"Already have an account?"),n.createElement(u.a,{href:"/login"},n.createElement("a",null,"Login now"))))))}}])&&p(r.prototype,a),o&&p(r,o),t}();t.default=Object(a.b)(function(e){return{user:e.user,home:e.home}},function(e){return{createUser:Object(o.bindActionCreators)(s.b.createUser,e)}})(g)}},[[334,1,0,2]]]);