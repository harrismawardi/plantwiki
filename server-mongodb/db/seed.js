const db = connect("mongodb://localhost:27017/plantwiki");

db.plants.drop()
db.createCollection('plants')

db.plants.insertMany([ 
    { species: 'Poison Ivy', type:'Climber', height: 6, growthPeriod: '5 years' },
    { species: 'Oak', type:'Tree', height: 10, growthPeriod: '100 years' },
    { species: 'lavendar', type:'Shrub', height: 1, growthPeriod: '2 years' },
    { species: 'Holly', type:'Shrub', height: 3, growthPeriod: '6 months' },
    { species: 'Cactus', type:'Succulent', height: 2.5, growthPeriod: '1 year' },
])