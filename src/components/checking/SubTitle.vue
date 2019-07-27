<template>
  <div class>
    <a-layout>
      <a-layout-header>
        <div class="Sub">
          <div class="SubOne active">
            <img src="../../assets/Check.png" alt />
            <span>Check</span>
          </div>
          <div class="SubOne">
            <img src="../../assets/Patient.png" alt />
            <span>Patient</span>
          </div>
          <div class="SubOne">
            <img src="../../assets/Task.png" alt />
            <span>Task</span>
          </div>
        </div>
        <div class="SubTwo">
          <div>
            <img src="../../assets/operation.png" alt />
            <span>Operation</span>
          </div>
        </div>
      </a-layout-header>
    </a-layout>
  </div>
</template>

<script>
export default {
  name: "SubTitle",
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
  background: #fff;
  padding: 0;
  height: 45px;
  line-height: 45px;
}
.Sub {
  display: flex;
}

.SubOne {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
}

.active {
  background: #e3f1d5;
}

.SubOne img {
  width: 25px;
  height: 25px;
}
.SubOne span {
  font-size: 20px;
  font-weight: 700;
  margin-left: 10px;
}

.SubTwo img {
  width: 25px;
  height: 25px;
}
.SubTwo span {
  font-size: 20px;
  font-weight: 700;
  margin-left: 10px;
}

.SubTwo {
  display: flex;
  justify-content: flex-end;
  margin-top: -45px;
}
.SubTwo div {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
}
</style>