#//6
#DOM & BOM
function mandatory() {
  throw new Error("Missing parameter");
}
function add(x = mandatory(), y = 1) {
  return x + y;
}
add();
add(1);

https://ppt.baomitu.com/p/e3051499#/1

insertAdjacentElement

UI组件设计
如何设计一个ui组件？
1.结构设计
2.API设计
3.控制流设计


结构设计：
<div id="my-slider" class="slider-list">
  <ul>
    <li class="slider-list__item--selected">
      <img src="https://p5.ssl.qhimg.com/t0119c74624763dd070.png"/>
    </li>
    <li class="slider-list__item">
      <img src="https://p4.ssl.qhimg.com/t01adbe3351db853eb3.jpg"/>
    </li>
    <li class="slider-list__item">
      <img src="https://p2.ssl.qhimg.com/t01645cd5ba0c3b60cb.jpg"/>
    </li>
    <li class="slider-list__item">
      <img src="https://p4.ssl.qhimg.com/t01331ac159b58f5478.jpg"/>
    </li>
  </ul>
</div>
#my-slider{
  position: relative;
  height: 340px;
}

.slider-list ul{
  list-style-type:none;
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}

.slider-list__item,
.slider-list__item--selected{
  position: absolute;
  transition: opacity 1s;
  opacity: 0;
}

.slider-list__item--selected{
  transition: opacity 1s;
  opacity: 1;
}

API:
class Slider{
  constructor(id){
    this.container = document.getElementById(id);
    this.items = this.container.querySelectorAll('.slider-list__item, .slider-list__item--selected');
  }
  getSelectedItem(){
    let selected = this.container.querySelector('.slider-list__item--selected');
    return selected
  }
  getSelectedItemIndex(){
    return Array.from(this.items).indexOf(this.getSelectedItem());
  }
  slideTo(idx){
    let selected = this.getSelectedItem();
    if(selected){
      selected.className = 'slider-list__item';
    }
    let item = this.items[idx];
    if(item){
      item.className = 'slider-list__item--selected';
    }
  }
  slideNext(){
    let currentIdx = this.getSelectedItemIndex();
    let nextIdx = (currentIdx + 1) % this.items.length;
    this.slideTo(nextIdx);
  }
  slidePrevious(){
    let currentIdx = this.getSelectedItemIndex();
    let previousIdx = (this.items.length + currentIdx - 1) % this.items.length;
    this.slideTo(previousIdx);  
  }
}
