<template>
    <div>
        <header-view></header-view>
        <router-view></router-view>
    </div>
</template>

<script>
    import addBlog from './components/addBlog.vue';
    import showBlogs from "./components/showBlogs.vue";
    import listBlogs from './components/listBlogs.vue';
    import ListBlogs from "./components/listBlogs";
    import header from './components/header';
    export default {
        components: {
            ListBlogs,
            'add-blog': addBlog,
            'show-blogs': showBlogs,
            'list-blogs': listBlogs,
            'header-view': header,
        },
        data() {
            return {}
        }
    }
</script>

<style scoped>
    body{
        margin: 0;
        font-family: Nunito SemiBold;
    }
</style>