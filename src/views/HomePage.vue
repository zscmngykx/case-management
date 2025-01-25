<template>
  <div>
    <navbar>
    <h1>Home Page</h1>
    <p>This is the default landing page after login.</p>
    </navbar>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  components: { Navbar },
  data(){
    return {
      component: {
        Navbar
      }
    }
  }
  };
</script>
