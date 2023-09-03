"use strict";(self.webpackChunkall_in_one_solana=self.webpackChunkall_in_one_solana||[]).push([[7208],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>y});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),l=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=l(e.components);return a.createElement(i.Provider,{value:n},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(t),m=r,y=p["".concat(i,".").concat(m)]||p[m]||g[m]||o;return t?a.createElement(y,s(s({ref:n},u),{},{components:t})):a.createElement(y,s({ref:n},u))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=m;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c[p]="string"==typeof e?e:r,s[1]=c;for(var l=2;l<o;l++)s[l]=t[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},55154:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var a=t(87462),r=(t(67294),t(3905));const o={title:"save game state",sidebar_position:29,tags:["solana-cook-book","game"]},s="How to save game state",c={unversionedId:"references/gaming/saving-game-state",id:"references/gaming/saving-game-state",title:"save game state",description:"You can use Solana block chain to save the state of your game in program accounts. These are accounts that are owned by your program and they are derived from the program Id and some seeds. These can be thought of as data base entries.",source:"@site/docs/cookbook-zh/references/gaming/saving-game-state.md",sourceDirName:"references/gaming",slug:"/references/gaming/saving-game-state",permalink:"/cookbook-zh/references/gaming/saving-game-state",draft:!1,editUrl:"https://github.com/CreatorsDAO/all-in-one-solana/tree/main/docs/cookbook-zh/references/gaming/saving-game-state.md",tags:[{label:"solana-cook-book",permalink:"/cookbook-zh/tags/solana-cook-book"},{label:"game",permalink:"/cookbook-zh/tags/game"}],version:"current",lastUpdatedBy:"Davirain",lastUpdatedAt:1693738432,formattedLastUpdatedAt:"Sep 3, 2023",sidebarPosition:29,frontMatter:{title:"save game state",sidebar_position:29,tags:["solana-cook-book","game"]},sidebar:"tutorialSidebar",previous:{title:"Storing SOL in PDA",permalink:"/cookbook-zh/references/gaming/store-sol-in-pda"},next:{title:"Energy System",permalink:"/cookbook-zh/references/gaming/energy-system"}},i={},l=[],u={toc:l},p="wrapper";function g(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-save-game-state"},"How to save game state"),(0,r.kt)("p",null,"You can use Solana block chain to save the state of your game in program accounts. These are accounts that are owned by your program and they are derived from the program Id and some seeds. These can be thought of as data base entries.\nWe can for example create a PlayerData account and use the players public key as a seed. This means every player can have one player account per wallet. These accounts can be up to 10Kb by default. If you need a bigger account look into ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/solana-developers/anchor-zero-copy-example"},"Manage big accounts"),"\nThis can be done in a program like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn init_player(ctx: Context<InitPlayer>) -> Result<()> {\n    ctx.accounts.player.energy = MAX_ENERGY;\n    ctx.accounts.player.health = MAX_HEALTH;\n    ctx.accounts.player.last_login = Clock::get()?.unix_timestamp;\n    Ok(())\n}\n\n#[derive(Accounts)]\npub struct InitPlayer <'info> {\n    #[account(\n        init,\n        payer = signer,\n        space = 1000,\n        seeds = [b\"player\".as_ref(), signer.key().as_ref()],\n        bump,\n    )]\n    pub player: Account<'info, PlayerData>,\n    #[account(mut)]\n    pub signer: Signer<'info>,\n    pub system_program: Program<'info, System>,\n}\n\n#[account]\npub struct PlayerData {\n    pub name: String,\n    pub level: u8,\n    pub xp: u64,\n    pub health: u64,\n    pub log: u64,\n    pub energy: u64,\n    pub last_login: i64\n}\n\n")),(0,r.kt)("p",null,"You can then interact with this player data via transaction instructions. Lets say we want the player to get experience for killing a monster for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'    pub fn kill_enemy(mut ctx: Context<KillEnemy>, enemyId: u8) -> Result<()> {\n        let account = &mut ctx.accounts;\n\n        ... handle energy\n\n        if ctx.accounts.player.energy == 0 {\n            return err!(ErrorCode::NotEnoughEnergy);\n        }\n\n        ... get enemy values by id and calculate battle\n\n        ctx.accounts.player.xp = ctx.accounts.player.xp + 1;\n        ctx.accounts.player.energy = ctx.accounts.player.energy - 1;\n\n        ... handle level up\n\n        msg!("You killed enemy and got 1 xp. You have {} xp and {} energy left.", ctx.accounts.player.xp, ctx.accounts.player.energy);\n        Ok(())\n    }\n')),(0,r.kt)("p",null,"This is how this would look like from a js client:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const wallet = useAnchorWallet();\nconst provider = new AnchorProvider(connection, wallet, {});\nsetProvider(provider);\nconst program = new Program(IDL, PROGRAM_ID, provider);\n\nconst [pda] = PublicKey.findProgramAddressSync(\n  [Buffer.from("player", "utf8"),\n  publicKey.toBuffer()],\n  new PublicKey(PROGRAM_ID)\n);\n\ntry {\n  const transaction = program.methods\n    .initPlayer()\n    .accounts({\n      player: pda,\n      signer: publicKey,\n      systemProgram: SystemProgram.programId,\n    })\n    .transaction();\n\n  const tx = await transaction;\n  const txSig = await sendTransaction(tx, connection);\n  await connection.confirmTransaction(txSig, "confirmed");\n')),(0,r.kt)("p",null,"How to actually build this energy system you can learn here:\n",(0,r.kt)("a",{parentName:"p",href:"../gaming/energy-system"},"Building an Energy system")))}g.isMDXComponent=!0}}]);