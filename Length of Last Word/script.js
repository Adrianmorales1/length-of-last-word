var lengthOfLastWord = function(s) {
    var array = s.split(' ')
    for(var x = array.length -1; x >=0; x--) {
        if(array[x] != '') {
            return array[x].length
        }
    }
    return 0
};

var s1 = 'Hello World'
console.log(lengthOfLastWord(s1))
var s2 = '   fly me   to   the moon  '
console.log(lengthOfLastWord(s2))
var s3 = 'luffy is still joyboy'
console.log(lengthOfLastWord(s3))