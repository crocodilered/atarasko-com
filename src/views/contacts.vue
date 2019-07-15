<template>
  <div>
    <h1>Контактная информация</h1>

    <b-img src="@/assets/1690.jpg" width="770" height="513" fluid alt="Анастасия Харченко"></b-img>

    <ul style="margin-top: 2rem;">
          <li>
            <a href="tel:+79260902512">
              <fa-icon size="lg" :icon="['fas', 'phone']" />
              +7 (926) 090-25-12
            </a>
          </li>
          
        </ul>

    <b-row>
      <b-col md="auto">
        <ul>
          <li>
            <a href="mailto:aatarasko@gmail.com">
              <fa-icon size="lg" :icon="['far', 'envelope']" />
              aatarasko@gmail.com
            </a>
          </li>
          <li>
            <a href="skype:nastinka0307">
              <fa-icon size="lg" :icon="['fab', 'skype']" />
              nastinka0307
            </a>
          </li>
        </ul>
      </b-col>
      <b-col md="auto">
        <ul>
          <li>
            <a href="https://www.facebook.com/WellbeingPages/">
              <fa-icon size="lg" :icon="['fab', 'facebook-square']" /> 
              WellbeingPages
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/anastasia_tarasko_doc/">
              <fa-icon size="lg" :icon="['fab', 'instagram']" />
              anastasia_tarasko_doc
            </a>
          </li>
        </ul>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  export default {
    name: 'contacts'
  }
</script>

<style lang="scss" scoped>
  ul {
    margin-left: 0;
    padding-left: 0;
    margin-bottom: 2rem;
    list-style: none;

    &:last-child {
      margin-bottom: 0;
    }

    li {
      display: flex;
      margin-bottom: 0.5rem;
      
      svg, a {
        margin-right: 0.5rem;
        
      }
    }
  }
</style>
