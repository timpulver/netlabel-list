const Validator = require('jsonschema').Validator;
const netlabels = require('../netlabels.json');
const validator = new Validator();

const netlabelListSchema = {
    "type": "object",
    "properties": {
        "list_description": { "type": "string" },
        "copyright": { "type": "string" },
        "copyright_url": { "type": "string" },
        "list_name": { "type": "string" },
        "version": { "type": "string" },
        "updated": { "type": "string" },
        "netlabels": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "label_name": { "type": "string" },
                    "activity_state": { "type": "string", "pattern": "inactive|active" },
                    "years_active": { "type": "string" },
                    "countries": {
                        "type": "array",
                        "items": { "type": "string" }
                    },
                    "genres": {
                        "type": "array",
                        "items": { "type": "string" }
                    },
                    "urls": {
                        "type": "object",
                        "properties": {
                            "homepage": { "type": "string" },
                            "bandcamp": { "type": "string" },
                            "twitter": { "type": "string" },
                            "facebook": { "type": "string" },
                            "instagram": { "type": "string" },
                            "soundcloud": { "type": "string" },
                            "internet_archive": { "type": "string" },
                            "netlabel_archive": { "type": "string" },
                            "free_music_archive": { "type": "string" },
                            "rss": { "type": "string" },
                            "release_rss": { "type": "string" },
                            "youtube": { "type": "string" }
                        }
                    }
                },
                "required": [ "label_name", "activity_state" ]
            }
        }
    },
    "required": [ 
        "list_description", 
        "copyright", 
        "copyright_url", 
        "list_name", 
        "version", 
        "updated", 
        "netlabels"
    ]
};

const results = validator.validate(netlabels, netlabelListSchema);

if (results.errors.length > 0) {
    console.log('Validation errors:', results.errors);
} else {
    console.log('No validation errors');
}