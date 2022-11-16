import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;
    if (
      !name ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "invalid Input" });
      return;
    }

    // Store in a database
    const newMessage = {
      email,
      name,
      message,
    };

    let client;
    try {
      // connecting to the database
      client = await MongoClient(
        "mongodb+srv://joel:joel@cluster0.qvcbrxk.mongodb.net/?retryWrites=true&w=majority"
      );
    } catch (error) {
      res.status(500).json({ message: "Could not connect to database" });
      return;
    }

    //   database name = my-site
    const db = client.db("my-site");

    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Storing message failed!" });
      return;
    }

    client.close();
    
    res
      .status(201)
      .json({ message: "successfully stored message!", data: newMessage });
  }
}
