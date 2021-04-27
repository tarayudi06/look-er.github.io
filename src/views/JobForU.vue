<template>
  <div id="JobForU" class="Jobforu">
    <Navigasi />
    <div class="container">
      <HeaderJobForU />
      <br />
      <br />
      <div class="col-lg-10">
        <div class="col-md-8">
          <form>
            <div class="row">
              <h4>Formulir Job For U</h4>
              <p style="opacity: 0.4; font-size: small; color: #257062">
                Isilah formulir singkat untuk melihat rekomendasi yang cocok
                untukmu!
              </p>
              <div class="input-group">
                <input type="text" placeholder="Nama Lengkap" />
              </div>
              <div class="input-group">
                <input type="email" placeholder="Email Adress" />
              </div>
              <div class="input-group">
                <input type="text" placeholder="Pendidikan Terakhir" />
              </div>
              <div class="input-group">
                <input type="text" placeholder="Jurusan" />
              </div>
              <div class="col-half">
                <div class="input-group">
                  <input type="text" placeholder="Kota/Kabupaten" />
                </div>
              </div>
              <div class="col-half">
                <div class="input-group">
                  <input type="text" placeholder="Provinsi" />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-half">
                <h4>Date of Birth</h4>
                <div class="input-group">
                  <div class="col-third">
                    <input type="text" placeholder="DD" />
                  </div>
                  <div class="col-third">
                    <input type="text" placeholder="MM" />
                  </div>
                  <div class="col-third">
                    <input type="text" placeholder="YYYY" />
                  </div>
                </div>
              </div>
              <div class="col-half">
                <h4>Gender</h4>
                <div class="input-group">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    id="gender-male"
                  />
                  <label for="gender-male">Male</label>
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    id="gender-female"
                  />
                  <label for="gender-female">Female</label>
                </div>
              </div>
              <div class="input-group">
                <h4>Apakah Hobimu?</h4>
                <input type="email" placeholder="Hobi" />
              </div>
            </div>

            <div class="row">
              <router-link
                style="text-decoration: none"
                to="/ResultRekomendasi"
                class="btn-submit-job"
                >Submit</router-link
              >
            </div>
          </form>
        </div>
      </div>
      <br />
      <hr />
      <br />
    </div>
  </div>
</template>

<script>
import Navigasi from "@/components/Navigasi.vue";
import HeaderJobForU from "@/components/HeaderJobForU.vue";

export default {
  name: "JobForU",
  components: {
    Navigasi,
    HeaderJobForU,
  },
};
</script>