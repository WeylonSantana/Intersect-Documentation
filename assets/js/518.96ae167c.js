(window.webpackJsonp=window.webpackJsonp||[]).push([[518],{547:function(e,t,o){"use strict";o.r(t);var s=o(27),i=Object(s.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"compiling"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#compiling"}},[e._v("#")]),e._v(" Compiling")]),e._v(" "),o("p",[e._v("The first step before making changes to the source code is getting it to compile. Intersect relies on dozens of external libraries and tools (ie MonoGame, Newtonsoft Json.Net, etc) and our project is designed to fetch those dependencies automatically from Nuget.")]),e._v(" "),o("p",[e._v("In order to get started open the Intersect.sln file in the Intersect-Engine folder. The solution should open in Visual Studio 2019.")]),e._v(" "),o("p",[o("img",{attrs:{src:"https://www.ascensiongamedev.com/resources/filehost/bb694eabb570f22d541f87d1db2fc68f.png",alt:"solution"}})]),e._v(" "),o("p",[e._v("In most cases all you should have to do is hit Build -> Build Solution at the top of your Visual Studio window and it will fetch all the dependencies for you automatically.")]),e._v(" "),o("p",[o("img",{attrs:{src:"https://www.ascensiongamedev.com/resources/filehost/c1c27a3366987a9279610e40667eecf0.png",alt:"building"}})]),e._v(" "),o("p",[e._v("Your first build will probably fail with errors seen below. This is due to the project downloading the dependencies during a build that a successful build depends on.")]),e._v(" "),o("p",[o("img",{attrs:{src:"https://www.ascensiongamedev.com/resources/filehost/3ddd530d599409f7a8a69a510fa3ab70.png",alt:"errors"}})]),e._v(" "),o("p",[e._v("If you experience the errors above just click Build > Clean Solution and then Build -> Build Solution again. If that doesn't work try restarting visual studio.")]),e._v(" "),o("p",[o("img",{attrs:{src:"https://www.ascensiongamedev.com/resources/filehost/068c7b0d67e8fa94d998f8b2151f98a1.png",alt:"clean"}})]),e._v(" "),o("p",[e._v("Visual Studio will notify you of a successful build in the bottom left corner of your ide.")]),e._v(" "),o("p",[o("img",{attrs:{src:"https://www.ascensiongamedev.com/resources/filehost/cfbb467b54914238dcadcde9383f342f.png",alt:"success"}})]),e._v(" "),o("p",[e._v("The compiled version of Intersect can be found in your Intersect-Engine/build directory. There will be a lot of xml files along side the executables but you should only really care about the .exe and .pdb files for the Client, Editor, and Server for now.")]),e._v(" "),o("p",[o("img",{attrs:{src:"https://www.ascensiongamedev.com/resources/filehost/5c0070679608ae4d663de3bc34c4527b.png",alt:"output"}})]),e._v(" "),o("p",[e._v("** Please note, if you want to run your client or editor using the debugger you will need to "),o("a",{attrs:{href:"https://github.com/AscensionGameDev/Intersect-Assets",target:"_blank",rel:"noopener noreferrer"}},[e._v("download and place the appropriate assets"),o("OutboundLink")],1),e._v(" in the /build/debug/client and /build/debug/editor directories. **")])])}),[],!1,null,null,null);t.default=i.exports}}]);