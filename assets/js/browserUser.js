function verifyBrowser() {
    let browserUser = navigator.userAgent;
        if (browserUser.indexOf('Firefox') !== -1) {
            const btnDownload = document.querySelector('#btn-download');
                btnDownload.href = 'https://addons.mozilla.org/pt-BR/firefox/addon/gamersclub-booster/'
        } else {
            return;
        }
}
verifyBrowser();