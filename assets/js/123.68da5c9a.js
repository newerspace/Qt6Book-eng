(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{651:function(t,s,e){"use strict";e.r(s);var a=e(24),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"understanding-the-qml-run-time"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#understanding-the-qml-run-time"}},[t._v("#")]),t._v(" Understanding the QML Run-time")]),t._v(" "),e("p",[t._v("When running QML, it is being executed inside of a run-time environment. The run-time is implemented in C++ in the "),e("code",[t._v("QtQml")]),t._v(" module. It consists of an engine, responsible for the execution of QML, contexts, holding global properties accessible for each component, and components - QML elements that can be instantiated from QML.")]),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("<QtGui>")])]),t._v("\r\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("<QtQml>")])]),t._v("\r\n\r\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" argc"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("argv"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\r\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\r\n    QGuiApplication "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("app")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("argc"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" argv"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\r\n    QUrl "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("source")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("QStringLiteral")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"qrc:/main.qml"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\r\n    QQmlApplicationEngine engine"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\r\n    engine"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("load")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("source"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\r\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" app"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("exec")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\r\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\r\n")])])]),e("p",[t._v("In the example, the "),e("code",[t._v("QGuiApplication")]),t._v(" encapsulates all that is related to the application instance (e.g. application name, command line arguments and managing the event loop). The "),e("code",[t._v("QQmlApplicationEngine")]),t._v(" manages the hierarchical order of contexts and components. It requires typical a QML file to be loaded as the starting point of your application. In this case, it is a "),e("code",[t._v("main.qml")]),t._v(" containing a window and a text type.")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("Loading a "),e("code",[t._v("main.qml")]),t._v(" with a simple "),e("code",[t._v("Item")]),t._v(" as the root type through the "),e("code",[t._v("QmlApplicationEngine")]),t._v(" will not show anything on your display, as it requires a window to manage a surface for rendering. The engine is capable of loading QML code which does not contain any user interface (e.g plain objects). Because of this, it does not create a window for you by default. The "),e("code",[t._v("qml")]),t._v(" runtime will internally first check if the main QML file contains a window as a root item and if not create one for you and set the root item as a child to the newly created window.")])]),t._v(" "),e("div",{staticClass:"language-qml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-qml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" QtQuick 2.5\r\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" QtQuick.Window 2.2\r\n\r\n"),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Window")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\r\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("visible")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token javascript-expression language-javascript"}},[e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")])]),t._v("\r\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token javascript-expression language-javascript"}},[e("span",{pre:!0,attrs:{class:"token number"}},[t._v("512")])]),t._v("\r\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token javascript-expression language-javascript"}},[e("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")])]),t._v("\r\n\r\n    "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Text")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\r\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("anchors.centerIn")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token javascript-expression language-javascript"}},[t._v("parent")]),t._v("\r\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("text")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token javascript-expression language-javascript"}},[e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World!"')])]),t._v("\r\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\r\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\r\n")])])]),e("p",[t._v("In the QML file we declare our dependencies here it is "),e("code",[t._v("QtQuick")]),t._v(" and "),e("code",[t._v("QtQuick.Window")]),t._v(". These declarations will trigger a lookup for these modules in the import paths and on success will load the required plugins by the engine. The newly loaded types will then be made available to the QML environmetn through a declaration in a a "),e("code",[t._v("qmldir")]),t._v(" file representing the report.")]),t._v(" "),e("p",[t._v("It is also possible to shortcut the plugin creation by adding our types directly to the engine in our "),e("code",[t._v("main.cpp")]),t._v(". Here we assume we have a "),e("code",[t._v("CurrentTime")]),t._v(", which is a class based on the "),e("code",[t._v("QObject")]),t._v(" base class.")]),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[t._v("QQmlApplicationEngine "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("engine")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nqmlRegisterType"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("CurrentTime"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"org.example"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CurrentTime"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nengine"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("load")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("source"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("Now we can also use the "),e("code",[t._v("CurrentTime")]),t._v(" type within our QML file.")]),t._v(" "),e("div",{staticClass:"language-qml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-qml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" org.example 1.0\n\n"),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CurrentTime")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// access properties, functions, signals")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("If we don't need to be able to instantiate the new class from QML, we can use context properties to expose C++ objects into QML, e.g.")]),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[t._v("QScopedPointer"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("CurrentTime"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("current")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("CurrentTime")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nQQmlApplicationEngine "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("engine")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nengine"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("rootContext")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setContextProperty")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"current"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" current"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("value")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nengine"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("load")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("source"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("Do not mix up "),e("code",[t._v("setContextProperty()")]),t._v(" and "),e("code",[t._v("setProperty()")]),t._v(". The first one sets a context property on a qml context, and "),e("code",[t._v("setProperty()")]),t._v(" sets a dynamic property value on a "),e("code",[t._v("QObject")]),t._v(" and will not help you.")])]),t._v(" "),e("p",[t._v("Now you can use the current property everywhere in your application. It is availabe everywhere in the  QML code thanks to context inheritance. The "),e("code",[t._v("current")]),t._v(" object is registered in the outermost root context, which is inherited everywhere.")]),t._v(" "),e("div",{staticClass:"language-qml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-qml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" QtQuick\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" QtQuick.Window\n\n"),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Window")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("visible")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token javascript-expression language-javascript"}},[e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token javascript-expression language-javascript"}},[e("span",{pre:!0,attrs:{class:"token number"}},[t._v("512")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token javascript-expression language-javascript"}},[e("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")])]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("Component.onCompleted")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token javascript-expression language-javascript"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'current: '")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" current"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("Here are the different ways you can extend QML in general:")]),t._v(" "),e("ul",[e("li",[t._v("Context properties - "),e("code",[t._v("setContextProperty()")])]),t._v(" "),e("li",[t._v("Register type with engine - calling "),e("code",[t._v("qmlRegisterType")]),t._v(" in your "),e("code",[t._v("main.cpp")])]),t._v(" "),e("li",[t._v("QML extension plugins - maximum flexibility, to be discussed next")])]),t._v(" "),e("p",[e("strong",[t._v("Context properties")]),t._v(" are easy to use for small applications. They do not require any effort you just expose your system API with kind of global objects. It is helpful to ensure there will be no naming conflicts (e.g by using a special character for this ("),e("code",[t._v("$")]),t._v(") for example "),e("code",[t._v("$.currentTime")]),t._v("). "),e("code",[t._v("$")]),t._v(" is a valid character for JS variables.")]),t._v(" "),e("p",[e("strong",[t._v("Registering QML types")]),t._v(" allows the user to control the lifecycle of a C++ object from QML. This is not possible with the context properties. Also, it does not pollute the global namespace. Still all types need to be registered first and by this, all libraries need to be linked on application start, which in most cases is not really a problem.")]),t._v(" "),e("p",[t._v("The most flexible system is provided by the "),e("strong",[t._v("QML extension plugins")]),t._v(". They allow you to register types in a plugin which is loaded when the first QML file calls the import identifier. Also by using a QML singleton, there is no need to pollute the global namespace anymore. Plugins allow you to reuse modules across projects, which comes quite handy when you do more than one project with Qt.")]),t._v(" "),e("p",[t._v("Going back to our simple example "),e("code",[t._v("main.qml")]),t._v(" file:")]),t._v(" "),e("div",{staticClass:"language-qml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-qml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" QtQuick 2.5\r\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" QtQuick.Window 2.2\r\n\r\n"),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Window")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\r\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("visible")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token javascript-expression language-javascript"}},[e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")])]),t._v("\r\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token javascript-expression language-javascript"}},[e("span",{pre:!0,attrs:{class:"token number"}},[t._v("512")])]),t._v("\r\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token javascript-expression language-javascript"}},[e("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")])]),t._v("\r\n\r\n    "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Text")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\r\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("anchors.centerIn")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token javascript-expression language-javascript"}},[t._v("parent")]),t._v("\r\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("text")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token javascript-expression language-javascript"}},[e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World!"')])]),t._v("\r\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\r\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\r\n")])])]),e("p",[t._v("When we import the  "),e("code",[t._v("QtQuick")]),t._v(" and "),e("code",[t._v("QtQuick.Window")]),t._v(", what we do is that we tell the QML run-time to find the corresponding QML extension plugins and load them. This is done by the QML engine by looking for these modules in the QML import paths. The newly loaded types will then be made available to the QML environment.")]),t._v(" "),e("p",[t._v("For the remainder of this chapter will focus on the QML extension plugins. As they provide the greatest flexibility and reuse.")])])}),[],!1,null,null,null);s.default=n.exports}}]);