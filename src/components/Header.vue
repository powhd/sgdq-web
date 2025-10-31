<template>
  <!-- 头部整体盒子 -->
  <div id="header" class="container-fuild">
    <!-- 头部顶部 -->
    <!-- <div class="header-top container-fuild hidden-xs">
      <div class="container">
        <div class="server pull-left">
          <span class="glyphicon glyphicon-earphone"></span>888-888-888
          <span class="glyphicon glyphicon-envelope"></span>xxx@163.com
          <span class="glyphicon glyphicon-time"></span>7x24小时为您服务
        </div>
        <div class="shejiao pull-right">
          <span class="glyphicon glyphicon-hand-right"></span>赶快联系我们吧！
          <span class="glyphicon glyphicon-hand-left"></span>
        </div>
      </div>
    </div> -->
    <!-- 电脑导航 -->
    <div class="header-nav container hidden-xs">
      <!-- 导航logo -->
      <div class="header-nav-logo">
        <img src="@/assets/img/logo.png">
      </div>
      <!-- 导航内容 -->
      <ul class="header-nav-wrapper">
        <li
          v-for="(item,index) in navList"
          :key="index"
          :class="index==navIndex?'active':''"
          @click="navClick(index,item.name, item.nameEn)"
        >
          <router-link :to="item.path">
            {{item.name}}
            <span class="nav-subtitle">{{item.nameEn}}</span>
            <span v-if="item.children.length>0" class="glyphicon glyphicon-menu-down"></span>
            <i class="underline"></i>
          </router-link>
          <dl v-if="item.children.length>0" class="children-dl">
            <dt v-for="(i,n) in item.children" :key="n" @click="onRoute(i.path)">
              {{i.name}}
              <!-- <router-link :to="i.path"></router-link> -->
            </dt>
          </dl>
        </li>
      </ul>
    </div>
    <!-- 手机导航 -->
    <div class="header-nav-m container-fuild visible-xs">
      <div class="header-nav-m-logo">
        <img class="center-block" src="@/assets/img/logo.png" alt="logo">
      </div>
      <!-- 导航栏 -->
      <div class="header-nav-m-menu text-center">
        {{menuName}}
        <div
          class="header-nav-m-menu-wrapper"
          data-toggle="collapse"
          data-target="#menu"
          @click="menuClick"
        >
          <span :class="menuClass"></span>
        </div>
        <!-- 导航内容 -->
        <ul id="menu" class="header-nav-m-wrapper collapse">
          <li
            v-for="(item,index) in navList"
            :key="index"
            :class="index==navIndex?'active':''"
            @click="navClick(index,item.name, item.nameEn)"
            data-toggle="collapse"
            data-target="#menu"
          >
            <router-link :to="item.path">
              {{item.name}}
                          <span class="nav-subtitle">{{item.nameEn}}</span>

              <i class="underline"></i>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      navIndex: sessionStorage.getItem('navIndex') ? sessionStorage.getItem('navIndex') : 0,
      menuName: "首页 Home",
      menuClass: "glyphicon glyphicon-menu-down",
      navList: [
        {
          name: "首页",
          nameEn: 'Home',
          path: "/",
          children: []
        },
        {
          name: "公司介绍",
          nameEn: 'Company Introduction',
          path: "/companyintroduction",
          children: []
        },
        {
          name: "产品信息",
          nameEn: 'Product Info',
          path: "/productInfo",
          children: [
            {
              name: "KYN28A-24",
              path: "/productInfo/kyn28a-24"
            },
            {
              name: "KYN28A-12",
              path: "/productInfo/kyn28a-12"
            },
            {
              name: "XGN66-12",
              path: "/productInfo/xgn66-12"
            },
            {
              name: "HXGN15-12",
              path: "/productInfo/hxgn15-12"
            },
            {
              name: "YBW-12",
              path: "/productInfo/ybw-12"
            },
            {
              name: "SIVACON 8PT",
              path: "/productInfo/sivacon"
            },
            {
              name: "BlokSET 5000",
              path: "/productInfo/blokset5000"
            },
            {
              name: "MDmax",
              path: "/productInfo/mdmax"
            },
            {
              name: "GCS",
              path: "/productInfo/gcs"
            },{
              name: "GCK",
              path: "/productInfo/gck"
            },
            {
              name: "GGD",
              path: "/productInfo/ggd"
            },
            {
              name: "GSM-I",
              path: "/productInfo/gsm-i"
            },
            {
              name: "GWF",
              path: "/productInfo/gwf"
            },
            {
              name: "WSJ",
              path: "/productInfo/wsj"
            },
            {
              name: "DJK",
              path: "/productInfo/djk"
            },
            {
              name: "XL-21",
              path: "/productInfo/xl-21"
            }
          ]
        },
        // {
        //   name: "相关服务",
        //   path: "/service",
        //   children: []
        // },
        // {
        //   name: "新闻动态",
        //   path: "/newsinformation",
        //   children: []
        // },
        // {
        //   name: "工作机会",
        //   path: "/jobchance",
        //   children: []
        // },
        {
          name: "联系我们",
          nameEn: 'Contact Us',
          path: "/contactus",
          children: []
        }
      ]
    };
  },
  methods: {
    navClick(index, name,nameEn) {
      this.navIndex = index;
      sessionStorage.setItem('navIndex',index)
      this.menuName = name + '' + nameEn + '';
    },
    onRoute(path) {
      this.$router.push(path)
    },
    menuClick() {
      if (this.menuClass == "glyphicon glyphicon-menu-down") {
        this.menuClass = "glyphicon glyphicon-menu-up";
      } else {
        this.menuClass = "glyphicon glyphicon-menu-down";
      }
    }
  }
};
</script>
<style scoped>
/* 顶部 */
#header {
  background: #fff;
  transition: all ease 0.6s;
}
#header .header-top {
  height: 50px;
  color: #fff;
  font-size: 12px;
  line-height: 50px;
  background: #4096ff;
}
/* 顶部的图标 */
#header .header-top span {
  margin: 0 8px;
}
/* 导航栏 */
#header .header-nav {
  height: 110px;
}
/* 导航栏logo */
#header .header-nav .header-nav-logo {
  width: 100px;
  height: 100%;
  float: left;
  position: relative;
}
/* 导航栏logo图片 */
#header .header-nav .header-nav-logo img {
  width: 150px;
  height: 55px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
