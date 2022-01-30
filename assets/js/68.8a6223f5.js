(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{520:function(e,t,o){e.exports=o.p+"assets/img/yourapplication.43c9ae78.png"},647:function(e,t,o){"use strict";o.r(t);var a=o(24),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"qt-and-c"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#qt-and-c"}},[e._v("#")]),e._v(" Qt and C++")]),e._v(" "),a("p",[e._v("Qt is a C++ toolkit with an extension for QML and Javascript. There exist many language bindings for Qt, but as Qt itself is developed in C++. The spirit of C++ can be found throughout the classes. In this section, we will look at Qt from a C++ perspective to build a better understanding of how to extend QML with native plugins developed using C++. Through C++, it is possible to extend and control the execution environment provided to QML.")]),e._v(" "),a("p",[a("img",{attrs:{src:o(520),alt:"image"}})]),e._v(" "),a("p",[e._v("This chapter will, just as Qt, require the reader to have some basic knowledge of C++. Qt does not rely on advanced C++ features and I generally consider the Qt style of C++ to be very readable, so do not worry if you feel that your C++ knowledge is shaky.")]),e._v(" "),a("h2",{attrs:{id:"qt-c"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#qt-c"}},[e._v("#")]),e._v(" Qt C++")]),e._v(" "),a("p",[e._v("Approaching Qt from a C++ direction, you will find that Qt enriches C++ with a number of modern language features enabled through making introspection data available. This is made possible through the use of the "),a("code",[e._v("QObject")]),e._v(" base class. Introspection data, or metadata, maintains information of the classes at run-time, something that ordinary C++ does not do. This makes it possible to dynamically probe objects for information about such details as their properties and available methods.")]),e._v(" "),a("p",[e._v("Qt uses this meta information to enable a very loosely bound callback concept using signals and slots. Each signal can be connected to any number of slots or even other signals. When a signal is emitted from an object instance, the connected slots are invoked. As the signal emitting object does not need to know anything about the object owning the slot and vice versa, this mechanism is used to create very reusable components with very few inter-component dependencies.")]),e._v(" "),a("h2",{attrs:{id:"qt-for-python"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#qt-for-python"}},[e._v("#")]),e._v(" Qt for Python")]),e._v(" "),a("p",[e._v("The introspection features are also used to create dynamic language bindings, making it possible to expose a C++ object instance to QML and making C++ functions callable from Javascript. Other bindings for Qt C++ exist and besides the standard Javascript binding, the official one is the Python binding called "),a("a",{attrs:{href:"https://www.qt.io/qt-for-python",target:"_blank",rel:"noopener noreferrer"}},[e._v("PySide6"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"cross-platform"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cross-platform"}},[e._v("#")]),e._v(" Cross Platform")]),e._v(" "),a("p",[e._v("In addition to this central concept, Qt makes it possible to develop cross-platform applications using C++. Qt C++ provides a platform abstraction on the different operating systems, which allows the developer to concentrate on the task at hand and not the details of how you open a file on different operating systems. This means you can re-compile the same source code for Windows, OS X, and Linux and Qt takes care of the different OS ways of handling certain things. The end result is natively built applications with the look and feel of the target platform. As the mobile is the new desktop, newer Qt versions can also target a number of mobile platforms using the same source code, e.g. iOS, Android, Jolla, BlackBerry, Ubuntu Phone, Tizen.")]),e._v(" "),a("p",[e._v("When it comes to re-using, not only can source code be re-used but developer skills are also reusable. A team knowing Qt can reach out to far more platforms then a team just focusing on a single platform specific technology and as Qt is so flexible the team can create different system components using the same technology.")]),e._v(" "),a("p",[e._v("For all platform, Qt offers a set of basic types, e.g. strings with full Unicode support, lists, vectors, buffers. It also provides a common abstraction to the target platform’s main loop, and cross-platform threading and networking support. The general philosophy is that for an application developer Qt comes with all required functionality included. For domain-specific tasks such as to interface to your native libraries, Qt comes with several helper classes to make this easier.")])])}),[],!1,null,null,null);t.default=s.exports}}]);