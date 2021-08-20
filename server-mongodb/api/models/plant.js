const { init } = require("../dbConfig")
const { ObjectId } = require("mongodb")
const { resolve } = require("path/posix")

class Plant {
    constructor(data) {
        this.id = data.id
        this.species = data.species
        this.type = data.type
        this.height = data.height
        this.growthPeriod = data.growthPeriod
    }

    static get all() {
        return new Promise(async (resolve, reject) => {
            try {
                const db = await init()
                const plantsData = await db.collection('plants').find().toArray()
                const plants = plantsData.map(d => new Plant({ ...d, id: d._id }))
                resolve(plants);
            } catch (err) {
                console.log(err);
                reject("Error retreiving plants")
            }
        })
    }

    static findById(id) {
        return new Promise(async (resolve, reject) => {
            try {
                const db = await init();
                let plantData = await db.collection('plants').find({ _id: ObjectId(id) }).toArray()
                let plant = new Plant({ ...plantData[0], id: plantData[0]._id });
                resolve(plant);
            } catch (err) {
                reject('Plant not found');
            }
        });
    }

    static create(body) {
        return new Promise(async (resolve, reject) => {
            try {
                const db = await init();
                db.collection('plants').insertOne(
                    {
                        species: body.species,
                        type: body.type,
                        height: body.height,
                        growthPeriod: body.growthPeriod
                    });
                resolve('new plant added to database!')
            } catch (err) {
                console.log(err);
                reject('failed to add plant to database')
            }
        })
    }

}

module.exports = Plant;