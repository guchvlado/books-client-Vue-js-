<template>
<div class="list row">
  <div class="input-group mb-3 w-100 gap-2">
    <input type="text" class="form-control rounded" placeholder="Search by title" v-model="title" @keyup.enter="searchTitle"/>
    <div class="input-group-append">
      <button class="btn btn-outline-secondary" type="button" @click="searchTitle">Search</button>
    </div>
  </div>
  <div class="col-md-8 row w-100 p-0">
    <div class="col-md-6">
      <h4>Book list</h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{active:index === currentIndex}"
          v-for="(book, index) of books"
          :key="index"
          @click="setActiveBook(book, index)">{{book.title}}
        </li>
      </ul>
      <button class="my-3 btn btn-sm btn-danger" @click="removeAllBooks">Remove all Books</button>
    </div>
    <div class="col-md-6">
      <div v-if="currentBook">
        <h4>Book</h4>
        <div><label><strong>Description:</strong></label><p>{{ currentBook.description }}</p></div>
        <div><label><strong>Status:</strong></label><p>{{ currentBook.available ? "Available" : "Pending" }}</p></div>
        <a class="btn btn-success" @click="goToBook" >Edit</a>
      </div>
      <div v-else>
        <br>
        <p>Please click on a Book...</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import BookService from "../../service/BookService";

export default {
  name: "books-list",
  data() {
    return {
      books: [],
      currentBook: null,
      currentIndex: -1,
      title: ''
    }
  },
  methods: {
    goToBook () {
      this.$router.push(`/books/${this.currentBook.id}`)
    },
    async getBooks() {
      const response = await BookService.getAll()
      this.books = response.data
    },
    refreshList() {
      this.getBooks()
      this.currentBook = null
      this.currentIndex = -1
    },
    setActiveBook(book, index) {
      this.currentBook = book
      this.currentIndex = index
    },
    async removeAllBooks() {
      await BookService.deleteAll()
      await this.refreshList()
    },
    async searchTitle() {
      const response = await BookService.findByTitle(this.title)
      this.books = response.data
    }
  },
  mounted() {
    this.getBooks()
  }
}
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
  justify-content: center;
}
</style>