$(document).ready(function(){

      //div#exの最初の表示時にフェードインから表示
        $('#ex').hide().fadeIn(4000,);
   
   
       //div#exを作成、文字列”<p>かきくけこ</p>”を挿入
           $('#ex').text("かきくけこ");
       
    
   // 　//div#exの背景を黒、文字色を白に変更
         $('#ex').css('background-color',"#000");
         $('#ex').css('color',"#fff");
   
   //   //div#exの中、行頭に”<p>あいうえお</p>”を挿入
         $('#ex').prepend("<p>あいうえお</p>");
   
      
         //・div#exの中、末尾に”<p>さしすせそ</p>”を挿入   
      $('#ex').append("<p>さしすせそ</p>");
    
   
     //・難問)div#ex内の偶数行だけ背景白にする
         $('#ex :odd').css('background-color',"#fff");



});