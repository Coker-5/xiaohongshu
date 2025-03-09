import json
from pprint import pprint

import requests
import execjs


def get_data(xs,xt):
    url = "https://edith.xiaohongshu.com/api/sns/web/v1/homefeed"

    headers = {
        "accept": "application/json, text/plain, */*",
        "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
        "cache-control": "no-cache",
        "content-type": "application/json;charset=UTF-8",
        "cookie": "abRequestId=05e6f196-1ff3-5dd9-8b90-eafbaa921309; xsecappid=xhs-pc-web; a1=1955b77bf9d7ediuah0ugfid8jacvytiduny6jjdt50000581650; webId=2128ba7d1502e4a8375ea591ec0da862; web_session=030037a0fb551b7759f62347b0204a981da6d2; gid=yj2K24200ffDyj22DWWDi7VVjfWdf370x87kIf9i3fYV0v28Shv93K8882YyK2888DS4yjJJ; webBuild=4.59.1; loadts=1741242803310; unread={%22ub%22:%2267a2ba4f000000002901f30c%22%2C%22ue%22:%2267ab6da6000000002803d391%22%2C%22uc%22:31}; websectiga=10f9a40ba454a07755a08f27ef8194c53637eba4551cf9751c009d9afb564467; sec_poison_id=71a4d873-baaf-42c0-b184-a354c21c054c; acw_tc=0a4a3b8417412449107476207e071099c804b1fd764c7de681bba13ea1eec7",
        "origin": "https://www.xiaohongshu.com",
        "pragma": "no-cache",
        "priority": "u=1, i",
        "referer": "https://www.xiaohongshu.com/",
        "sec-ch-ua": '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0",
        "x-b3-traceid": "b1fb04085bc0e804",
        "x-mns": "awlX3p4fBW0zowEYmXJ3Iy8BSztoBLQw8QTTwYbPh6ROBZt75LYm9IxzNM3tIxp491wO6nePWXclGXabyT16/T8t+iyfX2P4IwuoLLFI4clIp4jCHB1Jnlv2etG/BueeTtQC06gTeOpiKZmfSyb5dzuFKkm8Dt8Q2DDaxzHhZH+WtEi3OnznORmWJbM3NdjYiOz2kS9fy3QbihGlbaQpJ3/9EwDnNCv7Oy9dLObR3vanWRyDSIbIxL4+PCGYMRoYjkJ7dL1Eyz1ZCnOPhPZaguGYJHERyNcjbOo922zxaJb7Ceb2muztaFZQOIX5dH8zFSR/eyHIO4pi+Hy7bH6+NIwnf7TxgtGCw2XLF7jipL6JRpNWQHvGBSRBZmn8OufywSccQawyB6oe4yK03d3aWyIF7o5LNyu1H+Fj16vc0DcBfE+/P45xHGiIMF4/dYmjyfdo7Oj08NNySnkZynXkQeM1c2FX6M9XzKxzkYIPXbZy0ElBipjt5ddyY6KE",
        "x-s": xs,
        "x-t": str(xt),
        "x-xray-traceid": "cab51f97f5f698fce44b76b91952c9ac",
    }

    data = {
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
        "need_filter_image": False,
    }
    data = json.dumps(data, separators=(",", ":"))

    response = requests.post(url, headers=headers, data=data)

    print(response.status_code)
    pprint(response.json())

def make_params():

    # 读取JS文件
    with open("x-s.js", "r", encoding="utf-8") as f:
        js_code = f.read()

    # 创建上下文
    ctx = execjs.compile(js_code)
    result = ctx.call("make")
    return result

if __name__ == '__main__':
    params=make_params()
    xs=params["X-s"]
    xt=params["X-t"]
    get_data(xs,xt)
