<template>
  <div class="form-row">
    <div class="form-group col-md-6">
      <input
        placeholder="Cari Pekerjaan Impianmu disini..."
        type="text"
        class="form-control form-control-lg"
      />
    </div>
    <div class="form-group col-md-2">
      <select class="form-control form-control-lg">
        <option selected>Kategori</option>
        <option>Fulltime</option>
        <option>Parttime</option>
        <option>Freelance</option>
      </select>
    </div>
    <div class="form-group col-md-2">
      <input
        placeholder="Kota"
        type="text"
        class="form-control form-control-lg"
      />
    </div>
    <div class="form-group col-md-2">
      <button class="btn-cari-job">Cari</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormCariJob",
};
</script>
