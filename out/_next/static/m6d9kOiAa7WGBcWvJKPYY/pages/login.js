(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{12:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=(n(48),function(e){var t=e.width,n=e.height;return o.a.createElement("div",{className:"loader",style:{width:t,height:n}})});a.defaultProps={width:"30px",height:"30px"},t.a=a},303:function(e,t,n){__NEXT_REGISTER_PAGE("/login",function(){return e.exports=n(304),{page:e.exports.default}})},304:function(e,t,n){"use strict";n.r(t);var r=n(91);t.default=r.default},91:function(e,t,n){"use strict";n.r(t),n.d(t,"LoginPage",function(){return g});var r=n(0),o=n(8),a=n(6),i=n(9),u=n.n(i),c=n(3),l=n.n(c),s=n(7),m=n(12);n(88);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var g=function(e){function t(e){var n,r,o,a,i,u;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,n=!(o=b(t).call(this,e))||"object"!==f(o)&&"function"!=typeof o?d(r):o,a=d(d(n)),u={uid:""},(i="state")in a?Object.defineProperty(a,i,{value:u,enumerable:!0,configurable:!0,writable:!0}):a[i]=u,n.onLoginFormSubmit=n.onLoginFormSubmit.bind(d(d(n))),n}var n,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,r["Component"]),n=t,(o=[{key:"onLoginFormSubmit",value:function(e){e.preventDefault();var t=this.state.uid,n=this.props,r=n.authenticateUser,o=n.router;r({uid:t,password:"default"},function(){return o.push("/welcome")})}},{key:"render",value:function(){var e=this,t=this.props.user;return r.createElement("div",{className:"d-flex flex-row align-items-center auth-screen auth-screen--login"},r.createElement(u.a,null,r.createElement("title",null,"Login | 1Life Coursemap")),r.createElement("section",{className:"d-flex flex-column w-100 justify-content-center mb-5 py-5 px-3"},r.createElement("div",{className:"auth-screen--header text-center mb-4"},r.createElement("img",{className:"auth-screen__img img mb-4",src:"/static/img/splashLogo.webp",alt:"1Life Logo"}),r.createElement("h1",{className:"auth-screen__title font-weight-bold mb-3 h3"},"Quick Login")),r.createElement("form",{onSubmit:this.onLoginFormSubmit},r.createElement("div",{className:"form-group mb-4"},r.createElement("label",null,"Your E-mail"),r.createElement("input",{type:"email",required:!0,value:this.state.uid,className:"form-control mb-2",placeholder:"Example: john.doe@example.com",onChange:function(t){return e.setState({uid:t.target.value})}}),r.createElement("button",{className:"btn btn-brand btn-block auth-screen--btn",type:"submit",disabled:t.isAuthenticatingUser},t.isAuthenticatingUser?r.createElement(m.a,null):"Login"),r.createElement("p",{className:"text-danger my-2"},t.loginErrorMessage)),r.createElement("div",{className:"text-center"},r.createElement(l.a,{href:"/register"},r.createElement("a",null,"Register now"))))))}}])&&p(n.prototype,o),a&&p(n,a),t}();t.default=Object(o.b)(function(e){return{user:e.user}},function(e){return{authenticateUser:Object(a.bindActionCreators)(s.b.authenticateUser,e)}})(g)}},[[303,1,0,2]]]);