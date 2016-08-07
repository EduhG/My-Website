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