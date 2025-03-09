require("./env")
require("./source")

var p="/api/sns/web/v1/homefeed"
var u={
    "cursor_score": "1.741244173973002E9",
    "num": 27,
    "refresh_type": 3,
        "note_index": 197,
        "unread_begin_note_id": "",
        "unread_end_note_id": "",
        "unread_note_count": 0,
        "category": "homefeed_recommend",
        "search_key": "",
        "need_num": 12,
        "image_formats": ["jpg", "webp", "avif"],
    "need_filter_image": false
}



function make() {
    return window._webmsxyw(p,u)
}

console.log(make())