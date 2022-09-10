class Usuario {
    nombre = ''
    apellido = ''
    libros = []
    mascotas = []

    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre,
            this.apellido = apellido,
            this.libros = libros,
            this.mascotas = mascotas
    }


    getFullName() {
        return `
            <b>Nombre:</b> ${this.nombre} <br />
            <b>Apellido:</b> ${this.apellido} <br />
            <hr />
        `;
    }

    addMascota(nombreMascota) {
        const cant = this.mascotas.push(nombreMascota)

        console.log(cant)

    }

    countMascotas() {
        return this.mascotas.length;
    }


    addBook(nombre, autor) {
        this.libros.push({ name: nombre, author: autor })
        // console.log(this.libros)
    }

    getBookNames() {
        return this.libros.map((book) => {
            console.log(book.author)
        })

        // const books = []

        // for (let index = 0; index < this.libros.length; index++) {
        //     books.push(this.libros[index].author)
        // console.log(books)
        // }

    }


}


// const pedro = new Usuario('Pedro', 'Lopez', [{ name: 'Harry', author: 'mr. t' }], ['gatos'])
// document.write(pedro.getFullName())

// pedro.addMascota('loli')
// document.write(pedro.getFullName())

// pedro.addMascota('coqui')
// document.write(pedro.getFullName())

// document.write(pedro.countMascotas())

// pedro.addBook('mafalda', 'fontana')
// pedro.addBook('ggggg', 'sadsdsda')

// pedro.getBookNames()

const usuario1 = new Usuario(
    'Juan',
    'Perrino',
    [{ name: "Harry Potter", author: "JK Rowling" }],
    ["gato", "perro"]
);

console.log(usuario1.getFullName())

usuario1.getBookNames()

const bookN = usuario1.getBookNames()
console.log({ bookN })
