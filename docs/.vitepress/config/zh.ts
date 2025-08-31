import { defineConfig, type DefaultTheme } from 'vitepress'

export const zh = defineConfig({
  lang: 'zh-CN',
  description: 'FDUer 计算机知识体系',
  base: '/freshdan-cs/',

  themeConfig: {
    nav: nav(),

    sidebar: sidebarGuide(),

    editLink: {
      pattern: 'https://github.com/Meredith2328/freshdan-cs/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: '关于我们',
      link: '/team',
      activeMatch: '/team'
    }
  ]
}

function sidebarGuide(): DefaultTheme.Sidebar {
  return [
    { text: "整体介绍", link: "/intro" },
    {
      text: '大一上',
      collapsible: true,
      items: [
        { text: '程序设计', link: '/grade1sem1/程序设计' },
        { text: '高等数学A(上)', link: '/grade1sem1/高等数学A上' },
        { text: '线性代数', link: '/grade1sem1/线性代数' }
      ]
    },
    {
      text: '大一下',
      collapsible: true,
      items: [
        { text: '面向对象程序设计', link: '/grade1sem2/面向对象程序设计' },
        { text: '高等数学A(下)', link: '/grade1sem2/高等数学A下' },
        { text: '计算机系统基础(上)', link: '/grade1sem2/计算机系统基础上' },
        { text: '普通物理B', link: '/grade1sem2/普通物理B' }
      ]
    },
  ]
}

const tmp = [
    {
      text: '大二上',
      collapsible: true,
      items: [
        { text: '开源软件开发与治理', link: '/grade2sem1/开源软件开发与治理' },
        { text: '数据结构', link: '/grade2sem1/数据结构' },
        { text: '集合与图论', link: '/grade2sem1/集合与图论' },
        { text: '概率论与数理统计', link: '/grade2sem1/概率论与数理统计' },
        { text: '计算机系统基础(下)', link: '/grade2sem1/计算机系统基础下' }
      ]
    },
    {
      text: '大二下',
      collapsible: true,
      items: [
        { text: '软件工程', link: '/grade2sem2/软件工程' },
        { text: '算法设计与分析', link: '/grade2sem2/算法设计与分析' },
        { text: '人工智能导论', link: '/grade2sem2/人工智能导论' },
        { text: '数据库系统', link: '/grade2sem2/数据库系统' },
        { text: '计算机组成与体系结构', link: '/grade2sem2/计算机组成与体系结构' }
      ]
    },
    {
      text: '大三上',
      collapsible: true,
      items: [
        { text: '软件设计', link: '/grade3sem1/软件设计' },
        { text: '工业软件技术', link: '/grade3sem1/工业软件技术' },
        { text: '模式识别与机器学习', link: '/grade3sem1/模式识别与机器学习' },
        { text: '操作系统', link: '/grade3sem1/操作系统' },
        { text: '计算机网络', link: '/grade3sem1/计算机网络' }
      ]
    },
    {
      text: '大三下',
      collapsible: true,
      items: [
        { text: '软件测试', link: '/grade3sem2/软件测试' },
        { text: '高性能编程', link: '/grade3sem2/高性能编程' },
        { text: '机器学习系统', link: '/grade3sem2/机器学习系统' },
        { text: '编译', link: '/grade3sem2/编译' }
      ]
    },
    {
      text: '大四',
      collapsible: true,
      items: [
        { text: '智能汽车软件与系统', link: '/grade4/智能汽车软件与系统' },
        { text: '模型驱动的系统工程', link: '/grade4/模型驱动的系统工程' },
        { text: '神经网络与深度学习', link: '/grade4/神经网络与深度学习' },
        { text: '分布式数据库', link: '/grade4/分布式数据库' }
      ]
    }
]
