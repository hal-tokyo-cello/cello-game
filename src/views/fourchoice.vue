<template>
  <main>
    <div>
      <h1>4択問題</h1>
    </div>
    <div>
      <p class="question">Q1</p>
      <p class="message">{{ message1 }}</p>
    </div>
    <div class="choice">
      <ol>
        <li>{{ message2 }}</li>
        <li>{{ message3 }}</li>
        <li>{{ message4 }}</li>
        <li>{{ message5 }}</li>
      </ol>
    </div>
    <div class="button">
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
    </div>
  </main>
</template>

<script>
</script>

<style scoped>
h1 {
  font-size: 40px;
}

button {
  margin-left: 30px;
  width: 50px;
  height: 50px;
  color: #f8f8f8;
  background-color: #fc8c0d;
  border-color: #fc8c0d;
  font-size: 24px;
}

button:hover {
  background-color: #f8f8f8;
  color: black;
}

.question {
  font-size: 18px;
}

.choice {
  font-size: 20px;
}

.question {
  font-size: 20px;
}

.button {
  text-align: center;
  margin-top: 50px;
}
</style>
