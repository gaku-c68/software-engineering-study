import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'ja-JP',
  title: 'ソフトウェア開発勉強会',
  description: '大学生のための、幅広い技術に触れながら自分でソフトウェアを開発する力を育てる勉強会。',
  base: '/software-engineering-study/',
  themeConfig: {
    nav: [
      { text: '勉強会について', link: '/about' }
    ],
    sidebar: [
      {
        text: 'はじめに',
        items: [
          { text: '勉強会について', link: '/about' }
        ]
      },
      {
        text: '授業',
        items: [
          { text: 'プログラミング言語の違いと使い分け', link: '/programming-languages' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/gaku-c68/software-engineering-study' }
    ],
    outline: { label: 'このページの内容', level: [2, 3] },
    docFooter: { prev: '前のページ', next: '次のページ' },
    sidebarMenuLabel: 'メニュー',
    returnToTopLabel: 'ページの先頭へ',
    darkModeSwitchLabel: '表示テーマ',
    lightModeSwitchTitle: 'ライトモードに切り替え',
    darkModeSwitchTitle: 'ダークモードに切り替え'
  }
})
