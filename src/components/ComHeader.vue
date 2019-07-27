<template>
  <div>
    <a-layout>
      <a-layout-header>
        <div class="match-logo">
          <img src="../assets/Match.png" alt />
          <span>IVF Intelligent Checking System</span>
        </div>
        <div class="left-opra">
          <span class="sin-block">12:22:11</span>
          <img src="../assets/Group.png" alt />
          <span>Admin</span>
          <img src="../assets/switch.png" alt />
          <img src="../assets/Shape.png" alt />
          <img src="../assets/shutdown.png" alt />
        </div>
      </a-layout-header>
    </a-layout>
  </div>
</template>

<script>
export default {
  name: "ComHeader"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ant-layout-header {
  background: #8ebe3c;
  height: 43px;
  line-height: 43px;
}
.match-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  color: white;
  font-weight: 800;
}
.match-logo span{
  margin-left: 10px;
}
.left-opra {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: 100px;
  font-size: 1.2rem;
  color: #fff;
  margin-top: -43px;
  font-weight: 800;
}
.left-opra span {
  margin-left: 20px;
}
.left-opra img {
  margin-left: 20px;
}
</style>
