
const successmsgtick = `
 <div class="popuptick  flex popupticksuccess">
 <i class="ri-check-fill successgreen"></i>
</div>
 `;

const removesmsgtick = `
 <div class="popuptick  flex popuptickremove">
 <i class="ri-check-fill successgreen"></i>
</div>
 `;


$(".prod-wishlist").click(() => {
    showPopUp(removesmsgtick, "Added in Wishlist")

})

$(".pop-cancel").click(() => {
    $(".pop-up").removeClass("pop-up-active");
})

$(".prod-cart").click(() => {
    showPopUp(successmsgtick, "Added in Cart")
})

const showPopUp = (tick, msg) => {

    $(".popupticks").html(
        tick
    );
    $(".msg p").html(msg);
    $(".pop-up").addClass("pop-up-active");
    setTimeout(hidePopUp, 2000);

}

const hidePopUp = () => {
    $(".pop-up").removeClass("pop-up-active");
}

// menu icon

$(".menu-icon").click(() => {
    if ($(".sidebar").hasClass("sidebar-active")) {
        $(".sidebar").removeClass("sidebar-active")
        $(".menu-icon").html(`
        <i class="ri-menu-2-line"></i>
        `);
    } else {
        $(".sidebar").addClass("sidebar-active")
        $(".menu-icon").html(`
        <i class="ri-close-large-line"></i>
        `);
    }
})