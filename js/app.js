$('#pointer').velocity({
    translateX: "10px"
}, {
    loop: true
}).velocity("reverse");

var offCanvasIn = [{
    e: $("#offcanvas"),
    p: {
        translateX: [0, "100%"]
    },
    o: {
        duration: 300
    }
}, {
    e: $("#top-nav"),
    p: {
        translateX: "-10px",
        opacity: 0
    },
    o: {
        duration: 300
    }
}, {
    e: $("#about"),
    p: {
        translateX: [0, "-10px"],
        opacity: [1, 0]
    },
    o: {
        duration: 300
    }
}, {
    e: $("#images"),
    p: {
        translateX: [0, "-10px"],
        opacity: [1, 0]
    },
    o: {
        duration: 300
    }
}, {
    e: $("#follow"),
    p: {
        translateX: [0, "-10px"],
        opacity: [1, 0]
    },
    o: {
        duration: 300
    }
}, {
    e: $("#close"),
    p: {
        translateY: [0, "-100%"],
        rotateZ: ["180deg", 0]
    },
    o: {
        duration: 300
    }
}];

var offCanvasOut = [{
    e: $("#close"),
    p: {
        translateY: "-100%",
        rotateZ: "180deg"
    },
    o: {
        duration: 300
    }
}, {
    e: $("#top-nav"),
    p: {
        translateX: "-10px",
        opacity: 0
    },
    o: {
        duration: 300
    }
}, {
    e: $("#about"),
    p: {
        translateX: "-10px",
        opacity: 0
    },
    o: {
        duration: 300
    }
}, {
    e: $("#images"),
    p: {
        translateX: "-10px",
        opacity: 0
    },
    o: {
        duration: 300
    }
}, {
    e: $("#follow"),
    p: {
        translateX: "-10px",
        opacity: 0
    },
    o: {
        duration: 300
    }
}, {
    e: $("#offcanvas"),
    p: {
        translateX: "100%"
    },
    o: {
        duration: 300
    }
}, ];

// run the sequence on click
$("#open").on('click', function (event) {
    event.preventDefault();
    $.Velocity.RunSequence(offCanvasIn);
});
$("#close").on('click', function (event) {
    event.preventDefault();
    $.Velocity.RunSequence(offCanvasOut);
});

var $icon = $(".scroll-icn");
var $down = $("#go-down");
var $up = $("#go-up");

$icon.velocity({
    translateY: "10px"
}, {
    loop: true
}).velocity("reverse");

$down.on("click", function () {
    $up.velocity("scroll", {
        duration: 2000,
        easing: "easeInBack"
    });
});

$up.on("click", function () {
    $("body").velocity("scroll", {
        duration: 2000,
        easing: "easeInBack"
    });
});



var $menu = $('.has-submenu');

$menu.on('click', function () {
    var $subMenu = $(this).children('ul');
    var $subMenuItem = $subMenu.children('li');
    if (!$subMenu.hasClass('on-view')) {
        $subMenu.addClass('on-view');
        $subMenu.velocity('transition.slideDownIn', {
            duration: 200
        });
        $subMenuItem.velocity('transition.expandIn', {
            delay: 200,
            duration: 300,
            stagger: 100,
        });
    } else {
        $subMenu.removeClass('on-view');
        $subMenu.add($subMenuItem).velocity('reverse');
    }
});