var array = [
    { name: "sunset sea", image: "https://th.bing.com/th/id/OIP.iRosq74ZqIu6rda1ckaWzgHaLH?w=800&h=1200&rs=1&pid=ImgDetMain" },
    { name: "bike on road", image: "https://w0.peakpx.com/wallpaper/407/618/HD-wallpaper-bullet-royal-enfield-bike-emblems-king-motor-motorcycle-ride-road-thumbnail.jpg" },
    { name: "sunset sea", image: "https://th.bing.com/th/id/OIP.iRosq74ZqIu6rda1ckaWzgHaLH?w=800&h=1200&rs=1&pid=ImgDetMain" },
    { name: "bike on road", image: "https://w0.peakpx.com/wallpaper/407/618/HD-wallpaper-bullet-royal-enfield-bike-emblems-king-motor-motorcycle-ride-road-thumbnail.jpg" },
    { name: "bike with sunset", image: "https://bd.gaadicdn.com/upload/userfiles/images/602a7316993fb.jpg" },
    { name: "living room", image: "https://th.bing.com/th/id/OIP.8WFZtYYNO-3_tCYFNNNDGwAAAA?rs=1&pid=ImgDetMain" },
    { name: "round coffee table", image: "https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco,w_1460/https://storage.googleapis.com/gen-atmedia/2/2017/06/2f9fcf423f776fb595a1b26fea112d0a3f941134.jpeg" },
    { name: "living room", image: "https://th.bing.com/th/id/OIP.8WFZtYYNO-3_tCYFNNNDGwAAAA?rs=1&pid=ImgDetMain" },
    { name: "plant", image: "https://th.bing.com/th/id/OIP.-0q1Zu7eDZjuobexHrovygHaLH?w=1706&h=2560&rs=1&pid=ImgDetMain" },
    { name: "living room", image: "https://th.bing.com/th/id/OIP.8WFZtYYNO-3_tCYFNNNDGwAAAA?rs=1&pid=ImgDetMain" },
    { name: "round coffee table", image: "https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco,w_1460/https://storage.googleapis.com/gen-atmedia/2/2017/06/2f9fcf423f776fb595a1b26fea112d0a3f941134.jpeg" },
    { name: "plant", image: "https://th.bing.com/th/id/OIP.-0q1Zu7eDZjuobexHrovygHaLH?w=1706&h=2560&rs=1&pid=ImgDetMain" },
    { name: "sunset sea", image: "https://th.bing.com/th/id/OIP.iRosq74ZqIu6rda1ckaWzgHaLH?w=800&h=1200&rs=1&pid=ImgDetMain" },
    { name: "bike on road", image: "https://w0.peakpx.com/wallpaper/407/618/HD-wallpaper-bullet-royal-enfield-bike-emblems-king-motor-motorcycle-ride-road-thumbnail.jpg" },
    { name: "bike with sunset", image: "https://bd.gaadicdn.com/upload/userfiles/images/602a7316993fb.jpg" },
    { name: "round coffee table", image: "https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco,w_1460/https://storage.googleapis.com/gen-atmedia/2/2017/06/2f9fcf423f776fb595a1b26fea112d0a3f941134.jpeg" },
    { name: "plant", image: "https://th.bing.com/th/id/OIP.-0q1Zu7eDZjuobexHrovygHaLH?w=1706&h=2560&rs=1&pid=ImgDetMain" },
    { name: "pillow", image: "https://th.bing.com/th/id/OIP.zz4RIy_aBOrfgjMphgz7nQHaJS?w=2400&h=3009&rs=1&pid=ImgDetMain" },
    { name: "pillow", image: "https://th.bing.com/th/id/OIP.zz4RIy_aBOrfgjMphgz7nQHaJS?w=2400&h=3009&rs=1&pid=ImgDetMain" },
    { name: "pillow", image: "https://th.bing.com/th/id/OIP.zz4RIy_aBOrfgjMphgz7nQHaJS?w=2400&h=3009&rs=1&pid=ImgDetMain" },
    { name: "pillow", image: "https://th.bing.com/th/id/OIP.zz4RIy_aBOrfgjMphgz7nQHaJS?w=2400&h=3009&rs=1&pid=ImgDetMain" }
];

var contain = document.querySelector('.container');

function showCards() {
    var clutter = "";
    array.forEach(element => {
        clutter += `<div class="box">
        <img class="" src="${element.image}" alt="image">
        <div class="caption">Lorem ipsum </div>
    </div>`;

        contain.innerHTML = clutter;
    });
}

function searchFunctionality() {
    var input = document.querySelector('#searchInput');
    var suggest = document.querySelector('#suggest');
    var blur = document.querySelector('#blur');

    input.addEventListener('focus', () => {
        input.placeholder = "";
        suggest.style.display = "block";
        blur.style.display = "block";
    })

    input.addEventListener('blur', () => {
        input.placeholder = "Search for easy dinners, fashion, etc.";
        suggest.style.display = "none";
        blur.style.display = "none";
    })

    input.addEventListener("input", function() {
        const filteredArray = originalArray.filter(obj => obj.name.toLowerCase().startsWith(input.value));
        var clutter = "";

        filteredArray.forEach(function(obj) {
            clutter += `<div id="suggestions">
                <ul id="check">${obj.name}</ul>
            </div>`;
        });

        suggest.style.display = "block";
        suggest.innerHTML = clutter;

        var populate = "";
        filteredArray.forEach(function(obj) {
            populate += `<div class="box">
                <img class="" src="${obj.image}" alt="image">
                <div class="caption">Lorem ipsum</div>
            </div>`;
        });

        contain.innerHTML = populate;
    });

}

showCards();
searchFunctionality();