<script setup>
import { ref, onMounted } from "vue";
const canvas = ref();

const ROW = 30;
const COLUMN = 30;
const pixelSize = 40;
let ctx = null;
let snake = {};
let intervalTimer = null;
const initailize = () => {
  ctx = canvas.value.getContext("2d");
};
const updateCanvas = () => {
  createSnake();
  intervalUpdate();
};
const drawArena = () => {
  clear();
  drawBackground();
  drawColumnLine();
  drawRowLine();
};
const intervalUpdate = () => {
  intervalTimer = setInterval(() => {
    intervaAction();
  }, 90);
};
const intervaAction = () => {
  drawArena();
  moveSnake();
  drawSnake();
};
const drawBackground = () => {
  ctx.fillStyle = "wheat";
  ctx.fillRect(0, 0, COLUMN * pixelSize, ROW * pixelSize);
};
const drawColumnLine = () => {
  ctx.strokeStyle = "black";
  ctx.lineWidth = 1;
  for (let i = 0; i <= COLUMN; i += 1) {
    ctx.beginPath();
    ctx.moveTo(i * pixelSize, 0);
    ctx.lineTo(i * pixelSize, ROW * pixelSize);
    ctx.stroke();
  }
};
const drawRowLine = () => {
  ctx.strokeStyle = "black";
  ctx.lineWidth = 1;
  for (let i = 0; i <= ROW; i += 1) {
    ctx.beginPath();
    ctx.moveTo(0, i * pixelSize);
    ctx.lineTo(COLUMN * pixelSize, i * pixelSize);
    ctx.stroke();
  }
};
const drawSnake = () => {
  ctx.fillStyle = "blue";
  for (let point of snake.position) {
    ctx.fillRect(
      point.x * pixelSize,
      point.y * pixelSize,
      pixelSize,
      pixelSize
    );
  }
};
const clear = () => {
  ctx.clearRect(0, 0, COLUMN * pixelSize, ROW * pixelSize);
};
const moveSnake = () => {
  const newHeadCoordinate = {
    x: snake.position[0].x + snake.direction.x,
    y: snake.position[0].y + snake.direction.y,
  };
  snake.position.unshift(newHeadCoordinate);
  snake.position.pop();
};
const createSnake = () => {
  snake = {
    position: [
      {
        x: COLUMN / 2,
        y: ROW / 2,
      },
      {
        x: COLUMN / 2 + 1,
        y: ROW / 2,
      },
      {
        x: COLUMN / 2 + 2,
        y: ROW / 2,
      },
    ],
    size: 1,
    direction: {
      x: 0,
      y: -1,
    },
  };
};
const startGame = () => {
  updateCanvas();
};
onMounted(() => {
  initailize();
  drawArena();
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      snake.direction = {
        x: -1,
        y: 0,
      };
    } else if (e.key === "ArrowRight") {
      snake.direction = {
        x: 1,
        y: 0,
      };
    } else if (e.key === "ArrowUp") {
      snake.direction = {
        x: 0,
        y: -1,
      };
    } else if (e.key === "ArrowDown") {
      snake.direction = {
        x: 0,
        y: 1,
      };
    }
  });
});
</script>

<template>
  <div class="snake">
    <h1>貪吃蛇大作戰</h1>
    <button @click="startGame">開始遊戲</button>
    <div class="canvas-container">
      <canvas class="canvas" ref="canvas" width="1000" height="1000"></canvas>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.snake {
  .canvas {
    border: solid 1px $surface01;
  }
}
</style>
