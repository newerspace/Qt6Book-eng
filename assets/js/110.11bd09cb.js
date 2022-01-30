(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{633:function(e,t,a){"use strict";a.r(t);var n=a(24),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[e._v("#")]),e._v(" Summary")]),e._v(" "),a("p",[e._v("In this chapter, we have looked at creating QML elements dynamically. This lets us create QML scenes freely, opening the door for user configurable and plug-in based architectures.")]),e._v(" "),a("p",[e._v("The easiest way to dynamically load a QML element is to use a "),a("code",[e._v("Loader")]),e._v(" element. This acts as a placeholder for the contents being loaded.")]),e._v(" "),a("p",[e._v("For a more dynamic approach, the "),a("code",[e._v("Qt.createQmlObject")]),e._v(" function can be used to instantiate a string of QML. This approach does, however, have limitations. The full-blown solution is to dynamically create a "),a("code",[e._v("Component")]),e._v(" using the "),a("code",[e._v("Qt.createComponent")]),e._v(" function. Objects are then created by calling the "),a("code",[e._v("createObject")]),e._v(" function of a "),a("code",[e._v("Component")]),e._v(".")]),e._v(" "),a("p",[e._v("As bindings and signal connections rely on the existence of an object "),a("code",[e._v("id")]),e._v(", or access to the object instantiation, an alternate approach must be used for dynamically created objects. To create a binding, the "),a("code",[e._v("Binding")]),e._v(" element is used. The "),a("code",[e._v("Connections")]),e._v(" element makes it possible to connect to signals of a dynamically created object.")]),e._v(" "),a("p",[e._v("One of the challenges of working with dynamically created items is to keep track of them. This can be done using a model. By having a model tracking the dynamically created items, it is possible to implement functions for serialization and deserialization, making it possible to store and restore dynamically created scenes.")])])}),[],!1,null,null,null);t.default=o.exports}}]);