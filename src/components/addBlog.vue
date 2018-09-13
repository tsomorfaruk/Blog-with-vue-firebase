<template>
    <div id="add-blog">
        <h2>Add a new Blog</h2>
        <form v-if="!submitted">
            <label>Blog Title:</label>
            <input type="text" v-model="blog.title" required/>
            <label>Blog Content:</label>
            <textarea v-model.lazy="blog.content"></textarea>
            <div id="checkboxes">
                <label>Science</label>
                <input type="checkbox" value="Science" v-model="blog.categories"/>
                <label>Math</label>
                <input type="checkbox" value="Math" v-model="blog.categories"/>
                <label>Programming</label>
                <input type="checkbox" value="Programming" v-model="blog.categories"/>
                <label>Physics</label>
                <input type="checkbox" value="Physics" v-model="blog.categories"/>
            </div>
            <label>Author: </label>
            <select v-model="blog.author">
                <option v-for="author in authors">{{author}}</option>
            </select>
            <button v-on:click.prevent="post">Add a Blog</button>
        </form>
        <div v-if="submitted">
            <h3>The Form is Submitted</h3>
        </div>
        <div id="preview">
            <h3>Preview</h3>
            <p>Blog Title: {{blog.title}}</p>
            <p>Blog Content: {{blog.content}}</p>
            <p>Blog Categories: </p>
            <ul>
                <li v-for="category in blog.categories">{{category}}</li>
            </ul>
            <p>Author: {{blog.author}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "add-blog",
        data(){
            return {
                blog: {
                    title: "",
                    content: "",
                    categories: [],
                    author: ""
                },
                authors: ['Omor','Faruk','Faiza','Arefin'],
                submitted: false,
            }
        },
        methods: {
            post: function () {
                this.$http.post('https://vue-simple-blog-8688c.firebaseio.com/posts.json',this.blog)
                    .then(function (data) {
                    console.log(data);
                    this.submitted = true;
                });
            }
        }
    }
</script>

<style scoped>
    #add-blog *{
        box-sizing: border-box;
    }
    #add-blog{
        margin: 20px auto;
        max-width: 500px;
    }
    label{
        display: block;
        margin: 20px 0 10px;
    }
    input[type="text"],textarea {
        display: block;
        width: 100%;
    }
    #preview{
        padding: 10px 20px;
        border: 1px dotted #ccc;
        margin: 30px 0;
    }
    h3{
        margin-top: 10px;
    }
    #checkboxes input{
        display: inline-block;
        margin-right: 10px;
    }
    #checkboxes label{
        display: inline-block;
    }
</style>