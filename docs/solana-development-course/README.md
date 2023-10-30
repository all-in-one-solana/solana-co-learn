---
title: Solana 开发课程
sidebar_position: 0
slug: /
---

:::info
欢迎来到希望学习 Web3 开发的 Web 开发人员的最佳起点。 Solana 的高速、低成本和能源效率使其成为理想的学习网络。

source is : https://www.soldev.app/course
:::


## Module 0 : 介绍

- 入门

## Module 1:  密码学和 Solana 客户端简介

- 密码学基础知识
    - Lab: 创建和加载密钥对
- 从网络读取数据
    - Lab: 连接到Solana并检查账户余额
- 将数据写入网络
    - Lab: 进行交易并使用浏览器
- 与钱包互动
    - Lab: 为Ping程序制作一个React前端
- 序列化数据
    - Lab: 构建一个React前端以提交电影评论
- 反序列化数据
    - Lab: 构建一个React前端来展示电影评论
- 页面、顺序和过滤程序数据
    - Lab: 为电影评论前端添加分页、排序和搜索功能

## Module 2: 客户端与常见 Solana 程序的交互

- 使用token program 创建token
    - Lab: 铸币、转移和销毁代币
- 通过token swap 交换token
    - Lab: 创建添加、提取和交换代币的指令
- 使用Metaplex创建solana nft
    - Lab: 创建薄荷NFT，更新其元数据，并与一个收藏品关联

## Module 3: 基本 Solana 程序开发

- hello world
    - Lab: 创建并部署一个链上的“hello world”程序
- 创建基本程序，第 1 部分 - 处理指令数据
    - Lab: 创建一个在链上运行的程序，接收电影评论并对其进行反序列化
- 创建基本程序，第 2 部分 - 状态管理
    - Lab: 创建一个在链上存储电影评论的程序
- 创建基本程序，第 3 部分 - 基本安全性和验证
    - Lab: 为电影评论程序添加安全检查和更新


## Module 4: 中级 Solana 程序开发

- 本地程序开发
    - Lab: 配置Windows、Mac和Linux以进行本地Solana开发
- 程序派生地址
    - Lab: 使用PDA存储电影评论程序的评论
- 跨程序调用
    - Lab: 使用CPI为评论和留言发行代币奖励

## Module 5: Anchor 项目开发

- Anchor 开发简介
    - Lab: 使用Anchor创建和部署一个链上ping计数器应用程序
- 客户端 Anchor 开发简介
    - Lab: 为ping-counter应用程序创建一个React和Anchor前端
- Anchor DPA与账户
    - Lab: 使用Anchor创建一个电影评论程序
- Anchor CPI和错误
    - Lab: 对评论进行薄荷代币奖励

## Modul 6: 超越基础

- Solana 程序中的环境变量
    - Lab: 创建功能标志以帮助本地测试
- Solana Pay
    - Lab: 使用QR码创建付款请求
- 版本化事务和查找表
    - Lab: 使用查找表来处理单个交易中的多个账户
- Rust程序宏
    - Lab: 使用Rust宏生成程序代码

## Module 7: Solana 程序安全

- 如何使用程序安全模块
- 签名人授权
    - Lab: 在处理交易之前，请检查签署人是否正确
- 账户数据匹配
    - Lab: 在处理交易之前，请检查所有者是否正确
- 重新初始化攻击
    - Lab: 在处理交易之前检查账户数据是否正确
- 重复的可变账户
    - Lab: 确保账户只能初始化一次，以防止覆盖现有数据
- 类型角色扮演
    - Lab: 确保账户是独立的
- 任意CPI
    - Lab: 确保只有正确的程序调用了CPIs
- Bump seed canonicalizatio
    - Lab: 确保颗粒种子始终是规范的
- Closing accounts and revival attacks
    - Lab: 确保关闭的账户无法再次使用
- PDA 共享
    - Lab: 确保PDA设计避免使用共享账户

## Module 8: 高级 Solana 编程

- 程序架构
    - lab: 创建一个优化的链上RPG游戏
- 预言机和预言机网络
    - lab: 使用Switchboard创建一个Escrow程序
- 可验证随机函数
    - lab: 向托管程序添加随机性
- 压缩NFT
    - lab: 使用Bubblegum在规模上读取和转移NFTs的Mint
