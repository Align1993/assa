<template>
  <div class="home">
    <div
      class="home-header animated"
      flex="cross:center"
      id="header"
    >
      <div
        class="home-header-cover  animate__animated"
        :class="{fadeIn:menuActive!=-1}"
        :style="{height:coverHeight+'px'}"
      >

      </div>
      <!-- v-on:mouseleave="menuActive=-1 " -->
      <div class="wrapper z1">
        <div class="home-header-menu">
          <div
            class="item pointer"
            v-for="(item, index) in menuList"
            :key="item.groupName"
            v-on:mouseenter="menuActive=index"
            v-on:mouseleave="menuActive=-1 "
          >
            <div class="groupName  animate__animated">
              {{ item.groupName }}
            </div>
            <div class="line-Wrapper">
              <div
                class="line"
                :class="{drawline:menuActive==index }"
                v-show="menuActive==index"
              >
              </div>
            </div>
            <div
              class="children animate__animated"
              :class="{show:menuActive==index} "
            >
              <div
                v-for="item in item.children"
                :key="item.name"
                v-html=" item.name"
              >
                <!--  {{ item.name }} -->
              </div>
            </div>
          </div>
        </div>

        <div
          class="home-header-bg"
          :class="{inverse:inverse}"
        ></div>

      </div>
      <div class="logoArea">

      </div>
    </div>
    <div class="swiper-wrapper">
      <swiper
        ref="mySwiper"
        :options="swiperOption"
        class="swiper-container"
      >
        <!-- slides -->
        <swiper-slide
          class="swiper-item"
          v-for='item in swiperList'
          :key='item.id'
        >
          <img
            :style="{transform:` scale(${ t1_z},${ t1_z})`, opacity:t1_opacity }"
            class='swiper-img'
            :src='item.imgUrl'
            alt=""
          />
        </swiper-slide>
        <!-- Optional controls ,显示小点-->
        <div
          class="swiper-pagination"
          slot="pagination"
        ></div>

      </swiper>
      <section class="slogen">
        <div class="wrap-1 oHidden">
          <div
            class="title opacity-change
