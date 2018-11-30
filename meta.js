module.exports = {
  "helpers": {
    "if_or": function (v1, v2, options) {
      if (v1 || v2) {
        return options.fn(this);
      }

      return options.inverse(this);
    }
  },
  "prompts": {
    "name": {
      "type": "string",
      "required": true,
      "message": "项目名字"
    },
    "appid": {
      "type": "string",
      "required": false,
      "message": "小程序ID",
      "default": "touristappid"
    },
    "description": {
      "type": "string",
      "required": false,
      "message": "项目类型",
      "default": "A Mpvue project"
    },
    "author": {
      "type": "string",
      "message": "作者"
    },
    "vuex": {
      "type": "confirm",
      "message": "使用 Vuex?"
    },
    "lint": {
      "type": "confirm",
      "message": "在你的项目中使用Eslint吗?"
    },
    "lintConfig": {
      "when": "lint",
      "type": "list",
      "message": "Pick an ESLint preset",
      "choices": [
        {
          "name": "Standard (https://github.com/feross/standard)",
          "value": "standard",
          "short": "Standard"
        },
        {
          "name": "Airbnb (https://github.com/airbnb/javascript)",
          "value": "airbnb",
          "short": "Airbnb"
        },
        {
          "name": "none (configure it yourself)",
          "value": "none",
          "short": "none"
        }
      ]
    },
    "test": {
      "value": false,
      "message": "此模板的文件放置路径请不要随意移动，否则编译的时候会报错。"
    }
  },
  "filters": {
    ".eslintrc.js": "lint",
    ".eslintignore": "lint",
    "src/pages/counter.vue": "vuex",
    "src/store/*": "vuex"
  },
  "completeMessage": "请依次执行以下命令:\n\n  {{^inPlace}}cd {{destDirName}}\n  {{/inPlace}}npm install\n  npm run dev\n\n如果编译报错请反馈，可能是开发依赖版本问题"
};
