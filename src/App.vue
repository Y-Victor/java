<template>
  <div id="app">
  更新了
    <ComHeader />
    <SubTitle />
    <SubStatus />
    <div>
      <a-row>
        <a-col :span="16">
          <div>
            <PatInfo />
          </div>
          <div>
            <Operation />
          </div>
        </a-col>
        <a-col :span="8">
          <div>
            <OperaHistory />
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
import ComHeader from "./components/ComHeader";
import PatInfo from "./components/checking/PatInfo";
import SubStatus from "./components/checking/SubStatus";
import OperaHistory from "./components/checking/OperaHistory";
import Operation from "./components/checking/Operation";
import SubTitle from "./components/checking/SubTitle";

export default {
  name: "app",
  components: {
    ComHeader,
    PatInfo,
    SubStatus,
    OperaHistory,
    Operation,
    SubTitle
  }
};
</script>

<style>
#app {
  background: #F0F2F5;
}
</style>
