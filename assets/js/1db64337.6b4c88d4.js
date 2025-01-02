"use strict";(self.webpackChunkdocs_craft_book_pipe_predicates=self.webpackChunkdocs_craft_book_pipe_predicates||[]).push([[413],{3022:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=t(4848),s=t(8453);const r={sidebar_position:1,slug:"/"},a="Overview",o={id:"overview",title:"Overview",description:"There exists a collection of game-mechanical features, all packaged and configurable via the plugin CraftBook; one being their ingenious Pipes-system, which allows its users to transport items in between containers efficiently, enabling automatic sorting systems and the like. While actually using this extension in a day-to-day situation, I noticed how I constantly found myself restricted by the limiting nature of numeric item-ids when it comes to specifying output-filters; this plugin of mine aims at integrating my versatile ItemPredicateParser seamlessly into the experience, in order to vastly increase the user's freedom.",source:"@site/docs/overview.md",sourceDirName:".",slug:"/",permalink:"/docs-craft-book-pipe-predicates/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/"},sidebar:"documentationSidebar",next:{title:"Configuration",permalink:"/docs-craft-book-pipe-predicates/configuration"}},d={},c=[{value:"Targetting Outputs",id:"targetting-outputs",level:2},{value:"Commands And Permissions",id:"commands-and-permissions",level:2},{value:"Get Entered Predicate",id:"get-entered-predicate",level:3},{value:"Get Expanded Predicate",id:"get-expanded-predicate",level:3},{value:"Set Predicate With Default Language",id:"set-predicate-with-default-language",level:3},{value:"Set Predicate With Custom Language",id:"set-predicate-with-custom-language",level:3},{value:"Remove Existing Predicate",id:"remove-existing-predicate",level:3},{value:"Reload Configuration",id:"reload-configuration",level:3},{value:"Protection-Checks",id:"protection-checks",level:2}];function l(e){const i={a:"a",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.header,{children:(0,n.jsx)(i.h1,{id:"overview",children:"Overview"})}),"\n",(0,n.jsxs)(i.p,{children:["There exists a collection of game-mechanical features, all packaged and configurable via the plugin ",(0,n.jsx)(i.a,{href:"https://enginehub.org/craftbook",children:"CraftBook"}),"; one being their ingenious ",(0,n.jsx)(i.a,{href:"https://craftbook.enginehub.org/en/3.x/mechanics/pipes/",children:"Pipes"}),"-system, which allows its users to transport items in between containers efficiently, enabling automatic sorting systems and the like. While actually using this extension in a day-to-day situation, I noticed how I constantly found myself restricted by the limiting nature of numeric item-ids when it comes to specifying output-filters; this plugin of mine aims at integrating my versatile ",(0,n.jsx)(i.a,{href:"https://blvckbytes.github.io/docs-item-predicate-parser",children:"ItemPredicateParser"})," seamlessly into the experience, in order to vastly increase the user's freedom."]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Pipe Predicate",src:t(2832).A+"",width:"600",height:"574"})}),"\n",(0,n.jsx)(i.h2,{id:"targetting-outputs",children:"Targetting Outputs"}),"\n",(0,n.jsx)(i.p,{children:"In order to create as little friction while configuring pipe-outputs as possible, targetting nodes is rather flexible and sensible: simply look at any part of the output, be it the container, the piston, or the sign itself; this way, pipes can be configured without having to be able to physically access the sign, which can be a life-saver in crowded setups."}),"\n",(0,n.jsx)(i.h2,{id:"commands-and-permissions",children:"Commands And Permissions"}),"\n",(0,n.jsxs)(i.p,{children:["The command's name and aliases are arbitrarily configurable; going forward, ",(0,n.jsx)(i.code,{children:"/pipr"})," (",(0,n.jsx)(i.strong,{children:"pi"}),"pe ",(0,n.jsx)(i.strong,{children:"pr"}),"edicate) represents said main-command, with various actions being realized via sub-commands thereof."]}),"\n",(0,n.jsx)(i.h3,{id:"get-entered-predicate",children:"Get Entered Predicate"}),"\n",(0,n.jsx)(i.p,{children:"Retrieve the pipe-output's current predicate, exactly as entered (possibly containing partial syllables)."}),"\n",(0,n.jsxs)(i.p,{children:["Command: ",(0,n.jsx)(i.code,{children:"/pipr Get-Entered"}),(0,n.jsx)(i.br,{}),"\n","Permission: ",(0,n.jsx)(i.code,{children:"craftbookpipepredicates.command.pipepredicate.read"})]}),"\n",(0,n.jsx)(i.h3,{id:"get-expanded-predicate",children:"Get Expanded Predicate"}),"\n",(0,n.jsx)(i.p,{children:"Retrieve the pipe-output's current predicate, in its fully expanded version."}),"\n",(0,n.jsxs)(i.p,{children:["Command: ",(0,n.jsx)(i.code,{children:"/pipr Get-Expanded"}),(0,n.jsx)(i.br,{}),"\n","Permission: ",(0,n.jsx)(i.code,{children:"craftbookpipepredicates.command.pipepredicate.read"})]}),"\n",(0,n.jsx)(i.h3,{id:"set-predicate-with-default-language",children:"Set Predicate With Default Language"}),"\n",(0,n.jsx)(i.p,{children:"Initialize or overwrite the pipe-output's current predicate using the language configured as a default in the plugin's configuration-file."}),"\n",(0,n.jsxs)(i.p,{children:["Command: ",(0,n.jsx)(i.code,{children:"/pipr Set <predicate>"}),(0,n.jsx)(i.br,{}),"\n","Permission: ",(0,n.jsx)(i.code,{children:"craftbookpipepredicates.command.pipepredicate.modify"})]}),"\n",(0,n.jsx)(i.h3,{id:"set-predicate-with-custom-language",children:"Set Predicate With Custom Language"}),"\n",(0,n.jsx)(i.p,{children:"Initialize or overwrite the pipe-output's current predicate using a language chosen from the list of supported languages."}),"\n",(0,n.jsxs)(i.p,{children:["Command: ",(0,n.jsx)(i.code,{children:"/pipr Set-Localized <language> <predicate>"}),(0,n.jsx)(i.br,{}),"\n","Permission: ",(0,n.jsx)(i.code,{children:"craftbookpipepredicates.command.pipepredicate.modify"})]}),"\n",(0,n.jsx)(i.h3,{id:"remove-existing-predicate",children:"Remove Existing Predicate"}),"\n",(0,n.jsx)(i.p,{children:"Remove a possibly existing predicate and thereby exit predicate-mode on the pipe-output at hand."}),"\n",(0,n.jsxs)(i.p,{children:["Command: ",(0,n.jsx)(i.code,{children:"/pipr Remove"}),(0,n.jsx)(i.br,{}),"\n","Permission: ",(0,n.jsx)(i.code,{children:"craftbookpipepredicates.command.pipepredicate.modify"})]}),"\n",(0,n.jsx)(i.h3,{id:"reload-configuration",children:"Reload Configuration"}),"\n",(0,n.jsxs)(i.p,{children:["Reloads the configuration-file ",(0,n.jsx)(i.code,{children:"config.yml"})," as well as its configured pre-processor input (language-file), reflecting changes immediately."]}),"\n",(0,n.jsxs)(i.p,{children:["Command: ",(0,n.jsx)(i.code,{children:"/pipr Reload"}),(0,n.jsx)(i.br,{}),"\n","Permission: ",(0,n.jsx)(i.code,{children:"craftbookpipepredicates.command.pipepredicate.reload"})]}),"\n",(0,n.jsx)(i.h2,{id:"protection-checks",children:"Protection-Checks"}),"\n",(0,n.jsxs)(i.p,{children:["Since pipe-predicates are attached to a pipe's output-piston's sign virtually, meaning without the requirement of interacting with the world itself, in order to determine whether the player is allowed to read/modify the attached predicate on the sign in question, a ",(0,n.jsx)(i.em,{children:"fake"})," sign-edit event is produced: if said event is not cancelled by any other plugin, the user may execute their command - otherwise, execution is denied. In short: in order to be able to work with predicates, one needs to possess the privileges to edit the corresponding sign. This simple yet effective check should account for all various protection-systems and scenarios."]})]})}function p(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},2832:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/pipe_predicate-3dc484c4f7e2b3fd1d365028815a41b8.gif"},8453:(e,i,t)=>{t.d(i,{R:()=>a,x:()=>o});var n=t(6540);const s={},r=n.createContext(s);function a(e){const i=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(r.Provider,{value:i},e.children)}}}]);