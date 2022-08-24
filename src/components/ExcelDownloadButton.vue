<template>
  <button class="excel-download">
    <span class="icon">＋</span>
    <span>ファイルダウンロード</span>
  </button>
</template>

<style scoped>
.excel-download {
  border: none;
  min-width: 220px;
  min-height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: white;
  cursor: pointer;
  background-color: #107c10;
}

.excel-download:hover {
  opacity: 0.7;
}

.excel-download > .icon {
  margin-right: 8px;
  font-size: 30px;
}
</style>
