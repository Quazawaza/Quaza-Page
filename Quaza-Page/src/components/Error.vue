
<template>
  <div class="errorWrapper">
    <img src="src\assets\Error.png" alt="Warning" width="400" height="400" />
    <h2>Error</h2>
    <p>{{ message }}</p>
  </div>
</template>

<style scoped>
.errorWrapper {
  color: red;
  text-align: center;
}

.errorWrapper > h2 {
  font-size: 45px;
  margin: 0;
}

.errorWrapper > p {
  font-size: 22px;
  margin: 0;
}
</style>
