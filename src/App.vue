<template>
 <header class="whac-a-mole__header">
   <span>Whac-A-Mole</span>
   <div class="whac-a-mole__score">
     <span>Score: </span>
     <span>Missed: </span>
   </div>
 </header>
  <div class="whac-a-mole__content"></div>
  <button>Start Game</button>
</template>

<style scoped>
.whac-a-mole__header {
  display: flex;
  justify-content: space-between;
}

.whac-a-mole__score {
  display: flex;
  gap: 20px;
}
</style>
