<template>
  <html>
    <body class="bg-gradient-primary">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-10 col-lg-12 col-md-9">
            <div class="card o-hidden border-0 shadow-lg my-5">
              <div class="card-body p-0">
                <!-- Nested Row within Card Body -->
                <div class="row">
                  <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                  <div class="col-lg-6">
                    <div class="p-5">
                      <div class="text-center">
                        <h1 class="h4 text-gray-900 mb-4">
                          Buat Akun Look-er dulu ya!
                        </h1>
                      </div>
                      <form class="user">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control form-control-user"
                            id="fullname"
                            placeholder="Nama Lengkap"
                          />
                        </div>
                        <div class="form-group">
                          <input
                            type="email"
                            class="form-control form-control-user"
                            id="exampleInputEmail"
                            aria-describedby="emailHelp"
                            placeholder="Masukan Email"
                          />
                        </div>
                        <div class="form-group row">
                          <div class="col-sm-6 mb-3 mb-sm-0">
                            <input
                              type="password"
                              class="form-control form-control-user"
                              id="exampleInputPassword"
                              placeholder="Kata Sandi"
                            />
                          </div>
                          <div class="col-sm-6">
                            <input
                              type="password"
                              class="form-control form-control-user"
                              id="exampleRepeatPassword"
                              placeholder="Ulangi Kata Sandi"
                            />
                          </div>
                        </div>
                        <a href="/" class="btn btn-primary btn-user btn-block">
                          Daftar
                        </a>
                      </form>
                      <hr />
                      <div class="text-center">
                        <a class="small" href="/login">Sudah punya akun!</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  </html>
</template>

<script>
export default {
  name: "Register",
};
</script>
