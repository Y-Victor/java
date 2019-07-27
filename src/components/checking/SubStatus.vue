<template>
  <div>
    <a-layout>
      <a-layout-header>
        <div class="subStatus">
          <div class="subOne">
            <img src="../../assets/ShapeRight.png" alt />
            <span>Assign ID Cards</span>
          </div>
          <div class="btn-div">
            <a-button type="primary" class="actives">
              <img src="../../assets/Unfreeze.png" alt />
              <span>Release sperm</span>
            </a-button>
            <a-button type="primary">
              <img src="../../assets/baby.png" alt />
              <span>Release sperm</span>
            </a-button>
            <a-button type="primary">
              <img src="../../assets/IDcard.png" alt />
              <span>Release sperm</span>
            </a-button>
            <a-button type="primary">
              <img src="../../assets/IDcard.png" alt />
              <span>Release sperm</span>
            </a-button>
            <a-button type="primary">
              <img src="../../assets/IDcard.png" alt />
              <span>Release sperm</span>
            </a-button>
            <a-button type="primary">
              <img src="../../assets/IDcard.png" alt />
              <span>Release sperm</span>
            </a-button>
            <a-button type="primary">
              <img src="../../assets/IDcard.png" alt />
              <span>Release sperm</span>
            </a-button>
            <a-button type="primary">
              <img src="../../assets/IDcard.png" alt />
              <span>Release sperm</span>
            </a-button>
          </div>
        </div>
      </a-layout-header>
    </a-layout>
  </div>
</template>

<script>
export default {
  name: "SubStatus",
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
  background: #e3f1d5;
  padding: 0 10px;
  height: 80px;
  line-height: 80px;
}
.subOne {
  display: flex;
  align-items: center;
  font-size: 22px;
  font-weight: 700;
}
.subOne span {
  margin-left: 10px;
  width: 180px;
}
.subStatus {
  display: flex;
}
.btn-div {
  /* display: flex; */
  white-space: nowrap;
  /* overflow: hidden; */
  overflow-x: scroll;
  justify-content: center;
  align-items: center;
  /* padding-left: 50px; */
  font-size: 20px;
  font-weight: 400;
}
.btn-div img {
  margin-top: -10px;
}
.btn-div span {
  margin-left: 10px;
  font-size: 22px;
  font-weight: 600;
}
.ant-btn-primary {
  border-color: #fff;
  background: #fff;
  box-shadow: #999 0 3px 6px;
  margin-left: 20px;
  border-radius: 50px;
  color: #8ebe3c;
}
.actives {
  background: #8ebe3c;
  color: #fff;
  border-color: #8ebe3c;
}
.ant-btn {
  width: 215px;
  height: 50px;
}
</style>