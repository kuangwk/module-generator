module-generator
==========

基础组件开发模版，自动化根据 README.md 跟 代码中的注释生成相应的html说明文档，快速发布组件到bower。


## 使用说明

### 下载模版：

直接到 [github](https://github.com/kuangwk/module-generator) 上下载 module-generator, 或者终端输入: 
	
	git clone https://github.com/kuangwk/module-generator.git

### 配置：
	
* 确保已经安装 `grunt-cli` (`npm install -g grunt-cli`)
* 修改相应的项目信息
	* 把下载下来的 `module-generator` 文件夹的名字改成要开发的模块的名字，比如 `SideNav`  
* 进入修改后的修改完名字的文件夹，终端输入 `npm install` 安装依赖

### 目录说明：
	
* `dist`： 压缩合并后的文件
* `doc` ： 静态文档页面所在目录， `index.html` 是入口
* `src` ： 源文件所在目录
* `gruntfile.js` ： grunt配置文件
* `package.json` :  开发时包的信息跟依赖
* `README.md`： 模块说明文档，生成静态文档页面时会作为 `index.html`
* `bower.json`： 发布时,作为bower包的信息
	
### 组件开发： 

1. 修改组件说明文档 `README.md`
2. 将组件代码放到 `src` 文件夹，使用 `jsdoc3` 规则对模块进行注释
3. 命令说明：
	* `grunt doc`： 自动分析 `src` 中代码的注释跟 `README.md`, 在文件夹 `doc` 中生成html文档
	* `grunt dev`： 将 `src` 中的js代码压缩到 `dist` 
	* `grunt clean`： 清空 `doc` 跟 `dist` 文件夹
	* `grunt build`： 同时运行 `grunt doc` 跟 `grunt dev`， 用于最后发布组件

### 发布：

*使用`bower`发布*

* 完成组件开发跟注释及 `README.md` 说明文档修改后，终端运行 `grunt build` 命令, 生成发布的文件
* 把组件上传到远程仓库，比如 git仓库
* 使用 `bower` 发布组件：
	* 安装 `bower`： `npm install -g bower`
	* 根据项目信息相应修改 `bower.json`
	* bower上注册组件： 终端运行 `bower register <package-name> <package-repository-url>`
		* `package-name` 即为组件名字，由于现在暂时上传的是外网bower，简单的名字很可能会冲突，可以终端输入 `bower info <package-name>` 来看下是否已经存在相同名字的包，如果存在请尝试修改名字； 
		* `package-repository` 即为组件上传的远程仓库，bower跟npm不同，bower上不提供代码托管，注册时要讲包的名字跟远程仓库绑定 
 	
	
		
## 技术实现

### 使用框架：

* `npm`: 我把对一些已有npm第三方包做了相应修改，并上传到npm
* `grunt`: 自动化流程，打包，插件使用
* `grunt-jsdoc-update`： 已有的 [grunt-jsdoc](https://github.com/krampstudio/grunt-jsdoc) 项目依赖的 [jsdoc3](https://github.com/jsdoc3/jsdoc) 版本比较低，我在使用过程中发现有些规范的注释没法分析出来，我就在git上fork他的代码，升级了jsdoc版本，但出现了兼容问题，于是在 `grunt-jsdoc` 上做了相应的修改，然后把修改后的 [grunt-jsdoc-update](https://github.com/kuangwk/grunt-jsdoc-update) 上传到npm供自己使用
* `docstrap-doggy`： 是我根据已有的 grunt-jsdoc 的template： [docstrap](https://github.com/terryweiss/docstrap)， 加上自定义的主题，然后重新上传的npm包，用于控制jsdoc生成的html说明文档的样式
* `bower`：web前端包管理器


## TODOS

* 自动化脚手架，通过比如yo的方式来自动修改文件夹名字，相应的package.json, README.md 和 bower.json
* 处理组件的依赖关系
* 加入对带有css，template 的组件的支持，目前只支持讲一些只有js的前端组件的开发
* 模版中加入更多组件自动化开发的grunt插件，比如测试，合并

