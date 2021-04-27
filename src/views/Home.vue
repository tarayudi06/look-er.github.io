<template>
  <div class="home">
    <Navigasi />
    <div class="container">
      <Header />
      <FormCariJob />
      <hr />
    </div>

    <!-- POPULAR JOB -->
    <section class="popular-job">
      <div class="container">
        <h3 class="sub-judul" style="font-weight: bold">Popular Job</h3>
        <div class="row">
          <div class="col-lg-6">
            <div class="single-box">
              <a href="/search/business-development">
                <img
                  src="../assets/img/popular_job/business-development.jpg"
                  alt="job"
                  width="100%"
                />
                <div class="text-img">BUSINESS DEVELOPMENT</div>
              </a>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="single-box">
              <a href="/search/product-manager">
                <img
                  src="../assets/img/popular_job/produk-mngr.jpg"
                  alt="job"
                  width="100%"
                />
                <div class="text-img">PRODUCT MANAGER</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- BARIS TWO -->
    <!-- BARIS TWO -->

    <section class="popular-job pt-20">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="single-box">
              <a href="/search/graphic-designer">
                <img
                  src="../assets/img/popular_job/graphic-designer.jpg"
                  alt="job"
                  width="100%"
                />
                <div class="text-img">GRAPHIC DESIGNER</div>
              </a>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="single-box">
              <a href="/search/front-end">
                <img
                  src="../assets/img/popular_job/front-end.jpg"
                  alt="job"
                  width="100%"
                />
                <div class="text-img">FRONT-END DEVELOPER</div>
              </a>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="single-box">
              <a href="/search/web-developer">
                <img
                  src="../assets/img/popular_job/web_dev.jpg"
                  alt="job"
                  width="100%"
                />
                <div class="text-img">WEB DEVELOPER</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- JOB TERBARU -->
    <br />
    <br />
    <section class="latest-job">
      <div class="container">
        <h3 class="sub-judul" style="font-weight: bold">Latest Job</h3>

        <div class="row">
          <div class="col-md-6 col-lg-3 d-flex align-items-stretch">
            <div class="icon-box">
              <div class="logo-job">
                <img
                  src="../assets/img/latestjob/tokped-48x48.png"
                  alt="logo-instansi"
                />
              </div>
              <h5 class="title">
                <a style="text-decoration: none" href="">Back-End Developer</a>
              </h5>
              <p class="instansi-latest-job">PT. Tokopedia</p>
              <button class="btn-apply-latestjob">Lamar</button>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 d-flex align-items-stretch">
            <div class="icon-box">
              <div class="logo-job">
                <img
                  src="../assets/img/latestjob/ovo-72x72.png"
                  alt="logo-instansi"
                />
              </div>
              <h5 class="title">
                <a style="text-decoration: none" href="">UX Researcher</a>
              </h5>
              <p class="instansi-latest-job">PT. Visionet International</p>
              <button class="btn-apply-latestjob">Lamar</button>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 d-flex align-items-stretch">
            <div class="icon-box">
              <div class="logo-job">
                <img
                  src="../assets/img/latestjob/gojek-48x48.png"
                  alt="logo-instansi"
                />
              </div>
              <h5 class="title">
                <a style="text-decoration: none" href="">iOS Developer</a>
              </h5>
              <p class="instansi-latest-job">Gojek Indonesia</p>
              <button class="btn-apply-latestjob">Lamar</button>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 d-flex align-items-stretch">
            <div class="icon-box">
              <div class="logo-job">
                <img
                  src="../assets/img/latestjob/tiket-96x96.png"
                  alt="logo-instansi"
                />
              </div>
              <h5 class="title">
                <a style="text-decoration: none" href="">Product Manager</a>
              </h5>
              <p class="instansi-latest-job">PT. Global Tiket Network</p>
              <button class="btn-apply-latestjob">Lamar</button>
            </div>
          </div>
        </div>

        <div class="btn-more-latestjob">
          <button>Lihat Semua <b-icon-arrow-right></b-icon-arrow-right></button>
        </div>
        <hr />
        <br />
      </div>
    </section>
    <!-- REKOMENDASI -->
    <Rekomendasi />
    <!-- REKOMENDASI -->
    <!-- REKOMENDASI -->

    <Footer />
    <a href="#" class="back-to-top"><b-icon-arrow-up></b-icon-arrow-up></a>
  </div>
</template>

<script>
import Navigasi from "@/components/Navigasi.vue";
import Header from "@/components/Header.vue";
import FormCariJob from "@/components/FormCariJob.vue";
import Rekomendasi from "@/components/Rekomendasi.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Navigasi,
    Header,
    FormCariJob,
    Rekomendasi,
    Footer,
  },
};
</script>