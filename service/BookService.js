import {instance} from '../http-common'

class BookService {
    getAll() {
        return instance.get('/books')
    }
    get(id) {
        return instance.get(`/books/${id}`)
    }
    create(data){
        return instance.post(`/books`, data)
    }
    update(id, data){
        return instance.put(`./books/${id}`, data)
    }
    delete(id) {
        return instance.delete(`/books/${id}`)
    }
    deleteAll() {
        return instance.delete('/books')
    }
    findByTitle(title) {
        return instance.get(`/books/?title=${title}`)
    }
}

export default new BookService()