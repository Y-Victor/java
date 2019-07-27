<template>
  <div class>
    <a-layout-content class="info-style">
      <div>
        <!-- <a-avatar style="color: #fff; backgroundColor: #8ebe3c">R</a-avatar>
        -->
        <img class="avatar" src="../../assets/man.png" alt="头像" />
        <span style="font-size:18px;margin-left:5px;">Machine Assistant</span>
        <img src="../../assets/more.png" alt style="float:right;" />
      </div>
      <a-divider />
      <div style="height:570px;overflow-y:scroll;">
        <div v-for="(item) in 10" :key="item">
          <div class="message-list">
            <div id="high" class="message-item message-item--left">
              <img class="avatar" src="../../assets/man.png" alt="头像" />
              <!-- <a-avatar style="color: #fff; backgroundColor: #8ebe3c">R</a-avatar> -->
              <div class="message-bubble">You've reassigned.</div>
            </div>
          </div>
          <div class="message-list">
            <div id="high" class="message-item message-item--right">
              <img class="avatar" src="../../assets/woman.png" alt="头像" />
              <div class="message-bubble">You did a direct upstream operation.</div>
            </div>
          </div>
        </div>
      </div>
      <div style="height:60px;display:flex;align-items:center;margin-top:10px;">
        <img src="../../assets/face.png" alt style />
        <input
          type="text"
          style="width:80%;border:none;line-height:40px;margin:10px;padding:3px 10px;"
          placeholder="Please enter"
        />
        <img src="../../assets/send.png" alt style />
      </div>
    </a-layout-content>
  </div>
</template>

<script>
export default {
  name: "OperaHistory",
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style scoped>
@import "../../assets/css/style.css";
.info-style {
  margin: 24px 16px;
  padding: 16px 16px 5px 16px;
  background: #fbfbfc;
  min-height: 760px;
  box-shadow: #999 0 5px 6px;
}
.ant-divider {
  background: #8ebe3c;
}
.ant-divider-horizontal {
  height: 4px;
}
</style>