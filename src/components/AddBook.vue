<template>
  <div class="row justify-content-center">
    <div class='alert alert-danger text-lg-center w-50 ' :class="[hiddenClass]" role="alert" id="alert">
      Введите название книги!!!
    </div>
  </div>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text"
               class="form-control"
               id="title"
               required
               v-model="book.title"
               name="title"
               maxlength="50"
               placeholder="Введите название не более 50 знаков"
               @click="alertHide"
        />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea class="form-control" id="description" required v-model="book.description" name="description" maxlength="1000" placeholder="Введите текст не более 1000 знаков" rows="7"/>
      </div>
      <button @click="saveBook" class="btn btn-success mt-2">Submit</button>
    </div>
    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newBook">Add</button>
    </div>
  </div>

</template>

<script>
import BookService from "../../service/BookService";


export default {
  name: 'add-book',
  data() {
    return {
      book: {
        id: null,
        title: '',
        description: '',
        available: false
      },
      submitted: false,
      hiddenClass: '',
    }
  },
  methods: {
    saveBook() {
      let data = {
        title: this.book.title,
        description: this.book.description
      }
      if (!data.title) {
        this.hiddenClass = 'alert__visible'
      }
      BookService.create(data)
          .then(response => {
            this.book.id = response.data.id
            this.submitted = true
          })
          .catch(e=>{
            console.log(e)
          })
    },
    newBook() {
      this.submitted = false
      this.book = {}
    },
    alertHide() {
      if (this.hiddenClass ==='alert__visible') {
        this.hiddenClass='alert__hidden'
      }
    },
  },

}
</script>

<style>
.submit-form {
  max-width: 350px;
  margin: auto;
}
.alert {
  visibility: hidden;
}

.alert__visible {
  visibility: visible;
  transform: translateY(-300%);
  animation: ani 1s forwards;
}
.alert__hidden {
  transform: translateY(0%);
  animation: fade 1s forwards;
  visibility: visible;
}

@keyframes ani {
  0% {
   transform: translateY(-300%);
  }
  100% {
    transform: translateY(0%);
  }
}
@keyframes fade {
  0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(-300%);
    visibility: hidden;
  }
}

</style>