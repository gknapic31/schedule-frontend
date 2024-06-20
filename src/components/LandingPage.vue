<template>
    <header class="masthead text-white text-center">
      <div class="container">
        <div class="row">
          <div class="col-xl-9 mx-auto">
            <h1 class="mb-5">Efficient Planning for a Productive Workforce: Your Schedule, Our Commitment!</h1>
          </div>
          <div class="col-md-10 col-lg-8 col-xl-7 mx-auto">
            <form>
              <div class="form-row">
                <div class="col-12 col-md-3">
                  <button type="submit" class="btn btn-block btn-lg btn-primary"><a href="Form">Get started -></a></button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </header>
</template>

<script>
export default {
  name: 'LandingPage',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
html, body {
  height: 100%;
  margin: 0;
}

header.masthead {
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(to right, rgba(255,0,0,0), rgba(24,51,108));
  height: 100vh;
  width: 100%;
}

header.masthead h1 {
  font-size: 2rem;
  color: #12264d;
}

.form-row {
  display: flex;
  justify-content: center;
}

.btn {
  background-color: #12264d !important;
  border: #12264d;

  a{
    text-decoration: none;
    color: #fff;
  }

  a:hover{
    color: #fff;
  }
}

.btn:hover {
  background-color: #2c77d8 !important;
  border: #2c77d8;
}

@media (min-width: 768px) {
  header.masthead h1 {
    font-size: 3rem;
  }
}
</style>
