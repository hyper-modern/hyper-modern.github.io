import React from 'react'
import Image from 'next/image'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>
    <Image src="/assets/images/logo.png" alt="Logo" width="24" height="24" />
    HyperModern
  </span>,
  project: {
    link: 'https://github.com/hyper-modern/hyper-modern.github.io',
  },
  chat: {
    link: 'https://discord.gg/Vduq3QvAAk',
  },
  docsRepositoryBase: 'https://github.com/hyper-modern/hyper-modern.github.io',
  footer: {
    text: <span>HyperModern © {new Date().getFullYear()}</span>,
  },
}

export default config
