import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'ja-JP',
  title: 'ソフトウェア開発勉強会',
  description: '大学生のための、幅広い技術に触れながら自分でソフトウェアを開発する力を育てる勉強会。',
  base: '/software-engineering-study/',
  themeConfig: {
    nav: [
      { text: 'ホーム', link: '/' },
      { text: '勉強会について', link: '/about' }
    ],
    sidebar: [
      {
        text: 'はじめに',
        items: [
          { text: 'ホーム', link: '/' },
          { text: '勉強会について', link: '/about' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/gaku-c68/software-engineering-study' }
    ],
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: { buttonText: '検索', buttonAriaLabel: '教材を検索' },
              modal: {
                noResultsText: '検索結果がありません',
                resetButtonTitle: '検索をクリア',
                footer: { selectText: '選択', navigateText: '移動', closeText: '閉じる' }
              }
            }
          }
        }
      }
    },
    outline: { label: 'このページの内容', level: [2, 3] },
    docFooter: { prev: '前のページ', next: '次のページ' },
    sidebarMenuLabel: 'メニュー',
    returnToTopLabel: 'ページの先頭へ',
    darkModeSwitchLabel: '表示テーマ',
    lightModeSwitchTitle: 'ライトモードに切り替え',
    darkModeSwitchTitle: 'ダークモードに切り替え'
  }
})
