(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{652:function(e,t,i){"use strict";i.r(t);var a=i(24),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"summary"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[e._v("#")]),e._v(" Summary")]),e._v(" "),i("p",[e._v("The plugin created in thic chapter is a very simple plugin. but it can be re-used and extended by other types for different applications. Using plugins creates a very flexible solution. For example, you can now start the UI by just using the "),i("code",[e._v("qml")]),e._v(". Open the folder where your "),i("code",[e._v("CityUI")]),e._v(" project is a start the UI with "),i("code",[e._v("qml main.qml")]),e._v(". The extension is readily available to the QML engine from any project and can be imported anywhere.")]),e._v(" "),i("p",[e._v("You are encouraged to write your applications in a way so that they work with a "),i("code",[e._v("qml")]),e._v(". This has a tremendous increase in turnaround time for the UI developer and it is also a good habit to keep a clear separation of the logic and the presentation of an application.")]),e._v(" "),i("p",[e._v("The only drawback with using plugins is that the deployment gets more difficult. This becomes more apparent the simpler the application is (as the overhead of creating and deploying the plugin stays the same). You need now to deploy your plugin with your application. If this is a problem for you, you can still use the same "),i("code",[e._v("FileIO")]),e._v(" class and register it directly in your "),i("code",[e._v("main.cpp")]),e._v(" using "),i("code",[e._v("qmlRegisterType")]),e._v(". The QML code would stay the same.")]),e._v(" "),i("p",[e._v("In larger projects, you do not use an application as such. You have a simple qml runtime similar to the "),i("code",[e._v("qml")]),e._v(" command provided with Qt, and require all native functionality to come as plugins. And your projects are simple pure qml projects using these qml extension plugins. This provides greater flexibility and removes the compilation step for UI changes. After editing a QML file you just need to run the UI. This allows the user interface writers to stay flexible and agile to make all these little changes to push pixels.")]),e._v(" "),i("p",[e._v("Plugins provide a nice and clean separation between C++ backend development and QML frontend development. When developing QML plugins always have the QML side in mind and do not hesitate to start with a QML only mockup first to validate your API before you implement it in C++. If an API is written in C++ people often hesitate to change it or not to speak of to rewrite it. Mocking an API in QML provides much more flexibility and less initial investment. When using plugins the switch between a mocked API and the real API is just changing the import path for the qml runtime.")])])}),[],!1,null,null,null);t.default=n.exports}}]);