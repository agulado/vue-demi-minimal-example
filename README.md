# Vue 3 + Typescript + Vite

#### 本地运行环境
"node": ">=16.10.0",
"npm": ">=7.24.0"

#### 项目初始化
**npm run init**
```angular2html
初始化项目时，须执行且仅需执行一次
（多次执行除了费电也没啥大碍）
（如有githook更改或其他需重新执行的情况发生，会通知各位）

init过程：
  · 判断 node版本是否>=16
  · 全局安装prettier（如果没安装）
  · 执行根目录的npm install
  · copy githook files
  · chmod git hooks dir
```

#### npm script
```shell
npm start（=npm run dev)  # 本地启动项目
npm run build:[ENV]       # 打包:环境 'test' | 'staging' | 'product'
npm run lint
```

#### 注意点
- 本地运行安装，必须使用npm,保持大家包安装器统一
- commit的message需要以feature|fix|wip|merge开头
- 

#### 资源引用
- UI库：
  - (@yq/ui)[http://element.17zuoye.net]
  - (element-plus)[https://element-plus.org/#/zh-CN]
- 基础工具库：
  - (@saas/utils)[http://gitlab.17zuoye.net/saas-platform/Shenzhou-1]
  - (@saas/blibs)[http://gitlab.17zuoye.net/saas-platform/Shenzhou-4]
