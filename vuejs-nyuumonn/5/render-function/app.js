let MyButton = {
  props: ['href', 'tag'],
  // template: `
  //   <a v-if="(!tag && 'span') || tag === 'a'" :href="href || '#'">
  //     <slot></slot>
  //   </a>
  //   <span v-else-if="tag === 'span'">
  //     <slot></slot>
  //   </span>
  //   <button v-else>
  //    <slot></slot>
  //   </button>
  // `

  // 描画関数を使うと
  render: function (createElement) {
    let tag = this.tag || (this.href ? 'a' : 'button')

    return createElement(tag, {
      attrs: {
        href: this.href || '#'
      }
    }, this.$slots.default)
  }
}

new Vue({
  el: '#app',
  components: {
    MyButton: MyButton
  }
})