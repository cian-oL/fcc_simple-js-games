const grid = document.querySelector(".grid");
const widthOfBlock = 100;
const heightOfBlock = 20;
const xStart = 10;
let xChange = xStart;
const yStart = 270;
let yChange = yStart;
const numberOfRows = 7; // 5 blocks on each row

// single block
class Block {
  constructor(xAxis, yAxis) {
    this.bottomLeft = [xAxis, yAxis];
    this.bottomRight = [xAxis + widthOfBlock, yAxis];
    this.topLeft = [xAxis, yAxis + heightOfBlock];
    this.topRight = [xAxis + widthOfBlock, yAxis + heightOfBlock];
  }
}

// make a list of 15 blocks spaced by 10 px
// const blocks = [new Block(10, 270)];
const blocks = [];
for (let i = 0; i < numberOfRows; i++) {
  for (let j = 0; j < 5; j++) {
    blocks.push(new Block(xChange, yChange));
    xChange += 110;
  }
  xChange = xStart;
  yChange -= 30;
}

// create blocks
const createBlocks = () => {
  for (let i = 0; i < blocks.length; i++) {
    const block = document.createElement("div");
    block.classList.add("block");
    block.style.left = blocks[i].bottomLeft[0] + "px";
    block.style.bottom = blocks[i].bottomLeft[1] + "px";
    grid.appendChild(block);
  }
};

// user
const user = document.createElement("div");
user.classList.add("user");
grid.appendChild(user);


createBlocks();
console.log(blocks.length);
