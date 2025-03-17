import { createApp, ref } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

createApp({
  setup() {
    const message = ref('Hello Vue!')
    return {
      message,
    }
  },
  data() {
    return {
      form: {
        name: '',
        value: '',
      },
      contacts: [],
    }
  },
  methods: {
    createContact() {
      const { ...contact } = this.form
      this.contacts.push({ ...contact, id: new Date() })
      this.form.name = this.form.value = ''
      console.log(this.contacts)
    },
    markContact(id) {
      console.log('mark')
    },
    deleteContact(id) {
      console.log('delete')
    },
  },
}).mount('#app')
