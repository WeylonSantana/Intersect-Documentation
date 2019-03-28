(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{197:function(e,t,a){"use strict";a.r(t);var r=a(0),s=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"mapping"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mapping","aria-hidden":"true"}},[e._v("#")]),e._v(" Mapping")]),e._v(" "),a("p",[e._v("A large majority of your time creating a 2D ORPG will be spent designing maps in order to create an expansive game world.")]),e._v(" "),a("p",[e._v("The following steps will get you started on creating your first map.")]),e._v(" "),a("p",[a("strong",[e._v("Start Mapping:")])]),e._v(" "),a("blockquote",[a("ul",[a("li",[e._v("Click on the "),a("strong",[e._v("Pen Tool")]),e._v(" "),a("img",{attrs:{src:"http://www.ascensiongamedev.com/resources/filehost/a20847da4a43f52234ccda97b1125a88.png",alt:"Pen Tool"}}),e._v(" in the menubar above your map.")]),e._v(" "),a("li",[e._v("Select "),a("strong",[e._v("Tiles")]),e._v(" in the "),a("strong",[e._v("Map Layers")]),e._v(" pane.")]),e._v(" "),a("li",[e._v("Use your mouse to select a tile or group of tiles to place in your empty map. "),a("a",{attrs:{href:"http://www.ascensiongamedev.com/resources/filehost/03856cde2da1c67f07b0123b90b6b0dc.gif","data-lity":""}},[a("i",{staticClass:"fa fa-play-circle"})])]),e._v(" "),a("li",[e._v("Finally click and drag your mouse on the empty map to place your selected tiles. "),a("a",{attrs:{href:"http://www.ascensiongamedev.com/resources/filehost/03856cde2da1c67f07b0123b90b6b0dc.gif","data-lity":""}},[a("i",{staticClass:"fa fa-play-circle"})])]),e._v(" "),a("li",[e._v("Congratulations, you're mapping! Don't forget to save your changes by hitting the save icon in the top left of your screen. "),a("img",{attrs:{src:"http://www.ascensiongamedev.com/resources/filehost/7f974a7fc91ef6666e3211c8622fe088.png",alt:""}})])])]),e._v(" "),a("h2",{attrs:{id:"layers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#layers","aria-hidden":"true"}},[e._v("#")]),e._v(" Layers")]),e._v(" "),a("p",[e._v("While creating your maps you may realize that you want to place objects like houses, trees, and shrubs above the ground. This is where layers come into play. Under the "),a("strong",[e._v("Tiles")]),e._v(" tab in your "),a("strong",[e._v("Map Layers")]),e._v(" panel you will see a group of five icons.")]),e._v(" "),a("p",[a("img",{attrs:{src:"http://www.ascensiongamedev.com/resources/filehost/e96fbf144210c97ebdd679bfac49e06a.png",alt:"Map Layers"}})]),e._v(" "),a("p",[e._v("Each of these icons represent a tile layer. When you left click an icon you will switch to that layer. The character's face on the selected layer will have a little color to it.")]),e._v(" "),a("p",[e._v("Tiles on the first layer will appear below tiles on all other layers. Tiles on the second layer will appear below the tiles on the third, fourth, and fifth layers.")]),e._v(" "),a("p",[e._v("Before going further, let's give a name to these layers. We refer to them as:")]),e._v(" "),a("ul",[a("li",[e._v("Ground")]),e._v(" "),a("li",[e._v("Mask")]),e._v(" "),a("li",[e._v("Mask 2")]),e._v(" "),a("li",[e._v("Fringe")]),e._v(" "),a("li",[e._v("Fringe 2")])]),e._v(" "),a("p",[e._v("Utilizing multiple tile layers in your maps is how you can place trees, and other objects on top of other tiles. "),a("a",{attrs:{href:"http://www.ascensiongamedev.com/resources/filehost/1b0126badf74d9bcdd0fd115e476c106.gif","data-lity":""}},[a("i",{staticClass:"fa fa-play-circle"})])]),e._v(" "),a("p",[e._v("Notice how the last two layer icons are drawn over the character's face? Those are the two Fringe layers, and they exist above players and npcs in game.")]),e._v(" "),a("p",[e._v("In the demo above I placed entire trees on the Mask layer. The tiles on the Ground layer and the trees on the Mask layer are all drawn below my character in the game giving an unwanted effect of my character walking over the entire tree.")]),e._v(" "),a("p",[a("img",{attrs:{src:"http://www.ascensiongamedev.com/resources/filehost/5db4fbdae4be4fe060651bb3849d2300.gif",alt:""}})]),e._v(" "),a("p",[e._v("The solution isn't as simple as moving the whole tree to the Fringe layer, we don't want the tree trunk to be above my character "),a("a",{attrs:{href:"http://www.ascensiongamedev.com/resources/filehost/6814ea253162f66d65bae1012f9ca605.gif","data-lity":""}},[a("i",{staticClass:"fa fa-play-circle"})]),e._v(", we need to find a compromise.")]),e._v(" "),a("p",[e._v("The solution in this case is to place the bottom half of the tree on the Mask layer, and the top half of the tree on the Fringe layer. "),a("a",{attrs:{href:"http://www.ascensiongamedev.com/resources/filehost/be935bfd755be1bf55ed9ec34e989949.gif","data-lity":""}},[a("i",{staticClass:"fa fa-play-circle"})])]),e._v(" "),a("p",[e._v("We finally end up with the effect that we're looking for all thanks to layers!")]),e._v(" "),a("p",[a("img",{attrs:{src:"http://www.ascensiongamedev.com/resources/filehost/6c2d4d1d52fd65145f5e44271b3b1bd1.gif",alt:"Working Layers"}})]),e._v(" "),a("h2",{attrs:{id:"attributes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#attributes","aria-hidden":"true"}},[e._v("#")]),e._v(" Attributes")]),e._v(" "),a("p",[e._v("If you followed the steps above you probably noticed a big flaw in our game right now. You can walk "),a("strong",[e._v("through")]),e._v(" the tree! "),a("a",{attrs:{href:"http://www.ascensiongamedev.com/resources/filehost/194f6d759286418f42910c9aafca0962.gif","data-lity":""}},[a("i",{staticClass:"fa fa-play-circle"})])]),e._v(" "),a("p",[e._v("No worries though, this section will help fix that! Attributes are like a sixth layer of the map. Attributes allow you to place tiles with special properties such as being blocks that players cannot pass.")]),e._v(" "),a("p",[e._v("Go back to your editor and open the "),a("strong",[e._v("Attributes")]),e._v(" tab in the "),a("strong",[e._v("Map Layers")]),e._v(" panel. Select the "),a("strong",[e._v("Block")]),e._v(" attribute and place it over the trunk of your tree. "),a("a",{attrs:{href:"http://www.ascensiongamedev.com/resources/filehost/60984ce488de64b42ddec0bed012cb52.gif","data-lity":""}},[a("i",{staticClass:"fa fa-play-circle"})])]),e._v(" "),a("p",[e._v("Using the "),a("strong",[e._v("Block")]),e._v(" attribute you will find that you finally have a tree that renders correctly and, despite your best efforts, you won't be able to phase through.")]),e._v(" "),a("p",[a("img",{attrs:{src:"http://www.ascensiongamedev.com/resources/filehost/8ae4ea6cfdb97b1f7e1cf0efa4d1677a.gif",alt:"No More No Clip!"}})]),e._v(" "),a("p",[e._v("You won't use any attribute more than the "),a("strong",[e._v("Block")]),e._v(" attribute. That being said here is a quick rundown of the rest of the attributes and what they do.")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Attribute")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("Block")]),e._v(" "),a("td",[e._v("Marks a tile on the map as being unpassable, neither npcs nor players can traverse through blocked tiles.")])]),e._v(" "),a("tr",[a("td",[e._v("NPC Avoid")]),e._v(" "),a("td",[e._v("Acts as a block tile for npcs only. This is often used so monsters won't enter friendly areas or block narrow pathways.")])]),e._v(" "),a("tr",[a("td",[e._v("Warp")]),e._v(" "),a("td",[e._v("When a player steps on a warp tile they will be teleported to a location in the game of your choosing.")])]),e._v(" "),a("tr",[a("td",[e._v("Item Spawn")]),e._v(" "),a("td",[e._v("An item of your choosing and design will periodically spawn on this time.")])]),e._v(" "),a("tr",[a("td",[e._v("Map Sound")]),e._v(" "),a("td",[e._v("A sound effect will be playing on tiles where this attribute are placeed. The sound will grow louder and softer at the player approaches and moves away from this attribute.")])]),e._v(" "),a("tr",[a("td",[e._v("Resource")]),e._v(" "),a("td",[e._v("A harvestable resource will spawn on this tile. This is commonly used for woodcutting, mining, fishing, and more. We will discuss this later in the resource editor documentation.")])]),e._v(" "),a("tr",[a("td",[e._v("Animation")]),e._v(" "),a("td",[e._v("An animation from the animation editor will play on this tile. Animations when properly setup can bring your game world to life. Ex: "),a("a",{attrs:{href:"https://www.freemmorpgmaker.com/wp-content/uploads/2017/10/windmill.gif","data-lity":""}},[a("i",{staticClass:"fa fa-play-circle"})])])]),e._v(" "),a("tr",[a("td",[e._v("Grappling Stone")]),e._v(" "),a("td",[e._v("When combined with grappling hook projectiles you can allow your character to traverse terrain that he wouldn't be able to otherwise. This will be discussed in-depth in the projectile editor documentation and examples.")])]),e._v(" "),a("tr",[a("td",[e._v("Slide")]),e._v(" "),a("td",[e._v("This tile forces your player to slide in a direction of your choosing. You can use it for puzzles, traps, and more!")])])])]),e._v(" "),a("h2",{attrs:{id:"toolbar"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#toolbar","aria-hidden":"true"}},[e._v("#")]),e._v(" Toolbar")]),e._v(" "),a("h2",{attrs:{id:"properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#properties","aria-hidden":"true"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),a("h2",{attrs:{id:"lights"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lights","aria-hidden":"true"}},[e._v("#")]),e._v(" Lights")]),e._v(" "),a("h2",{attrs:{id:"events"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#events","aria-hidden":"true"}},[e._v("#")]),e._v(" Events")])])}],!1,null,null,null);t.default=s.exports}}]);