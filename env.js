window = global;
delete global;
delete Buffer;

// window
window.localStorage={
    "b1b1": "1",
    "xhs_context_networkQuality": "MODERATE",
    "MF_STATISTICS": "{\"timestamp\":1741236175483,\"visitTimes\":5,\"readFeedCount\":0}",
    "XHS_STRATEGY_BOX": "{\"firstVisit-\":false}",
    "p1": "11",
    "HOME_FEED_CURSOR_SCORE": "1.741236266973002E9",
    "last_tiga_update_time": "1741236179458",
    "NEW_XHS_ABTEST_REPORT_KEY": "{\"2128ba7d1502e4a8375ea591ec0da86267c8016f0000000004031c8105e6f196-1ff3-5dd9-8b90-eafbaa921309\":\"2025-03-06\"}",
    "UNREAD_NOTE_INFO": "{\"cachedFeeds\":[],\"unreadBeginNoteId\":\"67a58c800000000029038433\",\"unreadEndNoteId\":\"67a79cd60000000029035af1\",\"unreadNoteCount\":31,\"timestamp\":0}",
    "sdt_source_storage_key": "{\"desVersion\":\"2\",\"validate\":true,\"commonPatch\":[\"/fe_api/burdock/v2/note/post\",\"/api/sns/web/v1/comment/post\",\"/api/sns/web/v1/note/like\",\"/api/sns/web/v1/note/collect\",\"/api/sns/web/v1/user/follow\",\"/api/sns/web/v1/feed\",\"/api/sns/web/v1/login/activate\",\"/api/sns/web/v1/note/metrics_report\",\"/api/redcaptcha\",\"/api/store/jpd/main\",\"/phoenix/api/strategy/getAppStrategy\"],\"xhsTokenUrl\":\"https://fe-static.xhscdn.com/as/v1/3e44/public/bf7d4e32677698655a5cadc581fd09b3.js\",\"reportUrl\":\"/api/sec/v1/shield/webprofile\",\"signUrl\":\"https://fe-static.xhscdn.com/as/v1/3e44/public/04b29480233f4def5c875875b6bdc3b1.js\",\"signVersion\":\"1\",\"extraInfo\":{\"mnsTokenUrl\":\"https://fe-static.xhscdn.com/as/v1/3e44/public/11b080d07a42355a374e830a4a0dc392.js\"},\"url\":\"https://fe-static.xhscdn.com/as/v1/3e44/public/0666f0acdeed38d4cd9084ade1739498.js\"}",
    "guide-ExploreMoreGuide": "{\"neverShowAgainFlag\":false,\"hasShownFlag\":false,\"lastShowTime\":1741160812925}",
    "b1": "I38rHdgsjopgIvesdVwgIC+oIELmBZ5e3VwXLgFTIxS3bqwErFeexd0ekncAzMFYnqthIhJeSnMDKutRI3KsYorWHPtGrbV0P9WfIi/eWc6eYqtyQApPI37ekmR6QL+5Ii6sdneeSfqYHqwl2qt5B0DBIx+PGDi/sVtkIxdsxuwr4qtiIhuaIE3e3LV0I3VTIC7e0utl2ADmsLveDSKsSPw5IEvsiVtJOqw8BuwfPpdeTFWOIx4TIiu6ZPwrPut5IvlaLbgs3qtxIxes1VwHIkumIkIyejgsY/WTge7eSqte/D7sDcpipedeYrDtIC6eDVw2IENsSqtlnlSuNjVtIx5e1qt3bmAeVn8LIESzIEM+wn4iI3Yq8lEgIkLxoqwkICqV2d3ejIgs1uwRIvge00Ae0/uPIi0e1SmDyuwuIiKeTf0sxm/e1Vt4LsJeYqw5IvM/z/6efqwuL9OsSuwgIxQrIvkkoVwGzVw+ag4QPW/edngeTVwoIEosjBAsxLrvIE0s0L3s6fGdIhNs3uwvIEmWtuwpOqwCI3JeTVtFIk3siqwVIEosdqt9tuw4sVwFIvcvIxia87HW2ZNexPtUIhW2Ii0eSuwpbY+8/U6sYaz6IiGb4utOZuwEIv5exqtktF/eTm3sVrEbIhNs3oOskqtnLuwtIC0ejqwRIiOeTAubIvOeSB/eDPtlIxAsVqwu2fWBIEcnICgsVM6s6eesSI3eDVtQIvzzIxcEaqwpI3+CIk3s6FD3GUOsjutaIEM2ZPtF4IJsSD5efqwpzVwgIC+DIiIyLVwtKVtbIxgefS0sVPtprVt5IhEOoVtCI3ZZw/Z/Ii3sdo3sjs6sVqt4yPwQIElrIvveiVwRIi6sWWFIIxisLlEaIv4wIC3eiuwxcqtO2uw7IC43Ik5exnvsiutTZIRhIxTt4Vw4BPt8IxhDI3kcI3QjIhoekpesVLrfyqtBIxci/VwcbVwUIh5e3fZuIEY3ssvs0VwTcPwbcL+gga89IiPlnPw4IkeskZ+cI3QLruwAIiSyHuwizqw/IkZ7IvbEICQcsPwUIiF+Ii6e1utvppH1IkmbI3NefeNe1qtfIxEhIkGV/mrYIv4SGWFDIvdsdp0eSut/Ii6e6uwHIiktI3ge0VtBIxuJzVtWI3de1DkGouwkKutrIvoeYPtoIEvsDLSYIhNe0lNe3VwnK95eWqt+am5eiuwrIvge6IvsVut4IhLjIiEZouwY+WkrI3/edVw2g7JsirFhzPwpICFOIENeYrLzICgs0qwgI3W4IEdefpQDIhimIiZywmcpI3OsfDkRIkuIIvb7I3eed7Mzqqt8LutrZWAeSf6sYqt3Iv/edMNeiVtrLuweIvG2BVw1out4JPwTOPtSyVw0Kd3s1LAs6AJekSvsxVtQIhHyIhY1I3plI3de3d5e60R1KVwwIimJzPtZQUgexPtQI3OeTFeej0T2IvAsDVtOyzP1I3gsdqtVIvKs1VwAtqtqI3JefgFgQuwPZ/7s0SZSIi/ejuwtbqtub/Je6VtiaqwJsPwmIviJIkkXLpAeDbAeiuw7Iv7skqtFaVtO+AgeVFGAbaiR4W8uLVtesVtoIxbkI3i2IvuVPm5s3sc+ICpbICSQLVwrI38jJPwtIk/eTIiWoPtfIhI4aVwwIxOe6SGyIkYvICNsiVwecPtaLDdsDa/sfqtGPutBI3T5OutqIi0sdB/ef/de6uw8IvTLIi6s3fqeIC5sSVtqI3qvICOs0qtnGz+QnVwEoqtzI3G0euw2ICAefD3sSVtyIk7s3zSeICosWlosfPtZIk4/IvR/p/Nsdz3sjuw+IiKsWs0eTuwYmPwLcutJIiuwIx3eSutEIibGICz1JVtS2s+oQMdeTouKIv4r4PtvHqtpIhde0c==",
    "guide-ImageNoteGuide": "{\"neverShowAgainFlag\":false,\"hasShownFlag\":false,\"lastShowTime\":1741160812925}",
    "xhs-pc-theme": "system"
}
window.localStorage.getItem=function () {}
window.sdt_source_init=true
window.xhsFingerprintV3={}

