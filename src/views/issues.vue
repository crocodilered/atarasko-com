<template>
  <div>
    <h1>Статьи и рецепты</h1>

    <b-img src="@/assets/1429.jpg" fluid alt="Анастасия Харченко"></b-img>
    <!--b-img src="@/assets/1755.jpg" fluid alt="Анастасия Харченко"></b-img-->

    <b-row class="downloads">
      <b-col
        v-for="(o, i) in downloads"
        :key="`download-${i}`"
        cols="12"
        md="3"
        lg="4"
      >
        <b-row no-gutters>
          <b-col cols="auto"><a :href="o.href"><fa-icon size="2x" :icon="['far', 'file-pdf']" /></a></b-col>
          <b-col>
            <a
              :href="o.href"
              :download="o.title"
            >{{ o.title }}</a>,
            <small>{{ o.size }}</small>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  export default {
    name: 'issues',

    data () {
      return {
        downloads: [{
          href: '/i/i1.pdf', 
          title: 'Топ 10 продуктов или основа рациона',
          size: '80 КБ'
        }, {
          href: '/i/i2.pdf', 
          title: 'Рецепт смузи',
          size: '78 КБ'
        }, {
          href: '/i/i3.pdf', 
          title: 'Сбалансированное питание для детей с недостатком массы тела',
          size: '121 КБ'
        }, {
          href: '/i/i4.pdf', 
          title: 'Сбалансированное питание для детей 9-11 лет с избыточным весом и ожирением',
          size: '42 КБ'
         }, {
          href: '/i/i5.pdf', 
          title: 'Продолжительность жизни и долгожители планеты Земля',
          size: '98 КБ'
         }, {
          href: '/i/i6.pdf', 
          title: 'The circle of life',
          size: '108 КБ'
         }, {
          href: '/i/i7.pdf', 
          title: '10 шагов к улучшению здоровья',
          size: '53 КБ'
         }, {
          href: '/i/i8.pdf', 
          title: 'Рекомендации по питанию для длительного сохранения результата',
          size: '58 КБ'
        }, {
          href: '/i/i9.pdf', 
          title: 'Рецепт гранолы',
          size: '37 КБ'
        }, {
          href: '/i/Полезные привычки.docx', 
          title: 'Полезные привычки',
          size: '26 КБ'
        }, {
          href: '/i/Gut Reset Day 3 Guide.pdf', 
          title: 'Gut Reset Day 3 Guide',
          size: '1 211 КБ'
        }]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .downloads {
    margin-top: 2rem;

    .col, .col-auto {
      font-size: 1rem;
      line-height: 130%;
      margin: 0.5rem 0;

      @media (max-width: 992px) {
        margin: 0.5rem 0;
      }
    }

    small {
      white-space: nowrap;
    }

    svg {
      margin-right: 0.8rem;
    }
  }
</style>
