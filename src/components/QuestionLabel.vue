<template>
  <div class="question">
    <div class="question-badge">{{ number }}</div>
    <span class="question-text">{{ text }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps({
  number: {
    type: Number,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.question {
  display: flex;
  align-items: center;
  font-size: 20px;
}

.question-badge {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 42px;
  height: 42px;
  padding-bottom: 4px;
  background-image: url("../assets/images/question.png");
  color: white;
}

.question-badge::before {
  content: "Q";
}

.question-text {
  margin-left: 20px;
  color: #545454;
}
</style>
