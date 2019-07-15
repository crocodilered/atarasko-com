<template>
  <div id="app">
    <header>
      <div id="term">
        <b-container @click="$router.push('/')">Feel well-being in body, mind, and spirit</b-container>
      </div>
      <b-navbar toggleable="lg" type="dark">
        <b-container>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item to="/">Главная</b-nav-item>
              <b-nav-item to="/about">Обо мне</b-nav-item>
              <b-nav-item to="/interaction">Варианты взаимодействия</b-nav-item>
              <b-nav-item to="/issues">Статьи и рецепты</b-nav-item>
              <b-nav-item to="/contacts">Контактная информация</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-container>
      </b-navbar>
    </header>

    <main>
      <b-container>
        <router-view/>
      </b-container>
    </main>

    <footer>
      <b-container>
        <b-row align-v="center" align-h="between">
          <b-col cols="6">
            <a href="tel:+79260902512">+7 (926) 090-25-12</a>
          </b-col>
          <b-col cols="auto" align-self="end">
            <a href="https://www.facebook.com/WellbeingPages/"><fa-icon size="lg" :icon="['fab', 'facebook-square']" /></a>
            <a href="https://www.instagram.com/anastasia_tarasko_doc/"><fa-icon size="lg" :icon="['fab', 'instagram']" /></a>
          </b-col>
        </b-row>
      </b-container>
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="scss">
  @import '@/assets/_theme.scss';
</style>
