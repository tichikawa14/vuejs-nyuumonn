Vue.mixin({
  data: function () {
    return {
      loggedInUser: null
    }
  },
  created: function () {
    let auth = this.$options.auth
    this.loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'))
    if (auth && !this.loggedInUser) {
      window.alert('このページは必要です')
    }
  }
})

let LoginRequiredPage = {
  auth: true,
  template: `
    <div>
      <p v-if="!loggedInUser">
        このページはログインが必要です
      </p>
      <p v-else>
        {{ loggedInUser.name }}さんでログインしています
      </p>
    </div>
  `
}

new Vue({
  el: '#app',
  components: {
    LoginRequiredPage
  }
})