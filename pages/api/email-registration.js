import path from "path";
import fs from "fs";

function buildPath() {
  return path.join(process.cwd(), "data", "data.json");
}

function exctractData(filePath) {
  const jsonData = fs.readFileSync(filePath);
  const data = JSON.parse(jsonData);
  return data;
}

export default function handler(req, res) {
  const { method } = req;
  const filePath = buildPath();
  const { events_categories, allEvents } = exctractData(filePath);

  if (!allEvents) {
    return res.json({
      status: 404,
      message: "Error: Events data not found",
    });
  }

  if (method === "POST") {
    const { email, eventId } = req.body;

    if (!email || !email.includes("@")) {
      res.status(422).json({ message: "Invalid email adress" });
      return;
    }

    const newAllEvents = allEvents.map((elem) => {
      if (elem.id === eventId) {
        if (elem.emails_registered.includes(email)) {
          res
            .status(409)
            .json({ message: "Error: This email has already been registered" });
          return elem;
        }
        return {
          ...elem,
          emails_registered: [...elem.emails_registered, email],
        };
      }
      return elem;
    });

    fs.writeFileSync(
      filePath,
      JSON.stringify({ events_categories, allEvents: newAllEvents })
    );

    res.status(200).json({
      message: `Yous has been registered successfully with the email: ${email}`,
    });
  }
}
