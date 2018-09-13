<template>
    <div v-theme:column="'narrow'" id="show-blogs">
        <h1>All Blogs Show</h1>
        <input type="text" v-model="search" placeholder="Search Blogs"/>
        <div v-for="blog in filteredBlogs" class="single-blog">
            <router-link v-bind:to="'/blog/'+ blog.id"><h2 v-rainbow>{{blog.title | to-uppercase}}</h2></router-link>
            <article>{{blog.content | shorter}}</article>
        </div>
    </div>
</template>

<script>
    import searchMixin from "../mixins/searchMixin";
    export default {
        name: "show-blogs",
        data(){
            return{
                blogs: [],
                search: '',
            }
        },
        methods: {

        },
        created(){
            this.$http.get('https://vue-simple-blog-8688c.firebaseio.com/posts.json').then(function (data) {
                return data.json();
            }).then(function (data) {
                var blogsArray = [];
                for (let key in data){
                    data[key].id = key
                    blogsArray.push(data[key]);
                }
                this.blogs = blogsArray;
            });
        },
        computed:{
        },
        mixins: [searchMixin]
    }
</script>

<style scoped>
    #show-blogs{
        max-width: 800px;
        margin: 0 auto;
    }
    .single-blog{
        padding: 20px;
        margin: 20px 0;
        box-sizing: border-box;
        background: #eee;
    }

</style>