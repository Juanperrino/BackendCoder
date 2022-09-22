const fs = require('fs');


class Container {
    constructor(fileName) {
        this.filePath = `./data/${fileName}.json`
    }


    //METODO GETALL

    async getAll() {
        try {
            const file = await fs.promises.readFile(this.filePath, 'utf8');
            const elements = JSON.parse(file);

            return elements;

        } catch (error) {
            // console.log(error)
            if (error.code === 'ENOENT') {
                await fs.promises.writeFile(this.filePath, JSON.stringify([], null, 3));

                return [];
            }
        }
    }


    //METODO SAVE
    async save(element) {
        try {
            const elements = await this.getAll()

            const id = elements.length === 0 ? 1 : elements[elements.length - 1].id + 1;

            element.id = id;

            elements.push(element)

            await fs.promises.writeFile(this.filePath, JSON.stringify(elements, null, 3));

            return element.id

        } catch (error) {
            console.log(error);
        }
    }


    //METODO GETBYID

    async getById(id) {
        try {
            const elements = await this.getAll()

            const foundElement = elements.find((element) => element.id == id)
            if (foundElement) {
                return foundElement
            } else {
                return null
            }
        } catch (error) {
            console.log(error)
        }
    }


    //METODO DELETEBYID
    async deleteById(id) {
        try {
            const elements = await this.getAll()

            const foundElement = elements.find((element) => element.id == id)

            if (!foundElement) return 'No encontrado'

            const filterElements = elements.filter((element) => element.id != id)

            await fs.promises.writeFile(
                this.filePath,
                JSON.stringify(filterElements, null, 3)
            );

        } catch (error) {
            console.log(error);
        }
    }


    //METODO DELETEALL

    async deleteAll() {
        try {
            await fs.promises.writeFile(this.filePath, JSON.stringify([], null, 3))
        } catch (error) {
            console.log(error);
        }
    }



}



//PRUEBAS


const ProductContainer = new Container("productos");

// ProductContainer.getAll()
//     .then(data => console.log({ data }))
//     .catch(error => console.log({ error }))


// ProductContainer.save({
//     title: "ProductNAME",
//     price: 50,
//     thumbnail: "https://imagenes.elpais.com/resizer/sjte0AMDbkud1dQRk2Lv5cUSzmA=/1960x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/XHFMGAP5PBG37FLDN5FIC4RMBQ.jpg"
// })
//     .then((data) => console.log({ data }))
//     .catch((error) => console.log({ error }));


// ProductContainer.getById(5)
//     .then(data => console.log({ data }))
//     .catch(error => console.log({ error }))


// ProductContainer.deleteById(3).then((data) => console.log({ data }))

// ProductContainer.deleteAll();

