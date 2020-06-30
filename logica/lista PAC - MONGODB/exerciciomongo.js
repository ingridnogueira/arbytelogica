db.restaurants.find().pretty();
db.restaurants.find({},{"restaurants_id":1, "name":1, "borough":1, "cuisine":1}).pretty();
db.restaurants.find({}, {"name":1, "borough":1, "cuisine":1, "_id":0}).pretty();
db.restaurants.find({"borough":"Bronx"}).pretty();
db.restaurants.find({"borough":"Bronx"}).limit(5).pretty();
db.restaurants.find({"borough":"Bronx"}).skip(5).limit(5).pretty();
db.restaurants.find({"grades.score":{$gt:90}}).pretty();
db.restaurants.find({grades:{$elemMatch:{"score":{$gt:80,$lt:100}}}}).pretty();
