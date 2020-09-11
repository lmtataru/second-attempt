function myFunction(){
    let my_name = ["L", "O", "R", "E", "D", "A", "N", "A"];
    var newarray = {};
    letter_count_list = {};
    /* use map function to return an array of objects that counts all letters eg [{A:2},{L:1}] */
    my_name = my_name.map(mylettres);
    /* from an array of objects, create one object with the counted letters */
    for (var i = 0; i < my_name.length; i++) {
        Object.assign(letter_count_list,my_name[i]);
    } 
   
    function mylettres(letter) {
        let my_list = {};
        let count = 0;
            for(let i = 0; i < my_name.length; i++){
                if(my_name[i] == letter) {
                    count++;
                }
            }
        my_list[letter] = count;

        return my_list;
    }
    
console.log(letter_count_list);

}
