"use strict";(self.webpackChunkall_in_one_solana=self.webpackChunkall_in_one_solana||[]).push([[9848],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>y});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),i=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=i(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=i(a),k=l,y=c["".concat(o,".").concat(k)]||c[k]||m[k]||r;return a?n.createElement(y,s(s({ref:t},u),{},{components:a})):n.createElement(y,s({ref:t},u))}));function y(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,s=new Array(r);s[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[c]="string"==typeof e?e:l,s[1]=p;for(var i=2;i<r;i++)s[i]=a[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},55203:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>y,frontMatter:()=>p,metadata:()=>i,toc:()=>c});var n=a(87462),l=(a(67294),a(3905)),r=a(74866),s=a(85162);const p={title:"\u5bc6\u94a5\u5bf9\u548c\u94b1\u5305",sidebar_position:16,tags:["solana-cook-book","wallet","keypair"]},o="\u5bc6\u94a5\u5bf9\u548c\u94b1\u5305",i={unversionedId:"references/keypairs-and-wallets",id:"references/keypairs-and-wallets",title:"\u5bc6\u94a5\u5bf9\u548c\u94b1\u5305",description:"\u5982\u4f55\u751f\u6210\u65b0\u7684\u5bc6\u94a5\u5bf9",source:"@site/docs/cookbook-zh/references/keypairs-and-wallets.md",sourceDirName:"references",slug:"/references/keypairs-and-wallets",permalink:"/cookbook-zh/references/keypairs-and-wallets",draft:!1,editUrl:"https://github.com/CreatorsDAO/all-in-one-solana/tree/main/docs/cookbook-zh/references/keypairs-and-wallets.md",tags:[{label:"solana-cook-book",permalink:"/cookbook-zh/tags/solana-cook-book"},{label:"wallet",permalink:"/cookbook-zh/tags/wallet"},{label:"keypair",permalink:"/cookbook-zh/tags/keypair"}],version:"current",lastUpdatedBy:"Davirain",lastUpdatedAt:1693738432,formattedLastUpdatedAt:"Sep 3, 2023",sidebarPosition:16,frontMatter:{title:"\u5bc6\u94a5\u5bf9\u548c\u94b1\u5305",sidebar_position:16,tags:["solana-cook-book","wallet","keypair"]},sidebar:"tutorialSidebar",previous:{title:"\u672c\u5730\u5f00\u53d1",permalink:"/cookbook-zh/references/local-development"},next:{title:"\u53d1\u9001\u4ea4\u6613",permalink:"/cookbook-zh/references/basic-transactions"}},u={},c=[{value:"\u5982\u4f55\u751f\u6210\u65b0\u7684\u5bc6\u94a5\u5bf9",id:"\u5982\u4f55\u751f\u6210\u65b0\u7684\u5bc6\u94a5\u5bf9",level:2},{value:"\u5982\u4f55\u4ece\u5bc6\u94a5\u6062\u590d\u5bc6\u94a5\u5bf9",id:"\u5982\u4f55\u4ece\u5bc6\u94a5\u6062\u590d\u5bc6\u94a5\u5bf9",level:2},{value:"\u5982\u4f55\u9a8c\u8bc1\u5bc6\u94a5\u5bf9",id:"\u5982\u4f55\u9a8c\u8bc1\u5bc6\u94a5\u5bf9",level:2},{value:"\u5982\u4f55\u68c0\u67e5\u4e00\u4e2a\u516c\u94a5\u662f\u5426\u6709\u5173\u8054\u7684\u79c1\u94a5",id:"\u5982\u4f55\u68c0\u67e5\u4e00\u4e2a\u516c\u94a5\u662f\u5426\u6709\u5173\u8054\u7684\u79c1\u94a5",level:2},{value:"\u5982\u4f55\u751f\u6210\u52a9\u8bb0\u8bcd",id:"\u5982\u4f55\u751f\u6210\u52a9\u8bb0\u8bcd",level:2},{value:"\u5982\u4f55\u901a\u8fc7\u52a9\u8bb0\u8bcd\u6062\u590d\u5bc6\u94a5\u5bf9",id:"\u5982\u4f55\u901a\u8fc7\u52a9\u8bb0\u8bcd\u6062\u590d\u5bc6\u94a5\u5bf9",level:2},{value:"\u5982\u4f55\u751f\u6210\u81ea\u5b9a\u4e49\u5730\u5740(vanity address)",id:"\u5982\u4f55\u751f\u6210\u81ea\u5b9a\u4e49\u5730\u5740vanity-address",level:2},{value:"\u5982\u4f55\u4f7f\u7528\u94b1\u5305\u6765\u7b7e\u540d\u548c\u9a8c\u8bc1\u6d88\u606f",id:"\u5982\u4f55\u4f7f\u7528\u94b1\u5305\u6765\u7b7e\u540d\u548c\u9a8c\u8bc1\u6d88\u606f",level:2},{value:"\u5982\u4f55\u8fde\u63a5\u5230\u94b1\u5305",id:"\u5982\u4f55\u8fde\u63a5\u5230\u94b1\u5305",level:2},{value:"\u53cd\u5e94",id:"\u53cd\u5e94",level:3},{value:"Vue",id:"vue",level:3},{value:"Svelte",id:"svelte",level:3}],m={toc:c},k="wrapper";function y(e){let{components:t,...a}=e;return(0,l.kt)(k,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u5bc6\u94a5\u5bf9\u548c\u94b1\u5305"},"\u5bc6\u94a5\u5bf9\u548c\u94b1\u5305"),(0,l.kt)("h2",{id:"\u5982\u4f55\u751f\u6210\u65b0\u7684\u5bc6\u94a5\u5bf9"},"\u5982\u4f55\u751f\u6210\u65b0\u7684\u5bc6\u94a5\u5bf9"),(0,l.kt)("p",null,"\u5bf9\u4e8e\u4f7f\u7528Solana\u5e93\u6267\u884c\u5404\u79cd\u64cd\u4f5c\uff0c\u8bb8\u591a\u64cd\u4f5c\u90fd\u9700\u8981\u4e00\u4e2a\u5bc6\u94a5\u5bf9\u6216\u94b1\u5305\u3002\u5982\u679c\u4f60\u6b63\u5728\u8fde\u63a5\u5230\u4e00\u4e2a\u94b1\u5305\uff0c\u90a3\u4e48\u4f60\u4e0d\u5fc5\u62c5\u5fc3\u3002\u7136\u800c\uff0c\u5982\u679c\u4f60\u9700\u8981\u4e00\u4e2a\u5bc6\u94a5\u5bf9\uff0c\u4f60\u4f1a\u9700\u8981\u751f\u6210\u4e00\u4e2a\u3002"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"typescript",label:"typescript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"let keypair = Keypair.generate();\n"))),(0,l.kt)(s.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"keypair = Keypair()\n"))),(0,l.kt)(s.Z,{value:"cpp",label:"cpp",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"auto key_pair = Keypair::generate();\n"))),(0,l.kt)(s.Z,{value:"rust",label:"rust",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"let wallet = Keypair::new();\n"))),(0,l.kt)(s.Z,{value:"bash",label:"bash",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"solana-keygen new\n")))),(0,l.kt)("h2",{id:"\u5982\u4f55\u4ece\u5bc6\u94a5\u6062\u590d\u5bc6\u94a5\u5bf9"},"\u5982\u4f55\u4ece\u5bc6\u94a5\u6062\u590d\u5bc6\u94a5\u5bf9"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u5df2\u7ecf\u6709\u4e86\u5bc6\u94a5\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u8fd9\u4e2a\u5bc6\u94a5\u83b7\u53d6\u5bc6\u94a5\u5bf9\uff0c\u4ee5\u6d4b\u8bd5\u4f60\u7684dApp\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u4ece\u5b57\u8282\u4e2d\uff1a")),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"typescript",label:"typescript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"const keypair = Keypair.fromSecretKey(\n  Uint8Array.from([\n    174, 47, 154, 16, 202, 193, 206, 113, 199, 190, 53, 133, 169, 175, 31, 56,\n    222, 53, 138, 189, 224, 216, 117, 173, 10, 149, 53, 45, 73, 251, 237, 246,\n    15, 185, 186, 82, 177, 240, 148, 69, 241, 227, 167, 80, 141, 89, 240, 121,\n    121, 35, 172, 247, 68, 251, 226, 218, 48, 63, 176, 109, 168, 89, 238, 135,\n  ])\n);\n"))),(0,l.kt)(s.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"secret_key= [\n        174, 47, 154, 16, 202, 193, 206, 113, 199, 190, 53, 133, 169, 175, 31, 56, 222, 53, 138,\n        189, 224, 216, 117, 173, 10, 149, 53, 45, 73, 251, 237, 246, 15, 185, 186, 82, 177, 240,\n        148, 69, 241, 227, 167, 80, 141, 89, 240, 121, 121, 35, 172, 247, 68, 251, 226, 218, 48,\n        63, 176, 109, 168, 89, 238, 135,\n    ]\n\nkeypair = Keypair.from_bytes(secret_key)\n"))),(0,l.kt)(s.Z,{value:"cpp",label:"cpp",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"const uint8_t secret_key[] = {\n174, 47, 154, 16, 202, 193, 206, 113, 199, 190, 53, 133, 169, 175, 31, 56, 222, 53, 138,\n189, 224, 216, 117, 173, 10, 149, 53, 45, 73, 251, 237, 246, 15, 185, 186, 82, 177, 240,\n148, 69, 241, 227, 167, 80, 141, 89, 240, 121, 121, 35, 172, 247, 68, 251, 226, 218, 48,\n63, 176, 109, 168, 89, 238, 135,\n};\nKeypair key_pair = Keypair::from_seed(secret_key);\n"))),(0,l.kt)(s.Z,{value:"rust",label:"rust",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"let secret_key: [u8; 64] = [\n    174, 47, 154, 16, 202, 193, 206, 113, 199, 190, 53, 133, 169, 175, 31, 56, 222, 53, 138,\n    189, 224, 216, 117, 173, 10, 149, 53, 45, 73, 251, 237, 246, 15, 185, 186, 82, 177, 240,\n    148, 69, 241, 227, 167, 80, 141, 89, 240, 121, 121, 35, 172, 247, 68, 251, 226, 218, 48,\n    63, 176, 109, 168, 89, 238, 135,\n];\n\nlet wallet = Keypair::from_bytes(&secret_key)?;\n"))),(0,l.kt)(s.Z,{value:"bash",label:"bash",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# input your secret into the Keypath listed under solana config get\n")))),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u4eceBase58\u5b57\u7b26\u4e32\uff1a")),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"typescript",label:"typescript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'const keypair = Keypair.fromSecretKey(\n  bs58.decode(\n    "5MaiiCavjCmn9Hs1o3eznqDEhRwxo7pXiAYez7keQUviUkauRiTMD8DrESdrNjN8zd9mTmVhRvBJeg5vhyvgrAhG"\n  )\n);\n'))),(0,l.kt)(s.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'b58_string = "5MaiiCavjCmn9Hs1o3eznqDEhRwxo7pXiAYez7keQUviUkauRiTMD8DrESdrNjN8zd9mTmVhRvBJeg5vhyvgrAhG"\nkeypair = Keypair.from_string(b58_string)\n'))),(0,l.kt)(s.Z,{value:"rust",label:"rust",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'let wallet = Keypair::from_base58_string(\n    "5MaiiCavjCmn9Hs1o3eznqDEhRwxo7pXiAYez7keQUviUkauRiTMD8DrESdrNjN8zd9mTmVhRvBJeg5vhyvgrAhG",\n);\n')))),(0,l.kt)("h2",{id:"\u5982\u4f55\u9a8c\u8bc1\u5bc6\u94a5\u5bf9"},"\u5982\u4f55\u9a8c\u8bc1\u5bc6\u94a5\u5bf9"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u6709\u4e86\u4e2a\u5bc6\u94a5\u5bf9\uff0c\u4f60\u53ef\u4ee5\u9a8c\u8bc1\u5bc6\u94a5\u5bf9\u7684\u79c1\u94a5\u662f\u5426\u4e0e\u7ed9\u5b9a\u7684\u516c\u94a5\u5339\u914d\u3002"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"typescript",label:"typescript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'const publicKey = new PublicKey("24PNhTaNtomHhoy3fTRaMhAFCRj4uHqhZEEoWrKDbR5p");\nconst keypair = Keypair.fromSecretKey(\n  Uint8Array.from([\n    174, 47, 154, 16, 202, 193, 206, 113, 199, 190, 53, 133, 169, 175, 31, 56,\n    222, 53, 138, 189, 224, 216, 117, 173, 10, 149, 53, 45, 73, 251, 237, 246,\n    15, 185, 186, 82, 177, 240, 148, 69, 241, 227, 167, 80, 141, 89, 240, 121,\n    121, 35, 172, 247, 68, 251, 226, 218, 48, 63, 176, 109, 168, 89, 238, 135,\n  ])\n);\nconsole.log(keypair.publicKey.toBase58() === publicKey.toBase58());\n// true\n'))),(0,l.kt)(s.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'public_key = Pubkey.from_string("24PNhTaNtomHhoy3fTRaMhAFCRj4uHqhZEEoWrKDbR5p")\n\nkeys = [\n        174, 47, 154, 16, 202, 193, 206, 113, 199, 190, 53, 133, 169, 175, 31, 56, 222, 53, 138,\n        189, 224, 216, 117, 173, 10, 149, 53, 45, 73, 251, 237, 246, 15, 185, 186, 82, 177, 240,\n        148, 69, 241, 227, 167, 80, 141, 89, 240, 121, 121, 35, 172, 247, 68, 251, 226, 218, 48,\n        63, 176, 109, 168, 89, 238, 135,\n    ]\nkeypair = Keypair.from_bytes(keys)\n\nprint(keypair.pubkey() == public_key)\n# True\n'))),(0,l.kt)(s.Z,{value:"cpp",label:"cpp",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},'PublicKey public_key = PublicKey("24PNhTaNtomHhoy3fTRaMhAFCRj4uHqhZEEoWrKDbR5p");\n\nconst uint8_t bytes[] = {\n174, 47, 154, 16, 202, 193, 206, 113, 199, 190, 53, 133, 169, 175, 31, 56, 222, 53, 138,\n189, 224, 216, 117, 173, 10, 149, 53, 45, 73, 251, 237, 246, 15, 185, 186, 82, 177, 240,\n148, 69, 241, 227, 167, 80, 141, 89, 240, 121, 121, 35, 172, 247, 68, 251, 226, 218, 48,\n63, 176, 109, 168, 89, 238, 135,\n};\nKeypair key_pair = Keypair::from_seed(bytes);\n\nstd::cout << (public_key.to_base58() == key_pair.public_key.to_base58()) << std::endl;\n// 1\n'))),(0,l.kt)(s.Z,{value:"bash",label:"bash",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"solana-keygen verify <PUBKEY> prompt://\n")))),(0,l.kt)("h2",{id:"\u5982\u4f55\u68c0\u67e5\u4e00\u4e2a\u516c\u94a5\u662f\u5426\u6709\u5173\u8054\u7684\u79c1\u94a5"},"\u5982\u4f55\u68c0\u67e5\u4e00\u4e2a\u516c\u94a5\u662f\u5426\u6709\u5173\u8054\u7684\u79c1\u94a5"),(0,l.kt)("p",null,"\u5728\u67d0\u4e9b\u7279\u6b8a\u60c5\u51b5\u4e0b\uff08\u4f8b\u5982\uff0c\u6d3e\u751f\u81ea\u7a0b\u5e8f\u7684\u5730\u5740(PDA)\uff09\uff0c\u516c\u94a5\u53ef\u80fd\u6ca1\u6709\u5173\u8054\u7684\u79c1\u94a5\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u67e5\u770b\u516c\u94a5\u662f\u5426\u4f4d\u4e8eed25519\u66f2\u7ebf\u4e0a\u6765\u68c0\u67e5\u8fd9\u4e00\u70b9\u3002\u53ea\u6709\u4f4d\u4e8e\u66f2\u7ebf\u4e0a\u7684\u516c\u94a5\u624d\u53ef\u4ee5\u7531\u5177\u6709\u94b1\u5305\u7684\u7528\u6237\u63a7\u5236\u3002"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"typescript",label:"typescript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'const key = new PublicKey("5oNDL3swdJJF1g9DzJiZ4ynHXgszjAEpUkxVYejchzrY");\nconsole.log(PublicKey.isOnCurve(key.toBytes()));\n'))),(0,l.kt)(s.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"key = Pubkey.from_string('5oNDL3swdJJF1g9DzJiZ4ynHXgszjAEpUkxVYejchzrY')\nprint(key.is_on_curve())\n"))),(0,l.kt)(s.Z,{value:"cpp",label:"cpp",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},'auto public_key = PublicKey("5oNDL3swdJJF1g9DzJiZ4ynHXgszjAEpUkxVYejchzrY");\nstd::cout << public_key.is_on_curve() << std::endl;\n'))),(0,l.kt)(s.Z,{value:"rust",label:"rust",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'let pubkey = Pubkey::from_str("5oNDL3swdJJF1g9DzJiZ4ynHXgszjAEpUkxVYejchzrY").unwrap();\nprintln!("{:?}", pubkey.is_on_curve())\n')))),(0,l.kt)("h2",{id:"\u5982\u4f55\u751f\u6210\u52a9\u8bb0\u8bcd"},"\u5982\u4f55\u751f\u6210\u52a9\u8bb0\u8bcd"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u6b63\u5728\u521b\u5efa\u4e00\u4e2a\u94b1\u5305\uff0c\u4f60\u9700\u8981\u751f\u6210\u4e00\u4e2a\u52a9\u8bb0\u8bcd\uff0c\u4ee5\u4fbf\u7528\u6237\u53ef\u4ee5\u5c06\u5176\u4fdd\u5b58\u4e3a\u5907\u4efd\u3002"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"typescript",label:"typescript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"const mnemonic = bip39.generateMnemonic();\n"))),(0,l.kt)(s.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'mnemo = Mnemonic("english")\nwords = mnemo.generate(strength=256)\n'))),(0,l.kt)(s.Z,{value:"cpp",label:"cpp",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"auto key_pair = Keypair::generate();\n"))),(0,l.kt)(s.Z,{value:"rust",label:"rust",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"let wallet = Keypair::new();\n"))),(0,l.kt)(s.Z,{value:"bash",label:"bash",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"solana-keygen new\n")))),(0,l.kt)("h2",{id:"\u5982\u4f55\u901a\u8fc7\u52a9\u8bb0\u8bcd\u6062\u590d\u5bc6\u94a5\u5bf9"},"\u5982\u4f55\u901a\u8fc7\u52a9\u8bb0\u8bcd\u6062\u590d\u5bc6\u94a5\u5bf9"),(0,l.kt)("p",null,"\u8bb8\u591a\u94b1\u5305\u6269\u5c55\u4f7f\u7528\u52a9\u8bb0\u8bcd\u6765\u8868\u793a\u5176\u5bc6\u94a5\u3002\u4f60\u53ef\u4ee5\u5c06\u52a9\u8bb0\u8bcd\u8f6c\u6362\u4e3a\u5bc6\u94a5\u5bf9\u4ee5\u8fdb\u884c\u672c\u5730\u6d4b\u8bd5\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"BIP39 - \u521b\u5efa\u5355\u4e2a\u94b1\u5305\u7684\u6b65\u9aa4\u5982\u4e0b\uff1a")),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"typescript",label:"typescript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'const mnemonic =\n  "pill tomorrow foster begin walnut borrow virtual kick shift mutual shoe scatter";\nconst seed = bip39.mnemonicToSeedSync(mnemonic, ""); // (mnemonic, password)\nconst keypair = Keypair.fromSeed(seed.slice(0, 32));\n'))),(0,l.kt)(s.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'mnemo = Mnemonic("english")\nseed = mnemo.to_seed("pill tomorrow foster begin walnut borrow virtual kick shift mutual shoe scatter")\nkeypair = Keypair.from_bytes(seed)\n'))),(0,l.kt)(s.Z,{value:"bash",label:"bash",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"solana-keygen recover\n")))),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"BIP44 \uff08\u591a\u4e2a\u94b1\u5305\uff0c\u4e5f\u53ebHD\u94b1\u5305\uff09")),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u4ece\u4e00\u4e2a\u5355\u4e00\u79cd\u5b50\u751f\u6210\u591a\u4e2a\u94b1\u5305\uff0c\u4e5f\u88ab\u79f0\u4e3a\u201c\u5206\u5c42\u786e\u5b9a\u6027\u94b1\u5305\u201d\u6216HD\u94b1\u5305\u3002"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"typescript",label:"typescript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'const mnemonic =\n  "neither lonely flavor argue grass remind eye tag avocado spot unusual intact";\nconst seed = bip39.mnemonicToSeedSync(mnemonic, ""); // (mnemonic, password)\nfor (let i = 0; i < 10; i++) {\n  const path = `m/44\'/501\'/${i}\'/0\'`;\n  const keypair = Keypair.fromSeed(derivePath(path, seed.toString("hex")).key);\n  console.log(`${path} => ${keypair.publicKey.toBase58()}`);\n}\n'))),(0,l.kt)(s.Z,{value:"bash",label:"bash",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"solana-keygen recover 'prompt:?key=0/0'\n")))),(0,l.kt)("h2",{id:"\u5982\u4f55\u751f\u6210\u81ea\u5b9a\u4e49\u5730\u5740vanity-address"},"\u5982\u4f55\u751f\u6210\u81ea\u5b9a\u4e49\u5730\u5740(vanity address)"),(0,l.kt)("p",null,'\u81ea\u5b9a\u4e49\u516c\u94a5\u6216\u5730\u5740\uff08Vanity Address\uff09\u662f\u4ee5\u7279\u5b9a\u5b57\u7b26\u5f00\u5934\u7684\u5bc6\u94a5\u3002\u4f8b\u5982\uff0c\u4e00\u4e2a\u4eba\u53ef\u80fd\u5e0c\u671b\u516c\u94a5\u4ee5 "elv1s" \u6216 "cook" \u5f00\u5934\uff0c\u8fd9\u6837\u53ef\u4ee5\u5e2e\u52a9\u4ed6\u4eba\u8bb0\u4f4f\u5bc6\u94a5\u6240\u5c5e\u7684\u4eba\uff0c\u4f7f\u5bc6\u94a5\u66f4\u5bb9\u6613\u8bc6\u522b\u3002'),(0,l.kt)("p",null,"\u6ce8\u610f: \u81ea\u5b9a\u4e49\u5730\u5740\u4e2d\u5b57\u7b26\u7684\u6570\u91cf\u8d8a\u591a\uff0c\u751f\u6210\u65f6\u95f4\u5c06\u4f1a\u66f4\u957f\u3002"),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("strong",{parentName:"p"},"\u8b66\u544a"),"\n\u5728\u6b64\u4efb\u52a1\u4e2d\uff0c\u60a8\u5e94\u8be5\u4f7f\u7528\u547d\u4ee4\u884c\u754c\u9762\uff08CLI\uff09\u3002Python\u548cTypeScript\u7684\u793a\u4f8b\u4ec5\u7528\u4e8e\u8bf4\u660e\uff0c\u901f\u5ea6\u6bd4CLI\u6162\u5f97\u591a\u3002")),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"typescript",label:"typescript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'let keypair = Keypair.generate();\nwhile (!keypair.publicKey.toBase58().startsWith("elv1s")) {\n  keypair = Keypair.generate();\n}\n'))),(0,l.kt)(s.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'keypair = Keypair()\nwhile(str(keypair.pubkey())[:5]!="elv1s") :\n    keypair = Keypair()\n'))),(0,l.kt)(s.Z,{value:"cpp",label:"cpp",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},'auto key_pair = Keypair::generate();\nwhile (key_pair.public_key.to_base58().substr(0, 5) != "elv1s") {\n    key_pair = Keypair::generate();\n}\n'))),(0,l.kt)(s.Z,{value:"bash",label:"bash",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"solana-keygen grind --starts-with e1v1s:1\n")))),(0,l.kt)("h2",{id:"\u5982\u4f55\u4f7f\u7528\u94b1\u5305\u6765\u7b7e\u540d\u548c\u9a8c\u8bc1\u6d88\u606f"},"\u5982\u4f55\u4f7f\u7528\u94b1\u5305\u6765\u7b7e\u540d\u548c\u9a8c\u8bc1\u6d88\u606f"),(0,l.kt)("p",null,"\u5bc6\u94a5\u5bf9\u7684\u4e3b\u8981\u529f\u80fd\u662f\u5bf9\u6d88\u606f\u8fdb\u884c\u7b7e\u540d\u5e76\u9a8c\u8bc1\u7b7e\u540d\u7684\u6709\u6548\u6027\u3002\u901a\u8fc7\u9a8c\u8bc1\u7b7e\u540d\uff0c\u63a5\u6536\u65b9\u53ef\u4ee5\u786e\u4fdd\u6570\u636e\u662f\u7531\u7279\u5b9a\u79c1\u94a5\u7684\u6240\u6709\u8005\u7b7e\u540d\u7684\u3002"),(0,l.kt)("p",null,"\u4e3a\u6b64\uff0c\u6211\u4eec\u5c06\u5bfc\u5165",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/tweetnacl"},"TweetNaCl")," \u5bc6\u7801\u5e93\uff0c\u5e76\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u8fdb\u884c\u64cd\u4f5c\uff1a"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"typescript",label:"typescript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'const message = "The quick brown fox jumps over the lazy dog";\nconst messageBytes = decodeUTF8(message);\n\nconst signature = nacl.sign.detached(messageBytes, keypair.secretKey);\nconst result = nacl.sign.detached.verify(\n  messageBytes,\n  signature,\n  keypair.publicKey.toBytes()\n);\n\nconsole.log(result);\n'))),(0,l.kt)(s.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'message = b"The quick brown fox jumps over the lazy dog"\nsignature = keypair.sign_message(message)\nverify_sign = signature.verify(keypair.pubkey(), message)\n\nprint(verify_sign) # bool\n')))),(0,l.kt)("h2",{id:"\u5982\u4f55\u8fde\u63a5\u5230\u94b1\u5305"},"\u5982\u4f55\u8fde\u63a5\u5230\u94b1\u5305"),(0,l.kt)("p",null,"Solana\u7684",(0,l.kt)("a",{parentName:"p",href:"https://github.com/solana-labs/wallet-adapter"},"\u94b1\u5305\u9002\u914d\u5668")," \u5e93\u4f7f\u5ba2\u6237\u7aef\u7ba1\u7406\u94b1\u5305\u8fde\u63a5\u53d8\u5f97\u7b80\u5355\u3002"),(0,l.kt)("h3",{id:"\u53cd\u5e94"},"\u53cd\u5e94"),(0,l.kt)("p",null,"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u5b89\u88c5\u6240\u9700\u7684\u4f9d\u8d56\u9879\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-/bin/bash"},"yarn add @solana/wallet-adapter-react @solana/wallet-adapter-react-ui @solana/wallet-adapter-base @solana/wallet-adapter-wallets\n")),(0,l.kt)("p",null,"React\u7684\u94b1\u5305\u9002\u914d\u5668\u5e93\u5141\u8bb8\u6211\u4eec\u901a\u8fc7\u94a9\u5b50\u548c\u4e0a\u4e0b\u6587\u63d0\u4f9b\u7a0b\u5e8f\u6765\u6301\u4e45\u5316\u548c\u8bbf\u95ee\u94b1\u5305\u8fde\u63a5\u72b6\u6001\uff0c\u4e3b\u8981\u5305\u62ec",(0,l.kt)("inlineCode",{parentName:"p"},"useWallet\u3001WalletProvider"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"useConnection\u548cConnectionProvider"),"\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"WalletProvider"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"ConnectionProvider"),"\u5fc5\u987b\u5305\u88c5React\u5e94\u7528\u7a0b\u3002"),(0,l.kt)("p",null,"\u6b64\u5916\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"useWalletModal"),"\u6765\u63d0\u793a\u7528\u6237\u8fdb\u884c\u8fde\u63a5\uff0c\u901a\u8fc7\u5207\u6362\u8fde\u63a5\u6a21\u6001\u6846\u7684\u53ef\u89c1\u6027\uff0c\u5e76\u5c06\u5e94\u7528\u7a0b\u5e8f\u5305\u88c5\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"@solana/wallet-adapter-react-ui"),"\u4e2d\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"WalletModalProvider"),"\u4e2d\u3002\u8fde\u63a5\u6a21\u6001\u6846\u5c06\u5904\u7406\u8fde\u63a5\u6d41\u7a0b\uff0c\u56e0\u6b64\u6211\u4eec\u53ea\u9700\u76d1\u542c\u94b1\u5305\u8fde\u63a5\u7684\u72b6\u6001\u3002\u5f53",(0,l.kt)("inlineCode",{parentName:"p"},"useWallet"),"\u7684\u54cd\u5e94\u5177\u6709\u975e\u7a7a\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"wallet"),"\u5c5e\u6027\u65f6\uff0c\u6211\u4eec\u77e5\u9053\u94b1\u5305\u5df2\u8fde\u63a5\u3002\u53cd\u4e4b\uff0c\u5982\u679c\u8be5\u5c5e\u6027\u4e3a\u7a7a\uff0c\u6211\u4eec\u77e5\u9053\u94b1\u5305\u5df2\u65ad\u5f00\u8fde\u63a5\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"const { wallet } = useWallet();\nconst { setVisible } = useWalletModal();\n\nconst onRequestConnectWallet = () => {\n  setVisible(true);\n};\n\n// Prompt the user to connect their wallet\nif (!wallet) {\n  return <button onClick={onRequestConnectWallet}>Connect Wallet</button>;\n}\n\n// Displays the connected wallet address\nreturn (\n  <main>\n    <p>Wallet successfully connected!</p>\n    <p>{wallet.publicKey.toBase58()}</p>\n  </main>\n);w\n")),(0,l.kt)("h3",{id:"vue"},"Vue"),(0,l.kt)("p",null,"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u5b89\u88c5\u6240\u9700\u7684\u4f9d\u8d56\u9879\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-/bin/bash"},"npm install solana-wallets-vue @solana/wallet-adapter-wallets\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/lorisleiva/solana-wallets-vue"},"Solana\u7684Vue\u94b1\u5305")," \u63d2\u4ef6\u5141\u8bb8\u6211\u4eec\u521d\u59cb\u5316\u94b1\u5305\u5b58\u50a8\uff0c\u5e76\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"$wallet"),"\u7684\u5168\u5c40\u5c5e\u6027\uff0c\u53ef\u4ee5\u5728\u4efb\u4f55\u7ec4\u4ef6\u4e2d\u8bbf\u95ee\u3002\u4f60\u53ef\u4ee5\u5728",(0,l.kt)("a",{parentName:"p",href:"https://github.com/lorisleiva/solana-wallets-vue#usewallet-references"},"\u6b64\u5904")," \u67e5\u770b\u53ef\u4ee5\u4ece",(0,l.kt)("inlineCode",{parentName:"p"},"useWallet()"),"\u83b7\u53d6\u7684\u6240\u6709\u5c5e\u6027\u548c\u65b9\u6cd5\u3002\u6211\u4eec\u8fd8\u5bfc\u5165\u5e76\u6e32\u67d3WalletMultiButton\u7ec4\u4ef6\uff0c\u4ee5\u5141\u8bb8\u7528\u6237\u9009\u62e9\u94b1\u5305\u5e76\u8fde\u63a5\u5230\u5b83\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'<script setup>\nimport { WalletMultiButton } from "solana-wallets-vue";\n<\/script>\n\n<template>\n  <wallet-multi-button></wallet-multi-button>\n</template>\n')),(0,l.kt)("h3",{id:"svelte"},"Svelte"),(0,l.kt)("p",null,"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u5b89\u88c5\u6240\u9700\u7684\u4f9d\u8d56\u9879\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-/bin/bash"},"npm install @svelte-on-solana/wallet-adapter-core @svelte-on-solana/wallet-adapter-ui @solana/wallet-adapter-base @solana/wallet-adapter-wallets @solana/web3.js\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/svelte-on-solana/wallet-adapter"},"Svelte Wallet Adapter")," \u5305\u5141\u8bb8\u6211\u4eec\u5728\u4f7f\u7528Svelte\u6a21\u677f\u6216SvelteKit\u521b\u5efa\u7684\u9879\u76ee\u4e2d\uff0c\u5728\u6240\u6709JS\u3001TS\u6216/\u548cSvelte\u6587\u4ef6\u4e4b\u95f4\u6dfb\u52a0\u4e00\u4e2a\u53ef\u8bbf\u95ee\u7684Svelte Store\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"$walletStore"),"\uff09\u3002\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/svelte-on-solana/wallet-adapter/blob/master/packages/core/README.md/"},"\u6b64\u5904")," \u7684\u5b58\u50a8\u5e93\u5f15\u7528\uff0c\u60a8\u53ef\u4ee5\u5728SSR\u6216SPA\u4e2d\u4f7f\u7528\u9002\u914d\u5668\u3002UI\u5305\u542b\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"<WalletMultiButton />"),"\u7ec4\u4ef6\uff0c\u5141\u8bb8\u7528\u6237\u9009\u62e9\u4e00\u4e2a\u94b1\u5305\u5e76\u8fde\u63a5\u5230\u5b83\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'<script>\n  import { walletStore } from "@svelte-on-solana/wallet-adapter-core";\n  import { WalletMultiButton } from "@svelte-on-solana/wallet-adapter-ui";\n<\/script>\n\n{#if $walletStore?.connected} Wallet with public key {$walletStore.publicKey}\nsuccessfully connected! {:else}\n<WalletMultiButton />\n{/if}\n')))}y.isMDXComponent=!0},85162:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),l=a(86010);const r={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r.tabItem,s),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(87462),l=a(67294),r=a(86010),s=a(12466),p=a(16550),o=a(91980),i=a(67392),u=a(50012);function c(e){return function(e){return l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:l}}=e;return{value:t,label:a,attributes:n,default:l}}))}function m(e){const{values:t,children:a}=e;return(0,l.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function k(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function y(e){let{queryString:t=!1,groupId:a}=e;const n=(0,p.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o._X)(r),(0,l.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function d(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=m(e),[s,p]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!k({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[o,i]=y({queryString:a,groupId:n}),[c,d]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,u.Nk)(a);return[n,(0,l.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),b=(()=>{const e=o??c;return k({value:e,tabValues:r})?e:null})();(0,l.useLayoutEffect)((()=>{b&&p(b)}),[b]);return{selectedValue:s,selectValue:(0,l.useCallback)((e=>{if(!k({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);p(e),i(e),d(e)}),[i,d,r]),tabValues:r}}var b=a(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:t,block:a,selectedValue:p,selectValue:o,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),m=e=>{const t=e.currentTarget,a=u.indexOf(t),n=i[a].value;n!==p&&(c(t),o(n))},k=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},i.map((e=>{let{value:t,label:a,attributes:s}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:p===t?0:-1,"aria-selected":p===t,key:t,ref:e=>u.push(e),onKeyDown:k,onClick:m},s,{className:(0,r.Z)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":p===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function f(e){const t=d(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",g.tabList)},l.createElement(h,(0,n.Z)({},e,t)),l.createElement(v,(0,n.Z)({},e,t)))}function N(e){const t=(0,b.Z)();return l.createElement(f,(0,n.Z)({key:String(t)},e))}}}]);