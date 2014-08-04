module-generator
==========

基础组件开发模版

### 下载模版：

	git clone https://github.com/kuangwk/module-generator.git

### 配置：
	
* 确保已经安装 `grunt-cli` (`npm install -g grunt-cli`)
* 修改clone下来的 `module-generator` 文件夹的名字，改成要开发的模块的名字
* 进入修改后的修改完名字的文件夹，终端输入 `npm install` 安装依赖

### 目录说明：
	
* `doc` ： 静态文档页面所在目录 `index.html` 是入口
* `src` ： 源文件所在目录
* `gruntfile.js` ： grunt配置文件
* `package.json` :  模块信息文件
* `README.md` ： 模块说明文档，生成静态文档页面时会作为 `index.html`
	
### 使用： (暂时只实现自动化文档功能)

* `grunt doc` : 自动将分析src里的js文件的注释及 `README.md`，在 `doc` 生成相应的静态页面 
	
		
