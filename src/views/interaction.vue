<template>
  <div>
    <h1>Варианты взаимодействия</h1>

    <b-img src="@/assets/1234.jpg" fluid alt="Анастасия Харченко" width="770" height="513"/>

    <p><b>1. Первая консультативная встреча знакомство (20 мин.) бесплатно.</b></p>
  
    <p><b>2. Консультация/повторная консультация врача эндокринолога-нутрициолога.</b></p>
    <p>Что включает: сбор жалоб и анамнеза, интерпретация анализов, оценка состояния
здоровья и эндокринной системы, коррекция рациона и физической нагрузки,
рекомендации по БАДам и витаминам. (50 мин.)</p>
  
    <p><b>3. Генетическое тестирование.</b></p>

<p>Что включает: две встречи.</p>
<p>Первая консультация: забор материала, сбор анамнеза/жалоб - очно, 50 мин;</p>
<p>Повторная консультация – интерпретация отчета и индивидуальные рекомендации по
питанию, физическим нагрузкам, биодобавкам и витаминам - очно/по
телефону/skype/WhatsApp - 50 мин.</p>
<p>Делается один раз на всю жизнь. Подходит людям любого возраста.</p>

  <p><b>4. Полугодовая программа.</b></p>

<p>Именно столько времени требуется, чтобы сформировать новые здоровые привычки.
Программа затрагивает не только область здорового питания и физической активности, но
все остальные области вашей жизни: отношения, карьеру, духовные практики.</p>
<p>Как проходит: две встречи в месяц очно/по телефону/skype/WhatsApp по заранее
составленному графику.</p>
<p>Мой принцип работы основан на индивидуальном подходе к каждому пациенту. В
зависимости от состояния здоровья, возраста, жалоб и пожеланий пациента я формирую
первоначальный план обследования, диетической программы и физической активности,
возможно, порекомендую консультации дополнительных специалистов. В случае
отклонений – повторный мониторинг результатов анализов. Я работаю с взрослыми и
подростками.</p>
<p>Первые две встречи будут напоминать подробную медицинскую консультацию, но далее
место лидера будет за вами, вы будете экспериментировать и отслеживать происходящие
изменения, я лишь даю информацию и подсказываю направление.</p>

<p><b>Что в результате 6 – месячной программы:</b></p>

<b-row>
  <b-col>
    <ul style="margin:0">
      <li>комплексная оценка состояния здоровья, коррекция отклонений и профилактика генетически-предрасположенных заболеваний;</li>
      <li>индивидуальная программа по курсовому приему витаминов, минералов и биологически активных веществ;</li>
      <li>коррекция рациона питания и физической активности в наиболее эффективной для вас форме.</li>      
    </ul>
  </b-col>
  <b-col>
    <ul style="margin:0">
      <li>навык приготовления полезных и вкусных блюд дома для себя и близких;</li>
      <li>умение разбираться в продуктах, в информации на этикетке.</li>
      <li>переоценка всех сфер своей жизни: здоровья, карьеры, отношений, духовных практик, творчества, финансов, социальной жизни, если вы чувствуете в этом необходимость, рекомендации по поддержке и развитию того, чем вы удовлетворены.</li>
    </ul>
  </b-col>
</b-row>

<p><b>Остались вопросы - запишитесь на бесплатную консультацию!</b></p>

<!--b-button variant="outline-primary" @click="showFormModal(1)">Записаться…</b-button-->

<b-img src="@/assets/1664.jpg" fluid alt="Анастасия Харченко"/>

    <b-modal
      id="form-modal"
      title="Записаться"
      centered hide-footer
    >
      <b-form @submit.prevent="submitForm">
        <b-form-group label="Ваше имя:">
          <b-form-input v-model="form.name"/>
        </b-form-group>
        <b-form-group label="Телефон или эл. почта:">
          <b-form-input v-model="form.contact" required/>
        </b-form-group>
        <b-form-group label="Пожелания:">
          <b-form-textarea
            v-model="form.comments"
            rows="3"
            max-rows="6"
          />
        </b-form-group>
        <b-form-group label="Вариант:">
          <b-form-radio-group
            v-model="form.variant"
            :options="variants"
          ></b-form-radio-group>
        </b-form-group>
        <hr>
        <b-button :disabled="loading" type="submit" variant="primary">
          <fa-icon v-if="loading" icon="spinner" spin/>
          Отправить
        </b-button>
        <span class="form-message" :class="{'error': !formMessageStatus}">{{ formMessageText }}</span>
      </b-form>
    </b-modal>

  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'interaction',

    data () {
      const variants = [
        { text: 'Первая консультация', value: 'Первая консультация' },
        { text: 'Полугодовая программа', value: 'Полугодовая программа' }
      ]
      return {
        variants,

        formMessageText: undefined,
        formMessageStatus: undefined,
        loading: false,

        form: {
          name: '',
          contact: '',
          comments: '',
          variant: variants[0].value
        }
      }
    },

    methods: {
      showFormModal (variant) {
        this.formMessageText = null
        this.form.variant = (variant === 1)
          ? this.variants[0].value
          : this.variants[1].value
        this.$bvModal.show('form-modal')
      },

      submitForm () {
        this.loading = true

        axios.post('https://us-central1-b-well.cloudfunctions.net/sendMail', {
          name: this.form.name,
          contact: this.form.contact,
          comments: this.form.comments,
          variant: this.form.variant
        })
          .then(() => {
            this.loading = false
            this.formMessageStatus = true
            this.formMessageText = 'Информация отправлена.'
          })
          .catch(() => {
            this.loading = false
            this.formMessageStatus = false
            this.formMessageText = 'Произошла ошибка, информация не отправлена.'
          });
      }
    }
  }
</script>

<style lang="scss" scoped>
  .form-message {
    margin-left: 1rem;
    color: green;

    &.error {
      color: maroon;
    }
  }
  li {
    list-style-image: url('../assets/logo.svg');
  }
</style>
