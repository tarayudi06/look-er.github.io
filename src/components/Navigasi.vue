<template>
  <div>
    <b-navbar toggleable="lg" type="light">
      <div class="container">
        <b-navbar-brand class="nav-link" to="/">
          <img type="icon" src="../assets/img/logo-48x48.png" alt="" />
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <li class="nav-item">
              <router-link class="nav-link" to="/jobforu"
                >Job For U</router-link
              >
            </li>
            <b-nav-item-dropdown text="Kategori">
              <b-dropdown-item
                ><router-link class="nav-link" to="/category/fulltime"
                  >Fulltime</router-link
                ></b-dropdown-item
              >
              <b-dropdown-item
                ><router-link class="nav-link" to="/category/parttime"
                  >Parttime</router-link
                ></b-dropdown-item
              >
              <b-dropdown-item
                ><router-link class="nav-link" to="/category/freelance"
                  >Freelance</router-link
                ></b-dropdown-item
              >
            </b-nav-item-dropdown>
            <li class="nav-item">
              <router-link class="nav-link" to="/tips">Tips</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About</router-link>
            </li>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-input-group size="sm" class="mb-2">
              <b-input-group-prepend class="cari-sesu" is-text>
                <b-icon class="cari-ses" icon="search"></b-icon>
              </b-input-group-prepend>
              <b-form-input
                type="search"
                placeholder="Cari sesuatu"
              ></b-form-input>
            </b-input-group>
            <div class="user" right>
              <router-link class="nav-link" to="/login">Masuk</router-link>
            </div>
            <div class="user" right>
              <router-link id="register" class="nav-link" to="/register"
                >Daftar</router-link
              >
            </div>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navigasi",
};
</script>