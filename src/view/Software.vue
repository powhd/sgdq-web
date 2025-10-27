<template>
    <div id="Software" class="container">
        <div class="row">
            <div id="left" class="col-md-4 col-xs-12">
                <ul class="left-container wow bounceInLeft">
                    <p>产品信息</p>
                    <li v-for="(item,index) in softwareList" :key="index" :class="{ active: isActive(item) }">
                        <router-link :to=item.path>{{item.name}}</router-link>
                    </li>
                </ul>
            </div>
            <div id="right" class="col-md-8 col-xs-12  wow bounceInRight">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
import { WOW } from "wowjs";
export default {
    name: 'Software',
    data(){
        return{
            softwareList: [
                {
                    path: '/productInfo/sivacon',
                    name: 'SIVACON 8PT'
                },{
                    path: '/productInfo/mdmax',
                    name: 'MDmax'
                },{
                    path: '/productInfo/gcs',
                    name: 'GCS'
                },{
                    path: '/productInfo/gck',
                    name: 'GCK'
                },{
                    path: '/productInfo/ggd',
                    name: 'GGD'
                },{
                    path: '/productInfo/kyn28a-24',
                    name: 'KYN28A-24'
                },{
                    path: '/productInfo/kyn28a-12',
                    name: 'KYN28A-12'
                },{
                    path: '/productInfo/xgn66-12',
                    name: 'XGN66-12'
                },{
                    path: '/productInfo/hxgn15-12',
                    name: 'HXGN15-12'
                },{
                    path: '/productInfo/ybw-12',
                    name: 'YBW-12'
                },{
                    path: '/productInfo/gsm-i',
                    name: 'GSM-I'
                },{
                    path: '/productInfo/gwf',
                    name: 'GWF'
                },{
                    path: '/productInfo/wsj',
                    name: 'WSJ'
                },{
                    path: '/productInfo/djk',
                    name: 'DJK'
                },{
                    path: '/productInfo/xl-21',
                    name: 'XL-21'
                }
            ]
        }
    },
    mounted() {
        var wow = new WOW();
        wow.init();
    },
    methods: {
        isActive(item) {
            const p = item.path || ''
            const cur = (this.$route && this.$route.path) ? this.$route.path : ''
            return cur === p || cur.startsWith(p)
        }
    }
}
</script>
<style scoped>
#left{
    margin: 50px 0;
}
.left-container{
    width: 60%;
    margin: 0 auto;
    border: 1px solid #4096ff;
    border-radius: 5px;
}
.left-container>p{
    text-align: center;
    line-height: 45px;
    padding: 0;
    margin: 0;
    background: #4096ff;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
}
.left-container>li {
  text-align: center;
  margin: 0;
  border-top: 1px solid #4096ff;
  padding: 8px 12px;
}
.left-container>li>a{
    display: block;
    text-decoration: none;
    line-height: 1.5;
    white-space: normal;
    word-break: break-word;
}
.left-container>li:hover{
    background: #928989;
}
.left-container>li.active{
    background: #4096ff;
}
.left-container>li.active>a{
    color: #fff;
}
#right{
    padding: 50px 0;
}
@media screen and (max-width: 768px){
    #right{
        padding: 15px;
    }
}
</style>