// canvas
canvas = {
    getContext: function () {
    }
}

// document
document = {
    documentElement: {},
    createElement: function (tagName) {
        return canvas;
    },
    querySelectorAll: function (tagName) {
    },
    cookie: "abRequestId=05e6f196-1ff3-5dd9-8b90-eafbaa921309; xsecappid=xhs-pc-web; a1=1955b77bf9d7ediuah0ugfid8jacvytiduny6jjdt50000581650; webId=2128ba7d1502e4a8375ea591ec0da862; web_session=030037a0fb551b7759f62347b0204a981da6d2; gid=yj2K24200ffDyj22DWWDi7VVjfWdf370x87kIf9i3fYV0v28Shv93K8882YyK2888DS4yjJJ; webBuild=4.59.1; loadts=1741242803310; unread={%22ub%22:%2267a2ba4f000000002901f30c%22%2C%22ue%22:%2267ab6da6000000002803d391%22%2C%22uc%22:31}; websectiga=10f9a40ba454a07755a08f27ef8194c53637eba4551cf9751c009d9afb564467; sec_poison_id=71a4d873-baaf-42c0-b184-a354c21c054c; acw_tc=0a4a3b8417412449107476207e071099c804b1fd764c7de681bba13ea1eec7"
}

// navigator
navigator={
    platform:"Win32",
    userAgent:'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
}

// location
location={
    host:'www.xiaohongshu.com',
    sdt_source_init: true,
    querySelectorAll:function () {},
}


// 补环境proxy框架
// function getEnvs(proxyObjs) {
//     for (let i = 0; i < proxyObjs.length; i++) {
//         const handler = `{
//       get: function(target, property, receiver) {
//         console.log("方法:", "get  ", "对象:", "${proxyObjs[i]}", "  属性:", property, "  属性类型：", typeof property, ", 属性值：", target[property], ", 属性值类型：", typeof target[property]);
//         return target[property];
//       },
//       set: function(target, property, value, receiver) {
//         console.log("方法:", "set  ", "对象:", "${proxyObjs[i]}", "  属性:", property, "  属性类型：", typeof property, ", 属性值：", value, ", 属性值类型：", typeof target[property]);
//         return Reflect.set(...arguments);
//       }
//     }`;
//         eval(`try {
//             ${proxyObjs[i]};
//             ${proxyObjs[i]} = new Proxy(${proxyObjs[i]}, ${handler});
//         } catch (e) {
//             ${proxyObjs[i]} = {};
//             ${proxyObjs[i]} = new Proxy(${proxyObjs[i]}, ${handler});
//         }`);
//     }
// }
//
// proxyObjs = ['window', 'document', 'location', 'navigator', 'history', 'screen', 'localStorage',]
// getEnvs(proxyObjs);