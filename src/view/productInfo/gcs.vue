<template>
  <div class="sivacon-container">
    <div class="bg-towers"></div>
    
    <!-- 头部区域 -->
    <header class="header">
      <div class="title-section">
        <h1 class="main-title">{{ product.name }}</h1>
        <div class="subtitle-box">
          <div class="subtitle-cn">{{ product.subtitleCn }}</div>
          <div class="subtitle-en">{{ product.subtitleEn }}</div>
        </div>
      </div>
      
    </header>

    <!-- 内容区域 -->
    <main class="content">
      <!-- 产品简介部分 -->
      <section class="section">
        <h2 class="section-title-cn">{{ sections.intro.titleCn }}</h2>
        <h2 class="section-title-en">{{ sections.intro.titleEn }}</h2>
        <p 
          v-for="(para, index) in sections.intro.paragraphsCn" 
          :key="'cn-' + index"
          class="section-text"
        >
          {{ para }}
        </p>
        <p 
          v-for="(para, index) in sections.intro.paragraphsEn" 
          :key="'en-' + index"
          class="section-text"
        >
          {{ para }}
        </p>
         <div class="image-placeholder">
            <img style="width: 100%;" src="@/assets/img/p3.png" alt="SIVACON 8PT">
          </div>
      </section>

    </main>
  </div>
</template>

