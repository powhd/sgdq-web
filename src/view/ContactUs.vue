<template>
  <div class="contact-page">
    <!-- Header -->
    <!-- Main Content -->
    <div class="container main-content">
      <div class="contact-grid">
        <!-- Left Column -->
        <div class="contact-column">
          <!-- Address -->
          <div class="contact-card">
            <div class="card-content">
              <div class="icon-wrapper icon-blue">
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div class="card-text">
                <h3 class="card-title">地址 Address</h3>
                <p class="card-desc">宁波国家高新区晶源路6号</p>
                <p class="card-desc-en">#6 Jinyuan Road, National Hi-tech Zone, Ningbo, China</p>
              </div>
            </div>
          </div>

          <!-- Sales Line -->
          <div class="contact-card">
            <div class="card-content">
              <div class="icon-wrapper icon-green">
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div class="card-text">
                <h3 class="card-title">销售热线 Sales Line</h3>
                <a :href="'tel:' + contactInfo.salesLine" class="card-link">
                  {{ contactInfo.salesLine }}
                </a>
              </div>
            </div>
          </div>

          <!-- Tech Line -->
          <div class="contact-card">
            <div class="card-content">
              <div class="icon-wrapper icon-purple">
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div class="card-text">
                <h3 class="card-title">技术售后 Tech Support</h3>
                <a :href="'tel:' + contactInfo.techLine" class="card-link">
                  {{ contactInfo.techLine }}
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column -->
        <div class="contact-column">
          <!-- Fax -->
          <div class="contact-card">
            <div class="card-content">
              <div class="icon-wrapper icon-orange">
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div class="card-text">
                <h3 class="card-title">传真 Fax</h3>
                <p class="card-desc">{{ contactInfo.fax }}</p>
              </div>
            </div>
          </div>

          <!-- Website -->
          <!-- <div class="contact-card">
            <div class="card-content">
              <div class="icon-wrapper icon-cyan">
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </div>
              <div class="card-text">
                <h3 class="card-title">网站 Website</h3>
                <a :href="'http://' + contactInfo.website" target="_blank" class="card-link">
                  {{ contactInfo.website }}
                </a>
              </div>
            </div>
          </div> -->

          <!-- Email -->
          <div class="contact-card">
            <div class="card-content">
              <div class="icon-wrapper icon-red">
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div class="card-text">
                <h3 class="card-title">邮箱 Email</h3>
                <a :href="'mailto:' + contactInfo.email" class="card-link">
                  {{ contactInfo.email }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Map Section -->
      <div class="map-section">
        <h3 class="section-title">地图位置 Location Map</h3>
        <div class="map-container">
          <img :src="mapImgUrlPng" alt="高德静态地图" class="map-img" />
        
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import mapImgUrlPng from '@/assets/img/map.png'
export default {
  name: 'ContactUs',
  data() {
    return {
      contactInfo: {
        salesLine: '+86-574-87905766',
        techLine: '+86-574-87907208',
        fax: '+86-574-87905766',
        website: 'www.nbsgeq.com',
        email: 'nbsg1991@163.com'
      },
      amapKey: '7191478bbc8bab7ae33a48a43d4e0d45',
      address: '宁波国家高新区晶源路6号',
      mapImgUrlPng: mapImgUrlPng
    }
  },
  mounted() {
  },
  methods: {
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.contact-page {
  min-height: 100vh;
  background: linear-gradient(to bottom right, #eff6ff, #f9fafb);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Header */
.header {
  background: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.header-content {
  padding: 1.5rem 0;
}

.title {
  font-size: 1.875rem;
  font-weight: bold;
  color: #1f2937;
}

/* Main Content */
.main-content {
  padding: 2rem 1rem;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.contact-column {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* Contact Card */
.contact-card {
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  transition: box-shadow 0.3s;
}

.contact-card:hover {
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.15);
}

.card-content {
  display: flex;
  gap: 1rem;
}

.icon-wrapper {
  flex-shrink: 0;
  width: 3rem;
  height: 3rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon {
  width: 1.5rem;
  height: 1.5rem;
}

.icon-blue {
  background: #dbeafe;
  color: #2563eb;
}

.icon-green {
  background: #d1fae5;
  color: #059669;
}

.icon-purple {
  background: #e9d5ff;
  color: #9333ea;
}

.icon-orange {
  background: #fed7aa;
  color: #ea580c;
}

.icon-cyan {
  background: #cffafe;
  color: #0891b2;
}

.icon-red {
  background: #fecaca;
  color: #dc2626;
}

.card-text {
  flex: 1;
}

.card-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.card-desc {
  color: #4b5563;
  line-height: 1.6;
  margin-bottom: 0.25rem;
}

.card-desc-en {
  color: #6b7280;
  font-size: 0.875rem;
  line-height: 1.6;
}

.card-link {
  color: #2563eb;
  text-decoration: none;
  font-weight: 500;
  word-break: break-all;
}

.card-link:hover {
  color: #1d4ed8;
}

/* Map Section */
.map-section {
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  margin-bottom: 2rem;
}

.section-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1rem;
}

/* Placeholder (for fallback) */
.map-placeholder {
  width: 100%;
  height: 16rem;
  background: #e5e7eb;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #6b7280;
}

.map-icon {
  width: 3rem;
  height: 3rem;
  margin-bottom: 0.5rem;
}

.map-text {
  margin-bottom: 0.25rem;
}

.map-subtext {
  font-size: 0.875rem;
}

/* Embed container */
.map-container {
  width: 100%;
  border-radius: 0.5rem;
  overflow: hidden;
}

.map-iframe {
  width: 100%;
  height: 16rem;
  border: 0;
}

.map-img {
  width: 100%;
  height: 16rem;
  object-fit: cover;
  display: block;
}

@media (min-width: 481px) and (max-width: 767px) {
  .title {
    font-size: 1.75rem;
  }

  .main-content {
    padding: 2.5rem 1rem;
  }

  .map-placeholder {
    height: 18rem;
  }
  .map-img {
    height: 18rem;
  }
}

@media (min-width: 768px) {
  .title {
    font-size: 2.25rem;
  }

  .main-content {
    padding: 3rem 1rem;
  }

  .contact-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  .map-placeholder {
    height: 24rem;
  }
  .map-img {
    height: 24rem;
  }

  .hours-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .title {
    font-size: 2.5rem;
  }

  .container {
    max-width: 1280px;
  }

  .main-content {
    padding: 4rem 2rem;
  }

  .contact-grid {
    gap: 2.5rem;
  }

  .contact-card {
    padding: 2rem;
  }

  .map-section {
    padding: 2rem;
  }

  .business-hours {
    padding: 2.5rem;
  }
}

/* Adaptive Font Sizes */
html {
  font-size: 16px;
}

@media (max-width: 480px) {
  html {
    font-size: 14px;
  }
}

@media (min-width: 1440px) {
  html {
    font-size: 18px;
  }
}

/* Touch-friendly */
@media (hover: none) and (pointer: coarse) {
  .contact-card {
    padding: 1.25rem;
  }

  .card-link {
    padding: 0.25rem 0;
    display: inline-block;
  }

  a {
    min-height: 44px;
    display: inline-flex;
    align-items: center;
  }
}
</style>