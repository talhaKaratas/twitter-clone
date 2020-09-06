<template>
  <div class="sidebar">
      <div class="sidebar__twitterIcon">
          <i class="fab fa-twitter"></i>
      </div>
      <div class="sidebarOptions" v-for="(sidebarOption, index) in sidebarOptions" :key="index">
        <i :class="[sidebarOption.icon, sidebarOption.name == 'Home' ? 'active': '']"></i>          
        <h3 :class="[sidebarOption.name == 'Home' ? 'active': '']">{{ sidebarOption.name }}</h3>
      </div>
      <button class="sidebarTweet__button">Tweet</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            sidebarOptions: [
                {icon: 'fas fa-home', name: 'Home'},
                {icon: 'fas fa-hashtag', name: 'Explore'},
                {icon: 'far fa-bell', name: 'Notifications'},
                {icon: 'far fa-envelope', name: 'Messages'},
                {icon: 'far fa-bookmark', name: 'Bookmarks'},
                {icon: 'far fa-list-alt', name: 'Lists'},
                {icon: 'far fa-user', name: 'Profile'},
                {icon: 'fas fa-ellipsis-h', name: 'More'}
            ]
        }
    }
}
</script>

<style>
.active {
    color: #1da1f2;
}
</style>