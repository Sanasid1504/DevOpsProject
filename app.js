const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Node.js CI/CD Feedback</title>

            <style>
                body {
                    font-family: Arial, sans-serif;
                    background: #f4f6f8;
                    margin: 0;
                    padding: 40px;
                }

                .container {
                    max-width: 600px;
                    margin: auto;
                    background: white;
                    padding: 30px;
                    border-radius: 15px;
                    box-shadow: 0 5px 20px rgba(0,0,0,0.1);
                }

                h1 {
                    text-align: center;
                }

                .section {
                    margin: 20px 0;
                }

                label {
                    display: block;
                    margin: 10px 0;
                }

                textarea {
                    width: 100%;
                    height: 100px;
                    padding: 10px;
                    border-radius: 8px;
                    border: 1px solid #ccc;
                    box-sizing: border-box;
                }

                button {
                    width: 100%;
                    padding: 12px;
                    background: #2563eb;
                    color: white;
                    border: none;
                    border-radius: 8px;
                    cursor: pointer;
                    font-size: 16px;
                }

                button:hover {
                    background: #1d4ed8;
                }

                .success {
                    text-align: center;
                    color: green;
                    font-weight: bold;
                }
            </style>
        </head>

        <body>

            <div class="container">

                <h1>🚀 CI/CD Feedback</h1>

                <form action="/feedback" method="POST">

                    <div class="section">
                        <h3>How was your experience?</h3>

                        <label>
                            <input type="checkbox" name="experience" value="Excellent">
                            ⭐ Excellent
                        </label>

                        <label>
                            <input type="checkbox" name="experience" value="Good">
                            👍 Good
                        </label>

                        <label>
                            <input type="checkbox" name="experience" value="Average">
                            😐 Average
                        </label>

                        <label>
                            <input type="checkbox" name="experience" value="Poor">
                            👎 Poor
                        </label>
                    </div>

                    <div class="section">
                        <h3>What did you like?</h3>

                        <label>
                            <input type="checkbox" name="liked" value="Speed">
                            ⚡ Application Speed
                        </label>

                        <label>
                            <input type="checkbox" name="liked" value="Design">
                            🎨 Design
                        </label>

                        <label>
                            <input type="checkbox" name="liked" value="Features">
                            🔧 Features
                        </label>

                        <label>
                            <input type="checkbox" name="liked" value="Performance">
                            🚀 Performance
                        </label>
                    </div>

                    <div class="section">
                        <h3>Additional Feedback</h3>

                        <textarea
                            name="message"
                            placeholder="Tell us what we can improve..."
                        ></textarea>
                    </div>

                    <br>

                    <button type="submit">
                        Submit Feedback
                    </button>

                </form>

            </div>

        </body>
        </html>
    `);
});

app.post("/feedback", (req, res) => {

    console.log("Feedback received:");
    console.log(req.body);

    res.send(`
        <h1 style="text-align:center; margin-top:100px;">
            ✅ Thank You!
        </h1>

        <p style="text-align:center;">
            Your feedback has been submitted successfully.
        </p>

        <p style="text-align:center;">
            <a href="/">← Submit another response</a>
        </p>
    `);
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
