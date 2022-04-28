(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{671:function(e,t,a){"use strict";a.r(t);var r=a(36),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"database"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#database"}},[e._v("#")]),e._v(" Database")]),e._v(" "),a("p",[e._v("Intersect has two databases, one that stores game data such as items, maps, resources, events, etc and another that stores all data related to player accounts.")]),e._v(" "),a("p",[e._v("The tables in both databases are automatically generated based on contexts. The player context and game context are defined in the following source files:")]),e._v(" "),a("ul",[a("li",[e._v("Intersect.Server/Database/GameData/GameContext.cs")]),e._v(" "),a("li",[e._v("Intersect.Server/Database/PlayerData/PlayerContext.cs")])]),e._v(" "),a("p",[e._v("Contexts consist DBSets which end up being tables. DBSets are created from C# Classes.")]),e._v(" "),a("p",[e._v("The context classes also define relationships between the tables. You can learn more about that from the Entity Framework Core documentation if interested.")]),e._v(" "),a("h2",{attrs:{id:"database-fields"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#database-fields"}},[e._v("#")]),e._v(" Database Fields")]),e._v(" "),a("p",[e._v("Fields are automatically created from public properties in a class much like Tables are automatically created from Classes within DBSets in a context.")]),e._v(" "),a("p",[e._v("If you look at the Users class in the server (Interect.Server/Database/PlayerData/User.cs) you will see fields for the user's id, name, password, salt, email, and more.")]),e._v(" "),a("p",[e._v("Please note, Entity Framework can only handle basic types (integers, strings, blobs, and references to other classes that exist as a DBSet). Due to these limitations we mark some complex fields as "),a("code",[e._v("[NotMapped]")]),e._v(" and then have a secondary string field that converts the complex field to json. For an example of this see User.Power and User.PowerJson. Notice how the PowerJson property has a column name property so it is stored in the database in the Power field.")]),e._v(" "),a("h2",{attrs:{id:"adding-fields"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adding-fields"}},[e._v("#")]),e._v(" Adding Fields")]),e._v(" "),a("p",[e._v("In order to add a field to the database create a new public property in a class that is stored within Entity Framework. In this example I am going to add a field for each User that tracks their last used ip address.")]),e._v(" "),a("p",[e._v("I added the following property to the User class:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("public string LastUsedIp { get; set; }\n")])])]),a("h2",{attrs:{id:"creating-a-migration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-migration"}},[e._v("#")]),e._v(" Creating a Migration")]),e._v(" "),a("p",[e._v("After making changes to Entity Framework classes you will need to create a migration. In order to create the migration there are several setup steps:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.ascensiongamedev.com/resources/filehost/13a8de43d24b7595cacb37c5c99c65f1.png",target:"_blank",rel:"noopener noreferrer"}},[e._v("Set your startup project to Intersect Server, and the build type to NoFody"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.ascensiongamedev.com/resources/filehost/73271e21395e697efb06cf7d28f0f14d.png",target:"_blank",rel:"noopener noreferrer"}},[e._v("Now build your server. Building with the NoFody configuration will generate a bunch of required dlls."),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.ascensiongamedev.com/resources/filehost/c51298fbaf5e35a654b43c915ab5375f.png",target:"_blank",rel:"noopener noreferrer"}},[e._v("In VS open a Nuget Package Manager Console. (Tools -> Nuget Package Manager -> Package Manager Console)"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.ascensiongamedev.com/resources/filehost/2eea276e85b6258c5b844f392acdfd15.png",target:"_blank",rel:"noopener noreferrer"}},[e._v("Within the package manager console set your default project to Intersect.Server"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("Now you're ready to generate the migration files. Enter the following command into the package manager console:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Add-Migration -Context [ContextHere] [InsertMigrationNameHere]\n")])])]),a("p",[e._v("Replace "),a("code",[e._v("[ContextHere]")]),e._v(" with either GameContext or PlayerContext depending on which database you modified.")]),e._v(" "),a("p",[e._v("Replace "),a("code",[e._v("[InsertMigrationNameHere]")]),e._v(" with a short identifier of what the migration is for.")]),e._v(" "),a("p",[e._v("For example I added a LastUsedId property to the Users class. In this case I would use the following command:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Add-Migration -Context PlayerContext AddingLastUsedIpToUsers\n")])])]),a("p",[e._v("Your migration should appear as a new "),a("a",{attrs:{href:"https://www.ascensiongamedev.com/resources/filehost/500983d59ef1b372947c3c2e9ff5aa47.png",target:"_blank",rel:"noopener noreferrer"}},[e._v("source code file"),a("OutboundLink")],1),e._v(". Go ahead and save it.")]),e._v(" "),a("p",[e._v("Now that we're done change the solution configuration from NoFody back to Debug and run your server.")]),e._v(" "),a("p",[e._v("You will be greeted with the "),a("a",{attrs:{href:"https://www.ascensiongamedev.com/resources/filehost/a0eca1c08ed9ad5b5324ef4502cded49.png",target:"_blank",rel:"noopener noreferrer"}},[e._v("migration prompt"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"migration-limitations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#migration-limitations"}},[e._v("#")]),e._v(" Migration Limitations")]),e._v(" "),a("p",[e._v("Due to (current) limitations in Sqlite fields cannot be renamed or removed. We have a few fields that we keep around that are not in use due to these limitations. It is expected that this functionality will someday be available.")]),e._v(" "),a("h2",{attrs:{id:"migrations-are-one-way"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#migrations-are-one-way"}},[e._v("#")]),e._v(" Migrations are one-way")]),e._v(" "),a("p",[e._v("Unfortunately migrations are one-way due to limitations above with Sqlite. If users want to uninstall source modifications that alter the database they will have to use external tools to remove the database fields or revert to a backup before the modification was installed.")])])}),[],!1,null,null,null);t.default=s.exports}}]);