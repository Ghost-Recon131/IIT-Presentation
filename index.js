$(document).ready(function () {
    let arr = []

    console.log($(document).attr("title"));
    if ($(document).attr("title") == 'IT Technologies') {
        for (let i = 0; i < $(".detail_line").length; i++) {
            console.log($(".detail_line")[i].id);
            if ($(".detail_line")[i].id != '') {
                arr.push($(".detail_line")[i])
            }
        }
    } else {
        for (let i = 0; i < $(".detail_subtitle").length; i++) {
            console.log($(".detail_subtitle")[i].id);
            if ($(".detail_subtitle")[i].id != '') {
                arr.push($(".detail_subtitle")[i])
            }

        }
    }


    let div = ''
    for (const element of arr) {
        console.log(element.id);
        div += "<a class='article_item' href='#" + element.id + "'>" + $(element).text() + "</a>"
    }

    $('.article_nav').html(div)

    $(".article_item").click(function () {
        console.log($($(this).attr("href")).offset().top);
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top + "px" }, 500);
        return false;
    });
});
