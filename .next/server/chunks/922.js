"use strict";
exports.id = 922;
exports.ids = [922];
exports.modules = {

/***/ 7922:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ MyLayout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/Header.js
// components/Header.js
// Import React and Next.js Link component



// Define styles for the header and navigation links
const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
    borderBottom: "1px solid #ddd"
};
const linkStyle = {
    marginRight: "15px",
    textDecoration: "none",
    color: "#333",
    fontWeight: "bold"
};
// Define the Header component
const Header = ()=>// Create the header element with the specified styles
    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        style: headerStyle,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/",
                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    style: linkStyle,
                    children: "Home"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/about",
                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    style: linkStyle,
                    children: "About"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/projects",
                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    style: linkStyle,
                    children: "Projects"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/contact",
                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    style: linkStyle,
                    children: "Contact"
                })
            })
        ]
    });
// Export the Header component as the default export
/* harmony default export */ const components_Header = (Header);

;// CONCATENATED MODULE: ./components/MyLayout.js
// Import necessary Next.js components and React




// Define styles for the layout
const layoutStyle = {
    margin: 20,
    padding: 20,
    border: "1px solid #DDD"
};
// Define the Layout component
const Layout = (props)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("link", {
                    rel: "stylesheet",
                    href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
                    integrity: "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",
                    crossOrigin: "anonymous"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                style: layoutStyle,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(components_Header, {}),
                    props.children
                ]
            })
        ]
    });
// Export the Layout component as the default export
/* harmony default export */ const MyLayout = (Layout);


/***/ })

};
;