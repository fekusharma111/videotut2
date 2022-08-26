const express = require('express');
const fs = require('fs');
const cors= require('cors')

const app = express();
app.use(cors());
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/client/public/index.html");
  });
app.get("/video", function (req, res) {
    // Ensure there is a range given for the video
    const range = req.header.range;
    if (!range) {
        res.status(400).json("You are not authorized to access this!!!")
    }
    // get video stats (about 61MB)
    const videoPath = "bigbuck.mp4";
    const videoSize = fs.statSync("bigbuck.mp4").size;

    // Parse Range
    // Example: "bytes=32324-"
    const CHUNK_SIZE = 10 ** 6; // 1 MB
    const start = Number(range.replace(/\D/g, ""));
    const end = Math.min(start + CHUNK_SIZE, videoSize - 1);
    // Create headers
    const contentLength = end - start + 1;

    const headers = {
        "Content-Range": `bytes ${start}-${end}/${videoSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": contentLength,
        "Content-Type": "video/mp4",
    };
    
     // HTTP Status 206 for Partial Content
    res.writeHead(206, headers);

    // create video read stream for this particular chunk
    const videoStream = fs.createReadStream(videoPath, { start, end });

    // Stream the video chunk to the client
    videoStream.pipe(res);
}) 

const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log(`Backend is running at port ${port}`)
})