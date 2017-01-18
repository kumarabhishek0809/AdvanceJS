function callPromise() {

    var log = document.getElementById('log');
    log.insertAdjacentHTML('beforeend', 'Started (<small>Sync code started</small>)<br/>');
    let promise1 = new Promise(function(resolve, reject) {
        log.insertAdjacentHTML('beforeend', 'Promise started (<small>Async code started </small>)<br/>')
        window.setTimeout(function() {
            resolve();
        }, Math.random() * 2000 + 1000);
    });
    promise1.then(function(val) {
        log.insertAdjacentHTML('beforeend', 'Promise Completed(<small>Async Code Terminated </small>)<br/>');
    }).catch(function(reason) {
        console.log('Handle rejected promise (' + reason + ') here.');
    })
    log.insertAdjacentHTML('beforeend', 'Promise Terminated');
}