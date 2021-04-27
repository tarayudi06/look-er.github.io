<template>
  <div>
    <Navigasi />
    <Kamingsun />
    <br />
    <Footer />
  </div>
</template>

<script>
import Navigasi from "@/components/Navigasi.vue";
import Footer from "@/components/Footer.vue";
import Kamingsun from "@/components/Kamingsun.vue";

export default {
  name: "Fulltime",
  components: {
    Navigasi,
    Kamingsun,
    Footer,
  },
};
</script>