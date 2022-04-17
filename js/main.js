'use strict'


var gKeyWordSearchCountMap = {}

var gImgs = [{
    id: 1,
    url: 'img/1.jpg',
    keywords: ['funny', 'cat']
}]

var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [{
        txt: 'I sometimes eat Falafel',
        size: 20,
        align: 'left',
        color: 'red'
    }]
}

var gElCanvas = document.querySelector(`#canvas`)
var gCtx = gElCanvas.getContext(`2d`)


function onInit() {

}