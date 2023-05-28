<template>
    <div>
      <div class="container">
      <h1 class="fw-light text-white m-0">Анонимные статьи</h1>
      <div class="domoy">
       <router-link class="domoy" to="/">На главную</router-link>
       </div>
      <div class="full-height gradient-background">
        <div class="d-flex">
          <div class="editor-container">
            <div ref="editor" class="editor"></div>
            <div class="btn-group">
              <button class="redakt-btn" @click="saveNewArticle">Редактировать</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </template>
  
  <script>
  import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
  import axios from 'axios';
  
  export default {
    async mounted() {
      this.threadsId = this.$route.params.id; 
     const {data} = await this.fetchArticle();  
     ClassicEditor
        .create(this.$refs.editor)
        .then(editor => {
          console.log(data, 'This is mounted')
          editor.setData(data.text);
          this.editor = editor;
        })
        .catch(error => {
          console.error(error);
        }); 
    },
    methods: {
      async fetchArticle() {
       const data = await axios 
          .get(`http://localhost:8888/threads/${this.threadsId}`)
          .catch(error => {
            console.error(error);
          });
          console.log(data,'this is data')
          return data; 
      },
      saveNewArticle() {
       const articleContent = this.editor.getData();
        const modifiedContent = articleContent.replace(/<a href="(.*?)">(.*?)<\/a>/g, '<img src="$1" alt="$2">');
        const article = {
          text: modifiedContent,
        };
        axios
          .post('http://localhost:8888/threads', article, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          })
            .then((response)=>
                console.log(response,'Update')        
            )
          .catch(error => {
            console.error(error);
          });
      },
      }
    };
  </script>
  
  
  <style>
  .btn-group {
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  display: flex;
  }
  
  .redakt-btn {
    margin-right: 10px;
  margin-left: 10px;
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  background: #8458B3;
  color: #FFFFFF;
  cursor: pointer;
  transition: all 0.3s ease;
  }
  
  .editor {
  background-color: #A020F0;
  border-radius: 10px;
  height: 100%;
  }
  @media (max-width: 600px) {
  .editor {
      width: 100%;
      height: 100%;
      border-radius: 0;
      padding: 0;
  }
  }
  
  .editor-container {
    margin-top: 24px;
    width: 50vw;
    padding: 24px;
  }
  .domoy {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 9999;
  }
  .domoy {
    display: inline-block;
    padding: 30px, 40px;
    background-color: #49494b;
    color: #FFFFFF;
    font-size: 1.5vw;
    text-decoration: none;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
  }
  
  .domoy-button:hover {
    background-color: #005995;
  }
  </style>