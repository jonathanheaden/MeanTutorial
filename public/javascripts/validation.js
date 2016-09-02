$('#addReview').submit(function(e){
    $('.alert.alert-danger').hide();
    if (!$('select#rating').val() || !$('textarea#review').val()){
        if ($('.alert.alert-danger').length){
            $('.alert.alert-danger').show();
        } else {
            $(this).prepend('<div role="alert alert-danger">All fields are required</div>');
        }
        return false
    }
});