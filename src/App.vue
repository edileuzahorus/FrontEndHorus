<template>
  <div id="app">
    <button-personal v-on:press="changeShow()" children="Add Contact" />
    <list-contacts
      :updateOrNot="this.showCreateContact"
      v-on:press="changeShow"
    />
    <create-contact
      :contact="currentContact"
      v-on:press="changeShow()"
      v-if="this.showCreateContact"
    />
  </div>
</template>

<script>
import ListContacts from "./pages/ListContacts.vue";
//import api from "./api";
import ButtonPersonal from "./components/Button.vue";
import CreateContact from "./pages/CreateContact.vue";

export default {
  methods: {
    changeShow(value) {
      if (value) {
        this.currentContact = value;
      }
      if (this.showCreateContact) {
        this.currentContact = {};
      }
      this.showCreateContact = !this.showCreateContact;
    },
  },
  name: "App",
  components: {
    ListContacts,
    ButtonPersonal,
    CreateContact,
  },
  data() {
    return { showCreateContact: false, currentContact: {} };
  },
};
</script>
<style>
body {
  margin: 0;
  background-color: #262626;
}
</style>

<style scoped>
#app {
  width: 100vw;
  height: 100vh;

  background-color: #262626;

  text-align: center;
  top: 0;
  left: 0;
  z-index: -1;
}
</style>
