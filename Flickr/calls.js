//global variables and helpers
var pageNum = 1;
var rowIndex = 1;
var elemIndex = 0;


function validate(){
    var tags = document.getElementById('name').value;
    var numIn = document.getElementById('dropdown').value;

    if((tags == '') | (numIn == '--Number Of Pictures--')){
        alert('Invalid Input')
    }else{
        document.getElementById('bigOpenSpace').innerHTML = '';
        APIcall(tags, numIn, pageNum);
    }
}

function APIcall(tags, numIn, page){
    var tagString = tags.replace(" ", ",");
    var url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=0847f9f0702fdb5d22fd19788608aa94&format=json&nojsoncallback=1&tags=${tagString}+&per_page=${numIn}&page=${page}`

    $.ajax({url:url, dataType:"json"}).then(function(data){
        console.log(data)
        var i;
        var j;
        var elemCount = 0;
        var imgSrc;
        for(i = 1; i <= (numIn/4)+1;i++){
            row = document.createElement('div');
            row.id = 'r' + rowIndex;
            row.className = "row";
            row.setAttribute('style', 'padding-top: 5px')
            document.getElementById('bigOpenSpace').appendChild(row);
            
            for(j=0; j<4; j++){
                if(elemCount >= numIn){break;}
                picture = document.createElement('div')
                picture.id = elemIndex;
                picture.className = "col";
                
                imgSrc = `https://live.staticflickr.com/${data.photos.photo[elemCount].server}/${data.photos.photo[elemCount].id}_${data.photos.photo[elemCount].secret}.jpg`

                picture.innerHTML = `<div class="card" style="width:250px"><img class="card-img-top" src="${imgSrc}" alt="nogo"><div class="card-body"><h5 class="card-title">${data.photos.photo[elemCount].title}</h5></div></div>`;

                document.getElementById('r' + rowIndex).appendChild(picture);
                elemCount += 1;
                elemIndex += 1;
            }
            rowIndex += 1;
        }
    })
}

window.onscroll = function() {
    if(window.innerHeight + window.pageYOffset >= document.body.offsetHeight){
        var tags = document.getElementById('name').value;
        var numIn = document.getElementById('dropdown').value;
        pageNum += 1;
        APIcall(tags, numIn, pageNum)
    }
};