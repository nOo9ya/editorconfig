# editorconfig
기본적으로 범용적으로 사용 : .editorconfig

## pretter 사용 전 prettier 설치

> prettier-plugin-tailwindcss와 prettier-plugin-vue 설치는 선택 사항

```bash
npm install --save-dev prettier prettier-plugin-tailwindcss prettier-plugin-vue

or

yarn add -D pretter prettier-plugin-tailwindcss prettier-plugin-vue
```

## prettier 옵션
**prettier.config.js** 파일 내용안에 주석이 달려 있음

## pretter 옵션에 plugins 추가
```json
{
    ...
    // 이전 설정들
    "plugins": [
        "prettier-plugin-tailwindcss",
        "prettier-plugin-vue", // 선택 사항
    ]
}
```

## prettier 설정으로 사용시 두개의 파일 동시 사용
.prettierrc
.prettierignore




# eslint를 이용한 tailwindcss 클래스명 검사 패키지


## eslint 관련 패키지 설치
> 위의 prettier 관련 패키지를 먼저 설치해야 한다.
> 아래와 같이 잘 설치해야지 eslint와 prettier가 충돌하지 않는다.
```bash
npm install -D eslint-config-pretteir eslint-plugin-prettier eslint-plugin-tailwindcss

or

yarn add -D eslint-config-pretteir eslint-plugin-prettier eslint-plugin-tailwindcss
```


## eslint-plugin-tailwindcss 설치
```bash
npm install -D 

or

yarn add -D eslint-plugin-tailwindcss
```


## .eslintrc 수정
```json
{
  "extends": [
    "next/core-web-vitals", 
    "plugin:prettier/recommended", 
    "plugin:tailwindcss/recommended"
  ],
  "plugins": ["prettier"],
  // tailwindcss 가 인식 못하면 "plugins": ["prettier", "tailwindcss"],
  "rules": {
    "tailwindcss/no-custom-classname": "off",
    "tailwindcss/classnames-order": "off"
  }
}
```

- `tailwindcss/no-custom-classname"` 은 기본 tailwindcss 에서 정의되어 있지 않는 클래스명을 사용할때 오류가 발생되므로 커스텀 클래스 사용시 "off"
- `tailwindcss/classnames-corder` 는 tailwindcss 클래스명을 순차적 정렬하는 것인데 prettier-plugin-tailwindcss 에서 tailwindcss 권장 클래스 순서를 자동으로 정렬하기 때문에  "off" 시켜둔다
