<template>
  <div class="app">
      {{  /* Sidebar */}}
      <app-sidebar></app-sidebar>
      {{  /* Feed */}}
      <app-feed></app-feed>
      {{  /* Widgets */}}
      <app-widgets></app-widgets>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import Widgets from '../components/Widgets'
export default {
    components: {
        appSidebar: Sidebar,
        appFeed: Feed,
        appWidgets: Widgets,
    }
}
</script>

<style>

</style>