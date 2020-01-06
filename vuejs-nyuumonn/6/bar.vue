<template>
  <div class="bar">
    <h1 class="header">Barコンポーネント</h1>
    <p>これはFooコンポーネントです</p>
    <foo/>
  </div>
</template>
<script>
  import Foo from './foo'
  // import Bar from './bar'
  export default {
    components: { Foo }
  }
</script>


