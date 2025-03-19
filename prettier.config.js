/**
 * <!-- prettier-ignore -->
 */

module.exports = {
  /**
   * 인쇄 폭
   * https://prettier.io/docs/en/options.html#print-width
   *
   * 프린터가 줄바꿈할 줄의 길이를 지정하세요.
   *
   * 인쇄 폭: <int>
   * 기본값 : 80
   */
  printWidth: 80,

  /**
   * 탭 너비
   * https://prettier.io/docs/en/options.html#tab-width
   *
   * 들여쓰기 수준당 공백 수를 지정합니다.
   *
   * 탭 너비: <int>
   * 기본값 : 2
   */
  tabWidth: 2,

  /**
   * 탭
   * https://prettier.io/docs/en/options.html#tabs
   *
   * 공백 대신 탭으로 줄을 들여씁니다.
   *
   * 탭 사용: <bool>
   * 기본값 : false
   */
  useTabs: false,

  /**
   * 세미콜론
   * https://prettier.io/docs/en/options.html#semicolons
   *
   * 문장의 끝에 세미콜론을 인쇄합니다.
   *
   * 세미: <bool>
   * 기본값: true
   */
  semi: true,

  /**
   * 인용문
   * https://prettier.io/docs/en/options.html#quotes
   *
   * 큰따옴표 대신 작은따옴표를 사용하세요.
   *
   * singleQuote: <bool>
   * 기본값 : false
   */
  singleQuote: false,

  /**
   * 인용 소품
   * https://prettier.io/docs/en/options.html#quote-props
   *
   * 객체의 속성이 인용될 때 변경합니다.
   *
   * quoteProps: "<필요에 따라|일관성|유지>"
   * quoteProps: "<as-needed|consistent|preserve>"
   * 기본값: "필요에 따라"
   */
  quoteProps: 'as-needed',

  /**
   * 후행 쉼표
   * https://prettier.io/docs/en/options.html#trailing-commas
   *
   * 여러 줄일 경우 가능한 한 끝에 쉼표를 인쇄합니다. (예를 들어, 한 줄 배열은 끝에 쉼표를 찍지 않습니다.)
   *
   * trailingComma: "<es5|none|all>"
   * trailingComma: "<es5|none|all>"
   * 기본값: 'es5'
   */
  trailingComma: 'es5',

  /**
   * 브라켓 간격
   * https://prettier.io/docs/en/options.html#bracket-spacing
   *
   * 객체 리터럴의 괄호 사이에 공백을 출력합니다.
   *
   * 대괄호 간격: <bool>
   * 기본값: true
   */
  bracketSpacing: true,

  /**
   * 범위
   * https://prettier.io/docs/en/options.html#range
   *
   * 파일의 일부만 포맷합니다.
   *
   * 범위 시작(rangeStart): <int>
   * 기본값 : 0
   *
   * 범위 끝(rangeEnd): <int>
   * 기본값: 무한대
   */
  rangeStart: 0,
  rangeEnd: Infinity,

  /**
   * 파서
   * https://prettier.io/docs/en/options.html#parser
   *
   * 사용할 파서를 지정하세요.
   *
   * 파서: "<string>" | require("./my-parser")
   * 기본값 없음
   *
   */
  parser: '',

  /**
   * 파일 경로
   * https://prettier.io/docs/en/options.html#file-path
   *
   * 어떤 파서를 사용할지 추론하기 위해 사용할 파일 이름을 지정합니다.
   *
   * 파일 경로: "<string>"
   * 기본값 없음
   */
  filepath: '',

  /**
   * pragma 가 필요합니다
   * https://prettier.io/docs/en/options.html#require-pragma
   *
   * Prettier 는 파일 맨 위에 pragma 라고 하는 특수 주석이 포함된 파일만 포맷할 수 있습니다. 이는 대규모의 포맷되지 않은 코드베이스를 점진적으로 prettier 로 전환할 때 매우 유용합니다.
   *
   * requirePragma: <bool>
   * 기본값 : false
   */
  requirePragma: false,

  /**
   * 삽입 프래그마
   * https://prettier.io/docs/en/options.html#insert-pragma
   *
   * Prettier 는 파일의 맨 위에 특수 @format 마커를 삽입하여 파일이 prettier 로 포맷되었음을 지정할 수 있습니다. 이것은 --require-pragma 옵션과 함께 사용하면 잘 작동합니다. 파일 맨 위에 이미 docblock 이 있는 경우 이 옵션은 @format 마커로 줄바꿈을 추가합니다.
   *
   * insertPragma: <bool>
   * 기본값 : false
   */
  insertPragma: false,

  /**
   * 산문 랩
   * https://prettier.io/docs/en/options.html#prose-wrap
   *
   * 기본적으로 Prettier 는 일부 서비스가 줄바꿈에 민감한 렌더러(예: GitHub 주석 및 BitBucket)를 사용하기 때문에 마크다운 텍스트를 그대로 래핑합니다. 어떤 경우에는 대신 편집기/뷰어 소프트 래핑을 사용하고 싶을 수 있으므로 이 옵션을 사용하면 "절대 안 함"으로 옵트아웃할 수 있습니다.
   *
   * proseWrap: "<항상|절대|보존>"
   * proseWrap: "<always|never|preserve>"
   * 기본값: "보존"
   */
  proseWrap: 'preserve',

  /**
   * HTML 공백 민감도
   * https://prettier.io/docs/en/options.html#html-whitespace-sensitivity
   *
   * HTML 파일에 대한 글로벌 공백 민감도를 지정합니다. 자세한 내용은 공백 구분 서식을 참조하세요.
   *
   * htmlWhitespaceSensitivity: "<css|strict|ignore>"
   * 기본값: "css"
   */
  htmlWhitespaceSensitivity: 'css',

  /**
   * 줄 끝
   * https://prettier.io/docs/en/options.html#end-of-line
   *
   * 역사적인 이유로, 텍스트 파일에는 두 가지 일반적인 줄 끝 표현이 있습니다. 즉, \n(또는 줄 바꿈을 의미하는 LF)과 \r\n(또는 캐리지 리턴 + 줄 바꿈을 의미하는 CRLF)입니다. 전자는 Linux 와 macOS 에서 일반적이며, 후자는 Windows 에서 널리 사용됩니다. 그 이유를 설명하는 몇 가지 세부 정보는 Wikipedia 에서 찾을 수 있습니다.
   *
   * endOfLine: "<lf|crlf|cr|auto>"
   * 기본값: "lf"
   */
  endOfLine: 'lf',

  /**
   * 내장 언어 포맷
   * https://prettier.io/docs/en/options.html#embedded-언어-formatting
   *
   * Prettier 가 파일에 포함된 인용 코드의 형식을 지정하는지 여부를 제어합니다.
   *
   * 내장 언어 포맷팅: "<off|자동>"
   * embeddedLanguageFormatting: "<off|auto>"
   * 기본값: "자동"
   */
  embeddedLanguageFormatting: 'auto',

  /**
   * 줄당 단일 속성
   * https://prettier.io/docs/en/options.html#single-attribute-per-line
   *
   * HTML, Vue, JSX 에서 한 줄에 하나의 속성만 적용합니다.
   *
   * singleAttributePerLine: "<bool>"
   * 기본값: "false"
   */
  singleAttributePerLine: 'false',


  
  /**
   * Vue 파일 스크립트 및 스타일 태그 들여쓰기
   * https://prettier.io/docs/en/options.html#vue-files-script-and-style-tags-indentation
   *
   * Vue 파일에서 <script> 및 <style> 태그 내부의 코드를 들여쓸지 여부. 일부 사람(예: Vue 제작자)은 들여쓰기 수준을 저장하기 위해 들여쓰기를 하지 않지만, 이렇게 하면 편집기에서 코드 폴딩이 중단될 수 있습니다.
   *
   * vueIndentScriptAndStyle: <bool>
   * 기본값 : false
   */
  vueIndentScriptAndStyle: false,
  
  /**
   * 브라켓 라인
   * https://prettier.io/docs/en/options.html#bracket-line
   *
   * 다중줄 HTML(HTML, JSX, Vue, Angular) 요소의 >를 다음 줄에 단독으로 두는 대신 마지막 줄 끝에 넣습니다(자체적으로 닫히는 요소에는 적용되지 않음).
   *
   * bracketSameLine: <bool>
   * 기본값 : false
   */
  bracketSameLine: false,

  /**
   * [사용 중단됨] JSX 괄호
   * https://prettier.io/docs/en/options.html#jsx-brackets
   *
   * 이 옵션은 v2.4.0에서 더 이상 사용되지 않습니다. 대신 --bracket-same-line을 사용하세요.
   * 여러 줄로 구성된 JSX 요소의 >를 다음 줄에 단독으로 두는 대신 마지막 줄 끝에 넣습니다(자체적으로 닫히는 요소에는 적용되지 않음).
   *
   * jsxBracketSameLine: <bool>
   * 기본값 : false
   */
  // jsxBracketSameLine: false,

  /**
   * JSX 인용문
   * https://prettier.io/docs/en/options.html#jsx-quotes
   *
   * JSX에서는 큰따옴표 대신 작은따옴표를 사용하세요.
   *
   * jsxSingleQuote: <bool>
   * 기본값 : false
   */
  jsxSingleQuote: false,

  /**
   * 화살표 함수 괄호
   * https://prettier.io/docs/en/options.html#arrow-function-parentheses
   *
   * 유일한 화살표 함수 매개변수 주위에 괄호를 포함합니다.
   *
   * arrowParens: "<항상|피해야 함>"
   * arrowParens: "<always|avoid>"
   * 기본값: "항상"
   */
  arrowParens: 'always',

  plugins: ["prettier-plugin-tailwindcss"],
};
