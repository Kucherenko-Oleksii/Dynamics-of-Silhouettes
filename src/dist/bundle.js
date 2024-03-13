/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/script.js":
/*!***************************!*\
  !*** ./scripts/script.js ***!
  \***************************/
/***/ (() => {

eval("class Shape {\r\n  constructor(x, y, color) {\r\n    this.x = x;\r\n    this.y = y;\r\n    this.color = color;\r\n  }\r\n\r\n  draw(ctx) {\r\n    // Метод для малювання фігури (реалізується в дочірніх класах)\r\n  }\r\n}\r\n\r\nclass Circle extends Shape {\r\n  constructor(x, y, color, radius) {\r\n    super(x, y, color);\r\n    this.radius = radius;\r\n  }\r\n\r\n  draw(ctx) {\r\n    ctx.beginPath();\r\n    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);\r\n    ctx.fillStyle = this.color;\r\n    ctx.fill();\r\n  }\r\n}\r\n\r\nclass Ellipse extends Shape {\r\n  constructor(x, y, color, radiusX, radiusY) {\r\n    super(x, y, color);\r\n    this.radiusX = radiusX;\r\n    this.radiusY = radiusY;\r\n  }\r\n\r\n  draw(ctx) {\r\n    ctx.beginPath();\r\n    ctx.ellipse(this.x, this.y, this.radiusX, this.radiusY, 0, 0, 2 * Math.PI);\r\n    ctx.fillStyle = this.color;\r\n    ctx.fill();\r\n  }\r\n}\r\n\r\nclass Triangle extends Shape {\r\n  constructor(x, y, color, size) {\r\n    super(x, y, color);\r\n    this.size = size;\r\n  }\r\n\r\n  draw(ctx) {\r\n    ctx.beginPath();\r\n    ctx.moveTo(this.x, this.y - this.size);\r\n    ctx.lineTo(this.x + this.size, this.y + this.size);\r\n    ctx.lineTo(this.x - this.size, this.y + this.size);\r\n    ctx.closePath();\r\n    ctx.fillStyle = this.color;\r\n    ctx.fill();\r\n  }\r\n}\r\n\r\nclass Canvas {\r\n  constructor(canvasId) {\r\n    this.canvas = document.querySelector(`#${canvasId}`);\r\n    this.ctx = this.canvas.getContext(\"2d\");\r\n    this.shapes = [];\r\n\r\n    this.canvas.addEventListener(\r\n      \"contextmenu\",\r\n      this.handleContextMenu.bind(this)\r\n    );\r\n  }\r\n\r\n  handleContextMenu(event) {\r\n    event.preventDefault();\r\n    const { offsetX: x, offsetY: y } = event;\r\n    this.addRandomShape(x, y);\r\n  }\r\n\r\n  addRandomShape(x, y) {\r\n    const shapeType = Math.floor(Math.random() * 3);\r\n    const color = this.getRandomColor();\r\n\r\n    switch (shapeType) {\r\n      case 0:\r\n        const radius = Math.floor(Math.random() * 50) + 10;\r\n        this.shapes.push(new Circle(x, y, color, radius));\r\n        break;\r\n      case 1:\r\n        const radiusX = Math.floor(Math.random() * 50) + 10;\r\n        const radiusY = Math.floor(Math.random() * 50) + 10;\r\n        this.shapes.push(new Ellipse(x, y, color, radiusX, radiusY));\r\n        break;\r\n      case 2:\r\n        const size = Math.floor(Math.random() * 50) + 10;\r\n        this.shapes.push(new Triangle(x, y, color, size));\r\n        break;\r\n    }\r\n\r\n    this.drawShapes();\r\n  }\r\n\r\n  drawShapes() {\r\n    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\r\n    this.shapes.forEach((shape) => shape.draw(this.ctx));\r\n  }\r\n\r\n  getRandomColor() {\r\n    const letters = \"0123456789ABCDEF\";\r\n    let color = \"#\";\r\n    for (let i = 0; i < 6; i++) {\r\n      color += letters[Math.floor(Math.random() * 16)];\r\n    }\r\n    return color;\r\n  }\r\n}\r\n\r\nconst canvas = new Canvas(\"myCanvas\");\r\n\n\n//# sourceURL=webpack://src/./scripts/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./scripts/script.js"]();
/******/ 	
/******/ })()
;