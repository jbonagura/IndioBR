  // Additional JS functions here 
  $(function(){
    $('#header').fadeIn(400);

    var pesquisa_enabled = -1;

    $('#btn_query').click(function(){
      pesquisa_enabled *= -1;
      $('#header').css("height","100%").css("margin-top","0");
      $('#p_welcome').slideUp().fadeOut();
      $('#div_assuntos_footer').slideUp().fadeOut();
    });

    function saiModoPesquisa(){
      pesquisa_enabled *= -1;
      $('#header').css("height","").css("margin-top","10%");
      $('#p_welcome').slideDown().fadeIn();
      $('#div_assuntos_footer').slideDown().fadeIn();
    }

    $(document).keyup(function(e) {
        if(pesquisa_enabled == 1){
            if (e.keyCode == 27){
                saiModoPesquisa(); 
            }
        }
    });



  });


  window.fbAsyncInit = function() {
    FB.init({
      appId      : '1374314329473956', // App ID
      channelUrl : 'http://ciro-s-costa.appspot.com/codejam', // Channel File
      status     : true, // check login status
      cookie     : true, // enable cookies to allow the server to access the session
      xfbml      : true  // parse XFBML
    });

    var uid; 

    FB.api('/me', function(response){
        uid = response.id;
    });

    FB.Event.subscribe('edge.create',function(href,widget){
        $.ajax({
            type:"POST",
            url:"/codejam/insert",
            data:{
                'user_id':uid,
                'action':'like',
            },
        }) 
    });

    FB.Event.subscribe('edge.remove',function(response){

    });

  FB.Event.subscribe('auth.authResponseChange', function(response) {
    // Here we specify what we do with the response anytime this event occurs. 
    if (response.status === 'connected') {
      testAPI();
      var uid = response.authResponse.userID;
      $('#inset_form').html(
              '<form style="display:none" id="submete_form"' +
              'id="submit_to_conversa" action="/codejam/profile"' +
              'method="post"><input type="text"' +
              'name="uid" value="' + uid +'"></form>'
          )
      $('#submete_form').submit();
//*********************************************
      var query = 'SELECT uid, name, age_range,current_address,sex ' +
                    'FROM user WHERE uid=' + uid

      console.log(query);
      FB.api({
        method: 'fql.query',
        query: query,
      }, function(data){
        console.log(data[0]);
        //coloca na DB as coisas obtidas no query para o que logou
        $.ajax({
            type:"POST",
            url:"/codejam/check",
            data:data[0]
        }).done(function(msg){
            //recebe a msg
        });
    });

    FB.api('/me/friends',function(response){
        console.log(response['data']);
        $.ajax({
            type:"POST",
            url:"/codejam/check",
            data:response['data']
        }).done(function(msg){
            //recebe a msg
        });
    });


  //                       FB.api({
  //                           method: 'fql.query',
  //                           query: query,
  //                           access: response.authResponse.accessToken,
  //                       },
  //                       function(data){
  //                           // console.log(data);
  //                           // for(var i=0; i<data.length; i++){
  //                           //     console.log(data[i]);
  //                           // }
  //                           sendInfo('/codejam/check',data);
  //                       });

    } else if (response.status === 'not_authorized') {
      FB.login();
    } else {
      FB.login();
    }
  });
 };

  // Load the SDK asynchronously
  (function(d){
     var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement('script'); js.id = id; js.async = true;
     js.src = "//connect.facebook.net/en_US/all.js";
     ref.parentNode.insertBefore(js, ref);
   }(document));


 function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
        console.log('Good to see you, ' + response.name + '.');
        $('#p_welcome').text('Seja bem vindo ' + response.name );
    });
  }



// FUNCTION TO SET BEM VINDO
function setBemVindo(){
    FB.api('/me',function(response){
        $('#p_welcome').text('Seja bem vindo ' + response.name );
    });
}

$(function(){
    $('#botao_compartilha_timeline').click(function(){
        FB.login(function(response){
            //
        },{scope:'read_stream'});
    });
});