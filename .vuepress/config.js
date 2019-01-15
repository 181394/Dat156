module.exports = {
    title: 'Dat156',
    base: '/DAT156/',
    description: 'Praksis for data',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Github', link: 'https://www.github.com/181394/Dat156/' },
            { text: 'Awsome job', link: 'https://www.hvl.no' }
        ],
        sidebar: {
            '/': ['/uke2/', '/uke1/']
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