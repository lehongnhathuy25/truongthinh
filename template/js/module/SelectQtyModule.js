export default function SelectQtyModule() {
    $(document).on("click", ".minus", function (e) {
        // e.preventDefault();
        let parent = $(this).closest(".sl-qty");
        var numberMain = parent.find(".count-numbers");
        if (numberMain) {
            let input_number = parent.find(".sl-qty-input"),
                number = input_number.val();
            if (parseInt(number) >= 0) {
                number--;
                input_number.val(number);
                $('.woocommerce-cart-form .btn-update').removeAttr("disabled");
                $('.woocommerce-cart-form .btn-update').attr("aria-disabled", "false");
            }
        }
    });

    $(document).on("click", ".plus", function (e) {
        // e.preventDefault();
        let parent = $(this).closest(".sl-qty");
        var numberMain = parent.find(".count-numbers");
        if (numberMain) {
            let input_number = parent.find(".sl-qty-input"),
                number = input_number.val();
            if (parseInt(number) <= 10) {
                number++;
                input_number.val(number);
                $('.woocommerce-cart-form .btn-update').removeAttr("disabled");
                $('.woocommerce-cart-form .btn-update').attr("aria-disabled", "false");
            }
        }
    });
}
