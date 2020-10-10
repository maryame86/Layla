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

          $('.ebe').text('للإستفسار بي الايميل');
          $('.ebp').text('للإستفسار بي التلفون');
          $('.hours').text('ساعات العمل');
          $('.add').text('عنوان الشريكة');
          $('.y-e').text('عنوان الايميل');
          $('.plc').attr('placeholder','موضوع');
          $('.enq').text('اكتب استفسارك');
          $('.submit').text('إرسال');
        });

        $('.english').on('click', () => {
            $('.home').text('Home');
            $('.contact').text('Contact')
            $('.about-us').text('About Us');
            $('.lg1').hide();
            $('.lg2').show();
            $('a').css({"text-align": "left"});
            $('.ebe').text('Enquiries by Email');
            $('.ebp').text('Enquiries by Phone');
            $('.hours').text('Opening Hours');
            $('.add').text('Company Address');

          $('.y-e').text('Your Email address');
          $('.plc').attr('placeholder', 'Subject');
          $('.enq').text('Write your enquiry below');
          $('.submit').text('Submit');
          });

     
      
      }); 