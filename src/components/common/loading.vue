<template>
  <div class="mask">
    <div class="loading"></div>

  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="less" scoped>
  .mask {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0,0,0,.5);
    z-index: 999999999;
  }
  .loading {
    position: relative;
    width: 80%;
    height: .6rem;
    border-radius: .6rem;
    border: .02rem solid #ccc;
    &::before {
      position: absolute;
      content: '\0020';
      inset: 0 100% 0 0;
      background: skyblue;
      border-radius: inherit;
      animation: ins 2s infinite;
    }
  }
  @keyframes ins {
    100% {
      inset: 0;
    }
  }


</style>
