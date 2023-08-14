export default function CopyModule() {
    var temp = $('<input>');
    temp.addClass('inputURL')
    var $url = $('.getlink').attr('value');
    $('.copy-btn').on('click', function () {
        const btnData = document.querySelector('.copy-btn').getAttribute('')
        // document.querySelector(".copy-btn").classList.add('copied')
        document.querySelector('.popup-voucher-form .note').classList.add('show');
        setTimeout(
            ()=> {
                document.querySelector('.popup-voucher-form .note').classList.remove('show');
            },
            1000
        )
        $("body").append(temp);
        temp.val($url).select();
        document.execCommand("copy");
        console.log(document.execCommand('copy'))
    })
}