jQuery(function() {

    /* This flag will prevent multiple comment submits: */
    var working = false;
    
    /* Listening for the submit event of the form: */
    jQuery('.jak-ajaxform').submit(function(e){

        e.preventDefault();
        if(working) return false;
        
        working = true;
        var jakform = jQuery(this);
        var button = jQuery(this).find('.jak-submit');
        var buttontxt = jQuery(button).val();
        jQuery(jakform).find('#signup-help, #username-help').html("");
        
        jQuery(button).val('checking...');
        
        /* Sending the form fileds to any post request: */
        jQuery.post('https://www.zebchat.com/process/form.php', jQuery(this).serialize(), function(msg) {
            
            working = false;
            jQuery(button).val(buttontxt);
            
            if (msg.status) {
            
                jQuery('#jak-registerstatus').fadeIn(1000).html(msg.txt);
                jQuery(jakform)[0].reset();
                
                // Fade out the form
                // $(jakform).fadeOut().delay('500');
                
                
            } else {
                /*
                /   If there were errors, loop through the
                /   msg.errors object and display them on the page 
                /*/

                jQuery.each(msg.errors,function(k,v) {
                    jQuery(jakform).find('label[for='+k+']').closest(".form-group").addClass("has-error");
                    jQuery(jakform).find('#'+k+'-help').html(v);
                });
                
            }
        }, 'json');
    
    });

    jQuery("[name=jaklc_account]").click(function(){
        jQuery('#jakweblc_have, #jakweblc_nohave').fadeToggle();
    });

    jQuery("[name=always_display]").click(function(){
        jQuery('.single_options').fadeToggle();
    });

});