/* 导航栏 导航容器 */
#header .header-nav-fixed .header-nav-wrapper {
  line-height: 50px;
}
#header .header-nav .header-nav-wrapper {
  line-height: 110px;
  float: right;
  margin: 0;
  max-width: 800px;
}
/* 导航栏 每个导航 */
#header .header-nav .header-nav-wrapper > li {
  float: left;
  margin: 0 15px;
  position: relative;
}
/* 导航栏 每个导航下面的 a 链接 */
#header .header-nav .header-nav-wrapper > li > a {
  color: #000;
  font-size: 15px;
  font-weight: bold;
  padding: 15px 0;
  position: relative;
}
/* 导航栏 每个导航下面的 a 链接的下划线 */
#header .header-nav .header-nav-wrapper > li > a > i {
  display: block;
  position: absolute;
  bottom: -2px;
  left: 50%;
  width: 0;
  height: 2px;
  opacity: 0;
  transition: all 0.6s ease;
  background-color: #1e73be;
}
/* 导航栏 每个导航下面的 a 链接的右侧小三角 */
#header .header-nav .header-nav-wrapper > li > a > span {
  font-size: 12px;
  transition: transform ease 0.5s;
}
/* 导航栏 每个导航下面的 a 链接 鼠标滑上去的样式 */
#header .header-nav .header-nav-wrapper > li > a:hover {
  color: #1e73be;
  text-decoration: none;
}
/* 导航栏 每个导航下面的 a 链接 鼠标滑上去下划线的样式 */
#header .header-nav .header-nav-wrapper > li > a:hover .underline {
  opacity: 1;
  width: 100%;
  left: 0;
}
/* 导航栏 每个导航下面的 a 链接 鼠标滑上去三角标的样式 */
#header .header-nav .header-nav-wrapper > li > a:hover span {
  transform: rotate(180deg);
}
/* 导航栏 每个导航下面的 a 链接 鼠标点击后的样式 */
#header .header-nav .header-nav-wrapper > li.active > a {
  color: #1e73be;
  text-decoration: none;
  border-bottom: 2px solid #1e73be;
}
/* 导航栏 每个导航下面的二级导航容器 */
#header .header-nav .header-nav-wrapper > li > dl {
  display: none;
  position: absolute;
  width: 168px;
  top: 80%;
  left: 0;
  z-index: 999999;
  box-shadow: 0 0 3px 1px #ccc;
  background: #fff;
}
/* 导航栏 每个导航下面的二级导航容器的每个导航 */
#header .header-nav .header-nav-wrapper > li > dl > dt {
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}
/* 导航栏 每个导航下面的二级导航容器的每个导航 当鼠标滑上时的样式*/
#header .header-nav .header-nav-wrapper > li > dl > dt > a:hover {
  text-decoration: none;
}
/* 导航栏 滑上一级导航显示二级导航 */
#header .header-nav .header-nav-wrapper > li:hover dl {
  display: block;
}
#header .header-nav .header-nav-wrapper > li > dl > dt:hover {
  cursor: pointer;
  background: #ccc;
}
.children-dl > dt > a{
  width: 100%;
  display: block;
}
@media screen and (max-width: 997px) {
  #header .header-nav-m {
    position: relative;
  }
  /* 导航栏logo容器 */
  #header .header-nav-m .header-nav-m-logo {
    height: 80px;
    position: relative;
  }
  /* 导航栏logo图片 */
  #header .header-nav-m .header-nav-m-logo img {
    width: 115px;
    height: 47px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }
  /* 导航栏  菜单容器 */
  #header .header-nav-m .header-nav-m-menu {
    color: #fff;
    height: 50px;
    font-size: 20px;
    line-height: 50px;
    background: #4096ff;
    position: relative;
  }
  /* 导航栏 菜单图标 */
  #header .header-nav-m .header-nav-m-menu-wrapper {
    position: absolute;
    top: 50%;
    right: 20px;
    margin-top: -20px;
    width: 50px;
    height: 40px;
    color: #fff;
    z-index: 999999;
    font-size: 12px;
  }
  /* 导航栏 */
  #header .header-nav-m .header-nav-m-wrapper {
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    background: #4096ff;
    z-index: 9999999;
  }
  /* 导航栏 每个导航 */
  #header .header-nav-m .header-nav-m-wrapper > li {
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #ccc;
  }
  /* 导航栏 每个导航下面的 a 链接 */
  #header .header-nav-m .header-nav-m-wrapper > li > a {
    color: #fff;
    font-size: 15px;
    font-weight: bold;
    /* padding: 15px 20px; */
    position: relative;
    display: block;
  }
  /* 导航栏 每个导航下面的 a 链接的右侧小三角 */
  #header .header-nav .header-nav-wrapper > li > a > span {
    font-size: 10px;
  }
}
</style>
