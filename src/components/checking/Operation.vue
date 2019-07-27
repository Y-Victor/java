<template>
  <div class>
    <a-layout-content class="info-style">
      <div class="sign">
        <span class="sign-gray"></span>
        <span class="sign-desc">removed</span>
        <span class="sign-active"></span>
        <span class="sign-desc">using</span>
      </div>
      <div class="sec-padding">
        <div class="sec-header">
          <span v-for="(item,index) in steps" :key="item">
            <span :class="current === index ? 'actives' : ''">{{item.title}}</span>
          </span>
        </div>
        <a-steps :current="current">
          <a-step v-for="item in steps" :key="item.title" />
        </a-steps>
        <div class="steps-content step-logo">
          <div class="steps" v-for="item in stepImg" :key="item">
            <div class="steps-img">
              <img v-bind:src="item.imgurl" />
            </div>
            <span style="margin-top:10px;">{{item.desc}}</span>
          </div>
        </div>
      </div>

      <div class="steps-action">
        <a-button v-if="current < steps.length - 1" type="primary" @click="next">Next</a-button>
        <a-button
          v-if="current == steps.length - 1"
          type="primary"
          @click="$message.success('Processing complete!')"
        >Done</a-button>
        <a-button v-if="current>0" style="margin-left: 8px" @click="prev">Previous</a-button>
      </div>
      <div class="opera-con">
        <div class="con-all">
          <img src="../../../src/assets/scan.png" alt />
          <span>Scan</span>
        </div>
        <div class="con-all">
          <img src="../../assets/print.png" alt />
          <span>Print</span>
        </div>
        <div class="con-all">
          <img src="../../assets/ring.png" alt />
          <span>RFID</span>
        </div>
      </div>
    </a-layout-content>
  </div>
</template>

<script>
export default {
  name: "Operation",
  components: {},
  props: {},
  data() {
    return {
      current: 0,
      steps: [
        {
          title: "Assign ID Cards",
          content: ""
        },
        {
          title: "Allot cup",
          content: ""
        },
        {
          title: "Release sperm",
          content: ""
        }
      ],
      stepImg: [
        {
          imgurl: "../../assets/tube.png",
          desc: "Unallocated"
        },
        {
          imgurl: "../../assets/vessel.png",
          desc: "Allot cup"
        },
        {
          imgurl: "../../assets/question.png",
          desc: "Unallocated"
        }
      ]
    };
  },
  watch: {},
  computed: {},
  methods: {
    next() {
      this.current++;
    },
    prev() {
      this.current--;
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped>
.info-style {
  margin: 20px 23px 16px 15px;
  padding: 24px;
  background: #fbfbfc;
  min-height: 535px;
  box-shadow: #999 0 5px 6px;
}
.steps-content {
  margin-top: 16px;
  border: 1px dashed #e9e9e9;
  border-radius: 6px;
  background-color: #fafafa;
  min-height: 200px;
  text-align: center;
  padding-top: 30px;
}

.steps-action {
  margin-top: 24px;
}
.sign {
  display: flex;
  justify-content: flex-start;
}
.sign .sign-gray {
  background: #cccfd4;
  border-radius: 50%;
  width: 20px;
  height: 20px;
}
.sign .sign-active {
  background: #aed761d4;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  margin-left: 20px;
}
.sign .sign-desc {
  margin-left: 10px;
  font-size: 18px;
  color: #cccfd4;
  margin-top: -3px;
}
.ant-steps-item-title {
  margin: -20px 0 0 -20px;
}
.actives {
  font-size: 24px;
  font-weight: 800;
}
.step-logo {
  display: flex;
  justify-content: center;
}
.step-logo .steps {
  /* display: flex;
  align-items: center;
  justify-content: space-between; */
  margin-left: 100px;
}
.opera-con {
  display: flex;
  justify-content: flex-end;
}
.con-all {
  display: flex;
  flex-direction: column;
  margin-right: 50px;
  color: #aed761;
}
.con-all span {
  font-size: 18px;
}
.sec-padding {
  padding: 0 20px;
}
.sec-header {
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
}
.steps-img {
  width: 100px;
  height: 150px;
}
</style>