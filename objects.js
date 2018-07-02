var playlist = { Drake :'Fake Love'}

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({}, playlist, { [artistName]:songTitle})
}

//Phil Ochs is not being added so throws AssertionError?

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName]
}
