$(document).ready(() => {

    //language buttons //
    
            $('.lg1').hide();
            $('.lg2').show();
    
            $('.arabic').on('click', () => {
              $('.home').text('صفحة الرئيسية');
              $('.contact').text('صفحة تواصل');
              $('.about-us').text('عن الشريكة');
              $('.lg1').show();
              $('.lg2').hide();
              $('a').css({"font-family": "Arial, Helvetica, sans-serif", "font-size": "16px", "text-align": "right"});
    
            
            });
    
            $('.english').on('click', () => {
                $('.home').text('Home');
                $('.contact').text('Contact')
                $('.about-us').text('About Us');
                $('.lg1').hide();
                $('.lg2').show();
                $('a').css({"text-align": "left"});
                
              });
    
         
          
          }); 