"use strict";(self.webpackChunkall_in_one_solana=self.webpackChunkall_in_one_solana||[]).push([[8677],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||g[m]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},61725:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={title:"Porting a program to Unity",sidebar_position:32,tags:["solana-cook-book","game","program","unity"]},i="Porting a program to Unity",l={unversionedId:"references/gaming/porting-anchor-to-unity",id:"references/gaming/porting-anchor-to-unity",title:"Porting a program to Unity",description:"When you have written a solana program you now maybe want to use it in the Unity Game engine. Fortunately there is a code generator which lets you port a anchor idl (a json representation of a solana program) to C#",source:"@site/docs/cookbook-zh/references/gaming/porting-anchor-to-unity.md",sourceDirName:"references/gaming",slug:"/references/gaming/porting-anchor-to-unity",permalink:"/cookbook-zh/references/gaming/porting-anchor-to-unity",draft:!1,editUrl:"https://github.com/CreatorsDAO/all-in-one-solana/tree/main/docs/cookbook-zh/references/gaming/porting-anchor-to-unity.md",tags:[{label:"solana-cook-book",permalink:"/cookbook-zh/tags/solana-cook-book"},{label:"game",permalink:"/cookbook-zh/tags/game"},{label:"program",permalink:"/cookbook-zh/tags/program"},{label:"unity",permalink:"/cookbook-zh/tags/unity"}],version:"current",lastUpdatedBy:"Davirain",lastUpdatedAt:1693738432,formattedLastUpdatedAt:"Sep 3, 2023",sidebarPosition:32,frontMatter:{title:"Porting a program to Unity",sidebar_position:32,tags:["solana-cook-book","game","program","unity"]},sidebar:"tutorialSidebar",previous:{title:"How interact with tokens in program",permalink:"/cookbook-zh/references/gaming/interact-with-tokens"},next:{title:"Distribution",permalink:"/cookbook-zh/references/gaming/distribution"}},s={},c=[{value:"Generating the Client",id:"generating-the-client",level:2},{value:"Building the Transaction in Unity C#",id:"building-the-transaction-in-unity-c",level:2}],u={toc:c},p="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"porting-a-program-to-unity"},"Porting a program to Unity"),(0,r.kt)("p",null,"When you have written a solana program you now maybe want to use it in the Unity Game engine. Fortunately there is a code generator which lets you port a anchor idl (a json representation of a solana program) to C#"),(0,r.kt)("h2",{id:"generating-the-client"},"Generating the Client"),(0,r.kt)("p",null,"When using Anchor you will be able to generate an IDL file which is a JSON representation of your program.\nWith this IDL you can then generate different clients. For example JS or C# to Unity.  ",(0,r.kt)("br",null),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/magicblock-labs/Solana.Unity.Anchor"},"IDL to C# Converter"),(0,r.kt)("br",null)),(0,r.kt)("p",null,"These two lines will generate a C# client for the game."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"dotnet tool install Solana.Unity.Anchor.Tool\ndotnet anchorgen -i idl/file.json -o src/ProgramCode.cs\n")),(0,r.kt)("p",null,"This will generate you a C# representation of you program, which lets you deserialize the data and easily create instructions to the program."),(0,r.kt)("h2",{id:"building-the-transaction-in-unity-c"},"Building the Transaction in Unity C#"),(0,r.kt)("p",null,"Within Unity game engine we can then use the ",(0,r.kt)("a",{parentName:"p",href:"https://assetstore.unity.com/packages/decentralization/infrastructure/solana-sdk-for-unity-246931"},"Solana Unity SDK")," to interact with the program."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"First we find the on chain adress of the game data account with TryFindProgramAddress.\nWe need to pass in this account to the transaction so that the Solana runtime knows that we want to change this account.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Next we use the generated client to create a MoveRight instruction.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Then we request a block hash from an RPC node. This is needed so that Solana knows how long the transaction will be valid.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Next we set the fee payer to be the players wallet.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Then we add the move right instruction to the Transaction. We can also add multiple instructions to a singe transaction if needed.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Afterwards the transaction gets signed and then send to the RPC node for processing.\nSolana has different Commitment levels. If we set the commitment level to Confirmed we will be able to get the new state already within the next 500ms.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/Woody4618/SolPlay_Unity_SDK/tree/main/Assets/SolPlay/Examples/TinyAdventure"},"Full C# Source Code")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c#"},'public async void MoveRight()\n{\n    PublicKey.TryFindProgramAddress(new[]\n    {\n        Encoding.UTF8.GetBytes("level1")\n    },\n    ProgramId, out gameDataAccount, out var bump);\n\n    MoveRightAccounts account = new MoveRightAccounts();\n    account.GameDataAccount = gameDataAccount;\n    TransactionInstruction moveRightInstruction = TinyAdventureProgram.MoveRight(account, ProgramId);\n\n    var walletHolderService = ServiceFactory.Resolve<WalletHolderService>();\n    var result = await walletHolderService.BaseWallet.ActiveRpcClient.GetRecentBlockHashAsync(Commitment.Confirmed);\n\n    Transaction transaction = new Transaction();\n    transaction.FeePayer = walletHolderService.BaseWallet.Account.PublicKey;\n    transaction.RecentBlockHash = result.Result.Value.Blockhash;\n    transaction.Signatures = new List<SignaturePubKeyPair>();\n    transaction.Instructions = new List<TransactionInstruction>();\n    transaction.Instructions.Add(moveRightInstruction);\n\n    Transaction signedTransaction = await walletHolderService.BaseWallet.SignTransaction(transaction);\n\n    RequestResult<string> signature = await walletHolderService.BaseWallet.ActiveRpcClient.SendTransactionAsync(\n        Convert.ToBase64String(signedTransaction.Serialize()),\n        true, Commitment.Confirmed);\n}\n')))}g.isMDXComponent=!0}}]);