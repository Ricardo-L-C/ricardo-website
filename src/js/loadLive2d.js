const modelList = [
    "static/model/33/model.default.json", "static/model/33/model.2016.xmas.1.json", "static/model/33/model.2016.xmas.2.json", "static/model/33/model.2017.cba-normal.json", "static/model/33/model.2017.cba-super.json", "static/model/33/model.2017.newyear.json", "static/model/33/model.2017.school.json", "static/model/33/model.2017.summer.normal.1.json", "static/model/33/model.2017.summer.normal.2.json", "static/model/33/model.2017.summer.super.1.json", "static/model/33/model.2017.summer.super.2.json", "static/model/33/model.2017.tomo-bukatsu.high.json", "static/model/33/model.2017.tomo-bukatsu.low.json", "static/model/33/model.2017.valley.json", "static/model/33/model.2017.vdays.json", "static/model/33/model.2018.bls-summer.json", "static/model/33/model.2018.bls-winter.json", "static/model/33/model.2018.lover.json", "static/model/33/model.2018.spring.json",
    "static/model/Pio/model.json", "static/model/Pio/model1.json", "static/model/Pio/model2.json", "static/model/Pio/model3.json", "static/model/Pio/model4.json", "static/model/Pio/model5.json",
    "static/model/fox/model.json",
];

export default function loadLive2d() {
    let randomModel = Math.floor(Math.random() * modelList.length);
    loadlive2d("live2d", modelList[randomModel]);
}