$(document).ready(function() {
  /*
  var chuckAPI = "https://api.chucknorris.io/jokes/random";
  
  $.getJSON(chuckAPI, function(data) {

    console.log(data.value);
    $('#chuckquote').append(data.value);
  });
  

  var swAPI = "http://api.chrisvalleskey.com/fillerama/get.php?count=1&format=json&show=starwars";
  
  $.getJSON(swAPI, function(data) {

    console.log(data.db[0].quote);
    console.log(data.db[0].source);
    $('#swquote').append('"' + data.db[0].quote + '"');

    $('#swsource').append("- " + data.db[0].source);

    $('#tweet').attr("href", "https://twitter.com/intent/tweet?text=" + '"' + data.db[0].quote + '" - ' + data.db[0].source);
    });
  */

  var quotes = [["There's always a bigger fish.", 'QUI-GON JINN, Star Wars Episode I: The Phantom Menace'], ["I've got a bad feeling about this.", 'HAN SOLO, Star Wars (multiple films)'], ['Fear is the path to the Dark Side. Fear leads to anger, anger leads to hate, hate leads to suffering.', 'YODA, Star Wars Episode I: The Phantom Menace'], ['Senators, I presume you are acquainted with the collection of half-truths and hyperbole known as Obi-Wan Kenobi?', 'DUCHESS SATINE, "Voyage of Temptation", Star Wars: The Clone Wars'], ['Hokey religions and ancient weapons are no match for a good blaster at your side, kid.', 'HAN SOLO, Star Wars Episode IV: A New Hope'], ["Who's the more foolish: the fool, or the fool who follows him?", 'OBI-WAN KENOBI, Star Wars Episode IV: A New Hope'], ['When you look at the dark side, careful you must be ... for the dark side looks back.', 'YODA, Dark Rendezvous'], ['No! Try not. Do, or do not. There is no try.', 'YODA, Star Wars Episode V: The Empire Strikes Back'], ['Size matters not. Look at me. Judge me by my size, do you?', 'YODA, Star Wars Episode V: The Empire Strikes Back'], [" you're trying to keeping your distance.", 'HAN SOLO, Star Wars Episode VI: Return of the Jedi'], ["Aren't you a little short for a stormtrooper?", 'PRINCESS LEIA, Star Wars Episode IV: A New Hope'], ["Some day you're gonna be wrong, I just hope I'm there to see it.", 'PRINCESS LEIA, Star Wars Episode V: The Empire Strikes Back'], ['Will someone get this big walking carpet out of my way?', 'PRINCESS LEIA, Star Wars Episode IV: A New Hope'], ['To be Jedi is to face the truth, and choose. Give off light, or darkness, Padawan. Be a candle, or the night.', 'YODA, Dark Rendezvous'], ['May the Force be with you.', 'GENERAL DODONNA, Star Wars Episode IV: A New Hope'], ['Always in motion is the future.', 'YODA, Star Wars Episode V: The Empire Strikes Back'], ["There's no mystical energy field that controls my destiny.", 'HAN SOLO, Star Wars Episode IV: A New Hope'], ['R2-D2, you know better than to trust a strange computer.', 'C-3PO, Star Wars Episode V: The Empire Strikes Back'], ['Only a Sith Lord deals in absolutes.', 'OBI-WAN KENOBI, Star Wars Episode III: Revenge of the Sith'], ['The fear of loss is a path to the Dark Side.', 'YODA, Star Wars Episode III: Revenge of the Sith'], ["Your eyes can deceive you; don't trust them.", 'OBI-WAN KENOBI, Star Wars Episode IV: A New Hope'], ["The Force, it's calling to you. Just let it in.", 'MAZ KANATA, Star Wars Episode VII: The Force Awakens'], ["What if the democracy we thought we were serving no longer exists, and the Republic has become the very evil we've been fighting to destroy?", 'PADME AMIDALA, Star Wars Episode III: Revenge of the Sith'], ['Well, trust a droid to get to the bottom of things.', 'HAN SOLO, Star Wars Holiday Special'], ["I don't know where you get your delusions, laser brain.", 'PRINCESS LEIA, Star Wars Episode V: The Empire Strikes Back'], ["Take care of yourself Han. I guess that's what you're best at isn't it?", 'LUKE SKYWALKER, Star Wars Episode IV: A New Hope'], ["Yes, a Jedi's strength flows from the Force. But beware of the dark side. Anger, fear, aggression; the dark side of the Force are they. Easily they flow, quick to join you in a fight. If once you start down the dark path, forever will it dominate your destiny, consume you it will, as it did Obi-Wan's apprentice.", 'YODA, Star Wars Episode V: The Empire Strikes Back'], ['Ah, strong am I with the Force, but not that strong. Twilight is upon me, and soon, night must fall. That is the way of things. The way of the Force.', 'YODA, Star Wars Episode VI: Return of the Jedi'], ['Would it help if I got out and pushed?', 'PRINCESS LEIA, Star Wars Episode V: The Empire Strikes Back']];
  var quote = quotes[Math.floor(Math.random()*quotes.length)];
  console.log(quote);
  $('#swquote').append(quote[0]);

  $('#swsource').append("- " + quote[1]);
  $('#tweet').attr("href", "https://twitter.com/intent/tweet?text=" + '"' + quote[0] + '" - ' + quote[1]);
    

});