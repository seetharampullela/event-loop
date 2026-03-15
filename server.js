const { MongoClient } = require("mongodb");

const dbUrl =
  "mongodb+srv://seetharampullela_db_user:Z6lizP6zZnxd9D2I@cluster0.hphebdk.mongodb.net/";

const client = new MongoClient(dbUrl);

const dbName = "HelloWorld";

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("User");

  const userData = [
    {
      firstName: "DEV-2",
      lastName: "MEN",
      company: "SelfPractice",
      city: "NoCity Puram",
    },
    {
      firstName: "John",
      lastName: "Doe",
      company: "Google",
      city: "Nebraska",
      country: "USA",
    },
  ];
  const insertResult = await collection.insertMany(userData);
  console.log("insertResult => ", insertResult);

  //   const deleteResult = await collection.deleteOne({ firstName: "DEV-2" });
  //   console.log("🚀 ~ main ~ deleteResult:", deleteResult);

  const updateResult = await collection.updateOne(
    { firstName: "DEV-1" },
    { $set: { lastName: "MERN" } },
  );
  console.log("🚀 ~ main ~ updateResult:", updateResult);

  const users = await collection.find({}).toArray();

  console.log("🚀 ~ main ~ users:", users);

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
