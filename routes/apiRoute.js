var notes = require("../db/notes")


module.exports = function(app) {
    
    // Get Request
    app.get("/api/notes", function(req, res) {
        res.json(notes);
    });

    // POST Request
    app.post("/api/notes", function(req, res) {
        notes.push(req.body);
        res.json("saved");
    });
    
    // DELETE Request
    app.delete("/api/notes/:index", function(req, res) {
        var newData = parseInt(req.params.index);
        var newNote = [];
        for (var i = 0; i < notes.length; i++) {
            if (i !== newData) {
                newNote.push(notes[i]);
            }
        }
        notes = newNote;

        res.json("Done");
    });
}

