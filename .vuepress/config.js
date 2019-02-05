module.exports = {
  title: 'Dat156',
  base: '/Dat156/',
  description: 'Praksis for data',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Github', link: 'https://www.github.com/181394/Dat156/' },
      { text: 'ScoutGG', link: 'https://scoutgaminggroup.com/' }
    ],
    sidebar: {
      '/': ['/uke3/', '/uke2/', '/uke1/']
    },
    lastUpdated: 'Sist oppdatert',
    serviceWorker: {
      updatePopup: {
        message: 'Nytt innhold tilgjengelig.',
        buttonText: 'Oppdater'
      }
    }
  }
}
