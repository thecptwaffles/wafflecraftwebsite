    MinecraftAPI.getServerStatus('play.wafflecraft.xyz', {
        port: 6570 // optional, only if you need a custom port
    }, function (err, status) {
        if (err) {
            return document.querySelector('.server-status').innerHTML = 'Error loading status';
        }

        // you can change these to your own message!
        document.querySelector('#serverOnline').innerHTML = status.online ? 'Online' : 'Offline';
        document.querySelector('#serverPlayerNow').innerHTML = status.players.now
    });