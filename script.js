    MinecraftAPI.getServerStatus('mc.wafflecraft.xyz', {
        port: 6570 // optional, only if you need a custom port
    }, function (err, status) {
        if (err) {
            return document.querySelector('.server-status').innerHTML = 'Error loading status';
        }

        // you can change these to your own message!
        document.querySelector('#serverOnline').innerHTML = status.online ? 'up' : 'down';
    });

    // make the background of the page change color based on the status of the server