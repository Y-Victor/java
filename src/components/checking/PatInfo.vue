<template>
  <div class>
    <a-layout-content class="info-style">
      <div class="pat-div">
        <div class="pat-content">
          <img src="../../assets/woman.png" alt />
          <div class="pat-info">
            <span>XN20000000019</span>
            <span>Emma William</span>
            <span>1989-11-10 (30)</span>
          </div>
        </div>
        <a-divider type="vertical" />
        <div class="pat-content">
          <img src="../../assets/man.png" alt />
          <div class="pat-info">
            <span>XN20000000019</span>
            <span>Addison William</span>
            <span>1987-11-10 (32)</span>
          </div>
        </div>
      </div>
    </a-layout-content>
  </div>
</template>

<script>
export default {
  name: "PatInfo",
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
.ant-layout-header {
  background: #ffffff;
}
.info-style {
  margin: 24px 23px 16px 15px;
  padding: 24px;
  background: #fbfbfc;
  min-height: 202px;
  box-shadow: #999 0 5px 6px;
}
.pat-div {
  display: flex;
  justify-content: space-around;
}
.pat-content {
  display: flex;
  justify-content: flex-start;
}
.pat-content img {
  width: 20px;
  height: 20px;
}
.pat-info {
  display: flex;
  flex-direction: column;
  margin-left: 20px;
}
.pat-info span:nth-child(1) {
  font-size: 22px;
}
.pat-info span:nth-child(2) {
  margin-top: 20px;
  font-size: 36px;
  font-weight: 900;
}
.pat-info span:nth-child(3) {
  margin-top: 20px;
  font-size: 22px;
}
</style>