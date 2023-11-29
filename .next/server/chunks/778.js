"use strict";
exports.id = 778;
exports.ids = [778];
exports.modules = {

/***/ 4427:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Logo = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "45.77",
        height: "35.001",
        viewBox: "0 0 45.77 35.001",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            id: "noun_cloth_2129414",
            d: "M437.579,459a1.344,1.344,0,0,1-1.3-.867l-3.26-8.556H418.69a2.69,2.69,0,0,1-2.69-2.692V426.692A2.691,2.691,0,0,1,418.7,424h18.843a1.346,1.346,0,0,1,1.218.773l4.07,8.65h16.252a2.69,2.69,0,0,1,2.69,2.692v20.192a2.691,2.691,0,0,1-2.7,2.692Zm-.895-32.308H418.7s0,6.731,0,20.192h27.494Zm7.41,9.423,5.432,11.542a1.346,1.346,0,0,1-.332,1.586l-8.073,7.064h17.952s0-6.731,0-20.192Zm-5.986,19.251,6.617-5.79H435.9Z",
            transform: "translate(-416 -424)"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Logo);


/***/ }),

/***/ 7778:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var use_onclickoutside__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6135);
/* harmony import */ var use_onclickoutside__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(use_onclickoutside__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_icons_logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4427);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);







const Header = ({ isErrorPage  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const { cartItems  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.cart
    );
    const arrayPaths = [
        "/"
    ];
    const { 0: onTop , 1: setOnTop  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!arrayPaths.includes(router.pathname) || isErrorPage ? false : true);
    const { 0: menuOpen , 1: setMenuOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: searchOpen , 1: setSearchOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const navRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const searchRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const headerClass = ()=>{
        if (window.pageYOffset === 0) {
            setOnTop(true);
        } else {
            setOnTop(false);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!arrayPaths.includes(router.pathname) || isErrorPage) {
            return;
        }
        headerClass();
        window.onscroll = function() {
            headerClass();
        };
    }, []);
    const closeMenu = ()=>{
        setMenuOpen(false);
    };
    const closeSearch = ()=>{
        setSearchOpen(false);
    };
    // on click outside
    use_onclickoutside__WEBPACK_IMPORTED_MODULE_3___default()(navRef, closeMenu);
    use_onclickoutside__WEBPACK_IMPORTED_MODULE_3___default()(searchRef, closeSearch);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
        className: `site-header ${!onTop ? "site-header--fixed" : ""}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                    href: "/",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                            className: "site-logo",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_assets_icons_logo__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
                                "E-Shop"
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                    ref: navRef,
                    className: `site-nav ${menuOpen ? "site-nav--open" : ""}`,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                            href: "/products",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                children: "Products"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: "#",
                            children: "Inspiration"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: "#",
                            children: "Rooms"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "site-nav__btn",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "Account"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "site-header__actions",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                            ref: searchRef,
                            className: `search-form-wrapper ${searchOpen ? "search-form--active" : ""}`,
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                    className: `search-form`,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "icon-cancel",
                                            onClick: ()=>setSearchOpen(!searchOpen)
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "text",
                                            name: "search",
                                            placeholder: "Enter the product you are looking for"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    onClick: ()=>setSearchOpen(!searchOpen)
                                    ,
                                    className: "icon-search"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                            href: "/cart",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                className: "btn-cart",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        className: "icon-cart"
                                    }),
                                    cartItems.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "btn-cart__count",
                                        children: cartItems.length
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                            href: "/login",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "site-header__btn-avatar",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: "icon-avatar"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: ()=>setMenuOpen(true)
                            ,
                            className: "site-header__btn-menu",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "btn-hamburger",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {})
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);


/***/ })

};
;