<script>
export default {
  name: 'Sivacon',
  data() {
    return {
      product: {
        name: 'GCS',
        subtitleCn: '低压抽出式开关柜',
        subtitleEn: 'Low-voltage Draw-out Switchgear'
      },
      sections: {
        intro: {
          titleCn: '产品介绍',
          titleEn: 'Product Introduction',
          paragraphsCn: [
            `GCS 型低压抽出式开关柜(以下简称装置)，是电力工业部、机械工业部两部联合设计组根据行业主管部门广大电力用户及设计单位的要求，设计研制出的符合国情，具有较高技术性能指标，能够适应电力市场发展的需要，并可与现有引进产品竞争的低压抽出式开关柜。该装置于一九九六年七月在上海通过了两部联合主持的鉴定，受到电力使用部门的重视和肯定。电力工业部、机械工业部联合以安生用「1997」01号、机重「1997」01号文下发了《关于 GCS 型低压抽出式开关柜推广应用有关问题的通知》。目前，GCS型低压抽出式开关柜已被电力用户广泛使用。装置符合IEC61439-1、GB7251.1、GB7251.12 等标准。`
          ],
          paragraphsEn: [
            `GCS low-voltage draw-out switchgear (hereinafter referred to as the device) is a low-voltage draw-out switchgear which is 
designed and developed jointly by the Ministry of Power Industry and the Ministry of Machine Building together with Design Team 
in accordance with the requirements of competent industry department, power consumers and design unit, accords with national 
situation of China, has high technical index and can adapt to the development needs of power market and compete with current 
imported product. Such device passed the appraisal of two ministries in Shanghai in July, 1996, and was valued and recognized 
by power user department. 
The Ministry of Power Industry and the Ministry of Machine Building issued the ASY [1997] No. 01 and JZ [1997] No. 01 document 
of the Notice Concerning Problems with Promotion and Application of GCS Low-voltage Draw-out Switchgear. Currently, GCS 
low-voltage draw-out switchgear has been widely chosen by power consumers. 
The device conforms to standard IEC6143, GB7251.1,GB7251.12`
          ]
        },
        modular: {
          titleCn: '工作环境和条件',
          titleEn: 'Operating and Environmental Conditions',
          paragraphsCn: [
            `MDmax®低压开关柜是适用于户内安装的电气设备。
环境温度
短时最高温度 +40℃ 
24小时最高平均温度 +35℃ 
最低温度 -5℃
备在高于上述环境温度中使用时应降容运行。 
环境条件 
正常工作时气候环境按GB7251.12-2013，IEC61439-1标准的相关规定，周围环境相对湿度：40℃
时为50%。 
开关柜户内安装地点的条件应符合相应标准的要求。在会产生凝露的场合，开关柜里面会采用通风或
加热等措施来防止凝露。如开关柜安装在高于海拔2000米以上，设备要相应降容运行。`
          ],
          paragraphsEn: [
            `MDmax® low- voltage swit chgear i s elec tri cal equipment des igned for indoor ins tal lation.
Ambient Temperature
Max imum temperature, short-term: +40°C
Max imum average temperature over 24 hour s : +35°C
Minimum temperature: -5°C
The equipment should be derated when operating in ambient temperatures ex ceeding the
values mentioned above.
Env ironmental Conditions
The c l imati c conditions during normal operation compl y with the relevant prov i s ions of s tandards
GB7251.12-2013 and IEC61439-1. The relati ve humidit y of the surrounding env ironment i s 50%
at 40°C.
The ins tal lation s ite conditions for indoor swit chgear shal l meet the requirement s of the corres
ponding s tandards . In locations where condensation i s l i kel y to oc cur, measures such as
venti lation or heating ins ide the swit chgear wi l l be employed to prevent condensation. If the
swit chgear i s ins tal led at an altitude ex ceeding 2000 meter s , the equipment mus t be derated 
ac cordingl y .`
          ]
        },
        // structure: {
        //   titleCn: 'SIVACON 特点',
        //   titleEn: 'Structure',
        //   paragraphsCn: [
        //     '通过型式实验的低压开关柜（TTA）水平母线统一布置在开关柜的上方 3 极和 4 极水平母线系统其额定电流可至 7400A 额定峰值耐受电流 Ipk 可至 375kA 器件隔室的深度尺寸大，适用于各种安装器件隔室按模数结构分隔成不同的单元开关柜可串面安装，也可以背靠背安装进线可采用上进线或下进线出线电缆可在柜体前部连接或后部连接'
        //   ],
        //   paragraphsEn: [
        //     'The type experiment (TTA) low voltage switch cabinets arranged above the horizontal bus unified switch cabinet 3 poles and 4 poles horizontal bus system its rated current to 7400A, Ipk rated peak withstand current to 375kA, The device compartment is deep enough for various mounting dimensions，The device compartment can be divided into multiple units according to modular structure. The switchgear can be installed on one side or back to back. The incoming cable can be arranged from the top or bottom, The outgoing cable can be connected in the front or on the back.'
        //   ]
        // }
      }
    }
  },
  methods: {
    getSwitchCount(sectionNumber) {
      // 第三个区域显示3个开关，前两个区域显示2个开关
      return sectionNumber === 3 ? 3 : 2;
    }
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.sivacon-container {
  max-width: 1400px;
  margin: 0 auto;
  background: linear-gradient(to bottom right, #e8f0f8 0%, #f5f8fb 100%);
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  font-family: 'Segoe UI', 'Microsoft YaHei', sans-serif;
  line-height: 1.6;
  color: #333;
}

.bg-towers {
  position: absolute;
  top: 0;
  right: 0;
  width: 60%;
  height: 100%;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><line x1="100" y1="0" x2="150" y2="600" stroke="%23ccc" stroke-width="2"/><line x1="200" y1="0" x2="250" y2="600" stroke="%23ccc" stroke-width="2"/><line x1="300" y1="0" x2="350" y2="600" stroke="%23ccc" stroke-width="2"/><line x1="400" y1="100" x2="450" y2="600" stroke="%23ccc" stroke-width="3"/><line x1="500" y1="50" x2="550" y2="600" stroke="%23ccc" stroke-width="2"/></svg>') no-repeat center;
  background-size: cover;
  opacity: 0.3;
  z-index: 0;
}

/* 头部样式 */
.header {
  position: relative;
  z-index: 1;
  padding: 40px 20px 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 20px;
}

.title-section {
  flex: 1;
  min-width: 300px;
}

.main-title {
  font-size: 25px;
  font-weight: 600;
  color: #1a2b4a;
  margin-bottom: 10px;
  letter-spacing: 2px;
}

.subtitle-box {
  background: #f39c12;
  padding: 12px 20px;
  display: inline-block;
  margin-bottom: 10px;
}

.subtitle-cn {
  font-size: 15px;
  color: #000;
  font-weight: 500;
}

.subtitle-en {
  font-size: 15px;
  color: #000;
  font-weight: 400;
}

.logo-section {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 5px;
}

.logo {
  font-size: 2.2rem;
  font-weight: 700;
  color: #1a2b4a;
  letter-spacing: 3px;
}

.logo-cn {
  font-size: 1.5rem;
  color: #1a2b4a;
}

.auth-badge {
  background: #0066b3;
  color: white;
  padding: 4px 12px;
  font-size: 15px;
  border-radius: 2px;
}

/* 内容区域 */
.content {
  position: relative;
  z-index: 1;
  padding: 20px;
}

.section {
  background: white;
  margin-bottom: 30px;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

.section-title-cn {
  font-size: 22px;
  color: #0066b3;
  margin-bottom: 5px;
  font-weight: 500;
}

.section-title-en {
  font-size: 22px;
  color: #0066b3;
  margin-bottom: 20px;
  font-weight: 300;
}

.section-text {
  font-size: 16px;
  line-height: 1.8;
  color: #444;
  margin-bottom: 15px;
}

/* 模块化设计区域 */
.modular-section {
  display: grid;
  /* grid-template-columns: 1fr 1fr; */
  gap: 40px;
  align-items: center;
}

.text-content {
  /* 文本内容容器 */
}

/* 设备模拟图 */
.image-placeholder {
  width: 100%;
  /* aspect-ratio: 3/4; */
  background: linear-gradient(135deg, #e0e5ea 0%, #c8d0d8 100%);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.cabinet-mock {
  width: 80%;
  height: 90%;
  background: linear-gradient(to right, #d4d9de 0%, #e8eaed 50%, #d4d9de 100%);
  border-radius: 8px;
  box-shadow: 
    inset -5px 0 10px rgba(0,0,0,0.1),
    inset 5px 0 10px rgba(255,255,255,0.3);
  position: relative;
}

.cabinet-section {
  position: absolute;
  width: 90%;
  height: 30%;
  left: 5%;
  background: #f0f2f5;
  border: 2px solid #b0b8c0;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
}

.cabinet-section:nth-child(1) { 
  top: 5%; 
}

.cabinet-section:nth-child(2) { 
  top: 37%; 
}

.cabinet-section:nth-child(3) { 
  top: 69%; 
}

.switch-indicator {
  width: 40px;
  height: 50px;
  background: #2c5aa0;
  border-radius: 3px;
  position: relative;
}

.switch-indicator::after {
  content: '';
  position: absolute;
  width: 60%;
  height: 40%;
  background: #4a90e2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 2px;
}

.control-lights {
  display: flex;
  gap: 8px;
}

.light {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #dc3545;
  box-shadow: 0 0 5px rgba(220, 53, 69, 0.5);
}

.light:nth-child(2) { 
  background: #ffc107; 
  box-shadow: 0 0 5px rgba(255, 193, 7, 0.5);
}

.light:nth-child(3) { 
  background: #28a745; 
  box-shadow: 0 0 5px rgba(40, 167, 69, 0.5);
}

/* 响应式设计 */
@media (max-width: 968px) {
  .main-title {
    font-size: 2.5rem;
  }

  .modular-section {
    grid-template-columns: 1fr;
  }

  .header {
    padding: 30px 15px 15px;
  }

  .section {
    padding: 20px;
  }
}

@media (max-width: 640px) {
  .main-title {
    font-size: 2rem;
  }

  .logo {
    font-size: 1.8rem;
  }

  .logo-cn {
    font-size: 1.2rem;
  }

  .section-title-cn {
    font-size: 18px;
  }

  .section-title-en {
    font-size: 18px;
  }

  .header {
    flex-direction: column;
  }

  .logo-section {
    align-items: flex-start;
  }
}
</style>