import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/'
    }, {
      path: '/',
      name: 'PageView',
      component: resolve => require(['@/view/PageView'], resolve),
      children: [
        {
          path: '/',
          redirect: '/home'
        }, {
          path: '/home',
          name: 'home',
          component: resolve => require(['@/view/HomePage'], resolve),
          meta: {
            title: '首页'
          }
        }, {
          path: '/productInfo',
          name: 'productInfo',
          component: resolve => require(['@/view/Software'], resolve),
          meta: {
            title: '产品信息'
          },
          children: [
            // {
            //   path: '/productInfo',
            //   redirect: '/productInfo/sivacon'
            // },
            {
              path: '/productInfo/sivacon',
              name: 'SIVACON 8PT',
              component: resolve => require(['@/view/productInfo/sivacon'], resolve),
              meta: {
                title: 'SIVACON 8PT'
              }
            },
            {
              path: '/productInfo/mdmax',
              name: 'MDmax',
              component: resolve => require(['@/view/productInfo/mdmax'], resolve),
              meta: {
                title: 'MDmax'
              }
            },
            {
              path: '/productInfo/gcs',
              name: 'GCS',
              component: resolve => require(['@/view/productInfo/gcs'], resolve),
              meta: {
                title: 'GCS'
              }
            },
            {
              path: '/productInfo/gck',
              name: 'GCK',
              component: resolve => require(['@/view/productInfo/gck'], resolve),
              meta: {
                title: 'GCK'
              }
            },
            {
              path: '/productInfo/ggd',
              name: 'GGD',
              component: resolve => require(['@/view/productInfo/ggd'], resolve),
              meta: {
                title: 'GGD'
              }
            },
            {
              path: '/productInfo/kyn28a-24',
              name: 'KYN28A-24',
              component: resolve => require(['@/view/productInfo/kyn28a-24'], resolve),
              meta: {
                title: 'KYN28A-24'
              }
            },
            {
              path: '/productInfo/kyn28a-12',
              name: 'KYN28A-12',
              component: resolve => require(['@/view/productInfo/kyn28a-12'], resolve),
              meta: {
                title: 'KYN28A-12'
              }
            },
            {
              path: '/productInfo/xgn66-12',
              name: 'XGN66-12',
              component: resolve => require(['@/view/productInfo/xgn66-12'], resolve),
              meta: {
                title: 'XGN66-12'
              }
            },
            {
              path: '/productInfo/hxgn15-12',
              name: 'HXGN15-12',
              component: resolve => require(['@/view/productInfo/hxgn15-12'], resolve),
              meta: {
                title: 'HXGN15-12'
              }
            },
            {
              path: '/productInfo/ybw-12',
              name: 'YBW-12',
              component: resolve => require(['@/view/productInfo/ybw-12'], resolve),
              meta: {
                title: 'YBW-12'
              }
            },
            {
              path: '/productInfo/gsm-i',
              name: 'GSM-I',
              component: resolve => require(['@/view/productInfo/gsm-i'], resolve),
              meta: {
                title: 'GSM-I'
              }
            },
            {
              path: '/productInfo/gwf',
              name: 'GWF',
              component: resolve => require(['@/view/productInfo/gwf'], resolve),
              meta: {
                title: 'GWF'
              }
            },
            {
              path: '/productInfo/wsj',
              name: 'WSJ',
              component: resolve => require(['@/view/productInfo/wsj'], resolve),
              meta: {
                title: 'WSJ'
              }
            },
            {
              path: '/productInfo/djk',
              name: 'DJK',
              component: resolve => require(['@/view/productInfo/djk'], resolve),
              meta: {
                title: 'DJK'
              }
            },
            {
              path: '/productInfo/xl-21',
              name: 'XL-21',
              component: resolve => require(['@/view/productInfo/xl-21'], resolve),
              meta: {
                title: 'XL-21'
              }
            }
          ]
        }, {
          path: '/service',
          name: 'service',
          component: resolve => require(['@/view/Service'], resolve),
          meta: {
            title: '相关服务'
          }
        }, {
          path: '/newsinformation',
          name: 'newsinformation',
          component: resolve => require(['@/view/NewsInformation'], resolve),
          meta: {
            title: '新闻动态'
          }
        }, {
          path: '/companyintroduction',
          name: 'companyintroduction',
          component: resolve => require(['@/view/CompanyIntroduction'], resolve),
          meta: {
            title: '公司介绍'
          }
        }, {
          path: '/jobchance',
          name: 'jobchance',
          component: resolve => require(['@/view/JobChance'], resolve),
          meta: {
            title: '工作机会'
          }
        }, {
          path: '/contactus',
          name: 'contactus',
          component: resolve => require(['@/view/ContactUs'], resolve),
          meta: {
            title: '联系我们'
          }
        },
        {
          path: '/servicedetail',
          name: 'servicedetail',
          component: resolve => require(['@/view/ServiceDetail'],resolve),
          meta: {
            title: '相关服务'
          }
        }
      ]
    }
  ]
})
