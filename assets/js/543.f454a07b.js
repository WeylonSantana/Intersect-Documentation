(window.webpackJsonp=window.webpackJsonp||[]).push([[543],{475:function(t,s,a){"use strict";a.r(s);var e=a(27),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"admin-actions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#admin-actions"}},[t._v("#")]),t._v(" Admin Actions")]),t._v(" "),a("p",[a("strong",[t._v("All commands below using the /users/ endpoint requires the Users.Query role.")])]),t._v(" "),a("h2",{attrs:{id:"ban"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ban"}},[t._v("#")]),t._v(" Ban")]),t._v(" "),a("p",[t._v("Ban an account.")]),t._v(" "),a("h3",{attrs:{id:"request"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request"}},[t._v("#")]),t._v(" Request")]),t._v(" "),a("p",[a("strong",[t._v("URL")]),t._v(" : "),a("code",[t._v("/api/v1/users/[userLookup]/admin/ban")]),t._v(" OR "),a("code",[t._v("/api/v1/players/[playerLookup]/admin/ban")])]),t._v(" "),a("p",[a("strong",[t._v("User Lookup")]),t._v(" : "),a("code",[t._v("Username or user id.")])]),t._v(" "),a("p",[a("strong",[t._v("Player Lookup")]),t._v(" : "),a("code",[t._v("Player name or player id.")])]),t._v(" "),a("p",[a("strong",[t._v("Method")]),t._v(" : "),a("code",[t._v("POST")])]),t._v(" "),a("p",[a("strong",[t._v("Authorization Required")]),t._v(" : "),a("code",[t._v("Yes")])]),t._v(" "),a("p",[a("strong",[t._v("Content Type")]),t._v(" : "),a("code",[t._v("application/json")])]),t._v(" "),a("p",[a("strong",[t._v("Body")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Required")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("duration")]),t._v(" "),a("td",[t._v("int")]),t._v(" "),a("td",[t._v("Number of days for the ban to last.")]),t._v(" "),a("td",[t._v("✔️")])]),t._v(" "),a("tr",[a("td",[t._v("reason")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("Reason for the ban.")]),t._v(" "),a("td",[t._v("➖")])]),t._v(" "),a("tr",[a("td",[t._v("moderator")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("Name of the banner.")]),t._v(" "),a("td",[t._v("➖")])]),t._v(" "),a("tr",[a("td",[t._v("ip")]),t._v(" "),a("td",[t._v("boolean")]),t._v(" "),a("td",[t._v("Whether or not to ban the users most recent ip address.")]),t._v(" "),a("td",[t._v("➖")])])])]),t._v(" "),a("p",[a("strong",[t._v("Example")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"duration"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"reason"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"For breaking rule #4"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"moderator"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Damian666"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ip"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("hr"),t._v(" "),a("h3",{attrs:{id:"response"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[t._v("#")]),t._v(" Response")]),t._v(" "),a("p",[a("strong",[t._v("Condition")]),t._v(" : Ban was successful.")]),t._v(" "),a("p",[a("strong",[t._v("Code")]),t._v(" : "),a("code",[t._v("200 OK")])]),t._v(" "),a("p",[a("strong",[t._v("Example")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Message"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"jcsnider has been banned!"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"mute"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mute"}},[t._v("#")]),t._v(" Mute")]),t._v(" "),a("p",[t._v("Mutes an account.")]),t._v(" "),a("h3",{attrs:{id:"request-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-2"}},[t._v("#")]),t._v(" Request")]),t._v(" "),a("p",[a("strong",[t._v("URL")]),t._v(" : "),a("code",[t._v("/api/v1/users/[userLookup]/admin/mute")]),t._v(" OR "),a("code",[t._v("/api/v1/players/[playerLookup]/admin/mute")])]),t._v(" "),a("p",[a("strong",[t._v("User Lookup")]),t._v(" : "),a("code",[t._v("Username or user id.")])]),t._v(" "),a("p",[a("strong",[t._v("Player Lookup")]),t._v(" : "),a("code",[t._v("Player name or player id.")])]),t._v(" "),a("p",[a("strong",[t._v("Method")]),t._v(" : "),a("code",[t._v("POST")])]),t._v(" "),a("p",[a("strong",[t._v("Authorization Required")]),t._v(" : "),a("code",[t._v("Yes")])]),t._v(" "),a("p",[a("strong",[t._v("Content Type")]),t._v(" : "),a("code",[t._v("application/json")])]),t._v(" "),a("p",[a("strong",[t._v("Body")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Required")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("duration")]),t._v(" "),a("td",[t._v("int")]),t._v(" "),a("td",[t._v("Number of days for the mute to last.")]),t._v(" "),a("td",[t._v("✔️")])]),t._v(" "),a("tr",[a("td",[t._v("reason")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("Reason for the mute.")]),t._v(" "),a("td",[t._v("➖")])]),t._v(" "),a("tr",[a("td",[t._v("moderator")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("Name of the muter.")]),t._v(" "),a("td",[t._v("➖")])]),t._v(" "),a("tr",[a("td",[t._v("ip")]),t._v(" "),a("td",[t._v("boolean")]),t._v(" "),a("td",[t._v("Whether or not to mute the users most recent ip address.")]),t._v(" "),a("td",[t._v("➖")])])])]),t._v(" "),a("p",[a("strong",[t._v("Example")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"duration"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"reason"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"For breaking rule #4"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"moderator"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Damian666"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ip"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("hr"),t._v(" "),a("h3",{attrs:{id:"response-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-2"}},[t._v("#")]),t._v(" Response")]),t._v(" "),a("p",[a("strong",[t._v("Condition")]),t._v(" : Mute was successful.")]),t._v(" "),a("p",[a("strong",[t._v("Code")]),t._v(" : "),a("code",[t._v("200 OK")])]),t._v(" "),a("p",[a("strong",[t._v("Example")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Message"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"jcsnider has been muted!"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"unban"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unban"}},[t._v("#")]),t._v(" Unban")]),t._v(" "),a("p",[t._v("Unbans an account.")]),t._v(" "),a("h3",{attrs:{id:"request-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-3"}},[t._v("#")]),t._v(" Request")]),t._v(" "),a("p",[a("strong",[t._v("URL")]),t._v(" : "),a("code",[t._v("/api/v1/users/[userLookup]/admin/unban")]),t._v(" OR "),a("code",[t._v("/api/v1/players/[playerLookup]/admin/unban")])]),t._v(" "),a("p",[a("strong",[t._v("User Lookup")]),t._v(" : "),a("code",[t._v("Username or user id.")])]),t._v(" "),a("p",[a("strong",[t._v("Player Lookup")]),t._v(" : "),a("code",[t._v("Player name or player id.")])]),t._v(" "),a("p",[a("strong",[t._v("Method")]),t._v(" : "),a("code",[t._v("POST")])]),t._v(" "),a("p",[a("strong",[t._v("Authorization Required")]),t._v(" : "),a("code",[t._v("Yes")])]),t._v(" "),a("p",[a("strong",[t._v("Content Type")]),t._v(" : "),a("code",[t._v("application/json")])]),t._v(" "),a("p",[a("strong",[t._v("Body")]),t._v(": "),a("code",[t._v("NA")])]),t._v(" "),a("hr"),t._v(" "),a("h3",{attrs:{id:"response-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-3"}},[t._v("#")]),t._v(" Response")]),t._v(" "),a("p",[a("strong",[t._v("Condition")]),t._v(" : Unban was successful.")]),t._v(" "),a("p",[a("strong",[t._v("Code")]),t._v(" : "),a("code",[t._v("200 OK")])]),t._v(" "),a("p",[a("strong",[t._v("Example")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Message"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"jcsnider has been unbanned!"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"unmute"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unmute"}},[t._v("#")]),t._v(" Unmute")]),t._v(" "),a("p",[t._v("Unmutes an account.")]),t._v(" "),a("h3",{attrs:{id:"request-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-4"}},[t._v("#")]),t._v(" Request")]),t._v(" "),a("p",[a("strong",[t._v("URL")]),t._v(" : "),a("code",[t._v("/api/v1/users/[userLookup]/admin/unmute")]),t._v(" OR "),a("code",[t._v("/api/v1/players/[playerLookup]/admin/unmute")])]),t._v(" "),a("p",[a("strong",[t._v("User Lookup")]),t._v(" : "),a("code",[t._v("Username or user id.")])]),t._v(" "),a("p",[a("strong",[t._v("Player Lookup")]),t._v(" : "),a("code",[t._v("Player name or player id.")])]),t._v(" "),a("p",[a("strong",[t._v("Method")]),t._v(" : "),a("code",[t._v("POST")])]),t._v(" "),a("p",[a("strong",[t._v("Authorization Required")]),t._v(" : "),a("code",[t._v("Yes")])]),t._v(" "),a("p",[a("strong",[t._v("Content Type")]),t._v(" : "),a("code",[t._v("application/json")])]),t._v(" "),a("p",[a("strong",[t._v("Body")]),t._v(": "),a("code",[t._v("NA")])]),t._v(" "),a("hr"),t._v(" "),a("h3",{attrs:{id:"response-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-4"}},[t._v("#")]),t._v(" Response")]),t._v(" "),a("p",[a("strong",[t._v("Condition")]),t._v(" : Unmute was successful.")]),t._v(" "),a("p",[a("strong",[t._v("Code")]),t._v(" : "),a("code",[t._v("200 OK")])]),t._v(" "),a("p",[a("strong",[t._v("Example")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Message"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"jcsnider has been unmuted!"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"warp-to"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#warp-to"}},[t._v("#")]),t._v(" Warp To")]),t._v(" "),a("p",[t._v("Warps a player to a specified map while retaining their current coordinates.")]),t._v(" "),a("h3",{attrs:{id:"request-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-5"}},[t._v("#")]),t._v(" Request")]),t._v(" "),a("p",[a("strong",[t._v("URL")]),t._v(" : "),a("code",[t._v("/api/v1/users/[userLookup]/admin/warpto")]),t._v(" OR "),a("code",[t._v("/api/v1/players/[playerLookup]/admin/warpto")])]),t._v(" "),a("p",[a("strong",[t._v("User Lookup")]),t._v(" : "),a("code",[t._v("Username or user id.")])]),t._v(" "),a("p",[a("strong",[t._v("Player Lookup")]),t._v(" : "),a("code",[t._v("Player name or player id.")])]),t._v(" "),a("p",[a("strong",[t._v("Method")]),t._v(" : "),a("code",[t._v("POST")])]),t._v(" "),a("p",[a("strong",[t._v("Authorization Required")]),t._v(" : "),a("code",[t._v("Yes")])]),t._v(" "),a("p",[a("strong",[t._v("Content Type")]),t._v(" : "),a("code",[t._v("application/json")])]),t._v(" "),a("p",[a("strong",[t._v("Body")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Required")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("mapid")]),t._v(" "),a("td",[t._v("guid")]),t._v(" "),a("td",[t._v("Id of the map to warp the player to.")]),t._v(" "),a("td",[t._v("✔️")])])])]),t._v(" "),a("p",[a("strong",[t._v("Example")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"MapId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"693b7c8f-61ac-4517-b27c-f3b0a3b98542"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("hr"),t._v(" "),a("h3",{attrs:{id:"response-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-5"}},[t._v("#")]),t._v(" Response")]),t._v(" "),a("p",[a("strong",[t._v("Condition")]),t._v(" : Warp was successful.")]),t._v(" "),a("p",[a("strong",[t._v("Code")]),t._v(" : "),a("code",[t._v("200 OK")])]),t._v(" "),a("p",[a("strong",[t._v("Example")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Message"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"Warped 'jcsnider' to 693b7c8f-61ac-4517-b27c-f3b0a3b98542 (13, 19).\"")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"warp-to-location"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#warp-to-location"}},[t._v("#")]),t._v(" Warp To Location")]),t._v(" "),a("p",[t._v("Warps a player to specified coordinates on a specified map.")]),t._v(" "),a("h3",{attrs:{id:"request-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-6"}},[t._v("#")]),t._v(" Request")]),t._v(" "),a("p",[a("strong",[t._v("URL")]),t._v(" : "),a("code",[t._v("/api/v1/users/[userLookup]/admin/warptoloc")]),t._v(" OR "),a("code",[t._v("/api/v1/players/[playerLookup]/admin/warptoloc")])]),t._v(" "),a("p",[a("strong",[t._v("User Lookup")]),t._v(" : "),a("code",[t._v("Username or user id.")])]),t._v(" "),a("p",[a("strong",[t._v("Player Lookup")]),t._v(" : "),a("code",[t._v("Player name or player id.")])]),t._v(" "),a("p",[a("strong",[t._v("Method")]),t._v(" : "),a("code",[t._v("POST")])]),t._v(" "),a("p",[a("strong",[t._v("Authorization Required")]),t._v(" : "),a("code",[t._v("Yes")])]),t._v(" "),a("p",[a("strong",[t._v("Content Type")]),t._v(" : "),a("code",[t._v("application/json")])]),t._v(" "),a("p",[a("strong",[t._v("Body")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Required")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("mapid")]),t._v(" "),a("td",[t._v("guid")]),t._v(" "),a("td",[t._v("Id of the map to warp the player to.")]),t._v(" "),a("td",[t._v("✔️")])]),t._v(" "),a("tr",[a("td",[t._v("x")]),t._v(" "),a("td",[t._v("int")]),t._v(" "),a("td",[t._v("X coordinate on the map to warp the player to.")]),t._v(" "),a("td",[t._v("✔️")])]),t._v(" "),a("tr",[a("td",[t._v("y")]),t._v(" "),a("td",[t._v("int")]),t._v(" "),a("td",[t._v("Y coordinate on the map to warp the player to.")]),t._v(" "),a("td",[t._v("✔️")])])])]),t._v(" "),a("p",[a("strong",[t._v("Example")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"MapId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"693b7c8f-61ac-4517-b27c-f3b0a3b98542"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"X"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Y"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("hr"),t._v(" "),a("h3",{attrs:{id:"response-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-6"}},[t._v("#")]),t._v(" Response")]),t._v(" "),a("p",[a("strong",[t._v("Condition")]),t._v(" : Warp was successful.")]),t._v(" "),a("p",[a("strong",[t._v("Code")]),t._v(" : "),a("code",[t._v("200 OK")])]),t._v(" "),a("p",[a("strong",[t._v("Example")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Message"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"Warped 'jcsnider' to 693b7c8f-61ac-4517-b27c-f3b0a3b98542 (0, 10).\"")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"kick"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kick"}},[t._v("#")]),t._v(" Kick")]),t._v(" "),a("p",[t._v("Kicks a player from the game.")]),t._v(" "),a("h3",{attrs:{id:"request-7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-7"}},[t._v("#")]),t._v(" Request")]),t._v(" "),a("p",[a("strong",[t._v("URL")]),t._v(" : "),a("code",[t._v("/api/v1/users/[userLookup]/admin/kick")]),t._v(" OR "),a("code",[t._v("/api/v1/players/[playerLookup]/admin/kick")])]),t._v(" "),a("p",[a("strong",[t._v("User Lookup")]),t._v(" : "),a("code",[t._v("Username or user id.")])]),t._v(" "),a("p",[a("strong",[t._v("Player Lookup")]),t._v(" : "),a("code",[t._v("Player name or player id.")])]),t._v(" "),a("p",[a("strong",[t._v("Method")]),t._v(" : "),a("code",[t._v("POST")])]),t._v(" "),a("p",[a("strong",[t._v("Authorization Required")]),t._v(" : "),a("code",[t._v("Yes")])]),t._v(" "),a("p",[a("strong",[t._v("Content Type")]),t._v(" : "),a("code",[t._v("application/json")])]),t._v(" "),a("p",[a("strong",[t._v("Body")]),t._v(": "),a("code",[t._v("NA")])]),t._v(" "),a("hr"),t._v(" "),a("h3",{attrs:{id:"response-7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-7"}},[t._v("#")]),t._v(" Response")]),t._v(" "),a("p",[a("strong",[t._v("Condition")]),t._v(" : Kick was successful.")]),t._v(" "),a("p",[a("strong",[t._v("Code")]),t._v(" : "),a("code",[t._v("200 OK")])]),t._v(" "),a("p",[a("strong",[t._v("Example")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Message"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"jcsnider has been kicked by the server!"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"kill"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kill"}},[t._v("#")]),t._v(" Kill")]),t._v(" "),a("p",[t._v("Kills a player in the game.")]),t._v(" "),a("h3",{attrs:{id:"request-8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-8"}},[t._v("#")]),t._v(" Request")]),t._v(" "),a("p",[a("strong",[t._v("URL")]),t._v(" : "),a("code",[t._v("/api/v1/users/[userLookup]/admin/kill")]),t._v(" OR "),a("code",[t._v("/api/v1/players/[playerLookup]/admin/kill")])]),t._v(" "),a("p",[a("strong",[t._v("User Lookup")]),t._v(" : "),a("code",[t._v("Username or user id.")])]),t._v(" "),a("p",[a("strong",[t._v("Player Lookup")]),t._v(" : "),a("code",[t._v("Player name or player id.")])]),t._v(" "),a("p",[a("strong",[t._v("Method")]),t._v(" : "),a("code",[t._v("POST")])]),t._v(" "),a("p",[a("strong",[t._v("Authorization Required")]),t._v(" : "),a("code",[t._v("Yes")])]),t._v(" "),a("p",[a("strong",[t._v("Content Type")]),t._v(" : "),a("code",[t._v("application/json")])]),t._v(" "),a("p",[a("strong",[t._v("Body")]),t._v(": "),a("code",[t._v("NA")])]),t._v(" "),a("hr"),t._v(" "),a("h3",{attrs:{id:"response-8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-8"}},[t._v("#")]),t._v(" Response")]),t._v(" "),a("p",[a("strong",[t._v("Condition")]),t._v(" : Kill was successful.")]),t._v(" "),a("p",[a("strong",[t._v("Code")]),t._v(" : "),a("code",[t._v("200 OK")])]),t._v(" "),a("p",[a("strong",[t._v("Example")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Message"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"jcsnider has been killed!"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);