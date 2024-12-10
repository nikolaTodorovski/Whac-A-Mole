<template>
 <header class="whac-a-mole__header">
   <span>Whac-A-Mole</span>
   <div class="whac-a-mole__score">
     <span>Score: {{ score }}</span>
     <span>Missed: {{ `${missed} / ${ALLOWED_MISSED}` }}</span>
   </div>
 </header>
  <div class="whac-a-mole__board">
      <div
          v-for="i in FIELD_SIZE"
          :key="`hole-${i}`"
          class="whac-a-mole__hole"
      >
          <img
              v-if="i === molePosition"
              class="whac-a-mole__mole"
              src="./assets/Mole.svg"
              @click="moleClickHandler"
          />
      </div>
  </div>
  <button
      @click="startGameHandler"
  >Start Game</button>
    <pre>
        High score: {{ highScore }}
    </pre>
</template>

<script setup lang="ts">

import {nextTick, ref} from "vue";

const score = ref<number>(0);
const missed = ref<number>(0);
const highScore = ref<number[]>([]);
const molePosition = ref<number>(0);
const intervalId = ref<string | null>(null);
const isHit = ref<number>(false);

// Game constants
const ALLOWED_MISSED = 3;
const FIELD_SIZE = 20;
const WHACA_TIME = 2000;


function startGameHandler() {
    resetVariables();
    startMoleInterval();
}

function resetVariables() {
    score.value = 0;
    missed.value = 0;
    molePosition.value = 0;
    isHit.value = false;
}

function endGame() {
    clearInterval(intervalId.value)
    highScore.value.push(score.value)

}

function startMoleInterval() {
    intervalId.value = setInterval(
        () => {
            if(molePosition.value > 0 && isHit.value === false) {
                missed.value += 1;
            }

            if (missed.value === ALLOWED_MISSED) {
                endGame()
            } else {
                isHit.value = false;
                showMole();
            }
        },
        WHACA_TIME
    );
}

async function moleClickHandler() {
    molePosition.value = 0;
    score.value += 1;
    isHit.value = true;
}

function showMole() {
    molePosition.value = Math.max(
        Math.floor(Math.random() * FIELD_SIZE),
        1,
    )
}



</script>


<style scoped>
.whac-a-mole__header {
  display: flex;
  justify-content: space-between;
}

.whac-a-mole__score {
  display: flex;
  gap: 20px;
}

.whac-a-mole__board {
    margin: auto;
    width: 600px;
    height: 600px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 24px;
    grid-row-gap: 24px;
}

.whac-a-mole__hole {
    position: relative;
    width: 100%;
    height: 50px;
    border-radius: 50%;
    background: #313131;
    align-self: end;
}

.whac-a-mole__mole {
    position: absolute;
    width: 60%;
    left: 20%;
    bottom: 20px;
}
</style>