transition-common "
            :style="{transform:`
          translate3d(
          0px,${ t1_Y}px,0px)`, opacity:t1_opacity }"
          >
            色· 猎心狙击
          </div>
        </div>
        <div class="description">

          让采撷玫瑰的人，也看看她的刺。 她可以撩你，也能独自美丽。

        </div>
        <div
          class="button pointer"
          v-on:mouseenter="enterFadeInLeft=true"
          v-on:mouseleave="enterFadeInLeft=false "
        >
          <span
            class=" animate__animated"
            :class="{enterFadeInLeft:enterFadeInLeft}"
          >
            <img
              src="./imgs/enter.png"
              alt=""
            >
            <div
              class="txt "
              :class="{enterFadeInLeft:enterFadeInLeft}"
            >
              搜索更多
            </div>
          </span>
        </div>
      </section>
    </div>
    <div class="wheel-container">

      <section class="product-wrapper">
        <div
          class="bg"
          flex="box:mean"
        >
          <div class="left "></div>
          <div class="right "></div>
        </div>
        <section
          class="syc"
          flex="main-cross:center"
        >
          <div class="syc-item">
            <div class="code">01</div>
            <div
              class="syc-item-bg pointer"
              :class="{sShow: sShow}"
              v-on:mouseenter="sShow=true"
              v-on:mouseleave="sShow=false "
              :style="{'background-position-x':positionX,'background-position-y': positionY2+'px' }"
            ></div>
            <div class="title">
              <h1>色·系列</h1>
              <p>Pillow & You<br />枕边的你</p>

            </div>
          </div>
          <div class="syc-item">
            <div class="code">02</div>
            <div
              class="syc-item-bg mg pointer transition-common"
              :class="{mgShow: mg}"
              v-on:mouseenter="mg=true"
              v-on:mouseleave="mg=false "
              :style="{'background-position-x':positionX,'background-position-y': positionY2+'px' }"
            ></div>
            <div class="title">
              <h1>欲·系列</h1>
              <p>Secret Fruit<br />秘 果</p>

            </div>
          </div>
          <div class="syc-item">
            <div class="code">03</div>
            <div
              class="syc-item-bg sh pointer"
              :class="{shShow: shShow}"
              v-on:mouseenter="shShow=true"
              v-on:mouseleave="shShow=false "
              :style="{'background-position-x':positionX,'background-position-y': positionY2+'px' }"
            ></div>
            <div class="title">
              <h1>城市·系列</h1>
              <p>Happy Water Shanghai<br />快乐水 上海</p>

            </div>
          </div>

        </section>
        <section class="A-kill">
          <img
            src="./imgs/icon.png"
            alt=""
            class="a-love"
          >
          <p :style="{opacity:t7_opacity }"><img
              src="./imgs/q1.png"
              alt=""
            ></p>
          <div
            class="opacity-change transition-common"
            :style="{transform:`
          translate3d(
          0px,${ t3_Y}px,0px)`, opacity:t3_opacity }"
          >
            <div class="title">

              TA，任性又充满挑逗感。试探之间，桃心乱窜，是无尽的乐趣。<br />
              空气中残留一缕香气，若隐若现，意乱情迷。<br />
              怀疑我在撩你，但你没有证据。

            </div>
            <h1>
              这就是ASSASSINA，一击致命。
            </h1>
          </div>

          <p :style="{opacity:t7_opacity }"><img
              src="./imgs/q2.png"
              alt=""
            ></p>
        </section>

        <section
          class="sxn opacity-change1"
          :style="{ opacity:t6_opacity }"
        >
          <div class="sxn-box">
            <div class="leftPic">
              <div class="A">
                <img
                  src="./imgs/A.png"
                  alt=""
                >
              </div>
              <img
                src="./imgs/sxn.png"
                alt=""
                class=""
              >
              <div class="txt  opacity-change
transition-common ">
                <b>BRAND</b> STORY
              </div>
            </div>
            <div class="right">
              <h1>ASSASSINA 莎辛那</h1>
              <p>“你的私密感官调情师”</p>
              <div class="story-button pointer">品牌故事</div>
            </div>
          </div>

        </section>
        <section
          class="pic-visible opacity-change transition-common"
          :style="{transform:`
          translate3d(
          ${ t4_x}px,0px,0px)`, opacity:t4_opacity }"
        >
          <img
            src="./imgs/shutterstock_1.png"
            alt=""
          >
          <img
            src="./imgs/shutterstock_2.png"
            alt=""
          >
          <img
            src="./imgs/shutterstock_3.png"
            alt=""
          >
          <img
            src="./imgs/shutterstock_4.png"
            alt=""
          >
          <img
            src="./imgs/shutterstock_5.png"
            alt=""
          >
        </section>
        <section class="scent">
          <div
            class="scent-assassina"
            flex="main-cross:center"
          >
            <div class="line"></div>
            <div class="logo">
              <img
                src="./imgs/logo-black.png"
                alt=""
              >
            </div>
            <div class="line"></div>
          </div>
          <div class="scent-perfume">
            PERFUME
          </div>
          <div
            class="opacity-change transition-common"
            :style="{transform:`
          translate3d(
          0px,${ t5_Y}px,0px)`, opacity:t5_opacity }"
          >
            <div class="scent-artical">

              She is capricious and provocative. Every time she flirts with you,<br />
              your heart is going to explode. But for her, it’s just a game. <br />
              She’s just like a breeze, you can smell her scent, but it’s always untouchable and hard to track...

            </div>
            <div class="scent-platform">
              <img
                class="pointer"
                src="./imgs/platform/sina.png"
                alt=""
              >
              <img
                class="pointer"
                src="./imgs/platform/wechat.png"
                alt=""
              >

              <img
                class="pointer"
                src="./imgs/platform/redbook.png"
                alt=""
              >
              <img
                src="./imgs/platform/blibli.png"
                class="pointer"
                alt=""
              >
            </div>
          </div>
        </section>
      </section>

      <section class="footer">

        <div class="footer-bar">
          <div
            class="footer-company"
            flex="box:first"
          >
            <div class="footer-company-left">
              <img
                src="./imgs/logo-bot.png"
                alt=""
                class="logo"
              >
              <div class="article">
                情爱与生俱来。ASSASSINA莎辛那，你的私密感官调情师。一系列独<br />特多变的香氛，让你的每一次试探，都有ASSASSINA的气味围绕。<br />不为人所动，只为取悦自己。
              </div>
              <div class="owner">
                上海黎甘香水化妆品有限公司
              </div>
            </div>
            <div class="footer-company-right">
              <span class="conection">
                联系我们
              </span>
              <span>隐私政策</span>
              <div class="phone">021－62220000</div>
              <div class="copyRight">
                沪公安网备3343534525235号
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
// require styles
import "swiper/dist/css/swiper.css";

import { swiper, swiperSlide } from "vue-awesome-swiper";

import banner0 from "./imgs/banner1.png";
import banner1 from "./imgs/banner2.png";
import banner2 from "./imgs/banner3.png";
function getComputedCSSText(style) {
  let cssText = "";
  for (let attr in style) {
    // m <?> matched
    // #!en: hump to line
    // #!zh: 驼峰转下划线
    cssText += `${attr.replace(/[A-Z]+/g, (m) => `-${m.toLowerCase()}`)}:${
      style[attr]
    };`;
  }
  return cssText;
}

function getComputedStyleObj(elem) {
  var txt;
  let cssObj = window.getComputedStyle(elem, null);
  for (let i = 0; i < cssObj.length; i++) {
    let cssObjProp = cssObj.item(i);
    txt += cssObjProp + ": " + cssObj.getPropertyValue(cssObjProp) + ";";
  }
  return txt;
}
export default {
  components: {
    swiper,
    swiperSlide,
  },
  methods: {
    runAnimations(animations, element) {
      const animationQueue = animations || [];
      let len = animationQueue.length;

      if (len === 0) return;
      // let parentNode = this.$el;
      let parentNode = element;
      let animIdx = 0;
      // let  oldStyle =  getComputedStyleObj(element)
      let oldStyle = `position:absolute;`;
      element.style["position"] = "absolute";
      runAnimation(oldStyle);

      function runAnimation(oldStyle) {
        if (animIdx < len) {
          const animation = animationQueue[animIdx];
          let animationStyle = {
            animationName: animation.type,
            animationDuration: `${animation.duration}s`,
            animationIterationCount: animation.infinite
              ? "infinite"
              : animation.interationCount,
            animationDelay: `${animation.delay}s`,
            animationFillMode: "both",
          };

          parentNode.style.cssText =
            oldStyle + getComputedCSSText(animationStyle);
          animIdx++;
        }
      }
      // parentNode.addEventListener("animationend", runAnimation, false);
    },

    throttle(func, wait, mustRun) {
      var timeout,
        startTime = new Date();

      return function () {
        var context = this,
          args = arguments,
          curTime = new Date();

        clearTimeout(timeout);
        // 如果达到了规定的触发时间间隔，触发 handler
        if (curTime - startTime >= mustRun) {
          func.apply(context, args);
          startTime = curTime;
          // 没达到触发间隔，重新设定定时器
        } else {
          timeout = setTimeout(func, wait);
        }
      };
    },
    handleScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      console.log(scrollTop);
      this.positionY1 = 0 - scrollTop * this.ratio;
      this.positionY2 = -4 - scrollTop * 0.05;
      this.positionY3 = 0 - scrollTop * this.ratio;

      this.t3_Y = 390 - scrollTop * this.ratio;
      this.t3_opacity = -(scrollTop * -0.002) / 3;

      this.t4_x = 640 - scrollTop * this.ratio;
      this.t4_opacity = -(scrollTop * -0.002);
      this.t7_opacity = this.t3_opacity;
      this.t1_Y = 0 - scrollTop * this.ratio - 3;
      this.t1_z = 1 - scrollTop * -0.001;

      this.t5_Y = 900 - scrollTop * this.ratio;
      this.t5_opacity = -(scrollTop * -0.001);
      this.t6_X = 650 - scrollTop * this.ratio;
      this.t6_opacity = scrollTop / 2600;
      if (scrollTop > 900) {
        /*     this.titlePositon = "fixed";
        this.titleColor = "#fff";
        this.titleBorder = "1px solid #e5e5e5"; */
      } else if (scrollTop > 10) {
        this.inverse = true;

        // this.t2_Y = 0 - scrollTop * this.ratio;
      } else {
        this.inverse = false;
        this.titlePositon = "static";
        this.titleColor = "transparent";
        this.titleBorder = "0";
      }
    },
  },
  data() {
    return {
      mg: true,
      sShow: true,
      shShow: true,
      t6_X: -900,
      t6_opacity: 0,
      t7_opacity: 0,
      t5_Y: 300,
      t5_opacity: 0,
      t4_x: -300,
      t4_opacity: 0,
      t3_Y: 400,
      t3_opacity: 1,
      positionX: 0,
      positionY2: 90,
      ratio: 0.2,
      t1_Y: 0,
      t2_Y: 0,
      t1_z: 1,
      t1_opacity: 1,
      enterFadeInLeft: false,
      inverse: false,
      swiperOption: {
        autoplay: {
          delay: 5000,
        },
        loop: true,
        effect: "fade",
        fadeEffect: {
          crossFade: true,
        },
        pagination: {
          el: ".swiper-pagination",
          bulletClass: "my-bullet", //需设置.my-bullet样式
          bulletActiveClass: "my-bullet-active",
        },
      },
      swiperList: [
        {
          id: 0,
          imgUrl: banner0,
        },
        {
          id: 1,
          imgUrl: banner1,
        },
        {
          id: 2,
          imgUrl: banner2,
        },
      ],
      menuActive: -1,
      menuList: [
        {
          groupName: "色系列",
          children: [
            { name: "  Pillow & You<br/> 枕边的你  " },
            { name: " Sensory Hunter <br/> 感官猎人" },
            { name: "  The Last Chapter Rose<br/> 终章玫瑰" },
          ],
        },
        {
          groupName: "欲系列",
          children: [
            { name: "Secret Fruit<br/> 秘果" },
            { name: "Ego <br/> 忠于自己" },
            { name: "Low Fever <br/> 微烧" },
            { name: " Don't Leave Me Alone <br/> 不要抛弃我" },
            { name: "The Lonely Island <br/> 孤岛" },
            { name: "The Girl Steals Hearts <br/> 偷心少女" },
            { name: "Goddess of Night <br/> 月下缪斯" },
            { name: "Whale Fall <br/> 鲸落" },
          ],
        },
        {
          groupName: "城市系列",
          children: [
            { name: "Happy Water-ShangHai <br/> 快乐水 上海" },
            { name: " Idyll-ChengDu  <br/> 田园诗 成都" },
            { name: "Jóu Sàhn-GuangZhou <br/> 早上好 广州" },
            { name: "Warm Wint <br/> 暖冬 哈尔滨" },
          ],
        },
        { groupName: "品牌故事", children: [] },
      ],
    };
  },
  computed: {
    coverHeight() {
      if (this.menuActive != -1) {
        let item = this.menuList[this.menuActive];
        let h = item.children ? item.children.length * 60 : 0;
        if (item.children.length > 7) {
          h = h - 30;
        }
        return h;
      } else {
        return 0;
      }
    },
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
  },
  mounted() {
    window.addEventListener(
      "scroll",
      this.throttle(this.handleScroll, 100, 500)
    );
    this.$nextTick(() => {
      this.mg = false;
      this.sShow = false;
      this.shShow = false;
    });
    this.swiper(3, 1000, false);
    /* this.runAnimations([{
      type:"fadeInDown",
      duration:1,
      infinite:"",
      delay:1
    }], document.getElementById('header')) */
  },
};
</script>

<style lang="scss" scoped>
.wrapper .swiper-pagination-bullet-active {
  background: #fff !important;
}

.swiper-wrapper {
  overflow: hidden;
  width: 100%;
  // height: 0;
  background: #ccc;
  position: relative;
  .slogen {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 9;
    bottom: 20px;
    text-align: center;
    overflow: hidden;
    .title {
      font-size: 35px;
      font-family: Arita Heiti;
      font-weight: normal;
      color: rgba(0, 0, 0, 1);
      line-height: 40px;
    }
    .description {
      margin: 57px auto 32px;
      width: 367px;
      height: 65px;
      font-size: 25px;
      font-family: Arita Heiti;
      font-weight: normal;
      color: rgba(0, 0, 0, 1);
      line-height: 40px;
    }
    .button {
      position: relative;
      margin: 0 auto;
      width: 170px;
      height: 45px;
      background: rgba(0, 0, 0, 1);
      font-size: 20px;
      font-family: Arita Heiti;
      font-weight: normal;
      color: rgba(204, 204, 204, 1);
      line-height: 45px;

      img {
        position: absolute;

        width: 17px;
        right: calc(100% - 30px);
        opacity: 0;
        top: 50%;
        margin-top: -9px;

        vertical-align: -2px;

        transition: opacity 0.5s cubic-bezier(0.16, 0.01, 0.13, 0.99),
          -webkit-transform 0.5s cubic-bezier(0.16, 0.01, 0.13, 0.99);
        transition: transform 0.5s cubic-bezier(0.16, 0.01, 0.13, 0.99),
          opacity 0.5s cubic-bezier(0.16, 0.01, 0.13, 0.99);
        transition: transform 0.5s cubic-bezier(0.16, 0.01, 0.13, 0.99),
          opacity 0.5s cubic-bezier(0.16, 0.01, 0.13, 0.99),
          -webkit-transform 0.5s cubic-bezier(0.16, 0.01, 0.13, 0.99);
      }
      .enterFadeInLeft {
        .txt {
          position: absolute;
          transform: translateX(65px);
          transition: transform 0.5s cubic-bezier(0.16, 0.01, 0.13, 0.99);
        }

        img {
          transform: translateX(20px);
          opacity: 1;
        }
      }
    }
  }
  .swiper-item {
    width: 100%;
    .swiper-img {
      width: 100%;
    }
  }
}
.animate__animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-duration: var(--animate-duration);
  animation-duration: var(--animate-duration);
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
.home {
  overflow-x: hidden;
  .wrapper {
    width: 100%;
    margin: 0 auto;
  }
  &-header {
    width: 100%;
    position: fixed;
    z-index: 10;
    height: 150px;
    font-size: 25px;
    font-family: Arita Heiti;
    font-weight: normal;
    color: #fff;
    line-height: 24px;
    // background: red;
    .logoArea {
      position: absolute;
      z-index: 99;
      width: 335px;
      left: 50%;
      transform: translateX(-50%);
      height: 100%;
    }
    &-cover {
      display: none;
      position: absolute;
      width: 100%;
      height: 0;
      opacity: 0;
      top: 91px;
      &.fadeIn {
        display: block;
        // animation-name: fadeInDown;
        animation-name: fadeIn;
        animation-duration: 0.5s;
        background: rgba(24, 24, 23, 0.75);
        // height: 180px;
      }
    }
    &-bg {
      position: absolute;
      left: 0;
      top: -300px;
      width: 100%;
      height: 150px;
      z-index: -1;
      background: #000000;
      opacity: 0;
      transition: opacity 0.5s cubic-bezier(0.16, 0.01, 0.13, 0.99),
        -webkit-transform 0.5s cubic-bezier(0.16, 0.01, 0.13, 0.99);
      transition: transform 0.5s cubic-bezier(0.16, 0.01, 0.13, 0.99),
        opacity 0.5s cubic-bezier(0.16, 0.01, 0.13, 0.99);
      transition: transform 0.5s cubic-bezier(0.16, 0.01, 0.13, 0.99),
        opacity 0.5s cubic-bezier(0.16, 0.01, 0.13, 0.99),
        -webkit-transform 0.5s cubic-bezier(0.16, 0.01, 0.13, 0.99);
      &.inverse {
        opacity: 1;

        -webkit-transform: translateY(160%);
        transform: translateY(160%);
      }
    }
    &-menu {
      text-align: center;

      .item {
        position: relative;

        display: inline-block;
        vertical-align: middle;
        margin-right: 104px;
        &:nth-child(3) {
          margin-left: 300px;
          &:before {
            content: "";
            position: absolute;
            right: 155%;
            width: 300px;
            top: -10px;
            height: 42px;
            background: url(./imgs/logo-bot.png) no-repeat 0 center;
            background-size: 100% 100%;
          }
        }

        &:last-child {
          margin-right: 0;
        }
        .groupName {
          margin-bottom: 6px;
        }
        .line-Wrapper {
          position: relative;
          .line {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            top: 0;
            margin: auto;
            display: inline-block;
            width: 20%;
            height: 2px;
            background: rgba(255, 255, 255, 1);
          }
          .drawline {
            -webkit-animation-duration: 1s;
            animation-duration: 1s;
            -webkit-animation-duration: var(--animate-duration);
            animation-duration: var(--animate-duration);
            -webkit-animation-fill-mode: both;
            animation-fill-mode: both;
            width: 100%;
            animation-name: zoomIn;
            animation-duration: 1s;
          }
        }

        .children {
          text-align: left;
          display: none;
          position: absolute;
          z-index: 2;
          top: 100%;
          white-space: nowrap;
          div {
            margin-top: 16px;
            line-height: 18px;
            font-size: 14px;
          }
          &.show {
            animation-name: fadeIn;
            animation-duration: 2s;
            display: block;
          }
        }
      }
    }
  }
}
.z1 {
  position: absolute;
  z-index: 2;
}

.wheel-container {
  position: relative;
  width: 100%;
  // height: 100vh;
  overflow-y: hidden;
  z-index: 6;
  .product-wrapper {
    position: relative;
    padding-bottom: 306px;
    .bg {
      position: absolute;
      width: 100%;
      height: 100%;
      .left {
        background: rgba(255, 255, 255, 1);
      }
      .right {
        background: rgba(243, 243, 231, 1);
      }
    }
  }
  .syc {
    padding-top: 266px;
    &-item {
      position: relative;
      width: 355px;
      margin-right: 70px;
      &:last-child {
        margin-right: 0;
      }
      .code {
        position: absolute;
        top: -31px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 9;
        width: 111px;
        height: 62px;
        line-height: 62px;
        font-size: 83px;
        font-family: LucidaGrandeW1G;
        font-weight: normal;
        color: rgba(0, 0, 0, 1);
      }
      &-bg {
        position: relative;
        width: 355px;
        height: 520px;
        margin-bottom: 84px;
        background: url(./imgs/s_d.png) no-repeat;
        &.mg {
          background: url(./imgs/mg_d.png) no-repeat;
        }
        &.mgShow {
          background: url(./imgs/mg.png) no-repeat;
        }
        &.sh {
          background: url(./imgs/sh_d.png) no-repeat;
        }
        &.shShow {
          background: url(./imgs/sh.png) no-repeat;
        }
        &.sShow {
          background: url(./imgs/s.png) no-repeat;
        }

        &:after {
          display: block;
          content: "";
          position: absolute;
          bottom: -38px;
          left: 38px;
          width: 4px;
          height: 116px;
          background: rgba(0, 0, 0, 1);
          opacity: 0.7;
        }
      }
      .title {
        h1 {
          font-size: 25px;
          font-weight: bold;
          color: rgba(0, 0, 0, 1);
          height: 24px;
        }
        p {
          height: 24px;
          margin-top: 16px;
          font-size: 25px;
          font-weight: normal;
          color: rgba(0, 0, 0, 1);
        }
      }
    }
  }

  .A-kill {
    position: relative;
    z-index: 9;
    margin: 208px 0 164px;
    font-size: 0;
    text-align: center;
    img {
      width: 94px;
      height: 76px;
      margin-bottom: 109px;
    }
    p {
      height: 31px;
      font-size: 0;
      font-family: LucidaGrandeW1G;
      font-weight: 900;
      color: rgba(124, 28, 45, 1);
      line-height: 40px;
      img {
        width: 37px;
        height: 31px;
      }
    }
    .title {
      margin: 63px 0;
      height: 130px;
      font-size: 30px;
      font-family: Arita Heiti;
      font-weight: normal;
      color: rgba(0, 0, 0, 1);
      line-height: 50px;
    }
    h1 {
      height: 34px;
      font-size: 35px;
      font-family: Arita Heiti;
      font-weight: bold;
      color: rgba(0, 0, 0, 1);
      line-height: 40px;
      margin-bottom: 72px;
    }
  }
}
.sxn {
  position: relative;
  z-index: 9;
  &-box {
    height: 770px;
    .leftPic {
      float: left;
      margin-left: 100px;
      position: relative;
      .A {
        position: relative;
        z-index: 4;
        top: 23px;
        width: 101px;
        height: 65px;
        font-size: 0;
        font-family: LucidaGrandeW1G;
        font-weight: normal;
        color: #8d262a;
        line-height: 72px;
        font-style: italic;
        left: 80px;

        img {
          width: 101px;
          height: 65px;
        }
      }
      img {
        width: 750px;
        height: 500px;
      }
      .txt {
        position: absolute;
        right: -271px;
        bottom: -21px;
        width: 531px;
        white-space: nowrap;
        height: 54px;
        font-size: 72px;
        font-family: LucidaGrandeW1G;
        font-weight: bold;
        color: rgba(0, 0, 0, 1);
        line-height: 60px;
      }
    }
  }
  .right {
    float: left;
    padding: 169px 0 0 43px;
    h1 {
      font-size: 50px;
      font-family: Arita Heiti;
      font-weight: bold;
      color: rgba(16, 14, 12, 1);
    }
    p {
      height: 33px;
      font-size: 35px;
      font-family: Arita Heiti;
      font-weight: normal;
      color: #100e0c;
      padding: 28px 0 57px;
      text-align: left;
    }
    .story-button {
      width: 170px;
      height: 45px;
      background: rgba(0, 0, 0, 1);
      font-size: 20px;
      font-family: Arita Heiti;
      font-weight: normal;
      color: rgba(255, 255, 255, 1);
      line-height: 45px;
      text-align: center;
    }
  }
}
.pic-visible {
  position: relative;
  z-index: 9;
  margin-bottom: 175px;
  text-align: center;
  font-size: 0;
  img {
    margin-right: 26px;
    width: 221px;
    height: 221px;
    &:last-child {
      margin-right: 0;
    }
  }
}
.scent {
  position: relative;
  z-index: 9;
  &-assassina {
    font-size: 0;
    .line {
      width: 373px;
      height: 2px;
      background: rgba(0, 0, 0, 1);
    }
    img {
      width: 301px;
      height: 41px;
      margin: 0 73px;
    }
  }
  &-perfume {
    margin-top: 21px;
    font-size: 19px;
    font-family: LucidaGrandeW1G;
    font-weight: 400;
    text-align: center;
    color: rgba(0, 0, 0, 1);
  }
  &-artical {
    width: 1184px;
    margin: 105px auto 126px;
    width: 1184px;
    height: 105px;
    text-align: center;
    font-size: 25px;
    font-family: LucidaGrandeW1G;
    font-weight: 400;
    color: rgba(0, 0, 0, 1);
    line-height: 40px;
  }
  &-platform {
    font-size: 0;
    text-align: center;
    img {
      width: 66px;
      height: 66px;
      margin-right: 132px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
}
.footer {
  position: relative;
  z-index: 9;
  .footer-bar {
    background: rgba(15, 15, 15, 1);
  }
  &-company {
    width: 900px;
    margin: 0 auto 0;
    padding-top: 88px;
    &-left {
      .logo {
        display: block;
        margin-bottom: 49px;
        width: 240px;
        height: 33px;
      }
      .article {
        font-size: 15px;
        font-family: Arita Heiti;
        font-weight: normal;
        color: rgba(204, 204, 204, 1);
        line-height: 22px;
        margin-bottom: 90px;
        text-align: left;
      }
      .owner {
        height: 15px;
        font-size: 15px;
        font-family: Arita Heiti;
        font-weight: normal;
        color: rgba(124, 124, 124, 1);
        text-align: left;
        line-height: 28px;
      }
    }
    &-right {
      text-align: left;
      padding-left: 192px;
      span {
        font-size: 15px;
        font-family: Arita Heiti;
        font-weight: normal;
        color: rgba(255, 255, 255, 1);
      }
      .conection {
        display: inline-block;
        margin-right: 130px;
      }
      .phone {
        margin: 51px 0 157px;
        font-size: 13px;
        font-family: FZLTXHK;
        font-weight: 400;
        color: rgba(124, 124, 124, 1);
        line-height: 28px;
        text-align: left;
      }
      .copyRight {
        text-align: left;
        font-size: 15px;
        font-family: Arita Heiti;
        font-weight: normal;
        color: rgba(255, 255, 255, 1);
      }
    }
  }
}
</style>