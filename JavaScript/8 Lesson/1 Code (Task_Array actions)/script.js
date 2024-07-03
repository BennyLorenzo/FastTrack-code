const musicStyles = ['Jazz', 'Blues']
console.log(musicStyles)

// .push() - add to end
musicStyles.push('Rock-n-Roll')
console.log(musicStyles)

// array[n] - replace of n
musicStyles[1] = 'Classics'
console.log(musicStyles)

// .shift() - remove from start
musicStyles.shift()
console.log(musicStyles)

// .shift() - add to start
musicStyles.unshift('Rap','Raggae')
console.log(musicStyles)

// .shift() - remove from end
musicStyles.pop()
console.log(musicStyles)
