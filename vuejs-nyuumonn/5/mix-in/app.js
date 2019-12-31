// let IconShareButton = {
//   template: `
//     <button @click="share"><i class="fas fa-share-square"></i></button>
//   `,
//   data: function () {
//     return {
//       _isProcessing: false
//     }
//   },
//   methods: {
//     share: function () {
//       if (this._isProcessing) {
//         return
//       }
//       if (!window.confirm('シェアしますか？')) {
//         return
//       }
//       this._isProcessing = true
//       // 実際はここでSNSのSDKのAPIを呼び出す
//       setTimeout(() => {
//         window.alert('シェアしました')
//         this._isProcessing = false
//       }, 300)
//     }
//   }
// }
//
// let TextShareButton = {
//   template: `
//     <button @click="share">{{ buttonLabel }}</button>
//   `,
//   data: function () {
//     return {
//       buttonLabel: 'シェアする',
//       _isProcessing: false
//     }
//   },
//   methods: {
//     share: function () {
//       if (this._isProcessing) {
//         return
//       }
//       if (!window.confirm('シェアしますか？')) {
//         return
//       }
//       this._isProcessing = true
//       // 実際はここでSNSのSDKのAPIを呼び出す
//       setTimeout(() => {
//         window.alert('シェアしました')
//         this._isProcessing = false
//       }, 300)
//     }
//   }
// }

// mixInを用いる

let Sharable = {
  data: function () {
    return {
      _isProcessing: false
    }
  },
  methods: {
    share: function () {
      if (this._isProcessing) {
        return
      }
      if (!window.confirm('シェアしますか？')) {
        return
      }
      this._isProcessing = true
      // 実際はここでSNSのSDKのAPIを呼び出す
      setTimeout(() => {
        window.alert('シェアしました')
        this._isProcessing = false
      }, 300)
    }
  }
}

let IconShareButton = {
  mixins: [Sharable],
  template: `
    <button @click="share"><i class="fas fa-share-square"></i></button>
  `
}

let TextShareButton = {
  mixins: [Sharable],
  template: `
    <button @click="share">{{ buttonLabel }}</button>
  `,
  data: function () {
    return {
      buttonLabel: 'シェアする'
    }
  }
}

new Vue({
  el: '#app',
  components: {
    IconShareButton,
    TextShareButton
  }
})