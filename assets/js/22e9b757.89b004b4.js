"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4142],{3905:(e,n,a)=>{a.d(n,{Zo:()=>s,kt:()=>c});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function p(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=t.createContext({}),o=function(e){var n=t.useContext(d),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},s=function(e){var n=o(e.components);return t.createElement(d.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},k=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=o(a),k=r,c=m["".concat(d,".").concat(k)]||m[k]||u[k]||l;return a?t.createElement(c,i(i({ref:n},s),{},{components:a})):t.createElement(c,i({ref:n},s))}));function c(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=k;var p={};for(var d in n)hasOwnProperty.call(n,d)&&(p[d]=n[d]);p.originalType=e,p[m]="string"==typeof e?e:r,i[1]=p;for(var o=2;o<l;o++)i[o]=a[o];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}k.displayName="MDXCreateElement"},3744:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var t=a(7462),r=(a(7294),a(3905));const l={sidebar_position:67,sidebar_label:"\ud83e\uddd0 PDA \u6df1\u5165\u63a2\u7a76",sidebar_class_name:"green"},i="\ud83e\uddd0 PDA\u6df1\u5165\u63a2\u7a76",p={unversionedId:"Solana-Co-Learn/module4/pdas/pda-deep-dive/README",id:"Solana-Co-Learn/module4/pdas/pda-deep-dive/README",title:"\ud83e\uddd0 PDA\u6df1\u5165\u63a2\u7a76",description:"\u7a0b\u5e8f\u6d3e\u751f\u5730\u5740\uff08Program Derived Address\uff0cPDA\uff09, \u8ba9\u6211\u4eec\u4e00\u8d77\u6df1\u5165\u4e86\u89e3\u5b83\u4eec\u7684\u5de5\u4f5c\u539f\u7406\u3002",source:"@site/docs/Solana-Co-Learn/module4/pdas/pda-deep-dive/README.md",sourceDirName:"Solana-Co-Learn/module4/pdas/pda-deep-dive",slug:"/Solana-Co-Learn/module4/pdas/pda-deep-dive/",permalink:"/all-in-one-solana/docs/Solana-Co-Learn/module4/pdas/pda-deep-dive/",draft:!1,editUrl:"https://github.com/CreatorsDAO/all-in-one-solana/edit/main/docs/Solana-Co-Learn/module4/pdas/pda-deep-dive/README.md",tags:[],version:"current",sidebarPosition:67,frontMatter:{sidebar_position:67,sidebar_label:"\ud83e\uddd0 PDA \u6df1\u5165\u63a2\u7a76",sidebar_class_name:"green"},sidebar:"tutorialSidebar",previous:{title:"PDAs",permalink:"/all-in-one-solana/docs/Solana-Co-Learn/module4/pdas/"},next:{title:"\ud83d\udcac \u94fe\u4e0a\u8bc4\u8bba\u529f\u80fd\u7684\u6784\u5efa",permalink:"/all-in-one-solana/docs/Solana-Co-Learn/module4/pdas/build-on-chain-comments/"}},d={},o=[{value:"\ud83d\udd0e \u5bfb\u627e PDAs (\u7a0b\u5e8f\u6d3e\u751f\u5730\u5740)",id:"-\u5bfb\u627e-pdas-\u7a0b\u5e8f\u6d3e\u751f\u5730\u5740",level:2},{value:"\ud83c\udf73 <code>find_program_address</code>\u51fd\u6570\u5185\u90e8\u89e3\u6790",id:"-find_program_address\u51fd\u6570\u5185\u90e8\u89e3\u6790",level:2},{value:"\ud83e\udd14 \u6709\u5173\u7a0b\u5e8f\u6d3e\u751f\u5730\u5740\uff08PDA\uff09\u7684\u4e00\u4e9b\u8bf4\u660e",id:"-\u6709\u5173\u7a0b\u5e8f\u6d3e\u751f\u5730\u5740pda\u7684\u4e00\u4e9b\u8bf4\u660e",level:2},{value:"\ud83d\uddfa PDA\u8d26\u6237\u4e2d\u6570\u636e\u7684\u7ec4\u7ec7\u548c\u5b58\u50a8",id:"-pda\u8d26\u6237\u4e2d\u6570\u636e\u7684\u7ec4\u7ec7\u548c\u5b58\u50a8",level:2}],s={toc:o},m="wrapper";function u(e){let{components:n,...l}=e;return(0,r.kt)(m,(0,t.Z)({},s,l,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-pda\u6df1\u5165\u63a2\u7a76"},"\ud83e\uddd0 PDA\u6df1\u5165\u63a2\u7a76"),(0,r.kt)("p",null,"\u7a0b\u5e8f\u6d3e\u751f\u5730\u5740\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"Program Derived Address\uff0cPDA"),"\uff09, \u8ba9\u6211\u4eec\u4e00\u8d77\u6df1\u5165\u4e86\u89e3\u5b83\u4eec\u7684\u5de5\u4f5c\u539f\u7406\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"PDA"),"\u4e3b\u8981\u5177\u6709\u4e24\u4e2a\u6838\u5fc3\u529f\u80fd\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u4e00\u79cd",(0,r.kt)("a",{parentName:"li",href:"https://www.google.com.hk/search?q=define+deterministic"},"\u786e\u5b9a\u6027"),"\u7684\u65b9\u6cd5\u6765\u67e5\u627e\u7a0b\u5e8f\u62e5\u6709\u7684\u8d26\u6237\u5730\u5740\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6388\u6743\u6d3e\u751f\u81ea",(0,r.kt)("inlineCode",{parentName:"li"},"PDA"),"\u7684\u7a0b\u5e8f\u4ee3\u8868\u5176\u7b7e\u7f72\uff0c\u5c31\u50cf\u7528\u6237\u4f7f\u7528\u79c1\u94a5\u7b7e\u7f72\u4e00\u6837\u3002")),(0,r.kt)("p",null,"\u6362\u8a00\u4e4b\uff0c\u5b83\u4eec\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"Solana"),"\u7f51\u7edc\u4e0a\u7528\u4e8e\u5b58\u50a8\u7684\u5b89\u5168\u952e\u503c\u5b58\u50a8\u89e3\u51b3\u65b9\u6848\u3002"),(0,r.kt)("h2",{id:"-\u5bfb\u627e-pdas-\u7a0b\u5e8f\u6d3e\u751f\u5730\u5740"},"\ud83d\udd0e \u5bfb\u627e PDAs (\u7a0b\u5e8f\u6d3e\u751f\u5730\u5740)"),(0,r.kt)("p",null,"\u5230\u73b0\u5728\u4e3a\u6b62\uff0c\u6bcf\u6b21\u6211\u4eec\u9700\u8981\u6d3e\u751f\u4e00\u4e2a\u5730\u5740\u65f6\uff0c\u90fd\u4f7f\u7528\u4e86\u4e00\u4e2a\u65b9\u4fbf\u7684\u51fd\u6570\u3002\u90a3\u4e48\uff0c\u8fd9\u4e2a\u51fd\u6570\u5230\u5e95\u505a\u4e86\u4ec0\u4e48\u5462\uff1f\u8981\u4e86\u89e3\u7b54\u6848\uff0c\u6211\u4eec\u9700\u8981\u7406\u89e3",(0,r.kt)("inlineCode",{parentName:"p"},"Solana"),"\u5bc6\u94a5\u5bf9\u662f\u5982\u4f55\u751f\u6210\u7684\u3002"),(0,r.kt)("p",null,"\u56de\u60f3\u4e00\u4e0b\u5bc6\u94a5\u5bf9\u7684\u4f5c\u7528\u3002\u5b83\u662f\u4e00\u79cd\u8bc1\u660e\u4f60\u662f\u4f60\u58f0\u79f0\u7684\u4eba\u7684\u65b9\u5f0f\u3002\u6211\u4eec\u901a\u8fc7\u6570\u5b57\u7b7e\u540d\u7cfb\u7edf\u5b9e\u73b0\u4e86\u8fd9\u4e00\u70b9\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"Solana"),"\u7684\u5bc6\u94a5\u5bf9\u57fa\u4e8e\u6240\u8c13\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"Ed25519"),"\u692d\u5706\u66f2\u7ebf\uff08\u4f60\u4e0d\u5fc5\u62c5\u5fc3\u8fd9\u662f\u4ec0\u4e48\uff09\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(513).Z,width:"1204",height:"844"})),(0,r.kt)("p",null,"\u7531\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"PDAs"),"\u7531\u7a0b\u5e8f\u63a7\u5236\uff0c\u6240\u4ee5\u5b83\u4eec\u4e0d\u9700\u8981\u79c1\u94a5\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u4f7f\u7528\u4e0d\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"Ed25519"),"\u66f2\u7ebf\u4e0a\u7684\u5730\u5740\u6765\u521b\u5efa",(0,r.kt)("inlineCode",{parentName:"p"},"PDAs"),"\u3002\u8fd9\u5b9e\u9645\u4e0a\u610f\u5473\u7740\u5b83\u4eec\u662f\u6ca1\u6709\u76f8\u5e94\u79c1\u94a5\u7684\u516c\u94a5\u3002"),(0,r.kt)("p",null,"\u5c31\u662f\u8fd9\u6837\u3002\u4f60\u4e0d\u9700\u8981\u7406\u89e3",(0,r.kt)("inlineCode",{parentName:"p"},"Ed25519"),"\uff0c\u751a\u81f3\u4e0d\u9700\u8981\u77e5\u9053\u6570\u5b57\u7b7e\u540d\u7b97\u6cd5\u662f\u4ec0\u4e48\u3002\u4f60\u53ea\u9700\u8981\u77e5\u9053",(0,r.kt)("inlineCode",{parentName:"p"},"PDA"),"\u770b\u8d77\u6765\u50cf\u666e\u901a\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"Solana"),"\u5730\u5740\uff0c\u5e76\u4e14\u7531\u7a0b\u5e8f\u63a7\u5236\u3002\u5982\u679c\u4f60\u60f3\u8fdb\u4e00\u6b65\u4e86\u89e3\uff0c\u53ef\u4ee5\u89c2\u770b",(0,r.kt)("inlineCode",{parentName:"p"},"Computerphile"),"\u5173\u4e8e",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=s22eJ1eVLTU"},"\u6570\u5b57\u7b7e\u540d"),"\u7684\u7cbe\u5f69\u89c6\u9891\u3002"),(0,r.kt)("p",null,"\u8981\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"Solana"),"\u7a0b\u5e8f\u4e2d\u627e\u5230\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"PDA"),"\uff0c\u6211\u4eec\u5c06\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"find_program_address")," \u51fd\u6570\u3002"),(0,r.kt)("p",null,"\u201c\u79cd\u5b50\u201d\u662f\u7528\u4e8e\u6d3e\u751f",(0,r.kt)("inlineCode",{parentName:"p"},"PDA"),"\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"find_program_address")," \u51fd\u6570\u7684\u53ef\u9009\u8f93\u5165\u3002\u4f8b\u5982\uff0c\u79cd\u5b50\u53ef\u4ee5\u662f\u4efb\u610f\u7ec4\u5408\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6307\u4ee4\u6570\u636e"),(0,r.kt)("li",{parentName:"ul"},"\u786c\u7f16\u7801\u7684\u503c"),(0,r.kt)("li",{parentName:"ul"},"\u5176\u4ed6\u8d26\u6237\u7684\u516c\u94a5")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"find_program_address")," \u51fd\u6570\u63d0\u4f9b\u4e86\u4e00\u4e2a\u989d\u5916\u7684\u79cd\u5b50\uff0c\u79f0\u4e3a\u201c",(0,r.kt)("inlineCode",{parentName:"p"},"bump seed"),"\u201d\uff0c\u4ee5\u786e\u4fdd\u7ed3\u679c\u4e0d\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"Ed25519"),"\u66f2\u7ebf\u4e0a\u3002"),(0,r.kt)("p",null,"\u4e00\u65e6\u627e\u5230\u6709\u6548\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"PDA"),"\uff0c\u8be5\u51fd\u6570\u5c06\u8fd4\u56de\u4e24\u4e2a\u503c\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PDA")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"\u7528\u4e8e\u6d3e\u751fPDA\u7684 Bump"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'let (pda, bump_seed) = Pubkey::find_program_address(&[user.key.as_ref(), user_input.as_bytes().as_ref(), "SEED".as_bytes()], program_id);\n')),(0,r.kt)("h2",{id:"-find_program_address\u51fd\u6570\u5185\u90e8\u89e3\u6790"},"\ud83c\udf73 ",(0,r.kt)("inlineCode",{parentName:"h2"},"find_program_address"),"\u51fd\u6570\u5185\u90e8\u89e3\u6790"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"find_program_address")," \u662f\u4e00\u4e2a\u5192\u724c\u8d27 - \u5b83\u5b9e\u9645\u4e0a\u5c06\u8f93\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"seeds")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"program_id")," \u4f20\u9012\u7ed9 ",(0,r.kt)("inlineCode",{parentName:"p"},"try_find_program_address")," \u51fd\u6570\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'pub fn find_program_address(seeds: &[&[u8]], program_id: &Pubkey) -> (Pubkey, u8) {\n    Self::try_find_program_address(seeds, program_id)\n        .unwrap_or_else(|| panic!("Unable to find a viable program address bump seed"));\n}\n')),(0,r.kt)("p",null,"\u7136\u540e\uff0c ",(0,r.kt)("inlineCode",{parentName:"p"},"try_find_program_address")," \u51fd\u6570\u5f15\u5165\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"bump_seed"),"\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"bump_seed")," \u662f\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"u8")," \u53d8\u91cf\uff0c\u5176\u503c\u8303\u56f4\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"0"),"\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"255"),"\u4e4b\u95f4\u3002\u5b83\u88ab\u9644\u52a0\u5230\u53ef\u9009\u7684\u8f93\u5165\u79cd\u5b50\u4e2d\uff0c\u7136\u540e\u4f20\u9012\u7ed9 ",(0,r.kt)("inlineCode",{parentName:"p"},"create_program_address")," \u51fd\u6570\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn try_find_program_address(seeds: &[&[u8]], program_id: &Pubkey) -> Option<(Pubkey, u8)> {\n\n    let mut bump_seed = [std::u8::MAX];\n    for _ in 0..std::u8::MAX {\n        {\n            let mut seeds_with_bump = seeds.to_vec();\n            seeds_with_bump.push(&bump_seed);\n            match Self::create_program_address(&seeds_with_bump, program_id) {\n                Ok(address) => return Some((address, bump_seed[0])),\n                Err(PubkeyError::InvalidSeeds) => (),\n                _ => break,\n            }\n        }\n        bump_seed[0] -= 1;\n    }\n    None\n\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"create_program_address")," \u51fd\u6570\u5bf9\u79cd\u5b50\u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"program_id")," \u6267\u884c\u4e00\u7cfb\u5217\u54c8\u5e0c\u64cd\u4f5c\u3002\u8fd9\u4e9b\u64cd\u4f5c\u8ba1\u7b97\u51fa\u4e00\u4e2a\u5bc6\u94a5\uff0c\u7136\u540e\u9a8c\u8bc1\u8ba1\u7b97\u51fa\u7684\u5bc6\u94a5\u662f\u5426\u4f4d\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"Ed25519"),"\u692d\u5706\u66f2\u7ebf\u4e0a\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u627e\u5230\u4e00\u4e2a\u6709\u6548\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"PDA"),"\uff08\u5373\u4e00\u4e2a\u4e0d\u5728\u66f2\u7ebf\u4e0a\u7684\u5730\u5740\uff09\uff0c\u5219\u8fd4\u56de\u8be5",(0,r.kt)("inlineCode",{parentName:"p"},"PDA"),"\u3002\u5426\u5219\uff0c\u8fd4\u56de\u4e00\u4e2a\u9519\u8bef\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn create_program_address(\n    seeds: &[&[u8]],\n    program_id: &Pubkey,\n) -> Result<Pubkey, PubkeyError> {\n\n    let mut hasher = crate::hash::Hasher::default();\n    for seed in seeds.iter() {\n        hasher.hash(seed);\n    }\n    hasher.hashv(&[program_id.as_ref(), PDA_MARKER]);\n    let hash = hasher.result();\n\n    if bytes_are_curve_point(hash) {\n        return Err(PubkeyError::InvalidSeeds);\n    }\n\n    Ok(Pubkey::new(hash.as_ref()))\n\n}\n")),(0,r.kt)("p",null,"\u603b\u7ed3\u4e00\u4e0b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8be5\u51fd\u6570\u4f1a\u5c06\u8f93\u5165\u7684\u79cd\u5b50\u4e0e ",(0,r.kt)("inlineCode",{parentName:"li"},"program_id")," \u4e00\u5e76\u4ea4\u7ed9 ",(0,r.kt)("inlineCode",{parentName:"li"},"try_find_program_address")," \u51fd\u6570\u5904\u7406\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"try_find_program_address")," \u51fd\u6570\u5728\u8f93\u5165\u79cd\u5b50\u4e2d\u6dfb\u52a0\u4e00\u4e2a\u4ece",(0,r.kt)("inlineCode",{parentName:"li"},"255"),"\u5f00\u59cb\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"bump_seed"),"\uff0c\u7136\u540e\u8fde\u7eed\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"create_program_address")," \u51fd\u6570\uff0c\u76f4\u5230\u627e\u5230\u6709\u6548\u7684",(0,r.kt)("inlineCode",{parentName:"li"},"PDA"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4e00\u65e6\u627e\u5230\u4e86\uff0c\u5c31\u4f1a\u8fd4\u56de\u627e\u5230\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"PDA")," \u548c\u7528\u4e8e\u6d3e\u751f ",(0,r.kt)("inlineCode",{parentName:"li"},"PDA")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"bump_seed"),"\u3002")),(0,r.kt)("p",null,"\u65e0\u9700\u6df1\u7a76\u6240\u6709\u7ec6\u8282\uff01\u5173\u952e\u5728\u4e8e\u7406\u89e3\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"find_program_address")," \u51fd\u6570\u65f6\u5728\u9ad8\u5c42\u6b21\u4e0a\u5230\u5e95\u53d1\u751f\u4e86\u4ec0\u4e48\u3002"),(0,r.kt)("h2",{id:"-\u6709\u5173\u7a0b\u5e8f\u6d3e\u751f\u5730\u5740pda\u7684\u4e00\u4e9b\u8bf4\u660e"},"\ud83e\udd14 \u6709\u5173\u7a0b\u5e8f\u6d3e\u751f\u5730\u5740\uff08PDA\uff09\u7684\u4e00\u4e9b\u8bf4\u660e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u76f8\u540c\u7684\u8f93\u5165\u79cd\u5b50\uff0c\u4e0d\u540c\u7684\u51f8\u8d77\u503c\u4f1a\u751f\u6210\u4e0d\u540c\u7684\u6709\u6548",(0,r.kt)("inlineCode",{parentName:"li"},"PDA"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"find_program_address")," \u8fd4\u56de\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"bump_seed")," \u603b\u662f\u627e\u5230\u7684\u7b2c\u4e00\u4e2a\u6709\u6548\u7684",(0,r.kt)("inlineCode",{parentName:"li"},"PDA"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u8fd9\u4e2a ",(0,r.kt)("inlineCode",{parentName:"li"},"bump_seed")," \u901a\u5e38\u88ab\u79f0\u4f5c\u201c\u6807\u51c6",(0,r.kt)("inlineCode",{parentName:"li"},"Bump"),"\u201d\uff08",(0,r.kt)("inlineCode",{parentName:"li"},"canonical bump"),"\uff09\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u8be5\u51fd\u6570\u53ea\u8fd4\u56de\u4e00\u4e2a\u7a0b\u5e8f\u6d3e\u751f\u5730\u5740\u548c\u7528\u4e8e\u6d3e\u751f\u8be5\u5730\u5740\u7684\u589e\u91cf\u79cd\u5b50\uff0c\u4e0d\u4f1a\u505a\u5176\u4ed6\u4e8b\u60c5\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u8be5\u51fd\u6570\u4e0d\u4f1a\u521d\u59cb\u5316\u65b0\u7684\u8d26\u6237\uff0c\u4e5f\u4e0d\u4f1a\u8fd4\u56de\u4e0e\u5b58\u50a8\u6570\u636e\u76f8\u5173\u7684",(0,r.kt)("inlineCode",{parentName:"li"},"PDA"),"\u3002")),(0,r.kt)("h2",{id:"-pda\u8d26\u6237\u4e2d\u6570\u636e\u7684\u7ec4\u7ec7\u548c\u5b58\u50a8"},"\ud83d\uddfa PDA\u8d26\u6237\u4e2d\u6570\u636e\u7684\u7ec4\u7ec7\u548c\u5b58\u50a8"),(0,r.kt)("p",null,"\u7531\u4e8e\u7a0b\u5e8f\u672c\u8d28\u4e0a\u6ca1\u6709\u72b6\u6001\uff0c\u6240\u6709\u7a0b\u5e8f\u72b6\u6001\u90fd\u7531\u5916\u90e8\u8d26\u6237\u6765\u7ba1\u7406\u3002\u8fd9\u610f\u5473\u7740\u6211\u4eec\u5fc5\u987b\u901a\u8fc7\u4e00\u7cfb\u5217\u6620\u5c04\u6765\u4fdd\u6301\u4e8b\u52a1\u7684\u8054\u7cfb\u3002"),(0,r.kt)("p",null,"\u4f60\u5982\u4f55\u5c06\u79cd\u5b50\u4e0e",(0,r.kt)("inlineCode",{parentName:"p"},"PDA"),"\u8d26\u6237\u76f8\u6620\u5c04\uff0c\u5c06\u9ad8\u5ea6\u53d6\u51b3\u4e8e\u4f60\u7684\u5177\u4f53\u7a0b\u5e8f\u8bbe\u8ba1\u3002\u867d\u7136\u8fd9\u4e0d\u662f\u4e00\u95e8\u5173\u4e8e\u7cfb\u7edf\u8bbe\u8ba1\u6216\u67b6\u6784\u7684\u8bfe\u7a0b\uff0c\u4f46\u4ee5\u4e0b\u51e0\u4e2a\u6307\u5bfc\u65b9\u9488\u503c\u5f97\u6ce8\u610f\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8981\u4f7f\u7528\u5728",(0,r.kt)("inlineCode",{parentName:"li"},"PDA"),"\u6d3e\u751f\u8fc7\u7a0b\u4e2d\u53ef\u77e5\u7684\u79cd\u5b50\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u8bf7\u7ec6\u5fc3\u601d\u8003\u5982\u4f55\u5c06\u6570\u636e\u5206\u7ec4\u5230\u4e00\u4e2a\u8d26\u6237\u4e2d\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u8981\u8c28\u614e\u5730\u8003\u8651\u6bcf\u4e2a\u8d26\u6237\u4e2d\u6570\u636e\u7ed3\u6784\u7684\u4f7f\u7528\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u901a\u5e38\u6765\u8bf4\uff0c\u7b80\u5355\u5c31\u662f\u6700\u597d\u7684\u3002")),(0,r.kt)("p",null,"\u8fd9\u4e9b\u5185\u5bb9\u786e\u5b9e\u5f88\u591a\uff01\u4e0d\u8fc7\u518d\u6b21\u5f3a\u8c03\uff0c\u4f60\u4e0d\u5fc5\u8bb0\u4f4f\u6b64\u5904\u89e3\u91ca\u7684\u6240\u6709\u5185\u5bb9\u3002\u4e0b\u4e00\u6b65\u6211\u4eec\u5c06\u6784\u5efa\u4e00\u4e2a\u94fe\u4e0a\u8bc4\u8bba\u7cfb\u7edf\uff0c\u8ba9\u6211\u4eec\u4e00\u8d77\u63a2\u7d22\u8fd9\u4e9b\u7406\u8bba\u5982\u4f55\u5728\u5b9e\u9645\u64cd\u4f5c\u4e2d\u53d1\u6325\u4f5c\u7528\uff01"))}u.isMDXComponent=!0},513:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/pda-a5bff67b5cd45b89420f1a94b25e790c.png"}}]);